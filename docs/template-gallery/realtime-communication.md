---
id: realtime-communication
title: Realtime communication
---

If your app has a chat module (group, 1-on-1, video, audio, text), there’s a ton of useful data that you can attach automatically and would come in handy later when you try to debug the problem.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="rtc"
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
String serverURL = getServerURL();
User user = getCurrentUser();
PhoneNumber phoneNumber = user.getPhoneNumber();
boolean isServerAvailable = getServerStatus();
// highlight-start

Shake.setMetadata("serverURL", serverURL);
Shake.setMetadata("phoneNumber", phoneNumber);
Shake.setMetadata("serverStatus", isServerAvailable);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
val serverURL: String = getServerURL()
val user: User = getCurrentUser()
val phoneNumber: PhoneNumber = user.getPhoneNumber()
val isServerAvailable: Boolean = getServerStatus()
// highlight-start

Shake.setMetadata("serverURL", serverURL);
Shake.setMetadata("phoneNumber", phoneNumber);
Shake.setMetadata("serverStatus", isServerAvailable);
// highlight-end
```

</TabItem>

<TabItem value="objc">

```objc title="App.m"
NSString *serverURL = [getServerURL];
User *user = [User getCurrentUser];
PhoneNumber *phoneNumber = [user getPhoneNumber];
BOOL isServerAvailable = [getServerStatus];
// highlight-start

[SHKShake setMetadata:@"serverURL" data: serverURL];
[SHKShake setMetadata:@"phoneNumber" data: phoneNumber];
[SHKShake setMetadata:@"serverStatus" data: isServerAvailable];
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
let serverURL = getServerURL()
let user = getCurrentUser()
let phoneNumber = user.getPhoneNumber()
let isServerAvailable = getServerStatus()
// highlight-start

Shake.setMetadata("serverURL", serverURL);
Shake.setMetadata("phoneNumber", phoneNumber);
Shake.setMetadata("serverStatus", isServerAvailable);
// highlight-end
```

</TabItem>

<TabItem value="javascript">

```javascript title="App.js"
let serverURL = getServerURL()
let user = getCurrentUser()
let phoneNumber = user.phoneNumber()
let isServerAvailable = getServerStatus()
// highlight-start
    
Shake.setMetadata("serverURL", serverURL);
Shake.setMetadata("phoneNumber", phoneNumber);
Shake.setMetadata("serverStatus", isServerAvailable);
// highlight-end
```

</TabItem>

<TabItem value="dart">

```dart title="App.dart"
var serverURL = getServerURL();
User user = getCurrentUser();
PhoneNumber phoneNumber = user.getPhoneNumber();
var isServerAvailable = getServerStatus();
// highlight-start
Shake.setMetadata("serverURL", serverURL);
Shake.setMetadata("phoneNumber", phoneNumber);
Shake.setMetadata("serverStatus", isServerAvailable);
// highlight-end
```

</TabItem>

</Tabs>