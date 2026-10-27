---
id: app-hangs
title: App hangs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Shake also detects app hangs — moments when your app's main thread freezes and stops responding to input.

<p class="p2 mt-40">
You're viewing the iOS docs. Other platform → &nbsp;
<a href="/docs/android/crash-reports/anrs/">Android</a>&nbsp;
</p>

## Introduction

A crash means your app threw an exception and shut down. A hang is different: your app's main thread stops responding for several seconds, the UI locks up, and your user either waits it out, force-quits your app, or the system kills it for them. No exception is ever thrown, so without this feature none of that would reach your dashboard — a frozen screen simply disappeared without a trace.

This module reports hangs the same way it reports [crashes](/ios/crash-reports/overview): with device info, [activity history](/ios/configuration-and-data/activity-history), [black box](/ios/configuration-and-data/black-box), and everything else your [Configuration and data](/ios/configuration-and-data/overview) settings already attach.

There's one difference worth knowing up front: since the main thread is frozen at the exact moment a hang is detected, these reports never include a screenshot or a screen recording — there's no way to capture either while the UI isn't responding.

Detecting app hangs is **enabled by default**, and it's **independent from crash reporting** — you can turn one off without the other.

## Enable

If you'd like to turn hang detection off, set the `isAnrDetectionEnabled` flag to `false` before calling the `Shake.start` method.

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
SHKShake.configuration.isAnrDetectionEnabled = NO;
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.isAnrDetectionEnabled = false
```

</TabItem></Tabs>

## Set the threshold

By default, a hang is reported once your app's main thread has been unresponsive for **5 seconds**. You can tune this to match how strict you want detection to be. Setting it lower than **1 second** isn't allowed, since anything shorter would start flagging ordinary UI stutter as a hang.

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
SHKShake.configuration.anrThreshold = 5.0;
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.anrThreshold = 5.0
```

</TabItem></Tabs>

## What happens when a hang is detected

* **One report per hang.** A single, ongoing freeze is only reported once, no matter how long it lasts. If your app freezes again later, that's a separate report.
* **Shake never closes your app.** Detecting a hang doesn't terminate it — if your app recovers, it keeps running normally and the report is simply sent in the background.
* **Two outcomes are possible**, and your dashboard tells you which one happened:
  * The app **recovered** — the main thread started responding again, and the session continued.
  * The app was **terminated while frozen** — the system (or your user, by force-quitting) ended the app before it recovered. This is the more severe of the two, since the session was lost.

:::note

If a debugger is attached to your app, hang detection is automatically suppressed. Pausing at a breakpoint freezes your main thread too, and Shake has no way to tell that apart from a real hang — so testing this feature should be done on a build that isn't being debugged.

:::

## Test it

Let's freeze your app on purpose to see what an app hang report looks like on your Shake dashboard.

Hang detection is on by default, so just add a button that blocks the main thread for longer than your threshold — 8 seconds is a safe margin for the 5 second default:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="ViewController.m"
- (IBAction)freezeButtonTapped:(id)sender {
    // highlight-next-line
    [NSThread sleepForTimeInterval:8.0];
}
```

</TabItem><TabItem value="swift">

```swift title="ViewController.swift"
@IBAction func freezeButtonTapped(_ sender: Any) {
    // highlight-next-line
    Thread.sleep(forTimeInterval: 8.0)
}
```

</TabItem></Tabs>

Run your app **without** a debugger attached, then tap the button and wait — your screen will freeze for 8 seconds before recovering.

## Visit your Shake dashboard

To see your report:
1. Visit your [Shake dashboard](https://app.shakebugs.com)
1. Switch to the **Crashes** tab in the left sidebar

If your report isn't visible instantly, wait a minute until the system processes it.
