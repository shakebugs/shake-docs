---
id: update-user-metadata
title: Update user metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
