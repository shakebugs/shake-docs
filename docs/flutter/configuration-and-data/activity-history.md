---
id: activity-history
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Shake tracks user's interaction with your app, their network traffic, notifications, logs and system events,
and automatically attaches all of those to the ticket.

<p class="p2 mt-40">You're viewing the Flutter docs. Other platforms →&nbsp;
<a href="/docs/ios/configuration-and-data/activity-history/">iOS</a>&nbsp;
<a href="/docs/android/configuration-and-data/activity-history/">Android</a>&nbsp;
<a href="/docs/react/configuration-and-data/activity-history/">React Native</a>&nbsp;
<a href="/docs/web/configuration-and-data/activity-history/">Web</a>&nbsp;
</p>


## Setup


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
    shake_dio_interceptor: ^17.0.2
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
    shake_http_client: ^17.0.1
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

```dart title="main.dart" 
// highlight-next-line 
Shake.showNotificationsSettings();
```

:::note
Keep in mind that notification listener intercepts notifications in your app.
This can be a security issue if your notifications contains authorization codes.
Make sure that you remove sensitive data using notification filter described on our privacy page.
:::

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

## Disable

Activity history is enabled by default, use the method below to disable it altogether:

```dart title="main.dart"
// highlight-next-line
Shake.setEnableActivityHistory(false);
```
