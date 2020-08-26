---
id: shopping-retail
title: Shopping and retail
---

## Shopping

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
  alt="Payments"
  src={useBaseUrl('img/docs-payments@2x.png')}
/>

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
    { label: 'Objective-C', value: 'objc'},
    { label: 'Swift', value: 'swift'},
    { label: 'Javascript', value: 'javascript'},
    { label: 'Dart', value: 'dart'},
  ]
}>

<TabItem value="java">

```java title="App.java"
Order order = new Order();
order.addItems(item1, item2, item3);

// highlight-start
Shake.setMetadata("orderId", order.id);
Shake.setMetadata("orderValue", order.value);
Shake.setMetadata("couponApplied", order.couponApplied);
Shake.setMetadata("merchantId", order.merchantId);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
val order = Order()
order.addItems(item1, item2, item3)

// highlight-start
Shake.setMetadata("orderId", order.id);
Shake.setMetadata("orderValue", order.value);
Shake.setMetadata("couponApplied", order.couponApplied);
Shake.setMetadata("merchantId", order.merchantId);
// highlight-end
```

</TabItem>

<TabItem value="objc">

```objc title="App.m"
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

<TabItem value="javascript">

```javascript title="App.js"
let order = Order();
order.addItems(item1, item2, item3)

// highlight-start
Shake.setMetadata("orderId", order.id);
Shake.setMetadata("orderValue", order.value);
Shake.setMetadata("couponApplied", order.couponApplied);
Shake.setMetadata("merchantId", order.merchantId);
// highlight-end

```

</TabItem>

<TabItem value="dart">

```dart title="App.dart
Order order = new Order();
order.addItems(item1, item2, item3);

// highlight-start
Shake.setMetadata("orderId", order.id);
Shake.setMetadata("orderValue", order.value);
Shake.setMetadata("couponApplied", order.couponApplied);
Shake.setMetadata("merchantId", order.merchantId);
// highlight-end
```

</TabItem>

</Tabs>

## Retail

If your app is used in retail environments, send yourself:

<Tabs
  groupId="retail"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
    { label: 'Objective-C', value: 'objc'},
    { label: 'Swift', value: 'swift'},
    { label: 'Javascript', value: 'javascript'},
    { label: 'Dart', value: 'dart'},
  ]
}>

<TabItem value="java">

```java title="App.java"
Order order = new Order();
order.addItems(item1, item2, item3);

// highlight-start
Shake.setMetadata("merchant", order.merchant);
Shake.setMetadata("salespointId", order.salespointId);
Shake.setMetadata("deviceId", device.id);
Shake.setMetadata("merchantId", order.merchantId);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
val order = Order()
order.addItems(item1, item2, item3)

// highlight-start
Shake.setMetadata("merchant", order.merchant);
Shake.setMetadata("salespointId", order.salespointId);
Shake.setMetadata("devideId", device.id);
Shake.setMetadata("merchantId", order.merchantId);
// highlight-end
```

</TabItem>

<TabItem value="objc">

```objc title="App.m"
Order *order = [[Order alloc] init];
[order addItems: item1, item2, item3];

// highlight-start
[SHKShake setMetadata:@"merchant" data: [order merchant]];
[SHKShake setMetadata:@"salespointId" data: [order salespointId]];
[SHKShake setMetadata:@"deviceID" data: [device id]];
[SHKShake setMetadata:@"merchantId" data: [order merchantId]];
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
let order = Order()
order.addItems(item1, item2, item3)

// highlight-start
Shake.setMetadata("merchant", order.merchant);
Shake.setMetadata("salespointId", order.salespointId);
Shake.setMetadata("deviceId", device.id);
Shake.setMetadata("merchantId", order.merchantId);
// highlight-end
```

</TabItem>

<TabItem value="javascript">

```javascript title="App.js"
let order = Order();
order.addItems(item1, item2, item3)

// highlight-start
Shake.setMetadata("merchant", order.merchant);
Shake.setMetadata("salespointId", order.salespointId);
Shake.setMetadata("deviceId", device.id);
Shake.setMetadata("merchantId", order.merchantId);
// highlight-end

```

</TabItem>

<TabItem value="dart">

```dart title="App.dart
Order order = new Order();
order.addItems(item1, item2, item3);

// highlight-start
Shake.setMetadata("merchant", order.merchant);
Shake.setMetadata("salespointId", order.salespointId);
Shake.setMetadata("deviceId", device.id);
Shake.setMetadata("merchantId", order.merchantId);
// highlight-end
```

</TabItem>

</Tabs>