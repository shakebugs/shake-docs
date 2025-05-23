﻿---
id: activity-history
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Shake tracks user's interaction with your app, their network traffic, notifications, logs and system events,
and automatically attaches all of those to the ticket.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/activity-history/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/activity-history/">Android</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/activity-history/">Flutter</a>&nbsp;  
<a href="/docs/web/configuration-and-data/activity-history/">Web</a>&nbsp;
</p>


## Setup

### User actions

SDK automatically observes taps made on your app's UI elements.

### Network traffic

Network traffic logging is disabled by default. Enable it using the following method:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.setNetworkRequestsEnabled(true);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.setNetworkRequestsEnabled(true);
```

</TabItem>
</Tabs>

You can add your own custom network requests at any time:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
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

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, { NetworkRequestBuilder } from '@shakebugs/react-native-shake';

// highlight-start
const networkRequestBuilder: NetworkRequestBuilder = new NetworkRequestBuilder()
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

</TabItem>
</Tabs>

### System events

System events - also known as app lifecycle events - are tracked automatically and require no additional setup.

### Screen changes

Screen changes detection is currently not supported.

### Notifications

On *iOS*, notifications are tracked automatically and require no additional setup.

*Android* requires you to add `ShakeNotificationListenerService`
to your **AndroidManifest** file inside **application** tag:

```xml title="AndroidManifest.xml"
// highlight-start
<service
        android:name="com.shakebugs.shake.ShakeNotificationListenerService"
        android:exported="false"
        android:permission="android.permission.BIND_NOTIFICATION_LISTENER_SERVICE">
  <intent-filter>
    <action android:name="android.service.notification.NotificationListenerService" />
  </intent-filter>
</service>
// highlight-end
```

Additionally, app user must manually grant a permission to listen for notifications.
You can show notifications permission settings screen using the following method:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.showNotificationsSettings();
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.showNotificationsSettings();
```

</TabItem>
</Tabs>

You can add your own custom notification events at any time:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
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

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, { NotificationEventBuilder } from '@shakebugs/react-native-shake';

// highlight-start
const notificationEventBuilder: NotificationEventBuilder = new NotificationEventBuilder()
    .setId('0')
    .setTitle('Title')
    .setDescription('Description');
Shake.insertNotificationEvent(notificationEventBuilder);
// highlight-end
```

</TabItem>
</Tabs>

### Custom logs

You can add your own logs to Activity history too:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
import Shake, { LogLevel } from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.log(LogLevel.INFO, 'This is a Shake custom log.');
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, { LogLevel } from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.log(LogLevel.INFO, 'This is a Shake custom log.');
```

</TabItem>
</Tabs>

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

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.setConsoleLogsEnabled(false);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.setConsoleLogsEnabled(false);
```

</TabItem>
</Tabs>

For *iOS* apps, add the following code snippet to your *AppDelegate.m* to make sure that console logs are recorded by Shake:

```objectivec title="AppDelegate.m"
// highlight-next-line
#import <React/RCTLog.h>

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions{
    // highlight-start
    RCTSetLogThreshold(RCTLogLevelInfo);
    RCTAddLogFunction(ShakeLogFunction);
    // highlight-end
  ...
}

// highlight-start
RCTLogFunction ShakeLogFunction = ^(RCTLogLevel level, __unused RCTLogSource source, NSString *fileName, NSNumber *lineNumber, NSString *message) {
    NSString *log = RCTFormatLog([NSDate date], level, fileName, lineNumber, message);
    NSLog(@"%@", log);
};
// highlight-end
```

## Disable

Activity history is enabled by default, use the method below to disable it altogether:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.setEnableActivityHistory(false);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.setEnableActivityHistory(false);
```

</TabItem>
</Tabs>
