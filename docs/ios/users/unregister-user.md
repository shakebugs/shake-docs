---
id: unregister-user
title: Unregister app user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Unregistering an app user should be done when your app user decides to _log out_ and use your app as a _guest_ or when you no longer 
want the subsequent tickets to be associated with the current app user.

<p class="p2 mt-40">You're viewing the iOS docs. Other platforms → &nbsp;
<a href="/docs/android/users/unregister-user/">Android</a>&nbsp;
<a href="/docs/react/users/unregister-user/">React Native</a>&nbsp; 
<a href="/docs/flutter/users/unregister-user/">Flutter</a>&nbsp;  
<a href="/docs/web/users/unregister-user/">Web</a>&nbsp;
</p>


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
