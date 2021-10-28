---
id: update-user-metadata
title: Update user metadata
---

Once you have _registered_ your application user, you can attach a map with key-value pairs that describe 
additional information about your user, or their application usage.

Updating the user metadata is performed by calling the `Shake.updateUserMetadata` anywhere in your code after registering the user.
:::note
The user metadata map has some limitations, the total map size must not exceed _50 KB_. 
If this validation fails, the update method is dropped with the appropriate console message.
:::
:::tip
Shake Dashboard uses *first_name*, *last_name* and *end_user_id* keys from the user metadata for presentation purposes. 
We recommend using these keys when sending appropriate user metadata to have a nice overview of your users on the Dashboard.
:::
Updates to the user metadata are _incremental_, or perhaps a better way to describe it would be _merged_.

This means that the user metadata key-value pairs are being updated and not overwritten, giving you a possiblity to update
the user metadata in chunks from various points of your application, even when offline.

A common approach would be updating the generic user metadata from one place in your code, upon every user change, and update the specific metadata
in their respective contexts.
```dart title="main.dart"
void onLoggedIn(User user) {
    // highlight-start
    var metadata = <String, String>{
        'first_name': user.getFirstName(),
        'last_name': user.getLastName(),
        'email': user.getEmail(),
        'status': user.getStatus(),
    };
    
    Shake.updateUserMetadata(metadata);
    // highlight-end
}
```
```dart title="main.dart"
void onCartItemAdded() {
    updateTotalPrice();
    // highlight-start
    var metadata = <String, String>{ 'cartItems': cartItems.toString() };
    Shake.updateUserMetadata(metadata);
    // highlight-end
}
void onCartItemsCleared() {
    updateTotalPrice();
    // highlight-start
    var metadata = <String, String>{ 'cartItems': 'empty' };
    Shake.updateUserMetadata(metadata);
    // highlight-end
}
```
