---
id: new-ticket-screen-elements
title: New ticket screen elements
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Here are all the element customizations you can make on the [New ticket screen](/ios/shake-ui/new-ticket-screen.md).


## Ticket description

<table class="media-container media-container-highlighted mt-40 mb-40 pt-80">
<img
  alt="Ticket description field"
  width="380"
  src={useBaseUrl('img/element-description@2x.png')}
/>
</table>

Your users describe their tickets here. This is a mandatory element and can't be hidden.

Here's a tip that quality assurance teams often find helpful. If *#some #hashtags* are added anywhere in the description,
they will automatically become <span class="tag-button pink-tag-button">tags</span> on your [Shake dashboard](https://app.shakebugs.com/).


## Email field

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Email field"
  width="380"
  src={useBaseUrl('img/element-email@2x.png')}
/>
</table>

This element is optional and allows your users to leave their email address with the ticket they're submitting.
Use the following method if you want to hide it:

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
//highlight-start 
SHKShake.configuration.isEmailFieldEnabled = true;
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isEmailFieldEnabled = true
//highlight-end
```

</TabItem>
</Tabs>

Or, use the following method to save your users some time by pre-filling the field with their email address:

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
//highlight-start 
SHKShake.configuration.emailField = @"user@email.com";
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.emailField = "user@email.com"
//highlight-end
```

</TabItem>
</Tabs>

Three tips:
* Users can always edit the email field, even if you pre-fill it.
* Do you always want to receive a user's email? You should then *both* pre-fill and hide the email field.
* The value you receive in the email field is just an attribute of that ticket, a simple **String**. To register a User as an unique **entity** which Shake automatically relates to all Tickets they submit, register your users with the [Users](/ios/users/overview.md) module.

## Inspect button

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Inspect button"
  width="380"
  src={useBaseUrl('img/element-inspect@2x.png')}
/>
</table>

By default, this element is visible to your users. Tapping it takes them to the [Inspect screen](/ios/shake-ui/inspect-screen).
If you want to, hide it using the following method:

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
SHKShake.configuration.isInspectScreenEnabled = false;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.isInspectScreenEnabled = false
```

</TabItem>
</Tabs>
