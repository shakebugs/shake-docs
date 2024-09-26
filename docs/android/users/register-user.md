---
id: register-user
title: Register app user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Register your app users with Shake by calling the `Shake.registerUser` method.

The passed _user identifier_ argument should ideally reflect the identifier that uniquely represents the app user in your database.
Often it is the app user's email address, but it may be their app User ID, or their device's UUID.
Shake's public method is intentionally
called _register_ and not _logIn_ because app user identification context is different in different apps.

Most apps communicate with their backend through the network layer
which performs the URL request and asynchronously receives a callback with the request result.
That callback's body is a common place where developers call the `Shake.registerUser` method,
but maybe your context is different.
Make sure to call this method at the place where it fits your app's flow perfectly.

<table class="media-container mt-50">
<img
  alt="An example of registering an app User with Shake"
  width="520"
  src={useBaseUrl('screens/register-user-flow.svg')}
/>
</table>
<p class="p2 center-align mb-50">A common case is to register app users from your app's Login screen</p>

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

Keep in mind that if your app is already published, some users will be already logged in into the app.
To handle this case, we recommend calling `Shake.registerUser` method also on the first screen app shows.
Registered user is stored locally and this method won't send registration request if it not needed.

:::note
