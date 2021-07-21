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

User of your application can be registered with Shake by calling the `Shake.registerUser` method. The passed _user identifier_ argument
should, ideally, reflect or be a derivation of the identifier that uniquely represents the user in your database or system.

The example below showcases the user registration in a way that most apps can "relate to", and that is the usual "login flow". 

However, the Shake public method is intentionally called _register_ and not _logIn_ because there are different situations and contexts in which the 
user identification works just as good.

Most applications will communicate with their backend through some form of the network layer which performs the URL request and asynchronously
receives a callback with the request result.

Body of your successful registration request callback is the usual place where `Shake.registerUser` method would be called, but every context cannot be described
in this documentation so make sure the method is called at the place where it best fits your application flow.

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="LoginActivity.java"
private void logInUser(String email, String password) {
    networkService.performLogin(email, password, new LoginListener() {
        @Override
        void onLoginSucceeded(User user) {
            // highlight-next-line
            Shake.registerUser(user.getId());

            handleLogin(user);        
        }

        @Override
        void onLoginFailed(String message) {
            // Handle failed login     
        }
    });
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="LoginActivity.kt"
private fun logInUser(email: String, password: String) {
    networkService.performLogin(email, password, object: LoginListener() {
        @override
        fun onLoginSucceeded(user: User) {
            // highlight-next-line
            Shake.registerUser(user.id)

            handleLogin(user)
        }

        @override
        fun onLoginFailed(message: String) {
            // Handle failed login
        }
    })
}
```

</TabItem>
</Tabs>

:::info

All user related Shake operations on a registered user are fully supported when your application is __offline__ and syncs with the Shake servers later.

:::


## Unregister user

Unregistering a user should be done when your user decides to _log out_ and perhaps use your application as a _guest_, or when you no longer 
want the subsequent reports to be associated with the current user.

Unregistering is done by calling the `Shake.unregisterUser` method.

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="SettingsActivity.java"
private void logOut() {
    networkService.performLogOut(email, new LogOutListener() {
        @Override
        void onLogOutSucceeded() {
            // highlight-next-line
            Shake.unregisterUser();

            handleLogOut();        
        }

        @Override
        void onLogOutFailed(String message) {
            // Handle failed log out     
        }
    });
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="SettingsActivity.kt"
private fun logOut() {
    networkService.performLogOut(email, object: LogOutListener() {
        @override
        fun onLogOutSucceeded() {
            // highlight-next-line
            Shake.unregisterUser()

            handleLogOut()  
        }

        @override
        fun onLogOutFailed(message: String) {
            // Handle failed log out
        }
    })
}
```

</TabItem>
</Tabs>

## Updating user metadata

Once you _registered_ your application user, you can attach a map with key value pairs that describe 
additional information about your user, or his application usage.

Updating metadata is performed by calling the `Shake.updateUserMetadata` anywhere in your code after registering the user.

:::note

Metadata map has some limitations, the total map size must not exceed _50 Kb_. 
If this validation fails, the update method is dropped with the appropriate console message.

:::

Updates to the user metadata are _incremental_, or perhaps a better way to describe it would be _merged_.

This means that metadata key value pairs are being updated and not overwritten, giving you a possiblity to update
the user metadata in chunks from various points of your application, even when offline.

A common approach would be updating the generic user metadata from one place in your code, upon every user change, and update the specific metadata
in their respective contexts.

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="LoginActivity.java"
private void onLoggedIn(User user) {
    // highlight-start
    Map<String, String> metadata = new HashMap<>();
    metadata.put("name", user.getName());
    metadata.put("email", user.getEmail());
    metadata.put("status", user.getStatus());
    metadata.put("activeGroups", user.getGroups());

    Shake.updateUserMetadata(metadata);
    // highlight-end              
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="LoginActivity.kt"
private fun onLoggedIn(user: User) {
    // highlight-start
    val metadata: MutableMap<String, String> = HashMap()
    metadata["name"] = user.name
    metadata["email"] = user.email
    metadata["status"] = user.status
    metadata["activeGroups"] = user.groups

    Shake.updateUserMetadata(metadata)
    // highlight-end              
}
```

</TabItem>
</Tabs>

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="CartActivity.java"
private void onCartItemAdded() {
    updateTotalPrice();

    // highlight-start
    Map<String, String> metadata = new HashMap<>();
    metadata.put("cartItems", cartItems.toString());

    Shake.updateUserMetadata(metadata);
    // highlight-end
}

private void onCartItemsCleared() {
    updateTotalPrice();
    
    // highlight-start
    Map<String, String> metadata = new HashMap<>();
    metadata.put("cartItems", "empty");

    Shake.updateUserMetadata(metadata);
    // highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="CartActivity.kt"
private fun onCartItemAdded() {
    updateTotalPrice()

    // highlight-start
    val metadata: MutableMap<String, String> = HashMap()
    metadata["cartItems"] = cartItems.toString()
    
    Shake.updateUserMetadata(metadata)
    // highlight-end
}

private fun onCartItemsCleared() {
    updateTotalPrice()

    // highlight-start
    val metadata: MutableMap<String, String> = HashMap()
    metadata["cartItems"] = "empty"
    
    Shake.updateUserMetadata(metadata)
    // highlight-end
}
```

</TabItem>
</Tabs>


## Updating user identifier

Shake exposes a public method that allows you to update the user identifier you used to register your user in the first place.
In the most standard application flows, this is a method that is not called very often.

One example would be that you registered your user with the email, which is something that user can change later and still continue 
using your service as the same entity.

Calling `Shake.updateUserId` on an already registered user would update the user identifier in the Shake database and this would / should become the new identifier 
you continue to pass on `Shake.registerUser` on subsequent logins of the same user.

:::caution
This action of updating the user identifier opens up several possibilities of how this feature can be used, but can also lead to some possibly unwanted 
results. Make sure to read the following sections to better understand the possible usages and scenarios.
:::

Bellow snippet showcases a common context in which the user identifier is updated. The snippet assumes that the user was previously
registered with the email.

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="SettingsActivity.java"
private void changeEmail(String email) {
    networkService.updateUserEmail(email, new UpdateListener() {
        @Override
        void onUpdateSucceeded(User user) {
            // highlight-next-line
            Shake.updateUserId(user.getEmail());     

            handleEmailChange(user);   
        }

        @Override
        void onUpdateFailed(String message) {
            // Handle failed update   
        }
    });
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="SettingsActivity.kt"
private fun changeEmail(email: String) {
    networkService.updateUserEmail(email, object: UpdateListener() {
        @override
        fun onUpdateSucceeded(user: User) {
            // highlight-next-line
            Shake.updateUserId(user.email) 

            handleEmailChange(user) 
        }

        @override
        fun onUpdateFailed(message: String) {
            // Handle failed update
        }
    })
}
```

</TabItem>
</Tabs>

## Advanced usage

Some apps will benefit from perhaps registering the device itself as a user, or make a transition from the anonymous
user to the _Signed Up_ user. This section covers these cases.


### Anonymous user

Think of the applications like _Reddit_. Users can browse the application as guests for months, and then finally decide to _Sign Up_ and create an 
account. The user is now registered, but all the previous reports are tied to the same user, just at the time he was anonymous.

The `Shake.updateUserId` method can be used to perform this transition. When user is browsing your app in the anonymous mode, you can 
register the user with Shake using some random generated UUID persisted in the app storage. This identifier would uniquely identify the 
device your still anonymous user is using.

Once the user decides to _Sign Up_, instead of registering with the `Shake.registerUser` method, use the `Shake.updateUserId` method to perform a __transition__, associating
the once anonymous metadata and information with the real user.

Be careful however, we recommend performing this transition in only one direction, and that is __Anonymous › Identified__, the other way around could potentially lead to
undesired results, linking the identified data back to the now anonymous user (device).


### Device as a user

Similar to the anonymous flow, this approach also registers the device with some identifier while user is in the _guest_ mode. 

So back to the _Reddit_ example. While user is in the guest mode, you would call `Shake.registerUser` with the `deviceIdentifier`.

Once the user decides to _Sign Up_, you wouldn't perform a transition, but would just call `Shake.registerUser` with the new user identifier and treat the newly signed up user as a separate
entity.

If the user decides to delete the account or _Log Out_ , instead of just calling `Shake.unregisterUser` you would do a switch back to the device, by calling 
`Shake.registerUser` with the `deviceIdentifier` again.
