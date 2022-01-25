---
id: unregister-user
title: Unregister user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Unregistering a user should be done when your user decides to _log out_ and use your app as a _guest_ or when you no longer 
want the subsequent tickets to be associated with the current user.

Unregistering is done by calling the `Shake.unregisterUser` method:

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

- (void)logOut {

    __weak typeof (SettingsViewModel) *weakSelf = self;
    
    [self.networkService performLogOutWithEmail:self.currentUser.email completion:^(LogOutResponse _Nullable logOutResponse, NSError * _Nullable error) {
    
        if (logOutResponse) {

            /// Succesfull log out

            [weakSelf performLogOutCleanup];

            // highlight-next-line
            [SHKShake unregisterUser];

            return;
        }
    }];
}
@end
```

</TabItem>

<TabItem value="swift">

```swift title="UserManager.swift"
func logOut {

    self.networkService.performLogOut(email: email) { [weak self] logOutResponse in

        if logOutResponse {

            self?.performLogOutCleanup();

            // highlight-next-line
            Shake.unregisterUser();

            return;
        }
    }
}
```

</TabItem>
</Tabs>
