---
id: feedback_type
title: Feedback type
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This SDK option allows your users to categorize their feedback.

## Introduction
When submitting their feedback, your users immediately categorize it as either a bug report, an improvement suggestion, or just a question.

Depending on their choice, you automatically receive the <span class="tag-button pink-tag-button">bug</span>, <span class="tag-button pink-tag-button">suggestion</span> or <span class="tag-button pink-tag-button">question</span> tag next to their ticket in your [Shake Dashboard](https://app.shakebugs.com). This way, you can filter and browse them efficiently!

## Disabling
If you don’t want your users to have to categorize their feedback, simply hide this option using the following method:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
// highlight-start
SHKShake.configuration.isFeedbackTypeEnabled = false;
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-start
Shake.configuration.isFeedbackTypeEnabled = false
// highlight-end
```

</TabItem>

</Tabs>

On your Shake Dashboard, all these tickets won't have any specific type (and tag).
