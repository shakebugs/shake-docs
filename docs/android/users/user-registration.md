---
id: user-registration
title: Register user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Your app user can be registered with Shake by calling the `Shake.registerUser` method.

The passed _user identifier_ argument should ideally reflect the identifier that uniquely represents the user
in your database.

The example below shows registering users in a most common login flow. However, Shake's public method is intentionally
called _register_ and not _logIn_ because contexts of user identification vary across apps.

Most apps communicate with their backend through the network layer
which performs the URL request and asynchronously receives a callback with the request result.

Successful registration request callback's body is a usual place where you would call the `Shake.registerUser` method,
but not every context can be described in this documentation.
Make sure to call the method at the place where it best fits your app's flow.

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
private void logInUser(String email, String password) {
    networkService.performLogin(email, password, new LoginListener() {
        @Override
        void onLoginSucceeded(User user) {
            // highlight-next-line
            Shake.registerUser(user.getId());

            handleLogin(user);        
        }

        @Override
        void onLoginFailed(String message) {
            // Handle failed login     
        }
    });
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="LoginActivity.kt"
private fun logInUser(email: String, password: String) {
    networkService.performLogin(email, password, object: LoginListener() {
        @override
        fun onLoginSucceeded(user: User) {
            // highlight-next-line
            Shake.registerUser(user.id)

            handleLogin(user)
        }

        @override
        fun onLoginFailed(message: String) {
            // Handle failed login
        }
    })
}
```

</TabItem>
</Tabs>

:::note

All user-related Shake operations on a registered user are fully supported when your app is offline too, and will sync with the Shake servers later.

:::
