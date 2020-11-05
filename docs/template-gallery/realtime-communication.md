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
            Shake.setMetadata("serverStatusType", "Connected");
            Shake.setMetadata("serverStatusDate", new Date().toString());
            // highlight-end

            Message.show("Server connected");
        }

        @Override
        void onDisconnected(String message) {
            // highlight-start
            Shake.setMetadata("serverStatusType", "Disconnected");
            Shake.setMetadata("serverStatusDate", new Date().toString());
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
            Shake.setMetadata("serverStatusType", "Connected")
            Shake.setMetadata("serverStatusDate", Date().toString())
            // highlight-end
            
            Message.show("Server connected")
        }

        @override
        fun onDisconnected(message: String) {
            // highlight-start
            Shake.setMetadata("serverStatusType", "Disconnected")
            Shake.setMetadata("serverStatusDate", Date().toString())
            // highlight-end
            
            Message.show("Server disconnected")
        }
    })
}
```

</TabItem>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;

- (void)connectToChatServer:(NSString*)username password:(NSString*)password {
    
    [ChatServer connect:username password:password onConnected:^(User *user) {
        // highlight-start
        [SHKShake setMetadata:@"serverStatusType" value: @"Connected"];
        [SHKShake setMetadata:@"serverStatusDate" value: [NSDate date].debugDescription]; // convert to string
        // highlight-end
        
        [[[Messages alloc] init] show:"Server connected"];
        
    } onDisconnected:^(NSString *message) {

        // highlight-start
        [SHKShake setMetadata:@"serverStatusType" value: @"Disconnected"];
        [SHKShake setMetadata:@"serverStatusDate" value: [NSDate date].debugDescription]; // convert to string
        // highlight-end

        [[[Messages alloc] init] show:"Server disconnected"];
    }];
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
import Shake

func connectToChatServer(username: String, password: String) {

    ChatServer.connect(username: username, password: password, onConnected: { (user) in
    
        // highlight-start
        Shake.setMetadata(key: "serverStatusType", value: "Connected")
        Shake.setMetadata(key: "serverStatusDate", value: Date().debugDescription) // convert to string
        // highlight-end
        
        Message.show("Server connected")
        
    }, onDisconnected: { (message) in
        
        // highlight-start
        Shake.setMetadata(key: "serverStatusType", value: "Disconnected")
        Shake.setMetadata(key: "serverStatusDate", value: Date().debugDescription) // convert to string
        // highlight-end

        Message.show("Server disconnected")
    })

}
```

</TabItem>

</Tabs>
