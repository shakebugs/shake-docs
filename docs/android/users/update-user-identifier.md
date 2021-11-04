---
id: update-user-identifier
title: Update user identifier
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Shake exposes a public method that allows you to update the user identifier you used to register your user in the first place.
In the most standard application flows, this is a method that is not called very often.

An example would be if you have registered your user with the email, which is something that the user can change later on and still continue using your service as the same entity.

Calling `Shake.updateUserId` on an already registered user would update the user identifier in the Shake database and this would / should become the new identifier 
you continue to pass on `Shake.registerUser` on subsequent logins of the same user.

:::caution
This action of updating the user identifier opens up several possibilities of how this feature can be used, but can also lead to some possibly unwanted 
results. Make sure to read the following sections to better understand the possible usages and scenarios.
:::

The code snippet below showcases a common context in which the user identifier is updated. The snippet assumes that the user was previously
registered with the email.

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
