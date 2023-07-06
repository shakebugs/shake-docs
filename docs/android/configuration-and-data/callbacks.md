---
id: callbacks
title: Callbacks
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Execute a block of a code when a certain action is executed by Shake

## Shake open callback

If you want to perform an action when Shake interface is **opened**, you can do it like shown below:

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
Shake.getReportConfiguration().setShakeOpenListener(new ShakeOpenListener() {
    @Override
    public void onShakeOpen() {
        Log.i("Shake", "onShakeOpen");
    }
});
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().shakeOpenListener = object : ShakeOpenListener {
    override fun onShakeOpen() {
        Log.i("Shake", "onShakeOpen")
    }
}
// highlight-end
```

</TabItem>
</Tabs>

## Shake dismiss callback

If you want to perform an action when Shake interface is **closed**, you can do it like shown below:

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
Shake.getReportConfiguration().setShakeDismissListener(new ShakeDismissListener() {
    @Override
    public void onShakeDismiss() {
        Log.i("Shake", "onShakeDismiss");
    }
});
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().shakeDismissListener = object : ShakeDismissListener {
    override fun onShakeDismiss() {
        Log.i("Shake", "onShakeDismiss")
    }
}
// highlight-end
```

</TabItem>
</Tabs>

## Shake submit callback

To detect when user **pressed a submit button** on the New ticket screen, add a submit listener like in the example below.

This listener provides **type** and **fields** parameters:
- reportType: **String** - "crash" or "feedback" depending on the type of the ticket
- fields: **Map<String, String>** - key value pairs of submitted form fields

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
Shake.getReportConfiguration().setShakeSubmitListener(new ShakeSubmitListener() {
    @Override
    public void onShakeSubmit(@NonNull String reportType, @NonNull Map<String, String> fields) {
        Log.i("Shake", "onShakeSubmit");
    }
});
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().shakeSubmitListener = object : ShakeSubmitListener {
    override fun onShakeSubmit(reportType: String, fields: Map<String, String>) {
        Log.i("Shake", "onShakeSubmit")
    }
}
// highlight-end
```

</TabItem>
</Tabs>
