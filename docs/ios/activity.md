---
id: activity
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Shake diligently tracks user's interaction with your app, their network traffic, notifications, logs and system events, and automatically attaches all of those to every bug report.

## No coding required
You can inspect all events that lead to the bug being reported out-of-the-box. You'll see a link to *Activity history* in the top right corner:

<img
  alt="Activity screen"
  src={useBaseUrl('screens/activity_screen.png')}
/>

## Setting up

### Notifications
Notifications are tracked automatically and require no additional setup.

If you want Shake to manually handle notification tracking, you can use this method instead:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
[SHKShake handleNotificationWithNotificationTitle: notificationTitle notificationDescription:notificationDescription];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.handleNotification(withNotificationTitle: notificationTitle, notificationDescription: notificationDescription)
```

</TabItem>
</Tabs>

### Custom logs
You can add your own custom logs to Activity history, which will then be shown as part of every bug report.
Here’s an example of how this would look like in code:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
[SHKShake logWithLevel: LogLevel.info, message:@"Log message goes here!"];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.log(LogLevel.info, "Log message goes here!")
```

</TabItem>
</Tabs>

### Console logs
Console logs are recorded automatically and require no additional setup. If you want to disable this
feature use the method below:

<Tabs
groupId="ios"
defaultValue="swift"
values={[
  { label: 'Objective-C', value: 'objectivec'},
  { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
SHKShake.configuration.isConsoleLogsEnabled = false;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.isConsoleLogsEnabled = false
```

</TabItem>
</Tabs>

:::note

Make sure that activity history is enabled if you want to send console logs with your report.

:::

### User actions

SDK automatically observes taps made on your app's UI elements.

### Network requests

Shake will capture the user's network traffic and log the events on the web dashboard.

### System events

Application lifecycle events and system events are automatically tracked.

## Limitations
In a Free workspace you can see up to 20 events that lead to every bug.
If you need to dive really deep to find causes of the weirdest bugs,
in a Premium workspace you can browse the entire activity history.

## Enabling and disabling
Activity history is enabled by default, however, you can use the method below to disable it:



<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="AppDelegate.m"
//highlight-next-line
SHKShake.configuration.isActivityHistoryEnabled = NO;
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-next-line
Shake.configuration.isActivityHistoryEnabled = false
```

</TabItem></Tabs>
