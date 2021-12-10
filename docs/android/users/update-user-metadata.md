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
after registering the user.

## Special keys

Values from these three keys will be presented nicely on Shake dashboard so we suggest you use them:
* `first_name`
* `last_name`
* `end_user_id`


## Updates

Updates to the user metadata are _incremental_, or in other words _merged_.
This means that user metadata key-value pairs are updated and not overwritten, allowing you to update
user metadata in segments from various parts of your app, even when offline.

A common approach developers take is updating **generic** user metadata from one place in your code upon every user change

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

and updating **specific** user metadata in their respective contexts:

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