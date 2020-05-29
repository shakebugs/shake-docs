---
id: invoke
title: Invoke
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Manual invoking
By default, the SDK is invoked when a user shakes their device.
You don't need to code anything, but if you want to, you can customize that.

Let's look at an example.

You want your users to invoke SDK either when they shake their device, or when they take a screenshot. 
To do that, call `Shake.getReportConfiguration()` before `Shake.start()` and pass one or more desired values.

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
Shake.getReportConfiguration().setInvokeShakeOnShakeDeviceEvent(true);
Shake.getReportConfiguration().setInvokeShakeOnScreenshot(true);
Shake.start(this);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
Shake.getReportConfiguration().isInvokeShakeOnShakeDeviceEvent = true
Shake.getReportConfiguration().isInvokeShakeOnScreenshot = true
Shake.start(this)
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
Shake.getReportConfiguration().setInvokeShakeOnShakeDeviceEvent(true);
Shake.getReportConfiguration().setShowFloatingReportButton(true);
Shake.getReportConfiguration().setInvokeShakeOnScreenshot(true);
Shake.getReportConfiguration().setInvokeShakeOnRightEdgePan(true);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
Shake.getReportConfiguration().isInvokeShakeOnShakeDeviceEvent = true
Shake.getReportConfiguration().isShowFloatingReportButton = true
Shake.getReportConfiguration().isInvokeShakeOnScreenshot = true
Shake.getReportConfiguration().isInvokeShakeOnRightEdgePan = true
```

</TabItem>
</Tabs>

## Code invoking
You can invoke SDK through code by calling the `Shake.show()` method anywhere after `Shake.start()`, 
optionally attaching files and/or Metadata. Here’s an example:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java {2,3,6-19} title="App.java"
public void example() {
  Shake.setMetadata("key", "value");
  Shake.show(createShakeReportData());
}
        
private ShakeReportData createShakeReportData() {
  return new ShakeReportData() {
    // From SDK Version 12.0 Quick facts are deprecated, so they're set to return null in this code example.
    @Override
    public String quickFacts() {
      return null;
    }
    @Override
    public List<ShakeFile> attachedFiles() {
      List<ShakeFile> shakeFiles = new ArrayList<>();
      return shakeFiles;
    }
  };
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin {2,3,6-17} title="App.kt"
fun example()  {
  Shake.setMetadata("key", "value")
  Shake.show(createShakeReportData())
}
        
private fun createShakeReportData(): ShakeReportData {
  return object : ShakeReportData {
    // From SDK Version 12.0 Quick facts are deprecated, so they're set to return null in this code example.
    override fun quickFacts(): String {
      return null
    }

    override fun attachedFiles(): List<ShakeFile> {
      return ArrayList()
    }
  }
}
```

</TabItem>
</Tabs>

## Actions
1. **Shake** - The default, shaking gesture causes the SDK to pop up.

:::note

In case you want to test Shake SDK in Android Emulator, it’s useful to know that emulator’s default shaking gesture is too weak to invoke Shake.

:::

2. **Button** - This invocation event will create the floating button on top of your app's UI which users can clearly see at all times. 
This button can be dragged to a more suitable position.

:::note

In the emulator, you might need to click the button twice if one click doesn’t do it.
Also, system interface elements [may sometimes get in a way](https://help.shakebugs.com/en/articles/3321805-the-report-a-bug-button-is-hidden-behind-an-interface-element) of the button.

:::

3. **Screenshot** - The SDK will be invoked when users make a screenshot while using your app.

:::note

The only way for any SDK to realize that a screenshot has been captured is to monitor the screenshots directory.
Because of that, if you opt for this invocation method, the storage permission will be requested from a user when they launch your app.

:::

4. **Right Edge Pan** - Invoke Shake with a one-finger swiping gesture from the right edge of the screen.
