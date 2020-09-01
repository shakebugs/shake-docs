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

private void connectDevice(Device device) {
    BluetoothManager.connect(new ConnectionListener() {
        @Override
        void onConnectionSucceeded(Details details) {
            // highlight-start
            Shake.setMetadata("batteryLevel", details.getBatteryLevel());
            Shake.setMetadata("firmwareVersion", details.getFirmwareVersion());
            Shake.setMetadata("bluetoothVersion", details.getBluetoothVersion());
            // highlight-end

            Message.show("Connection succeeded");
        }

        @Override
        void onConnectionFailed(String message) {
            Message.show("Connection failed");
        }
    });   
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake

private fun connectDevice(device: Device) {
    BluetoothManager.connect(object: ConnectionListener() {
        @override
        fun onConnectionSucceeded(details: Details) {
            // highlight-start
            Shake.setMetadata("batteryLevel", details.batteryLevel)
            Shake.setMetadata("firmwareVersion", details.firmwareVersion)
            Shake.setMetadata("bluetoothVersion", details.bluetoothVersion)
            // highlight-end
            
            Message.show("Connection succeeded")
        }

        @override
        fun onConnectionFailed(message: String) {
            Message.show("Connection failed")
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
