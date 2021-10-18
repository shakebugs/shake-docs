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

```dart title="main.dart"
// highlight-start
var feedbackType1 = FeedbackType('Hardware issue', 'hardware', 'ic_hardware'); // Icon is optional
var feedbackType2 = FeedbackType('Call audio problem', 'call_audio', 'ic_call_audio');
var feedbackType3 = FeedbackType('File sync issue', 'file_sync', 'ic_file_sync');

Shake.setFeedbackTypes([feedbackType1, feedbackType2, feedbackType3]);
// highlight-end
```

:::note

Icons should be added in the native project with the name specified in the code. 
For Android, add icons under the *android/app/src/main/res/drawable* directory, for 
iOS add icons through the *XCode* to the *Assets.xcassets* directory.

:::

There is no limit to the number of categories you can enter.

Along with *setFeedbackTypes* method, Shake also exposes the *getFeedbackTypes* method which allows you to 
grab the current set of *FeedbackType* and use them how you like.

Common use case is that some portions of your application can "unlock" certain features, so you can have different feedback types for different "parts" of 
your application. This enables you to , in a sense, "follow" your application context and filter out the possible issues on the SDK itself.

```dart title="main.dart"
// highlight-start
void enableVideoCallFeature(String contactId) async {
    var videoCallCategory = new FeedbackType('Hardware issue', 'hardware', 'ic_hardware');

    List<FeedbackType> existing = await Shake.getFeedbackTypes();
    existing.add(videoCallCategory);

    Shake.setFeedbackTypes(existing);
}
// highlight-end
```

:::note

On iOS, *Shake.getFeedbackTypes* method will return empty string for *FeedbackType* icon.
You'll have to manually set icon if you are using this method.

:::

## Disabling
If you don’t want your users to have to categorize their feedback, simply hide this option using the following method:

```dart title="main.dart"
// highlight-next-line
Shake.setEnableMultipleFeedbackTypes(false);
```

On your Shake Dashboard, all these tickets won't have any specific type (and tag).
