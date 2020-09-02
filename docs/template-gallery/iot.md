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

```java title="App.java"
// highlight-next-line
import com.shakebugs.shake.Shake;

private void attachStatusListener(Device device) {
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
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake

private fun attachStatusListener(device: Device) {
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
```

</TabItem>

<TabItem value="objectivec">

```objectivec title="App.m"
NSMutableArray *connectedDevices = [getConnectedDevices];
for(Device *device in connectedDevices) {
// highlight-start
    [SHKShake setMetadata:@"firmwareVersion" data: [device getFirmwareVersion]];
    [SHKShake setMetadata:@"bluetoothVersion" data: [device getBluetoothVersion]];
    [SHKShake setMetadata:@"batteryStatus" data: [device getBatteryStatus]];
// highlight-end
} 
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
let connectedDevices = getConnectedDevices()
for device in connectedDevices {
// highlight-start
    Shake.setMetadata("firmwareVersion", device.getFirmwareVersion());
    Shake.setMetadata("bluetoothVersion", device.getBluetoothVersion());
    Shake.setMetadata("batteryStatus", device.getBatteryStatus());
// highlight-end
}
```

</TabItem>

</Tabs>
