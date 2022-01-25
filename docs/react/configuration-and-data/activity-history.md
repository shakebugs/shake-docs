﻿---
id: activity-history
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Shake tracks user's interaction with your app, their network traffic, notifications, logs and system events,
and automatically attaches all of those to the ticket.


## Setup


### User actions

SDK automatically observes taps made on your app's UI elements.
On Android, the [code snippet](/react/install/manual-linking/#enable-touch-tracking) required to enable touch tracking is added by running [add command](/react/install/npm).


### Network traffic

Network traffic logging is disabled by default. Enable it using the following method:

```javascript title="App.js"
// highlight-next-line
Shake.setNetworkRequestsEnabled(true);
```
You can add your own custom network requests at any time:

```javascript title="App.js"
// highlight-next-line
import Shake, { NetworkRequestBuilder } from '@shakebugs/react-native-shake';

// highlight-start
const networkRequestBuilder = new NetworkRequestBuilder()
    .setMethod('POST')
    .setStatusCode('200')
    .setUrl('https://api.example.com')
    .setRequestBody('Request body')
    .setResponseBody('Response body')
    .setRequestHeaders({header1: 'requestHeader'})
    .setResponseHeaders({header2: 'responseHeader'})
    .setDuration(100)
    .setDate(new Date());
Shake.insertNetworkRequest(networkRequestBuilder);
// highlight-end
```

### System events

System events - also known as app lifecycle events - are tracked automatically and require no additional setup.

### Notifications

On *iOS*, notifications are tracked automatically and require no additional setup.

*Android* requires notifications permission in settings to track notifications.
Use the following code snippet to show notification settings screen to the user:

```javascript title="App.js"
// highlight-next-line
Shake.showNotificationsSettings();
```

You can add your own custom notification events at any time:

```javascript title="App.js"
// highlight-next-line
import Shake, { NotificationEventBuilder } from '@shakebugs/react-native-shake';

// highlight-start
const notificationEventBuilder = new NotificationEventBuilder()
    .setId('0')
    .setTitle('Title')
    .setDescription('Description');
Shake.insertNotificationEvent(notificationEventBuilder);
// highlight-end
```

### Custom logs
You can add your own logs to Activity history too:

```javascript title="App.js"
// highlight-next-line
import Shake, { LogLevel } from '@shakebugs/react-native-shake';

const sendCustomLog = () => {
// highlight-next-line
    Shake.log(LogLevel.INFO, 'This is a Shake custom log.');
}
```

You have these log levels at your disposal:

```javascript
LogLevel.VERBOSE
LogLevel.DEBUG
LogLevel.INFO
LogLevel.WARN
LogLevel.ERROR
```

### Console logs
On *Android*, console logs are recorded automatically and require no additional setup. If you want to disable this feature use the method below:

```javascript title="App.js"
// highlight-next-line
Shake.setConsoleLogsEnabled(false);
```

For *iOS* apps, add the following code snippet to your *AppDelegate.m* to make sure that console logs are recorded by Shake:

```objectivec title="AppDelegate.m"
// highlight-next-line
#import <React/RCTLog.h>

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // highlight-start
  RCTSetLogThreshold(RCTLogLevelInfo);
  RCTAddLogFunction(ShakeLogFunction);
  // highlight-end
  ...
}

// highlight-start
RCTLogFunction ShakeLogFunction = ^(RCTLogLevel level, __unused RCTLogSource source, NSString *fileName, NSNumber *lineNumber, NSString *message)
{
  NSString *log = RCTFormatLog([NSDate date], level, fileName, lineNumber, message);
  NSLog(@"%@", log);
};
// highlight-end
```

## Limitations

In a Free workspace you can see up to 20 events that led to the ticket being reported.
If you need to dive really deep to find causes of the weirdest bugs,
in a Premium workspace you can browse the full Activity history.

The network request limits for both the request body and the response body are 100 kB each.
If the request body or the response body contains binary data, it will be presented as a *Binary data* string.

## Disable

Activity history is enabled by default, use the method below to disable it altogether:

```javascript title="App.js"
// highlight-next-line
Shake.setEnableActivityHistory(false);
```