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

Shake exposes an internal *SHKFeedbackEntry* type which is used to encapsulate the properties of your custom category.

The snippet below showcases an example usage of the feature. 

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
SHKFeedbackEntry *hardwareCategory = [SHKFeedbackEntry entryWithTitle:@"Hardware issue" andTag:@"hardware" icon:nil];
SHKFeedbackEntry *callCategory = [SHKFeedbackEntry entryWithTitle:@"Call audio problem" andTag:@"call_audio" icon:nil];
SHKFeedbackEntry *syncCategory = [SHKFeedbackEntry entryWithTitle:@"File sync issue" andTag:@"file_sync" icon:nil];

[SHKShake setFeedbackTypes:@[hardwareCategory, callCategory, syncCategory]];  
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-start
let hardwareCategory = SHKFeedbackEntry(title: "Hardware issue", andTag: "hardware", icon: hardwareIssueIcon)
let callCategory = SHKFeedbackEntry(title: "Call audio problem", andTag: "call_audio", icon: nil)
let syncCategory = SHKFeedbackEntry(title: "File sync issue", andTag: "file_sync", icon: nil)

Shake.setFeedbackTypes([hardwareCategory, callCategory, syncCategory])
// highlight-end
```

</TabItem>

</Tabs>

There is no limit to the number of categories you can enter.

Along with *setFeedbackTypes* method, Shake also exposes the *getFeedbackTypes* method which allows you to 
grab the current set of *SHKFeedbackEntry* and use them how you like.

Common use case is that some portions of your application can "unlock" certain features, so you can have different feedback types for different "parts" of 
your application. This enables you to , in a sense, "follow" your application context and filter out the possible issues on the SDK itself.

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
  { label: 'Objective-C', value: 'objc'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objc">

```objc title="NetworkService.m"
// highlight-start
- (void)enableVideoCallFeature:(NSString *)contactId {

    SHKFeedbackEntry *videoCallCategory = [SHKFeedbackEntry entryWithTitle:@"Video Call" andTag:@"video_call" icon:nil];

    NSMutableArray<SHKFeedbackEntry *> *existing = [SHKShake getFeedbackTypes].mutableCopy;

    [existing addObject:videoCallCategory];

    [SHKShake setFeedbackTypes:existing];

}
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="NetworkService.swift"
// highlight-start  
  func enableVideoCallFeature(contactID: String) {

      let videoCallCategory = SHKFeedbackEntry(title: "Video Call", andTag: "video_call", icon: nil)

      var existing = Shake.getFeedbackTypes()

      existing.append(videoCallCategory)

      Shake.setFeedbackTypes(existing)
  }
// highlight-end
```

</TabItem>

</Tabs>

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
