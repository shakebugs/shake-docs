---
id: chat
title: Chat
---

>If needed, your app users can [chat with you](/flutter/shake-ui/chat-screen) to provide you more details
about their reported bugs, crashes or feedback. You will be able to fix issues faster and make your customers happier.

<p class="p2 mt-40">You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/users/chat/">iOS</a>&nbsp;
<a href="/docs/web/users/chat/">Android</a>&nbsp;  
<a href="/docs/react/users/chat/">React Native</a>&nbsp; 
<a href="/docs/web/users/chat/">Web</a>&nbsp;
</p>

## Enable

Once your app user is [registered](/flutter/users/register-user) with Shake, the chat feature is enabled automatically.
Each ticket they send you will be a separate conversation.

This feature is tightly integrated with and follows the lifecycle of your _User_ registration,
which means that calling `Shake.unregisterUser` also _disconnects_ the current app user from chat
and they won't receive any new messages until registered again.

## Notifications

Shake can notify your app [users](/flutter/users/register-user) about new messages sent from the Shake dashboard.

Both remote and local notifications are supported, but are mutually exclusive.

## Android notifications

### Set up Firebase SDK

Shake uses Firebase for sending push notifications to your Android app.

If you didn't add Firebase to your project yet, follow the official documentation for [adding Firebase into the project](https://firebase.google.com/docs/flutter/setup).

You'll also have to [set up Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/flutter/client) in your app.

### Forwarding device token to the Shake

To target the specific Android device, Shake needs the device Firebase token.

Forward Firebase token to the Shake by calling `Shake.setPushNotificationsToken` method on the app start like shown below:

```dart title="main.dart"
// highlight-start
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

// highlight-start
void setShakePushNotificationsToken() async {
    String? fcmToken = await FirebaseMessaging.instance.getToken();
    Shake.setPushNotificationsToken(fcmToken);
};
// highlight-end

void main() async {
    WidgetsFlutterBinding.ensureInitialized();

    await Shake.start('app-api-key');
    await Firebase.initializeApp();
    
    // highlight-next-line
    setShakePushNotificationsToken();
    
    runApp(Home());
}
```

### Presenting notifications to the app users

Shake sends Firebase *data* push notifications to the device which are not presented by default.

In order to present data notifications to the app users you'll have to use `onMessage` and `onBackgroundMessage` callbacks
and call `Shake.showChatNotification` like shown below:

```dart title="main.dart"
// highlight-start
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

// highlight-start
@pragma('vm:entry-point')
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Shake.start('app-api-key');
  await Firebase.initializeApp();

  Shake.showChatNotification(message.data);
}
// highlight-end

// highlight-start
void presentShakePushNotifications() {
    // Showing chat notifications when app in the background
    FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);
    
    // Showing chat notifications when app in the foreground
    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      Shake.showChatNotification(message.data);
    });
}
// highlight-end

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Shake.start('app-api-key');
  await Firebase.initializeApp();

  // highlight-next-line
  presentShakePushNotifications();

  runApp(Home());
}
```

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

## iOS notifications

### Creating a Push Notifications certificate

Shake supports iOS Remote notifications but your application needs the [APS Environment Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/aps-environment) enabled.

After enabling this app _Capability_, Shake needs your certificate to establish a
[certificate based connection with APNS](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/establishing_a_certificate-based_connection_to_apns). Follow the Apple docs and generate a [new Push Notifications certificate](https://developer.apple.com/account/resources/certificates/add) in the _Member Center_.

Once the certificate is generated and downloaded to your local machine, _double click_ on the certificate to import it to the KeychainAccess application. If done correctly, the _Certificate+PrivateKey_ combination will be present in your KeychainAccess application under the _Certificates_ tab.

Export the _Certificate+PrivateKey_ combination as a _.p12_ file and upload the file to Shake _Dashboard_.

### Registering iOS application for remote notifications

To target the specific iOS device, Shake needs the device APNS token.

Call the native `registerForRemoteNotifications` method during the application launch, to
always obtain a fresh copy of the device APNS token and forward it to Shake.

```swift title="AppDelegate.swift"
import UIKit
import Flutter
// highlight-next-line
import Shake

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
    override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // highlight-next-line
        UIApplication.shared.registerForRemoteNotifications()
        
        /// Rest of the application and Shake setup

        GeneratedPluginRegistrant.register(with: self)
        return super.application(application, didFinishLaunchingWithOptions: launchOptions)
    }
        
    // highlight-start
    override func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        Shake.didRegisterForRemoteNotifications(withDeviceToken: deviceToken)
    }
    // highlight-end
}
```

### Presenting iOS notifications

To handle _foreground_ notifications, application needs to set itself as the `UNUserNotificationCenterDelegate` , and implement
the _didReceiveResponse_, _willPresentNotification_ methods.

To remain customizable and minimally intrusive to an existing notification logic of your app, Shake requires some additional setup.

Use `Shake.report(center: UNUserNotificationCenter ...)` methods to delegate notification presentation logic to Shake.

`Shake.isShakeNotification` method can be used to perform an early check for Shake originated notifications and delegate processing so that Shake
internally calls Apple completion handlers.

```swift title="AppDelegate.swift"
import UIKit
import Flutter
// highlight-next-line
import Shake

// highlight-next-line
class AppDelegate: FlutterAppDelegate {

    override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // highlight-next-line
        UNUserNotificationCenter.current().delegate = self

        GeneratedPluginRegistrant.register(with: self)
        return super.application(application, didFinishLaunchingWithOptions: launchOptions)
    }

    // highlight-start
    override func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        if Shake.isShakeNotification(response.notification) {
            Shake.report(center, didReceive: response, withCompletionHandler: completionHandler)
            return;
        }

        completionHandler()
    }
    // highlight-end

    // highlight-start
    override func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        if Shake.isShakeNotification(notification) {
            Shake.report(center, willPresent: notification, withCompletionHandler: completionHandler)
            return;
        }

        completionHandler([.badge, .sound, .alert])
    }
    // highlight-end
}
```

With the setup like above, notifications that originate from Shake are handled by Shake,
and all other notifications are handled by your app.

This keeps Shake isolated and configurable, but we do recommend using the above snippets because
Shake will internally determine if notification should be presented, and also perform expected actions
when notifications are tapped.

:::note

Don't forget to request notifications permission or notifications won't be shown

:::

### Local notifications

If for some reason, you don't want to configure remote notifications for your app, Shake can still schedule
them locally.

To enable these, you still need to request the user permission, but there is no need to generate any additional
certificates or register the iOS application for remote notifications with `registerForRemoteNotifications` method.

:::note

Important thing to note is that local notifications are not shown when app is in the background.

:::note

Shake uses `isRegisteredForRemoteNotifications` property to determine if the app is configured to receive remote notifications.
If that method returns `true`, Shake will disable local notifications and assume that you want to enable remote ones.

## Requesting Notifications permissions

To show any kind of notifications to your user, you must request a permission.

Requesting a notifications permission triggers a native alert dialog and can be displayed
to a user only once.

Make sure to find a proper place and time to ask for this permission, because if the user doesn't grant
permission via the alert dialog, all notifications are disabled and must be enabled manually in the _Settings_ app.

```dart title="main.dart"
// highlight-next-line
FirebaseMessaging.instance.requestPermission();
```

## Unread messages

If you want to show number of unread chat messages somewhere in your app, you can set the unread messages listener.
The listener is called immediately when set and on each change in the number of unread messages for a registered app user:

```dart title="main.dart"
// highlight-start
Shake.setUnreadMessagesListener((int count) {
    // Update number in your text element
});
// highlight-end
```

To remove the unread messages listener, use `Shake.setUnreadMessagesListener(null)`.

