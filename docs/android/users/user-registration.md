---
id: user-registration
title: Register user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Register your app users with Shake by calling the `Shake.registerUser` method.

The passed _user identifier_ argument should ideally reflect the identifier that uniquely represents the user
in your database.

Shake's public method is intentionally
called _register_ and not _logIn_ because user identification contexts vary across apps.

Most apps communicate with their backend through the network layer
which performs the URL request and asynchronously receives a callback with the request result.
That callback's body is a common place where developers call the `Shake.registerUser` method,
but maybe your context is different.
Make sure to call this method at the place where it fits your app's flow perfectly.

IMAGE OF A RANDOM SIGN IN SCREEN + ILLUSTRATION

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