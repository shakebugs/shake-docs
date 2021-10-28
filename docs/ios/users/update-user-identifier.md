---
id: update-user-identifier
title: Update user identifier
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Shake exposes a public method that allows you to update the user identifier you used to register your user in the first place.
In the most standard application flows, this is a method that is not called very often.

An example would be if you have registered your user with the email, which is something that the user can change later on and still continue using your service as the same entity.

Calling `Shake.updateUserId` on an already registered user would update the user identifier in the Shake database and this would / should become the new identifier 
you continue to pass on `Shake.registerUser` on subsequent logins of the same user.

:::caution
This action of updating the user identifier opens up several possibilities of how this feature can be used, but can also lead to some possibly unwanted 
results. Make sure to read the following sections to better understand the possible usages and scenarios.
:::

The code snippet below showcases a common context in which the user identifier is updated. The snippet assumes that the user was previously
registered with the email.


<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

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

</TabItem><TabItem value="swift">

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
</TabItem></Tabs>
