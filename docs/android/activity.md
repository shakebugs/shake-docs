---
id: activity
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Shake diligently tracks user's interaction with your app, their network traffic and system events, and automatically attaches all of those to every bug report.

## Introduction
You can inspect all events that lead to a bug being reported. A link to *Activity history* is located in the top right corner:

<img
  alt="Activity screen"
  src={useBaseUrl('screens/activity_screen.png')}
/>

## Setting up
### User actions
To set up the SDK to observe taps made on your app's UI elements, add this to any Activity you want to track:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="MainActivity.java"
@Override
public boolean dispatchTouchEvent(MotionEvent event) {
  // highlight-next-line
  Shake.handleTouchEvent(event, this);
  return super.dispatchTouchEvent(event);
}
```

</TabItem>

<TabItem value="kotlin">

```java title="MainActivity.kt"
override fun dispatchTouchEvent(event: MotionEvent): Boolean {
  // highlight-next-line
  Shake.handleTouchEvent(event, this)
  return super.dispatchTouchEvent(event)
}
```

</TabItem>
</Tabs>

### Network
If you want to see user's network traffic to fix bugs more efficiently, add this line of code to your `OkHttpClient`:

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

### System events
System events are tracked automatically and require no additional setup.

### Notifications
In order for Shake to track user notifications throughout your app, add this line of code where appropriate:

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
startActivity(new Intent("android.settings." +
    "ACTION_NOTIFICATION_LISTENER_SETTINGS"));
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
startActivity(Intent("android.settings." +
    "ACTION_NOTIFICATION_LISTENER_SETTINGS"))
// highlight-end
```

</TabItem>
</Tabs>

:::note

This starts the notification listener service, which will require
users to grant *Notification access* the first time they open your app.

:::

If you want Shake to manually handle notification tracking, you can use this method instead:

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
Shake.handleNotification(
    String notificationTitle,
    String notificationDescription
);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.handleNotification(
    notificationTitle: String,
    notificationDescription: String
)
// highlight-end
```

</TabItem>
</Tabs>

### Custom logs
You can add your own custom logs to Activity history, which will then be shown as part of every bug report.
Here’s an example of how this would look like in code:

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

## Limitations
In a Free workspace you can see up to 20 events that lead to every bug.
If you need to dive really deep to find causes of the weirdest bugs,
in a Premium workspace you can browse the entire activity history.

## Enabling and disabling
Activity history is enabled by default, however, you can use the method below to disable it:

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
