---
id: update-user-metadata
title: Update user metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Once you have registered your app user, you can attach a map with key-value pairs which contain
additional data about the user and their behavior.

Update user metadata by calling the `Shake.updateUserMetadata` method anywhere in your code
after registering the User.

## Special keys

Values from these three keys will be presented nicely on the Shake dashboard, so we suggest you use them:
* `first_name`
* `last_name`
* `end_user_id`


## Updates

Updates to the user metadata are _merged_.
This allows you to update
user metadata in segments from various parts of your app, even when offline.

A common approach developers take is updating **generic** user metadata from one place in your code upon every user change

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```swift title="LoginActivity.m"
@implementation UserManager
(void)didLoginWithUserResponse:(UserResponse *)userResponse {
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

</TabItem>

<TabItem value="swift">

```swift title="LoginActivity.swift"
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
    };
}
```

</TabItem>
</Tabs>

and updating **specific** user metadata in their respective contexts:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>


<TabItem value="objectivec">

```java title="UserSettingsActivity.m"
@implementation CartViewModel

- (void)didAddItemWithItemId:(NSString *)itemId {
  /// Item was added to cart operations
  NSArray<CartItem *> *cartItems = [self currentCartItems];
  //highlight-start 
  [SHKShake updateUserMetadata:@{ @"cartItems": cartItems.description 
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

</TabItem>

<TabItem value="swift">

```swift title="UserSettingsActivity.swift"
func onUserSettingsConfigured() {
    fetchUserInformation()

    let metadata: MutableMap<String, String> = HashMap()
    metadata["userSettings"] = userSettings.toString()

        //highlight-start
    Shake.updateUserMetadata(metadata)
    //highlight-end
}
```

</TabItem>
</Tabs>

## Limitations

The total map size of the user metadata must not exceed 50 KB.
The user metadata dictionary also supports a maximum of 100 keys and doesn't allow nested dictionaries.

If any of these validations fail, the update method is dropped with the appropriate console message.

## User metadata vs. Ticket metadata

Track User metadata to understand and describe your User better. Examples are:

* First and last name
* User ID
* Address
* Subscription status
* Date of birth

Use [Ticket metadata](/ios/configuration-and-data/ticket-metadata) to attach useful custom data to each ticket. Examples are statuses of various app variables at the moment the ticket is sent:

* Current chat room ID
* List of items currently in a shopping cart
* Task synced true/false
* Number of search results
* List sorted by what
* Video muted true/false