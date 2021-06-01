---
id: invoke
title: Invoke
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Invoke manually
By default, the SDK is invoked when a user shakes their device.
You don't need to code anything.

But if you want to, you can customize that.

Let's look at an example.
You want your users to invoke SDK either when they shake their device, or when they take a screenshot.
To do that, set true or false for certain `Shake.getReportConfiguration()` properties:

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

```java title="App.java"
// highlight-start
Shake.getReportConfiguration().setInvokeShakeOnShakeDeviceEvent(true);
Shake.getReportConfiguration().setInvokeShakeOnScreenshot(true);
Shake.start(this, "client-id", "client-secret");
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().isInvokeShakeOnShakeDeviceEvent = true
Shake.getReportConfiguration().isInvokeShakeOnScreenshot = true
Shake.start(this, "client-id", "client-secret")
// highlight-end
```

</TabItem>
</Tabs>

This method also enables you to change the preferred invocation event on-the-go during runtime.
Here’s a list of all available ones below, feel free to use any combination of these.

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
Shake.getReportConfiguration().setInvokeShakeOnShakeDeviceEvent(true);
Shake.getReportConfiguration().setShowFloatingReportButton(true);
Shake.getReportConfiguration().setInvokeShakeOnScreenshot(true);
Shake.getReportConfiguration().setInvokeShakeOnRightEdgePan(true);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().isInvokeShakeOnShakeDeviceEvent = true
Shake.getReportConfiguration().isShowFloatingReportButton = true
Shake.getReportConfiguration().isInvokeShakeOnScreenshot = true
Shake.getReportConfiguration().isInvokeShakeOnRightEdgePan = true
// highlight-end
```

</TabItem>
</Tabs>

### Shaking
The default, shaking gesture causes the SDK to pop up.

:::note

In case you want to test Shake SDK in Android Emulator, it’s useful to know that emulator’s default shaking gesture is too weak to invoke Shake.

:::

Shaking gesture sensitivity can be fine tuned as shown in the snippet below:

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
Shake.getReportConfiguration().setShakingThreshold(400); // Default value is 600.
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().shakingThreshold = 400; // Default value is 600.
```

</TabItem>
</Tabs>

In the above example, threshold is reduced a bit, meaning that Shake is a bit easier to invoke with the shaking gesture.

A valid treshold value range is `1 - 1000`, with bigger values representing decreased sensitivity meaning that a stronger 
motion gesture is required to invoke Shake.

### Button
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times. This button can be dragged to a more suitable position.

:::note

In the emulator, you might need to click the button twice if one click doesn’t do it.
Also, system interface elements [may sometimes get in a way](https://help.shakebugs.com/en/articles/3321805-the-report-a-bug-button-is-hidden-behind-an-interface-element) of the button.

:::

### Taking a screenshot
The SDK will be invoked when users make a screenshot while using your app.

:::note

The only way for any SDK to realize that a screenshot has been captured is to monitor the screenshots directory.
Because of that, if you opt for this invocation method, the storage permission will be requested from a user when they launch your app.

:::

### Right Edge Pan
Invoke Shake with a one-finger swiping gesture from the right edge of the screen.

:::note

The right edge pan gesture won’t work if performed over a ListView or ScrollView.
You can use one of the alternative ways to invoke Shake instead.

:::

## Invoke through code
You can invoke SDK through code by calling the `Shake.show()` method anywhere after `Shake.start()`,
optionally attaching files and/or [Metadata](android/metadata.md). Here’s an example:

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
public void example() {
  // highlight-start
  Shake.setMetadata("key", "value");
  Shake.show(createShakeReportData());
  // highlight-end
}

// highlight-start
private ShakeReportData createShakeReportData() {
  return new ShakeReportData() {
    @Override
    public List<ShakeFile> attachedFiles() {
      List<ShakeFile> shakeFiles = new ArrayList<>();
      return shakeFiles;
    }
  };
}
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
fun example()  {
  // highlight-start
  Shake.setMetadata("key", "value")
  Shake.show(createShakeReportData())
  // highlight-end
}
        
// highlight-start
private fun createShakeReportData(): ShakeReportData {
  return object : ShakeReportData {
    override fun attachedFiles(): List<ShakeFile> {
      return ArrayList()
    }
  }
}
// highlight-end
```

</TabItem>
</Tabs>

All other data, like [Activity history](android/activity.md) or [Black box](android/blackbox.md), is automatically included in every user’s bug report — no additional code required.
