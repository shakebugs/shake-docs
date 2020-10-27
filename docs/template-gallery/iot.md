---
id: iot
title: Internet of things
---
import useBaseUrl from '@docusaurus/useBaseUrl';

<div class='text--center'>
<img
  alt='IoT'
  src={useBaseUrl('img/docs-iot@2x.png')}
  width='460'
/>
</div>

If your app uses IoT devices, you might find it useful to attach device data (eg. fw version, bt version, battery status...)


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="iot"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="java">

```java title="AppDelegate.java"
// highlight-next-line
import com.shakebugs.shake.Shake;

private void attachStatusListener() {
    Device device = DevicesManager.getConnectedDevice();
    if (device != null) {
        device.setStatusListener(new StatusListener() {
            @Override
            void onStatusChanged(Status status) {
                // highlight-start
                Shake.setMetadata("batteryLevel", status.getBatteryLevel());
                Shake.setMetadata("firmwareVersion", status.getFirmwareVersion());
                Shake.setMetadata("bluetoothVersion", status.getBluetoothVersion());
                // highlight-end
            }
        }); 
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake

private fun attachStatusListener() {
    val device: Device = DevicesManager.getConnectedDevice();
    if (device != null) {
        device.setStatusListener(object: StatusListener() {
            @override
            fun onStatusChanged(status: Status) {
                // highlight-start
                Shake.setMetadata("batteryLevel", status.batteryLevel)
                Shake.setMetadata("firmwareVersion", status.firmwareVersion)
                Shake.setMetadata("bluetoothVersion", status.bluetoothVersion)
                // highlight-end
            }
        })
    }
}
```

</TabItem>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
@import Shake;

- (void)attachStatusListener {
    DevicesManager* device = [DevicesManager getConnectedDevice];

    if (device) {
    // highlight-start
        [SHKShake setMetadata:@"batteryLevel" value: [status getBatteryLevel]];
        [SHKShake setMetadata:@"firmwareVersion" value:  [status getFirmwareVersion]];
        [SHKShake setMetadata:@"bluetoothVersion" value:  [status getBluetoothVersion]];
    // highlight-end
    }
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
import Shake

func attachStatusListener() {
   
    let device = DevicesManager.getConnectedDevice()
    
    if let device = device {

        device.listen( onStatusChanged: { (status) in
            // highlight-start
            Shake.setMetadata(key: "batteryLevel", value: status.getBatteryLevel())
            Shake.setMetadata(key: "firmwareVersion", value: status.getFirmwareVersion())
            Shake.setMetadata(key: "bluetoothVersion", value: status.getBluetoothVersion())
            // highlight-end            
        })
    }
}
```

</TabItem>

</Tabs>
