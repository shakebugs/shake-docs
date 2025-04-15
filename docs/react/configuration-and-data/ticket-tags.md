---
id: ticket-tags
title: Ticket tags
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Sometimes you'll want to tag your tickets for easier management and organization on the dashboard.
There are three different options you can use to add tags to the tickets.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/ticket-tags/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/ticket-tags/">Android</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/ticket-tags/">Flutter</a>&nbsp;  
<a href="/docs/web/configuration-and-data/ticket-tags/">Web</a>&nbsp;
</p>


## Adding tags from the code

To add tags to a ticket from the code, simply set a list of tags to the tags property of the Shake configuration.

Here's an example how you can add a <span class="tag-button green-tag-button">tag</span> to the ticket:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
Shake.setTags(['tag']);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.setTags(['tag']);
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

Learn more about [Shake form picker element](/react/configuration-and-data/custom-forms#picker).


