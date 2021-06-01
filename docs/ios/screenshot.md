---
id: screenshot
title: Description and screenshot
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers the most obvious content pieces found in every bug report sent to the
 web Dashboard — bug description and the screenshot.

## Introduction
User's screenshot and their brief description of what's happened are 2 most common pieces of
data developers receive with Shake SDK, and you will find this data at the top of your [Dashboard](https://app.shakebugs.com):

<img
  alt="Bug screen"
  src={useBaseUrl('screens/bug_screen.png')}
/>


## User drawing on the screenshot
When users shake their phone and the SDK pops up, they are encouraged to additionally mark a
spot on the screenshot that seems odd to them.

## Excluding the screenshot from a report

Shake provides you with an option to exclude the automatic screenshot from reports.  

For example, you are manually invoking Shake through the code in the settings screen of your app, but this 
screen is not associated with the feedback in any way, nor will it show the screenshot of the issue.

Once Shake is invoked, users can always manually attach a screenshot that better describes the feedback context.

You can exclude an automatic screenshot from reports using the following snippet:

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

```objc title="AppDelegate.m"
//highlight-next-line
SHKShake.configuration.isScreenshotIncluded = false;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-next-line
Shake.configuration.isScreenshotIncluded = false
```

</TabItem>
</Tabs>

## Adding tags to a bug
If at the very end of a bug description user *#adds #some #hashtags*,
those will automatically become <span class="tag-button pink-tag-button">tags</span> in your [Shake Dashboard](https://app.shakebugs.com/).
