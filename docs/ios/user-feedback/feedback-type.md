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
Shake exposes an internal `SHKFeedbackType` type which is used to encapsulate the properties of your custom category.
Here's an example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-start
SHKFeedbackEntry *hardwareCategory = [SHKFeedbackEntry entryWithTitle:@"Hardware issue" andTag:@"hardware" icon:nil]; /// Icon is optional
SHKFeedbackEntry *callCategory = [SHKFeedbackEntry entryWithTitle:@"Call audio problem" andTag:@"call_audio" icon:nil];
SHKFeedbackEntry *syncCategory = [SHKFeedbackEntry entryWithTitle:@"File sync issue" andTag:@"file_sync" icon:nil];

[SHKShake setFeedbackTypes:@[hardwareCategory, callCategory, syncCategory]];
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-start
let hardwareCategory = SHKFeedbackEntry(title: "Hardware issue", andTag: "hardware", icon: hardwareIssueIcon) /// Icon is optional
let callCategory = SHKFeedbackEntry(title: "Call audio problem", andTag: "call_audio", icon: nil)
let syncCategory = SHKFeedbackEntry(title: "File sync issue", andTag: "file_sync", icon: nil)

Shake.setFeedbackTypes([hardwareCategory, callCategory, syncCategory])
// highlight-end
```

</TabItem>
</Tabs>

There is no limit to the number of categories you can enter.

Along with the `setFeedbackTypes` method, Shake also exposes the `getFeedbackTypes` method which allows you to 
grab the current set of `SHKFeedbackType` and use them however you like.

As an example, certain parts of your app can have specific features,
so you can have different feedback types for different parts of your app:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="NetworkService.m"
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

## Disable
If you don't want to force your users to categorize their feedback, simply hide this element:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
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

