---
id: realtime-communication
title: Realtime communication
---
import useBaseUrl from '@docusaurus/useBaseUrl';

<div class='text--center'>
<img
  alt='Realtime communication'
  src={useBaseUrl('img/docs-realtime-communication@2x.png')}
  width='460'
/>
</div>

If your app has a chat module (group, 1-on-1, video, audio, text), there’s a ton of useful data that you can attach automatically and would come in handy later when you try to debug the problem.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="rtc"
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

private void connectToChatServer(String username, String password) {
    ChatServer.connect(username, password, new ServerListener() {
        @Override
        void onConnected(User user) {
            // highlight-start
            Shake.setMetadata("userId", user.getId());
            Shake.setMetadata("isChatEnabled", String.valueOf(user.isChatEnabled()));
            Shake.setMetadata("isVideoEnabled", String.valueOf(user.isVideoEnabled()));
            Shake.setMetadata("serverStatusType", "Connected");
            Shake.setMetadata("serverStatusDate", getCurrentDate());
            // highlight-end

            Message.show("Server connected");
        }

        @Override
        void onDisconnected(String message) {
            // highlight-start
            Shake.setMetadata("userId", "");
            Shake.setMetadata("isChatEnabled", "");
            Shake.setMetadata("isVideoEnabled", "");
            Shake.setMetadata("serverStatusType", "Disconnected");
            Shake.setMetadata("serverStatusDate", getCurrentDate());
            // highlight-end

            Message.show("Server disconnected");
        }
    });   
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake

private fun connectToChatServer(username: String, password: String) {
    ChatServer.connect(username, password, object: ServerListener() {
        @override
        fun onConnected(user: User) {
            // highlight-start
            Shake.setMetadata("userId", user.id)
            Shake.setMetadata("isChatEnabled", user.isChatEnabled.toString())
            Shake.setMetadata("isVideoEnabled", user.isVideoEnabled.toString())
            Shake.setMetadata("serverStatusType", "Connected")
            Shake.setMetadata("serverStatusDate", getCurrentDate())
            // highlight-end
            
            Message.show("Server connected")
        }

        @override
        fun onDisconnected(message: String) {
            // highlight-start
            Shake.setMetadata("userId", "")
            Shake.setMetadata("isChatEnabled", "")
            Shake.setMetadata("isVideoEnabled", "")
            Shake.setMetadata("serverStatusType", "Disconnected")
            Shake.setMetadata("serverStatusDate", getCurrentDate())
            // highlight-end
            
            Message.show("Server disconnected")
        }
    })
}
```

</TabItem>

<TabItem value="objectivec">

```objectivec title="App.m"
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

</Tabs>
