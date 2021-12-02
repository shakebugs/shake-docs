---
id: email
title: Email
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>The Email field is an element of the SDK [New ticket screen](android/screens/new-ticket-screen.md) screen. It's optional and allows your users to leave their email address with the ticket they're submitting.

## Hide the *Email* field
Use the following method if you don't want to show this field in the SDK:

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
// highlight-next-line
Shake.getReportConfiguration().setEnableEmailField(false);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().isEnableEmailField = false
```

</TabItem>
</Tabs>

## Pre-fill the field
Use the following method to save your users some time by pre-filling the field with their email address:

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
// highlight-next-line
Shake.getReportConfiguration().setEmailField("user@email.com");
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().emailField = "user@email.com"
```

</TabItem>
</Tabs>

Two tips:
* Users can always edit email, even if you pre-fill it
* Do you want to always receive user's email? You should then *both* pre-fill and hide the Email field.

## Users and tickets as indepentent entities

The value you receive in the Email field is just an attribute of that ticket, a simple **string**.

To register a user as an independent unique **entity** which Shake automatically relates to all tickets they submit,
register your users with the [Users](android/users/introduction.md) module.