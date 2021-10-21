---
id: customer-feedback-enabling-disabling
title: Enabling/disabling
---

## Disabling
If you don’t want your users to have to categorize their feedback, simply hide this option using the following method:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
  { label: 'Objective-C', value: 'objc'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objc">

```objc title="AppDelegate.m"
// highlight-next-line
SHKShake.configuration.isFeedbackTypeEnabled = false;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.isFeedbackTypeEnabled = false
```

</TabItem>

</Tabs>

On your Shake Dashboard, all these tickets won't have any specific type (and tag).
