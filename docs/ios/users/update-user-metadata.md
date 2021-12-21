---
id: update-user-metadata
title: Update user metadata
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once you have _registered_ your application user, you can attach a single level dictionary with key-value pairs that describe 
additional information about your user, or their application usage.

Updating the user metadata is performed by calling the `Shake.updateUserMetadata` anywhere in your code after registering the user.

:::note

The user metadata dictionary has its limitations: It supports a maximum of 100 keys, it doesn't allow nested dictionaries, and the total 
dictionary size when serialized to _Data_ can't exceed _50 KB_. 
If this validation fails, the update method is dropped with the appropriate console message.

:::

:::tip

Shake Dashboard uses *first_name* and *last_name* keys from the user metadata for presentation purposes. 
We recommend using these keys when sending appropriate user metadata to have a nice overview of your users on the Dashboard.

:::

Updates to the user metadata are _incremental_, or perhaps a better way to describe it would be _merged_.

This means that the user metadata key-value pairs are being updated and not overwritten, giving you a possiblity to update
the user metadata in chunks from various points of your application, even when offline.

A common approach would be updating the generic user metadata from one place in your code, upon every user change, and update the specific metadata
in their respective contexts.


<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="UserManager.m"
@implementation UserManager

- (void)didLoginWithUserResponse:(UserResponse *)userResponse {

    /// Some post log in operations
    // highlight-next-line
    [SHKShake updateUserMetadata:[self userInfoDictionary]];
}

- (nonnull NSDictionary *)userInfoDictionary { 
    return @{
        @"first_name": self.currentUser.firstName,
        @"last_name": self.currentUser.lastName,
        @"email": self.currentUser.email,
        @"status": self.currentUser.status,
    }
}

@end
```

</TabItem><TabItem value="swift">

```swift title="UserManager.swift"
class UserManager {

    func didLogin(response: UserResponse) {
        /// Some post log in operations
        // highlight-next-line
        Shake.updateUserMetadata(self.userInfoDictionary());
    }

    func userInfoDictionary() -> Dictionary<String, Any> {
        return [
            "first_name": self.currentUser.firstName,
            "last_name": self.currentUser.lastName,
            "email": self.currentUser.email,
            "status": self.currentUser.status,
        ]
    }
}
```
</TabItem></Tabs>

<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="CartViewModel.m"
@implementation CartViewModel

- (void)didAddItemWithItemId:(NSString *)itemId {

    /// Item was added to cart operations

    NSArray<CartItem *> *cartItems = [self currentCartItems];

    //highlight-start
    [SHKShake updateUserMetadata:@{
        @"cartItems": cartItems.description
    }];
    //highlight-end
}

- (void)didClearAllCartItems {

    /// Cart was cleared

    //highlight-start
    [SHKShake updateUserMetadata:@{
        @"cartItems": @"empty"
    }];
    //highlight-end
}
@end
```

</TabItem><TabItem value="swift">

```swift title="CartViewModel.swift"

class CartViewModel {

    func didAddItem(itemId: String) {
        /// Item was added to cart operations
        let cartItems = self.currentCartItems();
        
        //highlight-start
        Shake.updateUserMetadata([
            "cartItems": cartItems.description
        });
         //highlight-end
    }

    func didClearAllCartItems() {

        /// Cart was cleared

        //highlight-start
        Shake.updateUserMetadata([
            "cartItems": "empty"
        ]);
        //highlight-end
    }
}
```
</TabItem></Tabs>
