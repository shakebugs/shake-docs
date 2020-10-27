---
id: email
title: Email
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The *Email* field is part of the SDK *Wrap-up* screen. It's optional and allows your users to leave their email address with the report they're submitting.

## Hide the *Email* field
Use the following method if you don't want to show this field in the SDK:

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
SHKShake.configuration.isEmailFieldEnabled = true;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
Shake.configuration.isEmailFieldEnabled = true
```

</TabItem>
</Tabs>

## Pre-fill the *Email* field
Use the following method to save your users some time by pre-filling the field with their email address (users can always edit or delete that email if they want to):

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
SHKShake.configuration.emailField = @"user@email.com";
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
Shake.configuration.emailField = "user@email.com"
```

</TabItem>
</Tabs>

:::note

Do you want to make sure you *always* receive user's email with a report? You should then *both* pre-fill and hide the Email field.

:::
