---
id: register-user
title: Register user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Register your app users with Shake by calling the `Shake.registerUser` method.

The passed _user identifier_ argument should ideally reflect the identifier that uniquely represents the user in your database.
Often it is the user's email address, but it may be their User ID, or their device's UUID.
Shake's public method is intentionally
called _register_ and not _logIn_ because user identification context is different in different apps.

Most apps communicate with their backend through the network layer
which performs the URL request and asynchronously receives a callback with the request result.
That callback's body is a common place where developers call the `Shake.registerUser` method,
but maybe your context is different.
Make sure to call this method at the place where it fits your app's flow perfectly.

<table class="media-container mt-50">
<img
  alt="An example of registering a User with Shake"
  width="520"
  src={useBaseUrl('screens/register-user-flow.svg')}
/>
</table>
<p class="p2 center-align mb-50">A common case is to register users from your app's Login screen</p>

```dart title="main.dart"
void logInUser(String email, String password) {
    networkService.performLogin(email, password,
        (User user) {
            // highlight-next-line
            Shake.registerUser(user.getId());
            
            handleLogin(user);   
        }, 
        (String message) {
            // Handle failed login   
        });
}
```
