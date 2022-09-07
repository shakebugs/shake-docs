---
id: activity-history
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Shake tracks user's interaction with your app, their network traffic, notifications, logs and system events,
and automatically attaches all of those to the ticket.


## Setup

## Logs

### User actions

User actions tracking is currently not supported.


### Network traffic

Shake provides you a wrapper for dart:io HttpClient class which allows you to track network traffic.
Additionally, if you use dio or http packages for sending network requests, you can use one of the extensions below.


#### dart:io

Use ShakeHttpClient wrapper class to perform network requests:

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
The latest version of Shake dart:io HttpClient wrapper will log network request details without request and response bodies.
:::

All network requests sent with the *ShakeHttpClient* instance will be visible in Activity history.


#### dio

Install the [shake_dio_interceptor](https://pub.dev/packages/shake_dio_interceptor) extension for the *dio* package:

```yaml title="pubspec.yaml"
dependencies:
//highlight-next-line
    shake_dio_interceptor: ^15.2.0
```

Add ShakeDioInterceptor to your Dio instance:

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

All network requests sent with the *Dio* instance will be visible in Activity history.


#### http

Install the [shake_http_client](https://pub.dev/packages/shake_http_client) extension for *http* package:

```yaml title="pubspec.yaml"
dependencies:
//highlight-next-line
    shake_http_client: ^15.2.0
```

Use ShakeHttpClient to send network requests:

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

All network requests sent with the *ShakeHttpClient* instance will be visible in Activity history.


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

System events - also known as app lifecycle events - are tracked automatically and require no additional setup.


### Notifications

On *iOS*, notifications are tracked automatically and require no additional setup.

*Android* requires notifications permission in the settings to track notifications.
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

You can add your own logs to Activity history too:

```dart title="main.dart"
// highlight-next-line
Shake.log(LogLevel.info, 'This is a Shake custom log.');
```

You have these log levels at your disposal:

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

## Screenshot history

> As you navigate through your application Shake is observing screen changes and capturing screenshot whenever you go to different screen.

> Maximum number of those screenshots will be 10 and all excess screenshots will be removed based on date they were captured.

> Every screenshot has it's activity history log attached to it and will be seen on dashboard when clicked on corresponding log.

### Manually taking screenshots
You can also take screenshots manually. For example if you want to take screenshot on button click.

```dart title="main.dart"
// highlight-start
Button screenshotButton = findViewById(R.id.screenshot_button);
screenshotButton.setOnClickListener(view -> Shake.takeScreenshotManually());
// highlight-end
```

### Disabling screenshot history

:::note
Screenshot history is enabled by default.
:::note

If you don't want Shake to track your screens as you navigate through application you can disable this feature. 

```dart title="main.dart"
// highlight-start
Shake.setScreenshotHistoryIncluded(false);
// highlight-end
```


## Disable

Activity history is enabled by default, use the method below to disable it altogether:

```dart title="main.dart"
// highlight-next-line
Shake.setEnableActivityHistory(false);
```
