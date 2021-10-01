---
id: activity
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Shake diligently tracks user's interaction with your app, their network traffic, notifications, logs and system events, and automatically attaches all of those to every bug report.

## Introduction
You can inspect all events that lead to a bug being reported. A link to *Activity history* is located in the top right corner:

<img
  alt="Activity screen"
  src={useBaseUrl('screens/activity_screen.png')}
/>

## Setting up

### User actions

SDK automatically observes taps made on your app's UI elements.

On Android, [code snippet](/react/manual-linking.md#android) required to enable touch tracking is added by running [add command](/react/setup.md#install).

### Network requests
Network tracker is disabled by default, to enable network requests tracking use the following method:

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
System events are tracked automatically and require no additional setup.
These are application lifecycle events.

### Notifications
On iOS, notifications are tracked automatically and require no additional setup.   

Android requires notifications permission in the settings to track notifications.  
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
You can add your own custom logs to Activity history, which will then be shown as part of every bug report.
Here’s an example of how this would look like in code:

```javascript title="App.js"
// highlight-next-line
import Shake, { LogLevel } from '@shakebugs/react-native-shake';

const sendCustomLog = () => {
    // highlight-next-line
    Shake.log(LogLevel.INFO, 'This is a Shake custom log.');
}
```

Here are all possible log levels you can use:

```javascript
LogLevel.VERBOSE
LogLevel.DEBUG
LogLevel.INFO
LogLevel.WARN
LogLevel.ERROR
```

### Console logs
Console logs are recorded automatically and require no additional setup.
If you want to disable this feature use the method below:

```javascript title="App.js"
// highlight-next-line
Shake.setConsoleLogsEnabled(false);
```

:::note

Make sure that activity history is enabled if you want to send console logs with your report.

:::

:::note

If you start app using the `react-native run-ios` command, console logs will be visible in the bundler and won't be captured by Shake.
Instead, if you want to capture console logs during development you should start app from the XCode.

:::

## Limitations
In a Free workspace you can see up to 20 events that lead to every bug.
If you need to dive really deep to find causes of the weirdest bugs,
in a Premium workspace you can browse the entire Activity history.

Network request limit for both request body and response body is 100 kB respectively. If request body or response body contains binary data, it will be presented as a *Binary data* string.

## Enabling and disabling
Activity history is enabled by default, however, you can use the method below to disable it:

```javascript title="App.js"
// highlight-next-line
Shake.setEnableActivityHistory(false);
```
