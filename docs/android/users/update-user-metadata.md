---
id: update-user-metadata
title: Update user metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Once you have registered your app user, you can attach a map with key-value pairs which contain
additional data about the user and their behavior.

Update user metadata by calling the `Shake.updateUserMetadata` method anywhere in your code
after registering the User.

## Special keys

Values from these three keys will be presented nicely on the Shake dashboard, so we suggest you use them:
* `first_name`
* `last_name`
* `end_user_id`


## Updates

Updates to the user metadata are _merged_.
This allows you to update
user metadata in segments from various parts of your app, even when offline.

A common approach developers take is updating **generic** user metadata from one place in your code upon every user change

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="LoginActivity.java"
private void onLoggedIn(User user) {
    // highlight-start
    Map<String, String> metadata = new HashMap<>();
    metadata.put("first_name", user.getFirstName());
    metadata.put("last_name", user.getLastName());
    metadata.put("email", user.getEmail());
    metadata.put("status", user.getStatus());

    Shake.updateUserMetadata(metadata);
    // highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="LoginActivity.kt"
private fun onLoggedIn(user: User) {
    // highlight-start
    val metadata: MutableMap<String, String> = HashMap()
    metadata["first_name"] = user.firstName
    metadata["last_name"] = user.lastName
    metadata["email"] = user.email
    metadata["status"] = user.status

    Shake.updateUserMetadata(metadata)
    // highlight-end
}
```

</TabItem>
</Tabs>

and updating **specific** user metadata in their respective contexts:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>


<TabItem value="java">

```java title="UserSettingsActivity.java"
private void onUserSettingsConfigured(UserSettings userSettings) {
    fetchUserInformation();

    // highlight-start
    Map<String, String> metadata = new HashMap<>();
    metadata.put("userSettings", userSettings.toString());

    Shake.updateUserMetadata(metadata);
    // highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="UserSettingsActivity.kt"
private fun onUserSettingsConfigured(userSettings: UserSettings) {
    fetchUserInformation()

    // highlight-start
    val metadata: MutableMap<String, String> = HashMap()
    metadata["userSettings"] = userSettings.toString()
    
    Shake.updateUserMetadata(metadata)
    // highlight-end
}
```

</TabItem>
</Tabs>

## Limitations

The total map size of the user metadata must not exceed 50 KB.
If this validation fails, the update method is dropped with the appropriate console message.

## User metadata vs. Ticket metadata

Track User metadata to understand and describe your User better. Examples are:

* First and last name
* User ID
* Address
* Subscription status
* Date of birth

Use [Ticket metadata](/android/configuration-and-data/ticket-metadata) to attach useful custom data to each ticket. Examples are statuses of various app variables at the moment the ticket is sent:

* Current chat room ID
* List of items currently in a shopping cart
* Task synced true/false
* Number of search results
* List sorted by what
* Video muted true/false