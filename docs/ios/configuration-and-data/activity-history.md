---
id: activity-history
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Shake tracks user's interaction with your app, their network traffic, notifications, logs and system events,
and automatically attaches all of those to the ticket.

## Setup

### User actions
To set up Shake to observe taps made on your app's UI elements, add this to the Activity you want to track:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="MainActivity.m"
@Override
public boolean dispatchTouchEvent(MotionEvent event) {
  // highlight-next-line
  Shake.handleTouchEvent(event, this);
  return super.dispatchTouchEvent(event);
}
```

</TabItem>

<TabItem value="swift">

```java title="MainActivity.swift"
override fun dispatchTouchEvent(event: MotionEvent): Boolean {
  // highlight-next-line
  Shake.handleTouchEvent(event, this)
  return super.dispatchTouchEvent(event)
}
```

</TabItem>
</Tabs>

### Network requests
If you want to receive users' network traffic logs, add this line to your `OkHttpClient`:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
OkHttpClient okHttpClient = new OkHttpClient()
  .newBuilder()
  // highlight-next-line
  .addInterceptor(new ShakeNetworkInterceptor())
  .build();
```

</TabItem>

<TabItem value="swift">

```kotlin title="App.swift"
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
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
// highlight-start
Shake.handleNetworkRequest(
    HttpURLConnection connection,
    String requestBody,
    String responseBody);
// highlight-end
```

</TabItem>

<TabItem value="swift">

```kotlin title="App.swift"
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
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
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

<TabItem value="swift">

```kotlin title="App.swift"
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

### Notifications
In order for Shake to track notifications throughout your app, add this line where appropriate:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
// highlight-next-line 
[SHKShake handleNotificationWithNotificationTitle: notificationTitle notificationDescription:notificationDescription];
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
// highlight-start
// highlight-next-line 
Shake.handleNotification(withNotificationTitle: notificationTitle, notificationDescription: notificationDescription)
```

</TabItem>
</Tabs>

:::note

This starts the notification listener service, which will require
users to grant notification access the first time they open your app.

:::

If you want Shake to manually handle notification tracking, use this method instead:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
// highlight-start
Shake.handleNotification(
    String notificationTitle,
    String notificationDescription
);
// highlight-end
```

</TabItem>

<TabItem value="swift">

```kotlin title="App.swift"
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
You can add your own logs to Activity history too:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
// highlight-next-line
[SHKShake logWithLevel: LogLevelInfo message:@"Log message goes here!"];
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
// highlight-next-line 
Shake.log(LogLevel.info, "Log message goes here!")
```

</TabItem>
</Tabs>

You have these log levels at your disposal:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
LogLevelVerbose
LogLevelDebug
LogLevelInfo
LogLevelWarn
LogLevelError
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
 LogLevel.verbose 
 LogLevel.debug 
 LogLevel.info 
 LogLevel.warn 
 LogLevel.error
```

</TabItem>
</Tabs>

### Console logs
Console logs are recorded automatically and require no additional setup.
If you want to disable this feature use the method below:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
// highlight-next-line
SHKShake.configuration.isConsoleLogsEnabled = false;
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
// highlight-next-line 
Shake.configuration.isConsoleLogsEnabled = false
```

</TabItem>
</Tabs>

## Limitations
In a Free workspace you can see up to 20 events that led to the ticket being reported.
If you need to dive really deep to find causes of the weirdest bugs,
In a Premium workspace you can browse the full Activity history.

The network request limits for both the request body and the response body are 100 kB each.
If the request body or the response body contains binary data, it will be presented as a *Binary data* string.

## Disable
Activity history is enabled by default, use the method below to disable it altogether:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
//highlight-next-line
SHKShake.configuration.isActivityHistoryEnabled = NO;
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
//highlight-next-line 
Shake.configuration.isActivityHistoryEnabled = false
```

</TabItem>
</Tabs>

