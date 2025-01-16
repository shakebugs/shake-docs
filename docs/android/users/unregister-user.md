---
id: unregister-user
title: Unregister app user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Unregistering an app user should be done when your app user decides to _log out_ and use your app as a _guest_ or when you no longer 
want the subsequent tickets to be associated with the current app user.

<p class="p2 mt-40">You're viewing the Android docs. Other platforms →&nbsp;
<a href="/docs/ios/users/unregister-user/">iOS</a>&nbsp;
<a href="/docs/react/users/unregister-user/">React Native</a>&nbsp;
<a href="/docs/flutter/users/unregister-user/">Flutter</a>&nbsp;
<a href="/docs/web/users/unregister-user/">Web</a>&nbsp;
</p>

Unregistering is done by calling the `Shake.unregisterUser` method:

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
