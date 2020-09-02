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

If you do online shopping, send yourself a selected merchant id, that will provide you with useful context.

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
// highlight-next-line
import com.shakebugs.shake.Shake;

private void setupMerchantPicker() {
    MerchantPicker merchantPicker = (MerchantPicker) findViewById(R.id.merchant_picker);
    merchantPicker.setListener(new PickerListener() {
        @Override
        void onMerchantSelected(int merchantId) {
            // highlight-next-line
            Shake.setMetadata("selectedMerchant", merchantId);

            setSelectedMerchant(merchantId);
        }
    });
}
```
</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake

private fun setupMerchantPicker() {
    merchantPicker.setListener(object: PickerListener() {
        @override
        fun onMerchantSelected(int merchantId) {
            // highlight-next-line
            Shake.setMetadata("selectedMerchant", merchantId)

            setSelectedMerchant(merchantId)
        }
    });
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
