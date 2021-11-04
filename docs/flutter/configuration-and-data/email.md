---
id: email
title: Email
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The *Email* field is part of the SDK [New ticket](flutter/screens/new-ticket-screen.md) screen. It's optional and allows your users to leave their email address with the report they're submitting.

## Hide the *Email* field
Use the following method if you don't want to show this field in the SDK:

```dart title="main.dart"
// highlight-next-line
Shake.setEnableEmailField(false);
```

## Pre-fill the *Email* field
Use the following method to save your users some time by pre-filling the field with their email address (users can always edit or delete that email if they want to):

```dart title="main.dart"
// highlight-next-line
Shake.setEmailField('user@email.com');
```

:::note

Do you want to make sure you *always* receive user's email with a report? You should then *both* pre-fill and hide the Email field.

:::
