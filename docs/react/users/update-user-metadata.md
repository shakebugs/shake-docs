---
id: update-user-metadata
title: Update app user metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Once you have registered your app user, you can attach a map with key-value pairs which contain
additional data about the app user and their behavior.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/users/update-user-metadata/">iOS</a>&nbsp; 
<a href="/docs/android/users/update-user-metadata/">Android</a>&nbsp;
<a href="/docs/flutter/users/update-user-metadata/">Flutter</a>&nbsp;  
<a href="/docs/web/users/update-user-metadata/">Web</a>&nbsp;
</p>


Update app user metadata by calling the `Shake.updateUserMetadata` method anywhere in your code
after registering the app User.

## Special keys

Values from these two keys will be presented nicely on the Shake dashboard, so we suggest you use them:
* `first_name`
* `last_name`

## Updates

Updates to the app user metadata are _merged_.
This allows you to update
user metadata in segments from various parts of your app, even when offline.

A common approach developers take is updating **generic** app user metadata from one place in your code upon every app user change

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
const onLoggedIn = (user) => {
    // highlight-start
    const metadata = {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        status: user.status
    };

    Shake.updateUserMetadata(metadata);
    // highlight-end
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
const onLoggedIn = (user: User) => {
    // highlight-start
    const metadata: { [key: string]: string } = {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        status: user.status
    };

    Shake.updateUserMetadata(metadata);
    // highlight-end
}
```

</TabItem>
</Tabs>

and updating **specific** app user metadata in their respective contexts:

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
const onUserSettingsConfigured = (userSettings) => {
    fetchUserInformation();

    // highlight-start
    const metadata = {
        userSettings: userSettings.toString()
    };
    Shake.updateUserMetadata(metadata);
    // highlight-end
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
const onUserSettingsConfigured = (userSettings: UserSettings) => {
    fetchUserInformation();

    // highlight-start
    const metadata: { [key: string]: string } = {
        userSettings: userSettings.toString()
    };
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

Use [Ticket metadata](/react/configuration-and-data/ticket-metadata) to attach useful custom data to each ticket. Examples are statuses of various app variables at the moment the ticket is sent:

* Current chat room ID
* List of items currently in a shopping cart
* Task synced true/false
* Number of search results
* List sorted by what
* Video muted true/false

