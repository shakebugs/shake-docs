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
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="UserManager.m"
@implementation UserManager

- (void)logInUser:(NSString )userEmail password:(NSString *)password {

    __weak typeof (LogInViewModel) *weakSelf = self;
    
    [self.networkService performLogInWithEmail:userEmail password:password completion:^(UserResponse _Nullable userResponse, NSError * _Nullable error) {
    
        if (userResponse) {
        /// Succesfull log in flow

            // highlight-next-line
            [SHKShake registerUserWithUserId:userEmail];

            /**
            Or even better,
            [SHKShake registerUserWithUserId:userResponse.internalUserIdentifier];
            */

            [weakSelf didLoginWithUserResponse:userResponse];

            return;
        }

        /// Log in failed flow
        
    }];
} 
@end
```

</TabItem>

<TabItem value="swift">

```swift title="UserManager.swift"
func logInUser(email: String, password: String) {

    self.networkService.performLogin(email: email, password: password) { [weak self] userResponse in

        if userResponse {

            // highlight-next-line
            Shake.registerUser(userId: email)

            self?.didLogin(userResponse: userResponse)

            /**
            Or even better,
            Shake.registerUser(userId: userResponse.internalUserIdentifier)
            */

            return;
        }
        /// Handle failed login
    }
}
```

</TabItem>
</Tabs>

:::note

Keep in mind that if your app is already published, some users will be already logged in into the app.
To handle this case, we recommend calling `Shake.registerUser` method also on the first screen app shows.
Registered user is stored locally and this method won't send registration request if it not needed.

:::note
