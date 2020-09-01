---
id: shopping-retail
title: Shopping and retail
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div class='text--center'>
<img
  alt='Payments'
  src={useBaseUrl('img/docs-payments@2x.png')}
  width='460'
/>
</div>

If you do online shopping, send yourself a list of all user’s orders (or at least their IDs), both previously placed and this last open one, that will provide you with useful context.

In an order send yourself:


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="shopping"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="java">

```java title="App.java"
import com.shakebugs.shake.Shake;

private void onCheckout(Cart cart, User user) {
    @Override 
    void onPurchaseCompleted() {
        Order order = cart.getOrderForUser(user);
        // highlight-start
        Shake.setMetadata("orderId", order.id);
        Shake.setMetadata("orderValue", order.value);
        Shake.setMetadata("userBalance", user.balance);
        Shake.setMetadata("couponApplied", order.couponApplied);
        Shake.setMetadata("merchantId", order.merchantId);
        // highlight-end
        Message.show("Order completed successfully");
    }
    @Override 
    void onPurchaseDeclined(Cart cart, User user) {
        Order order = cart.getOrderForUser(user);
        if(order.value > user.balance) {
            // highlight-start
            Shake.setMetadata("orderId", order.id);
            Shake.setMetadata("orderValue", order.value);
            Shake.setMetadata("userBalance", user.balance);
            // highlight-end
            Message.show("Not enough funds to complete transaction");
        } else {
            Message.show("Unknown error occured, please contact support");
        }
    }
}

```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
import com.shakebugs.shake.Shake;

private void onCheckout(cart: Cart, user: User) {
    @override 
    fun onPurchaseCompleted() {
        val order = cart.getOrderForUser(user);
        // highlight-start
        Shake.setMetadata("orderId", order.id);
        Shake.setMetadata("orderValue", order.value);
        Shake.setMetadata("userBalance", user.balance);
        Shake.setMetadata("couponApplied", order.couponApplied);
        Shake.setMetadata("merchantId", order.merchantId);
        // highlight-end
        Message.show("Order completed successfully");
    }
    @override 
    fun onPurchaseDeclined(cart: Cart, user:User) {
        val order = cart.getOrderForUser(user);
        if(order.value > user.balance) {
            // highlight-start
            Shake.setMetadata("orderId", order.id);
            Shake.setMetadata("orderValue", order.value);
            Shake.setMetadata("userBalance", user.balance);
            // highlight-end
            Message.show("Not enough funds to complete transaction");
        } else {
            Message.show("Unknown error occured, please contact support");
        }
    }
}

```

</TabItem>

<TabItem value="objectivec">

```objectivec title="App.m"
Order *order = [[Order alloc] init];
[order addItems: item1, item2, item3];

// highlight-start
[SHKShake setMetadata:@"orderID" data: [order id]];
[SHKShake setMetadata:@"orderValue" data: [order value]];
[SHKShake setMetadata:@"couponApplied" data: [order couponApplied]];
[SHKShake setMetadata:@"merchantId" data: [order merchantId]];
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
let order = Order()
order.addItems(item1, item2, item3)

// highlight-start
Shake.setMetadata("orderId", order.id);
Shake.setMetadata("orderValue", order.email);
Shake.setMetadata("couponApplied", order.couponApplied);
Shake.setMetadata("merchantId", order.merchantId)
// highlight-end
```

</TabItem>

</Tabs>
