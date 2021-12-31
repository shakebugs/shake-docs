---
id: update-user-identifier
title: Update user identifier
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>You can update the user identifier you had used to register the user. In most app flows, this is a method that's rarely called.

For example, suppose that you have registered your user with an email.
The user would be able to subsequently change their email in app settings and still continue using your service as the same entity.

Calling `Shake.updateUserId` on an already registered user:
1. Updates the user identifier in the Shake database.
1. It becomes the new user identifier.
1. You continue to pass this new user identifier to `Shake.registerUser` on this user's subsequent logins.

:::caution
Updating the user identifier allows various possibilities for how this feature can be used
but can also lead to possibly unwanted results.
Read the documentation carefully to fully understand possible usages and scenarios.
:::

The code snippet below showcases a common scenario in which the user identifier is updated.
It's assumed that the user was previously registered with an email:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="SettingsActivity.java"
private void changeEmail(String email) {
    networkService.updateUserEmail(email, new UpdateListener() {
        @Override
        void onUpdateSucceeded(User user) {
            // highlight-next-line
            Shake.updateUserId(user.getEmail());     

            handleEmailChange(user);   
        }

        @Override
        void onUpdateFailed(String message) {
            // Handle failed update   
        }
    });
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="SettingsActivity.kt"
private fun changeEmail(email: String) {
    networkService.updateUserEmail(email, object: UpdateListener() {
        @override
        fun onUpdateSucceeded(user: User) {
            // highlight-next-line
            Shake.updateUserId(user.email) 

            handleEmailChange(user) 
        }

        @override
        fun onUpdateFailed(message: String) {
            // Handle failed update
        }
    })
}
```

</TabItem>
</Tabs>
