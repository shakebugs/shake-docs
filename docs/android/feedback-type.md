---
id: feedback-type
title: Feedback type
---
This SDK option allows your users to categorize their feedback.

## Introduction

When submitting their feedback, your users immediately categorize it as either a bug report, an improvement suggestion, or just a question.

Depending on their choice, you automatically receive the <span class="tag-button pink-tag-button">bug</span>, <span class="tag-button pink-tag-button">suggestion</span> or <span class="tag-button pink-tag-button">question</span> tag next to their ticket in your [Shake Dashboard](https://app.shakebugs.com). This way, you can filter and browse them efficiently!

## Custom types

You can configure Shake to display any number of custom categories related to your product.

Shake exposes an internal *FeedbackType* type which is used to encapsulate the properties of your custom category.

The snippet below showcases an example usage of the feature. 

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
feedbackTypes.add(new FeedbackType(R.drawable.ic_hardware, "Hardware issue", "hardware"));
feedbackTypes.add(new FeedbackType(R.drawable.ic_audio, "Call audio problem", "call_audio"));
feedbackTypes.add(new FeedbackType(R.drawable.ic_files, "File sync issue", "file_sync"));

Shake.getReportConfiguration().setFeedbackTypes(feedbackTypes);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val feedbackTypes = ArrayList()
feedbackTypes.add(FeedbackType(R.drawable.ic_hardware, "Hardware issue", "hardware"))
feedbackTypes.add(FeedbackType(R.drawable.ic_audio, "Call audio problem", "call_audio"))
feedbackTypes.add(FeedbackType(R.drawable.ic_files, "File sync issue", "file_sync"))

Shake.getReportConfiguration().setFeedbackTypes(feedbackTypes)
// highlight-end
```

</TabItem>
</Tabs>

There is no limit to the number of categories you can enter.

Along with *setFeedbackTypes* method, Shake also exposes the *getFeedbackTypes* method which allows you to 
grab the current set of *FeedbackType* and use them how you like.

Common use case is that some portions of your application can "unlock" certain features, so you can have different feedback types for different "parts" of 
your application. This enables you to , in a sense, "follow" your application context and filter out the possible issues on the SDK itself.

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
    
    val existing = Shake.getReportConfiguration().getFeedbackTypes()
    existing.add(videoCallCategory)
    
    Shake.getReportConfiguration().setFeedbackTypes(existing)
}
// highlight-end
```

</TabItem>
</Tabs>

## Disabling
If you don’t want your users to have to categorize their feedback, simply hide this option using the following method:

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

On your Shake Dashboard, all these tickets won't have any specific type (and tag).
