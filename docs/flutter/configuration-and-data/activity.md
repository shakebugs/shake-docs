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
User actions tracking is currently not supported.

### Network requests
Shake provides you a wrapper for *dart:io HttpClient* class which allows you to track network requests.
Additionally, if you are using *dio* or *http* packages for sending network requsts, you can use one our [extensions](https://pub.dev/publishers/shakebugs.com/packages).

#### dart:io
Use *ShakeHttpClient* wrapper class to perform network requests.
All network requests sent with the *ShakeHttpClient* instance will be visible on the dashboard.

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/network/shake_http_client.dart';

void sendNetworkRequest() async {
    // highlight-start
    ShakeHttpClient shakeHttpClient = ShakeHttpClient();
    await shakeHttpClient.getUrl(Uri.parse("http://www.shakebugs.com"));
    // highlight-end
}
```

:::note

The latest version of Shake dart:io HttpClient wrapper will log network request details without request and response body.

:::

#### dio
Install [shake_dio_interceptor](https://pub.dev/packages/shake_dio_interceptor) extension for *dio* package:

```yaml title="pubspec.yaml"
dependencies:
//highlight-next-line
    shake_dio_interceptor: ^15.1.0
```

Add *ShakeDioInterceptor* to your *Dio* instance:

```dart title="main.dart"
// highlight-next-line
import 'package:shake_dio_interceptor/shake_dio_interceptor.dart';

void sendNetworkRequest() async {
    // highlight-start
    Dio dio = Dio();
    dio.interceptors.add(ShakeDioInterceptor());
    await dio.get('https://www.shakebugs.com');
    // highlight-end
}
```

All network requests sent with the *Dio* instance will be visible on the dashboard.

#### http
Install [shake_http_client](https://pub.dev/packages/shake_http_client) extension for *http* package:

```yaml title="pubspec.yaml"
dependencies:
//highlight-next-line
    shake_http_client: ^15.1.0
```

Use *ShakeHttpClient* to send network requests:

```dart title="main.dart"
// highlight-next-line
import 'package:shake_http_client/shake_http_client.dart';

void sendNetworkRequest() async {
    // highlight-start
    ShakeHttpClient shakeHttpClient = ShakeHttpClient();
    await shakeHttpClient.get(Uri.parse('https://www.shakebugs.com'));
    // highlight-end
}
```

All network requests sent with the *ShakeHttpClient* instance will be visible on the dashboard.

#### Manually
You can add your own custom network requests at any time:

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/models/network_request.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

void insertNetworkRequest() {
    // highlight-start
    NetworkRequest networkRequest = NetworkRequest()
      ..method = 'POST'
      ..status = '200'
      ..url = 'https://api.example.com'
      ..requestBody = 'Request body'
      ..responseBody = 'Response body'
      ..requestHeaders = {'header1': 'requestHeader'}
      ..responseHeaders = {'header2': 'responseHeader'}
      ..duration = 100
      ..date = new DateTime.now();
    Shake.insertNetworkRequest(networkRequest);
    // highlight-end
}
```

### System events
System events are tracked automatically and require no additional setup.
These are application lifecycle events.

### Notifications
On iOS, notifications are tracked automatically and require no additional setup.   

Android requires notifications permission in the settings to track notifications.  
Use the following code snippet to show notification settings screen to the user:

```dart title="main.dart"
// highlight-next-line
Shake.showNotificationsSettings();
```

You can add your own custom notification events at any time:

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/models/notification_event.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

void insertNotificationEvent() {
    // highlight-start
    NotificationEvent notificationEvent = NotificationEvent()
      ..id = '0'
      ..title = 'Title'
      ..description = 'Description';
    Shake.insertNotificationEvent(notificationEvent);
    // highlight-end
}
```

### Custom logs
You can add your own custom logs to Activity history, which will then be shown as part of every bug report.
Here’s an example of how this would look like in code:

```dart title="main.dart"
// highlight-next-line
Shake.log(LogLevel.info, 'This is a Shake custom log.');
```

Here are all possible log levels you can use:

```dart 
LogLevel.verbose
LogLevel.debug
LogLevel.info
LogLevel.warn
LogLevel.error
```

### Console logs
Console logs are recorded automatically and require no additional setup.
If you want to disable this feature use the method below:

```dart title="main.dart"
// highlight-next-line
Shake.setConsoleLogsEnabled(false);
```

:::note

Make sure that activity history is enabled if you want to send console logs with your report.

:::

## Limitations
In a Free workspace you can see up to 20 events that lead to every bug.
If you need to dive really deep to find causes of the weirdest bugs,
in a Premium workspace you can browse the entire Activity history.

Network request limit for both request body and response body is 100 kB respectively.
If request body or response body contains binary data, it will be presented as a *Binary data* string.

## Enabling and disabling
Activity history is enabled by default, however, you can use the method below to disable it:

```dart title="main.dart"
// highlight-next-line
Shake.setEnableActivityHistory(false);
```
