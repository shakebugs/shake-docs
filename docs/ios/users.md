---
id: users
title: Users
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This feature enables you to register the users of your application with Shake, which results in a powerful
connection between the specific user of your app, and the rest of the Shake features.

## User registration

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
            Shake.registerUser(userId: userEmail);
            
            /**
            Or even better,
            Shake.registerUserWithUserId(userResponse.internalUserIdentifier)
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


## Unregister user

Unregistering a user should be done when your user decides to _log out_ and perhaps use your application as a _guest_, or when you no longer 
want the subsequent reports to be associated with the current user.

Unregistering is done by calling the `Shake.unregisterUser` method.


<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="UserManager.m"
@implementation UserManager

- (void)logOut { 

    __weak typeof (SettingsViewModel) *weakSelf = self;

    [self.networkService performLogOutWithEmail:self.currentUser.email completion:^(LogOutResponse _Nullable logOutResponse, NSError * _Nullable error) {

        if (logOutResponse) {

            /// Succesfull log out

            [weakSelf performLogOutCleanup];
            
            // highlight-next-line
            [Shake unregisterUser];

            return;
        }
     
    }];
}
@end
```

</TabItem><TabItem value="swift">

```swift title="NetworkService.swift"
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
</TabItem></Tabs>


## Updating user metadata

Once you have _registered_ your application user, you can attach a single level dictionary with key-value pairs that describe 
additional information about your user, or their application usage.

Updating the user metadata is performed by calling the `Shake.updateUserMetadata` anywhere in your code after registering the user.

:::note

The user metadata dictionary has its limitations: It supports a maximum of 100 keys, it doesn't allow nested dictionaries, and the total 
dictionary size when serialized to _Data_ can't exceed _50 KB_. 
If this validation fails, the update method is dropped with the appropriate console message.

:::

:::tip

For presentation purposes, Shake dashboard is using *first_name* and *last_name* keys from the user metadata.
We recommend using those keys when sending metadata, this will allow you to easier manage your users on the dashboard.

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
    Shake.updateUserMetadata([self userInfoDictionary]);
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

    func userInfoDictionary() -> Dictionary { 
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
    Shake.updateUserMetadata(@{
        @"cartItems": cartItems.description
    });
    //highlight-end
}

- (void)didClearAllCartItems {

    /// Cart was cleared

    //highlight-start
    Shake.updateUserMetadata(@{
        @"cartItems": @"empty"
    });
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


## Updating user identifier

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
            Shake.updateUserId(newEmail);

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


## Advanced usage

Some apps might perhaps want to register the device itself as a user, or make a transition from the anonymous
user to the _Signed Up_ user. This section covers these cases.


### Anonymous user

Think of the app like _Reddit_. Users can browse the app as guests for months, and then finally decide to _Sign Up_ and create an 
account. The user is now registered, but all the previous reports from the time they were anonymous are now tied to them.

The `Shake.updateUserId` method can be used to perform this transition. When the user is browsing your app in the anonymous mode, you can register them with Shake using a randomly 
generated UUID persisted in the app sandbox. This identifier would uniquely identify the device your still-anonymous user uses.

Once the user decides to _Sign Up_, instead of registering with the `Shake.registerUser` method, use the `Shake.updateUserId` method to perform a __transition__, 
associating the once-anonymous user metadata and information with the real user.

Be careful though, we recommend performing this transition only in one direction, and that is Anonymous → Identified. The other way around could potentially lead to
undesired results, linking the identified data back to the now-anonymous user (device).


### Device as a user

Similar to the anonymous flow, this approach also registers the device with an identifier while the user is in the _guest_ mode. 

Back onto the _Reddit_ example. While the user is in the guest mode, you would call `Shake.registerUser` with the `deviceIdentifier`.

Once the user decides to _Sign Up_, you wouldn't perform a transition, but would just call `Shake.registerUser` with the new user identifier and treat the newly signed-up user as a separate
entity.

If the user decides to delete the account or _Log Out_ , instead of just calling `Shake.unregisterUser` you would do a switch back to the device, by calling 
`Shake.registerUser` with the `deviceIdentifier` again.