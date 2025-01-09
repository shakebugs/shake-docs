---
id: update-user-metadata
title: Update app user metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Once you have registered your app user, you can attach a map with key-value pairs which contain
additional data about the app user and their behavior.

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/users/update-user-metadata/">iOS</a>&nbsp; 
<a href="/docs/android/users/update-user-metadata/">Android</a>&nbsp;
<a href="/docs/react/users/update-user-metadata/">React Native</a>&nbsp;
<a href="/docs/flutter/users/update-user-metadata/">Flutter</a>&nbsp;  
</p>


Update app user metadata by calling the `Shake.updateUserMetadata` method anywhere in your code
after registering the User.

## Special keys

Values from these two keys will be presented nicely on the Shake dashboard, so we suggest you use them:
* `first_name`
* `last_name`

If you want to [notify your users](/web/users/chat#notifications) about new chat messages by email, provide the following metadata key:
* `email`

## Updates

Updates to the app user metadata are _merged_.
This allows you to update
user metadata in segments from various parts of your app, even when offline.

A common approach developers take is updating **generic** app user metadata from one place in your code upon every app user change

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="login.js"
const onLoggedIn = (user) => {
  // highlight-start
  const metadata = {
    'first_name': user.firstName,
    'last_name': user.lastName,
    'email': user.email,
    'status': user.status,
  }
  Shake.updateUserMetadata(metadata);
  // highlight-end
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="login.ts"
const onLoggedIn = (user: User) => {
  // highlight-start
  const metadata = {
    'first_name': user.firstName,
    'last_name': user.lastName,
    'email': user.email,
    'status': user.status,
  }
  Shake.updateUserMetadata(metadata);
  // highlight-end
}
```

</TabItem>
</Tabs>

and updating **specific** app user metadata in their respective contexts:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="settings.js"
const onUserSettingsChanged = (settings) => {
  // highlight-start
  const metadata = {
    'user_settings': settings.value,
  }
  Shake.updateUserMetadata(metadata);
  // highlight-end
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="settings.ts"
const onUserSettingsChanged = (settings: UserSettings) => {
  // highlight-start
  const metadata = {
    'user_settings': settings.value,
  }
  Shake.updateUserMetadata(metadata);
  // highlight-end
}
```

</TabItem>
</Tabs>

## Limitations

The total map size of the app user metadata must not exceed 50 KB.
If this validation fails, the update method is dropped with the appropriate console message.

## App user metadata vs. Ticket metadata

Track app User metadata to understand and describe your app User better. Examples are:

* First and last name
* App user ID
* Address
* Subscription status
* Date of birth

Use [Ticket metadata](/web/configuration-and-data/ticket-metadata) to attach useful custom data to each ticket. Examples are statuses of various app variables at the moment the ticket is sent:

* Current chat room ID
* List of items currently in a shopping cart
* Task synced true/false
* Number of search results
* List sorted by what
* Video muted true/false
