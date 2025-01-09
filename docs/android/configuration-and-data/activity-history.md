---
id: activity-history
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Shake tracks user's interaction with your app, their network traffic, notifications, logs and system events,
and automatically attaches all of those to the ticket.

<p class="p2 mt-40">You're viewing the Android docs. Other platforms →&nbsp;
<a href="/docs/ios/configuration-and-data/activity-history/">iOS</a>&nbsp;
<a href="/docs/react/configuration-and-data/activity-history/">React Native</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/activity-history/">Flutter</a>&nbsp;
<a href="/docs/web/configuration-and-data/activity-history/">Web</a>&nbsp;
</p>


## Setup


### User actions

Shake automatically observes taps made on your app's UI elements.

:::note

This feature is disabled for apps built with Jetpack Compose.

:::note

### Network traffic

If you want to receive users' network traffic logs, add this line to your `OkHttpClient`:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
OkHttpClient okHttpClient = new OkHttpClient()
    .newBuilder()
    // highlight-next-line
    .addInterceptor(new ShakeNetworkInterceptor())
    .build();
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
val okHttpClient = OkHttpClient()
    .newBuilder()
    // highlight-next-line
    .addInterceptor(ShakeNetworkInterceptor())
    .build()
```

</TabItem>
</Tabs>

If you don’t use OkHttpClient, use this method to forward requests to Shake:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
Shake.handleNetworkRequest(
    HttpURLConnection connection,
    String requestBody,
    String responseBody);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.handleNetworkRequest(
    connection: HttpURLConnection,
    requestBody: String,
    responseBody: String)
// highlight-end
```

</TabItem>
</Tabs>

You can log your own custom network requests too:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
NetworkRequestBuilder networkRequestBuilder = new NetworkRequestBuilder()
                 .setUrl("https://api.github.com")
                 .setMethod("POST")
                 .setRequestHeaders(requestHeaders)
                 .setRequestBody(requestBody)
                 .setTimestamp(new Date());
Shake.insertNetworkRequest(networkRequestBuilder);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val networkRequestBuilder = NetworkRequestBuilder()
                .setUrl("https://api.github.com")
                .setMethod("POST")
                .setRequestHeaders(requestHeaders)
                .setRequestBody(requestBody)
                .setTimestamp(Date())
Shake.insertNetworkRequest(networkRequestBuilder)
// highlight-end
```

</TabItem>
</Tabs>


### System events

System events - also known as app lifecycle events - are tracked automatically and require no additional setup.

### Screen changes

Screen changes are tracked automatically and require no additional setup.

:::note

The SDK will collect just changes of Android *Activities*, adding, removing or replacing Fragments inside an Activity is not tracked.

:::

### Notifications

In order for Shake to track notifications throughout your app, add `ShakeNotificationListenerService`
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
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
startActivity(new Intent("android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS"));
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
startActivity(Intent("android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS"))
// highlight-end
```

</TabItem>
</Tabs>

:::note
Keep in mind that notification listener intercepts notifications in your app.
This can be a security issue if your notifications contains authorization codes.
Make sure that you remove sensitive data using notification filter described on our privacy page.
:::

You can add your own custom notification events at any time:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
Shake.insertNotificationEvent(
    String notificationTitle,
    String notificationDescription
);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.insertNotificationEvent(
    notificationTitle: String,
    notificationDescription: String
)
// highlight-end
```

</TabItem>
</Tabs>


### Custom logs

You can add your own logs to Activity history too:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
Shake.log(LogLevel.INFO, "Log message goes here!");
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.log(LogLevel.INFO, "Log message goes here!")
```

</TabItem>
</Tabs>

You have these log levels at your disposal:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
LogLevel.VERBOSE
LogLevel.DEBUG
LogLevel.INFO
LogLevel.WARN
LogLevel.ERROR
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
LogLevel.VERBOSE
LogLevel.DEBUG
LogLevel.INFO
LogLevel.WARN
LogLevel.ERROR
```

</TabItem>
</Tabs>


### Console logs

Console logs are recorded automatically and require no additional setup.
If you want to disable this feature use the method below:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
Shake.getReportConfiguration().setConsoleLogsEnabled(false);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().isConsoleLogsEnabled = false
```

</TabItem>
</Tabs>


## Disable

Activity history is enabled by default, use the method below to disable it altogether:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
Shake.getReportConfiguration().setEnableActivityHistory(false);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().isEnableActivityHistory = false
```

</TabItem>
</Tabs>
