---
id: chat
title: Chat
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>If needed, your app users can [chat with you](/android/shake-ui/chat-screen) to provide you more details 
about their reported bugs, crashes or feedback. You will be able to fix issues faster and make your customers happier.

## Enable

Once your app user is [registered](/android/users/register-user) with Shake, the chat feature is enabled automatically.
Each ticket they send you will be a separate conversation.

This feature is tightly integrated with and follows the lifecycle of your _User_ registration, 
which means that calling `Shake.unregisterUser` also _disconnects_ the current app user from chat 
and they won't receive any new messages until registered again.

## Notifications

Shake can notify your app [users](/android/users/register-user) about new messages sent from the Shake dashboard.

Both remote and local notifications are supported, but are mutually exclusive.

### Set up Firebase SDK

Shake uses Firebase for sending push notifications to your Android app.

If you didn't add Firebase to your project yet, follow the official documentation for [adding Firebase into the project](https://firebase.google.com/docs/android/setup).

You'll also have to [set up Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/android/client) in your app.

### Forwarding device token to the Shake

To target the specific Android device, Shake needs the device Firebase token.

Forward Firebase token to the Shake by calling `Shake.setPushNotificationsToken` method on the app start like shown below:


<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
FirebaseMessaging.getInstance().getToken()
    .addOnCompleteListener(new OnCompleteListener<String>() {
        @Override
        public void onComplete(@NonNull Task<String> task) {
          if (!task.isSuccessful()) {
            Log.w("Firebase", "Fetching FCM registration token failed", task.getException());
            return;
          }

          String token = task.getResult();
          Shake.setPushNotificationsToken(token);
        }
    });
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
FirebaseMessaging.getInstance().token.addOnCompleteListener(OnCompleteListener { task ->
    if (!task.isSuccessful) {
        Log.w("Firebase", "Fetching FCM registration token failed", task.exception)
        return@OnCompleteListener
    }

    val token = task.result
    Shake.setPushNotificationsToken(token)
})
// highlight-end
```

</TabItem>
</Tabs>

### Presenting notifications to the app users

Shake sends Firebase *data* push notifications to the device which are not presented by default.

In order to present data notifications to the app users you'll have to use `onMessageReceived` callback from the `FirebaseMessagingService`
and call `Shake.showChatNotification` like shown below:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="MyFirebaseMessagingService.java"
class MyFirebaseMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {

        // highlight-start
        String id = remoteMessage.getData()[ChatNotification.ID];
        String userId = remoteMessage.getData()[ChatNotification.USER];
        String title = remoteMessage.getData()[ChatNotification.TITLE];
        String message = remoteMessage.getData()[ChatNotification.MESSAGE];

        if (id != null && userId != null && title != null && message != null) {
            ChatNotification chatNotification = new ChatNotification(id, userId, title, message);
            Shake.showChatNotification(chatNotification);
        }
        // highlight-end
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="MyFirebaseMessagingService.kt"
class MyFirebaseMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
    
        // highlight-start
        val id: String? = remoteMessage.data[ChatNotification.ID]
        val userId: String? = remoteMessage.data[ChatNotification.USER]
        val title: String? = remoteMessage.data[ChatNotification.TITLE]
        val message: String? = remoteMessage.data[ChatNotification.MESSAGE]

        if (id != null && userId != null && title != null && message != null) {
            val chatNotification = ChatNotification(id, userId, title, message)
            Shake.showChatNotification(chatNotification)
        }
        // highlight-end
    }
}
```

</TabItem>
</Tabs>

:::note

Don't forget to request notifications permission or notifications won't be shown

:::

### Customizing notification title and icon

If you want to change chat notification title or icon, you can do it by adding
metadata in the manifest file inside the application element:

```xml title="AndroidManifest.xml"
// highlight-start
<meta-data
  android:name="com.shakebugs.chat_notification_icon"
  android:resource="@drawable/ic_notification" />
<meta-data
  android:name="com.shakebugs.chat_notification_title"
  android:resource="@string/app_name" />
// highlight-end
```

### Set up Service Account credentials on the Shake dashboard

The last thing you'll have to do is to upload Firebase Cloud Messaging *Service Account* credentials to the Shake Dashboard.

Navigate to the *Project Settings → Service accounts → Generate new private key → Generate key* on the Firebase and upload *Service Account* credentials to the *Workspace Administration → App settings* on the Shake dashboard.


### Local notifications

If for some reason, you don't want to configure remote notifications for your app, Shake can still schedule
them locally. 

To enable these, you still need to request the user permission, but there is no need for additional steps or code.

:::note

Important thing to note is that local notifications are not shown when app is in the background.

:::note

Shake uses `Shake.setPushNotificationsToken` function to determine if the app is configured to receive remote notifications.
If that method is called in your app, Shake will disable local notifications and assume that you want to enable remote ones.

## Unread messages

If you want to show number of unread chat messages somewhere in your app, you can set the unread messages listener.
The listener is called immediately when set and on each change in the number of unread messages for a registered app user:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="MainActivity.java"
// highlight-start
Shake.setUnreadChatMessagesListener(new UnreadChatMessagesListener() {
    @Override
    public void onUnreadMessagesCountChanged(int count) {
        // Update number in your text element
    }
});
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="MainActivity.kt"
// highlight-start
Shake.setUnreadChatMessagesListener(object : UnreadChatMessagesListener {
    override fun onUnreadMessagesCountChanged(count: Int) {
        // Update number in your text element
    }
})
// highlight-end
```

</TabItem>
</Tabs>

To remove the unread messages listener, use `Shake.setUnreadChatMessagesListener(null)`.
