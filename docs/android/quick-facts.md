---
id: quick-facts
title: Quick facts
---
import useBaseUrl from '@docusaurus/useBaseUrl';

:::caution

From SDK Version 12.0 Quick facts are deprecated, please use [Metadata](/android/metadata.md) instead.

:::

## Introduction
Every app is unique so the [Essentials](/android/essentials.md) sent with each bug report are often not enough.
That's why the Shake SDK allows you to send yourself any custom data from the app using Quick facts.
It's a *String* object which you can shape any way you want, and you can put anything you want into it.

This is where you will see Quick facts on your web Dashboard:

<img
  alt="Quick facts screen"
  src={useBaseUrl('screens/quick_facts_screen.png')}
/>


## How to use
To set the Quick facts, call the `Shake.onPrepareData()` method passing your quick facts as a *String*
containing data you want to receive on your web Dashboard.

You can call the `Shake.onPrepareData()` method anywhere within your app,
but be careful only to call it once since any subsequent calls will override the former ones.

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
// highlight-next-line
Shake.onPrepareData(createShakeReportData());

// highlight-start
private ShakeReportData createShakeReportData() {
  return new ShakeReportData() {
    @Override
      public String quickFacts() {
        return "quickFact";
      }
  };
}
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.onPrepareData(createShakeReportData())

// highlight-start
private fun createShakeReportData(): ShakeReportData {
  return object : ShakeReportData {
    override fun quickFacts(): String {
      return "quickFact"
    }

    override fun attachedFiles(): List<ShakeFile> {
      return ArrayList()
    }
  }
}
// highlight-end
```

</TabItem>
</Tabs>
