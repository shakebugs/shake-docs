---
id: feedback-type
title: Feedback type
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>By default, your users have to categorize their feedback so you can filter and browse it more easily later on.

<table class="media-container media-container-highlighted mt-50 pb-80">
<img
  alt="User feedback type"
  width="380"
  src={useBaseUrl('img/feedback-type@2x.png')}
/>
</table>

## Introduction

Your users categorize every feedback as either a bug report, an improvement suggestion, or a question.
Depending on what they choose, their feedback arrives with the <span class="tag-button pink-tag-button">bug</span>, <span class="tag-button pink-tag-button">suggestion</span> or <span class="tag-button pink-tag-button">question</span> tag
to your [Shake dashboard](https://app.shakebugs.com).

## Custom feedback types

You can configure Shake to display any number of custom feedback types related to your app.
Shake exposes an internal `FeedbackType` type which is used to encapsulate the properties of your custom category.
Here's an example:

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
List<FeedbackType> feedbackTypes = new ArrayList<>();
feedbackTypes.add(new FeedbackType(R.drawable.ic_hardware, "Hardware issue", "hardware")); // Icon is optional
feedbackTypes.add(new FeedbackType(R.drawable.ic_audio, "Call audio problem", "call_audio"));
feedbackTypes.add(new FeedbackType(R.drawable.ic_files, "File sync issue", "file_sync"));

Shake.getReportConfiguration().setFeedbackTypes(feedbackTypes);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val feedbackTypes = ArrayList<FeedbackType>()
feedbackTypes.add(FeedbackType(R.drawable.ic_hardware, "Hardware issue", "hardware")) // Icon is optional
feedbackTypes.add(FeedbackType(R.drawable.ic_audio, "Call audio problem", "call_audio"))
feedbackTypes.add(FeedbackType(R.drawable.ic_files, "File sync issue", "file_sync"))

Shake.getReportConfiguration().feedbackTypes = feedbackTypes
// highlight-end
```

</TabItem>
</Tabs>

There is no limit to the number of categories you can enter.

Along with the `setFeedbackTypes` method, Shake also exposes the `getFeedbackTypes` method which allows you to 
grab the current set of `FeedbackType` and use them however you like.

As an example, certain parts of your app can have specific features,
so you can have different feedback types for different parts of your app:

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
public void enableVideoCallFeature(String contactID) {
    FeedbackType videoCallCategory = new FeedbackType(R.drawable.ic_hardware, "Hardware issue", "hardware");

    List<FeedbackType> existing = Shake.getReportConfiguration().getFeedbackTypes();
    existing.add(videoCallCategory);

    Shake.getReportConfiguration().setFeedbackTypes(existing);
}
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
fun enableVideoCallFeature(contactID:String) {
    val videoCallCategory = FeedbackType(R.drawable.ic_hardware, "Hardware issue", "hardware")
    
    val existing = Shake.getReportConfiguration().feedbackTypes
    existing.add(videoCallCategory)
    
    Shake.getReportConfiguration().feedbackTypes = existing
}
// highlight-end
```

</TabItem>
</Tabs>

## Disable
If you don't want to force your users to categorize their feedback, simply hide this element:

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
Shake.getReportConfiguration().setFeedbackTypeEnabled(false);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().isFeedbackTypeEnabled = false
// highlight-end
```

</TabItem>
</Tabs>
