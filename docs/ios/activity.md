---
id: activity
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Shake diligently tracks user's interaction with your app, their network traffic, notifcations, logs and system events, and automatically attaches all of those to every bug report.

## No coding required
You can inspect all events that lead to the bug being reported out-of-the-box. You'll see a link to *Activity history* in the top right corner:

<img
  alt="Activity screen"
  src={useBaseUrl('screens/activity_screen.png')}
/>

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

## Custom logs
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


## Limitations
In a Free workspace you can see up to 20 events that lead to every bug.
If you need to dive really deep to find causes of the weirdest bugs,
in a Premium workspace you can browse the entire activity history.
