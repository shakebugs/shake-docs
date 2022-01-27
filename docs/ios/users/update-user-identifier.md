---
id: update-user-identifier
title: Update user identifier
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>You can update the user identifier you had used to register the user. In most app flows, this is a method that's rarely called.

For example, suppose that you have registered your user with an email.
The user would be able to subsequently change their email in app settings and still continue using your service as the same entity.

Calling `Shake.updateUserId` on an already registered user:
1. Updates the user identifier in the Shake database.
1. It becomes the new user identifier.
1. You continue to pass this new user identifier to `Shake.registerUser` on this user's subsequent logins.

:::caution
Updating the user identifier allows various possibilities for how this feature can be used
but can also lead to possibly unwanted results.
Read the documentation carefully to fully understand possible usages and scenarios.
:::

The code snippet below showcases a common scenario in which the user identifier is updated.
It's assumed that the user was previously registered with an email:

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

- (void)didChangeEmail:(NSString *)newEmail {

    __weak typeof (SettingsViewModel) *weakSelf = self;

    [self.networkService updateUserEmail:newEmail completion:^(User _Nullable user, NSError * _Nullable error) {
    
        if (user && error == nil) {

            weakSelf.currentUser = user;

            // highlight-next-line
            [SHKShake updateUserId:newEmail];
        }
    }];
}
@end
```

</TabItem>

<TabItem value="swift">

```swift title="UserManager.swift"
func didChangeEmail(newEmail: String) {

    self.networkService.updateUserEmail(email: newEmail) { [weak self] user in

        if user {

            self?.currentUser = user;

            // highlight-next-line
            Shake.updateUserId(newEmail);

            return;
        }
    }
}
```

</TabItem>
</Tabs>
