---
id: ticket-tags
title: Ticket tags
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Sometimes you'll want to tag your tickets for easier management and organization on the dashboard.
There are three different options you can use to add tags to the tickets.

<p class="p2 mt-40">You're viewing the iOS docs. Other platforms → &nbsp;
<a href="/docs/android/configuration-and-data/ticket-tags/">Android</a>&nbsp;
<a href="/docs/react/configuration-and-data/ticket-tags/">React Native</a>&nbsp; 
<a href="/docs/flutter/configuration-and-data/ticket-tags/">Flutter</a>&nbsp;  
<a href="/docs/web/configuration-and-data/ticket-tags/">Web</a>&nbsp;
</p>


## Adding tags from the code

To add tags to a ticket from the code, simply set a list of tags to the tags property of the Shake configuration.

Here's an example how you can add a <span class="tag-button green-tag-button">tag</span> to the ticket:

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
SHKShake.configuration.tags = @[@"tag"];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.tags = ["tag"]
```

</TabItem>
</Tabs>

## Adding tags using the ticket title

Use ticket title to add tags to the ticket.

Shake automatically identifies and converts any *#some #hashtags* found in the title of your tickets into the tags.

They will automatically become <span class="tag-button pink-tag-button">tags</span> on your [Shake dashboard](https://app.shakebugs.com/).

## Adding tags using the form picker

Use form picker to add tags to the ticket.

Depending on the picker item selected by the user, Shake will automatically add defined <span class="tag-button blue-tag-button">tag</span> to the ticket.

Learn more about [Shake form picker element](/ios/configuration-and-data/custom-forms#picker).
