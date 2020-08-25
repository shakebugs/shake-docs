---
id: iot
title: IoT
---

If your app uses IoT devices, you might find it useful to attach device data (eg. fw version, bt version, battery status...)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="iot"
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
List<Device> connectedDevices = getConnectedDevices();
for(Device device : connectedDevices) { 
// highlight-start
    Shake.setMetadata("firmwareVersion", device.getFirmwareVersion());
    Shake.setMetadata("bluetoothVersion", device.getBluetoothVersion());
    Shake.setMetadata("batteryStatus", device.getBatteryStatus());
// highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
val connectedDevices = listOf(getConnectedDevices())
for(device in connectedDevices) {
// highlight-start
    Shake.setMetadata("firmwareVersion", device.getFirmwareVersion())
    Shake.setMetadata("bluetoothVersion", device.getBluetoothVersion())
    Shake.setMetadata("batteryStatus", device.getBatteryStatus())
// highlight-end
}
```

</TabItem>

<TabItem value="objc">

```objc title="App.m"
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

<TabItem value="javascript">

```javascript title="App.js"
let connectedDevices = getConnectedDevices()
for(var device in connectedDevices) {
// highlight-start
    Shake.setMetadata("firmwareVersion", device.getFirmwareVersion());
    Shake.setMetadata("bluetoothVersion", device.getBluetoothVersion());
    Shake.setMetadata("batteryStatus", device.getBatteryStatus());
// highlight-end
}
```

</TabItem>

<TabItem value="dart">

```dart title="App.dart"
List<Device> connectedDevices = getConnectedDevices();
for(device in connectedDevices) { 
// highlight-start
    Shake.setMetadata("firmwareVersion", device.getFirmwareVersion());
    Shake.setMetadata("bluetoothVersion", device.getBluetoothVersion());
    Shake.setMetadata("batteryStatus", device.getBatteryStatus());
// highlight-end
}
```

</TabItem>

</Tabs>