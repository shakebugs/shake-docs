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

```javascript title="App.js"
// highlight-start
const feedbackType1 = new FeedbackType('Hardware issue', 'hardware', 'ic_hardware'); // Icon is optional
const feedbackType2 = new FeedbackType('Call audio problem', 'call_audio', 'ic_call_audio');
const feedbackType3 = new FeedbackType('File sync issue', 'file_sync', 'ic_file_sync');

Shake.setFeedbackTypes([feedbackType1, feedbackType2, feedbackType3]);
// highlight-end
```

There is no limit to the number of categories you can enter.

Along with the `setFeedbackTypes` method, Shake also exposes the `getFeedbackTypes` method which allows you to 
grab the current set of `FeedbackType` and use them however you like.

As an example, certain parts of your app can have specific features,
so you can have different feedback types for different parts of your app:

```javascript title="App.js"
// highlight-start
const enableVideoCallFeature = async contactId => {
    const videoCallCategory = new FeedbackType('Hardware issue', 'hardware', 'ic_hardware');

    const existing = await Shake.getFeedbackTypes();
    existing.push(videoCallCategory);

    Shake.setFeedbackTypes(existing);
}
// highlight-end
```

## Disable
If you don't want to force your users to categorize their feedback, simply hide this element:

```javascript title="App.js"
// highlight-next-line
Shake.setFeedbackTypeEnabled(false);
```

