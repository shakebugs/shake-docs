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
        void onMerchantSelected(merchantId: int) {
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

```objectivec title="AppDelegate.m"
@import Shake;

- (void)setupMerchantPicker {
    MerchantPicker* merchantPicker = (MerchantPicker*)[self.window.rootViewController.view viewWithTag: MerchantPickerTagId];
    
    [merchantPicker listen:^(NSInteger merchantId) {
        // highlight-start
        [SHKShake setMetadata:@"selectedMerchant" value: merchantId];
        // highlight-end
        
        [self setSelectedMerchant:merchantId];
    }];
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
import Shake

func setupMerchantPicker() {
   
    if let merchantPicker = self.window.rootViewController.view.viewWithTag(MerchantPickerTagId) as? MerchantPicker {

        merchantPicker.listen( onMerchantSelected: { (merchantId) in
            // highlight-start
            Shake.setMetadata(key: "selectedMerchant", value: merchantId)
            // highlight-end
            
            setSelectedMerchant(merchantId);
        })
    }
}
```

</TabItem>

</Tabs>
