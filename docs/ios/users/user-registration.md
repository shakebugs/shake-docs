---
id: user-registration
title: User registration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

User of your application can be registered with Shake by calling the `registerUser` method. The passed _user identifier_ argument
should, ideally, reflect or be a derivation of the identifier that uniquely represents the user in your database or system.

The example below showcases the user registration in a way that most apps can "relate to", and that is the usual "login flow". 

However, the Shake public method is intentionally called _register_ and not _logIn_ because there are different situations and contexts in which the 
user identification works just as good.

Most applications will communicate with their backend through some form of the network layer which performs the URL request and asynchronously
receives a callback with the request result.

Body of your successful registration request callback is the usual place where `registerUser` method would be called, but every context cannot be described
in this documentation so make sure the method is called at the place where it best fits your application flow.


<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="UserManager.m"
@implementation UserManager

- (void)logInUser:(NSString *)userEmail password:(NSString *)password { 

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

</TabItem><TabItem value="swift">

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
</TabItem></Tabs>

:::note

All user related Shake operations on a registered user are fully supported when your application is __offline__ too, and will sync with the Shake servers later.

:::
