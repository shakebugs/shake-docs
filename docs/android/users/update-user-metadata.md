---
id: update-user-metadata
title: Update user metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Once you have _registered_ your app user, you can attach a map with key-value pairs that describe 
additional information about the user and their behavior.

Updating the user metadata is performed by calling the `Shake.updateUserMetadata` method anywhere in your code
after registering the user.

## Special keys

Shake Dashboard treats these keys with special care:
* *first_name*
* *last_name*
* *end_user_id*

Values from these keys are presented nicely on the Shake dashboard.

## Updates

Updates to the user metadata are _incremental_, or in other words _merged_.
This means that user metadata key-value pairs are updated and not overwritten, giving you a possiblity to update
user metadata in chunks from various points of your app, even when offline.

A common approach would be updating generic user metadata from one place in your code, upon every user change, and updating the specific metadata 
in their respective contexts:

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
    metadata.put("first_name", user.getFirstName());
    metadata.put("last_name", user.getLastName());
    metadata.put("email", user.getEmail());
    metadata.put("status", user.getStatus());

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
    metadata["first_name"] = user.firstName
    metadata["last_name"] = user.lastName
    metadata["email"] = user.email
    metadata["status"] = user.status

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

## Limitations

The total map size of the user metadata must not exceed _50 KB_. 
If this validation fails, the update method is dropped with the appropriate console message.
