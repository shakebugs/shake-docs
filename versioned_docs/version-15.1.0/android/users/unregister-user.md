---
id: unregister-user
title: Unregister user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Unregistering a user should be done when your user decides to _log out_ and perhaps use your application as a _guest_, or when you no longer 
want the subsequent reports to be associated with the current user.

Unregistering is done by calling the `Shake.unregisterUser` method.

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
private void logOut() {
    networkService.performLogOut(email, new LogOutListener() {
        @Override
        void onLogOutSucceeded() {
            // highlight-next-line
            Shake.unregisterUser();

            handleLogOut();        
        }

        @Override
        void onLogOutFailed(String message) {
            // Handle failed log out     
        }
    });
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="SettingsActivity.kt"
private fun logOut() {
    networkService.performLogOut(email, object: LogOutListener() {
        @override
        fun onLogOutSucceeded() {
            // highlight-next-line
            Shake.unregisterUser()

            handleLogOut()  
        }

        @override
        fun onLogOutFailed(message: String) {
            // Handle failed log out
        }
    })
}
```

</TabItem>
</Tabs>
