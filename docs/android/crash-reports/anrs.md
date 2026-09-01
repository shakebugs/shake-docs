---
id: anrs
title: ANRs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Shake also detects ANRs — moments when your app's main thread freezes and stops responding to input.

<p class="p2 mt-40">
You're viewing the Android docs. Other platform →&nbsp;
<a href="/docs/ios/crash-reports/app-hangs/">iOS</a>&nbsp;
</p>

## Introduction

A crash means your app threw an exception and shut down. An ANR is different: your app's main thread stops responding for several seconds, the UI locks up, and your user either waits it out, force-quits your app, or the system kills it for them. No exception is ever thrown, so without this feature none of that would reach your dashboard — a frozen screen simply disappeared without a trace.

This module reports ANRs the same way it reports [crashes](/android/crash-reports/overview): with device info, [activity history](/android/configuration-and-data/activity-history), [black box](/android/configuration-and-data/black-box), and everything else your [Configuration and data](/android/configuration-and-data/overview) settings already attach.

There's one difference worth knowing up front: since the main thread is frozen at the exact moment an ANR is detected, these reports never include a screenshot or a screen recording — there's no way to capture either while the UI isn't responding.

Detecting ANRs is **enabled by default**, and it's **independent from crash reporting** — you can turn one off without the other.

## Enable

If you'd like to turn ANR detection off, set the `setAnrDetectionEnabled` flag to `false` before calling the `Shake.start` method.

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
Shake.setAnrDetectionEnabled(false);
```

</TabItem><TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.setAnrDetectionEnabled(false)
```

</TabItem></Tabs>

## Set the threshold

By default, an ANR is reported once your app's main thread has been unresponsive for **5000 ms** — the same bar Android itself uses to decide an app isn't responding. You can tune this to match how strict you want detection to be. Setting it lower than **1000 ms** isn't allowed, since anything shorter would start flagging ordinary UI stutter as an ANR.

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
Shake.setAnrThresholdMs(5000);
```

</TabItem><TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.setAnrThresholdMs(5000)
```

</TabItem></Tabs>

## What happens when an ANR is detected

* **One report per ANR.** A single, ongoing freeze is only reported once, no matter how long it lasts. If your app freezes again later, that's a separate report.
* **Shake never closes your app.** Detecting an ANR doesn't terminate it — if your app recovers, it keeps running normally and the report is simply sent in the background.
* **Two outcomes are possible**, and your dashboard tells you which one happened:
  * The app **recovered** — the main thread started responding again, and the session continued.
  * The app was **terminated while frozen** — the system (or your user, by force-quitting) ended the app before it recovered. This is the more severe of the two, since the session was lost.

:::note

If a debugger is attached to your app, ANR detection is automatically suppressed. Pausing at a breakpoint freezes your main thread too, and Shake has no way to tell that apart from a real ANR — so testing this feature should be done on a build that isn't being debugged.

:::

## Test it

Let's freeze your app on purpose to see what an ANR report looks like on your Shake dashboard.

ANR detection is on by default, so just add a button that blocks the main thread for longer than your threshold — 8 seconds is a safe margin for the 5000 ms default:

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
public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // highlight-start
        Button buttonFreeze = findViewById(R.id.button_freeze);
        buttonFreeze.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    Thread.sleep(8000);
                } catch (InterruptedException e) {
                    // ignore
                }
            }
        });
        // highlight-end
    }
}
```

</TabItem><TabItem value="kotlin">

```kotlin title="MainActivity.kt"
public class MainActivity : Activity {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // highlight-start
        val buttonFreeze: Button = findViewById(R.id.button_freeze)
        buttonFreeze.setOnClickListener {
            Thread.sleep(8000)
        }
        // highlight-end
    }
}
```

</TabItem></Tabs>

Run your app **without** a debugger attached, then tap the button and wait — your screen will freeze for 8 seconds before recovering.

## Visit your Shake dashboard

To see your report:
1. Visit your [Shake dashboard](https://app.shakebugs.com)
1. Switch to the **Crashes** tab in the left sidebar

If your report isn't visible instantly, wait a minute until the system processes it.
