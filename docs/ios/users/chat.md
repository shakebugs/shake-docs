---
id: chat
title: Chat
---
import useBaseUrl from '@docusaurus/useBaseUrl'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

>If needed, your app users can [chat with you](/ios/shake-ui/chat-screen) to provide you more details 
about their reported bugs, crashes or feedback. You will be able to fix issues faster and make your customers happier.

## Enable

Once your app user is [registered](/ios/users/register-user) with Shake, the chat feature is enabled automatically.
Each ticket they send you will be a separate conversation.

This feature is tightly integrated with and follows the lifecycle of your _User_ registration, 
which means that calling `Shake.unregisterUser` also _disconnects_ the current app user from chat 
and they won't receive any new messages until registered again.

## Notifications

Shake can notify your app [users](/ios/users/register-user) about new messages sent from the Shake dashboard.

Both remote and local notifications are supported, but are mutually exclusive.

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


<Tabs 
groupId="ios" 
defaultValue="swift" 
values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application 
didFinishLaunchingWithOptions:(NSDictionary<UIApplicationLaunchOptionsKey, id> *)launchOptions {
    // highlight-next-line
    [UIApplication.sharedApplication registerForRemoteNotifications];
    
    /// Rest of the application and Shake setup
    
    return true;
}

- (void)application:(UIApplication *)application 
didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    // highlight-next-line
    [SHKShake didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

@end
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    // highlight-next-line
    UIApplication.shared.registerForRemoteNotifications()

    /// Rest of the application and Shake setup

    return true
}

func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    // highlight-next-line
    Shake.didRegisterForRemoteNotifications(withDeviceToken: deviceToken)
}
```
</TabItem></Tabs>

### Requesting Notification permissions

To show any kind of notifications to your user, you must request a permission.

Requesting a notifications permission triggers a native alert dialog and can be displayed
to a user only once.

Make sure to find a proper place and time to ask for this permission, because if the user doesn't grant
permission via the alert dialog, all notifications are disabled and must be enabled manually in the _Settings_ app.

Shake remote notifications require an `UNAuthorizationOptions` type `alert` , which means that user allows notification banners to 
be presented.


<Tabs 
groupId="ios" 
defaultValue="swift" 
values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec"
// highlight-start
[UNUserNotificationCenter.currentNotificationCenter requestAuthorizationWithOptions:(UNAuthorizationOptionAlert | UNAuthorizationOptionBadge | UNAuthorizationOptionSound) completionHandler:^(BOOL granted, NSError * _Nullable error) {
    /// Fallback if not granted
}];
// highlight-end
```

</TabItem><TabItem value="swift">

```swift
// highlight-start
UNUserNotificationCenter.current().requestAuthorization(options: [.badge, .sound, .alert]) { granted, error in
    /// Fallback if not granted
}
// highlight-end
```
</TabItem></Tabs>


### Presenting iOS notifications

To handle _foreground_ notifications, application needs to set itself as the `UNUserNotificationCenterDelegate` , and implement 
the _didReceiveResponse_, _willPresentNotification_ methods.

To remain customizable and minimally intrusive to an existing notification logic of your app, Shake requires some additional setup.

Use `Shake.report(center: UNUserNotificationCenter ...)` methods to delegate notification presentation logic to Shake.

`Shake.isShakeNotification` method can be used to perform an early check for Shake originated notifications and delegate processing so that Shake
internally calls Apple completion handlers.

<Tabs 
groupId="ios" 
defaultValue="swift" 
values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-start
@import Shake; 
@import UserNotifications;
// highlight-end

// highlight-next-line
@interface AppDelegate () <UNUserNotificationCenterDelegate>

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    // highlight-next-line
    UNUserNotificationCenter.currentNotificationCenter.delegate = self;

    [SHKShake startWithClientId:@"your_client_id" clientSecret:@"your_client_secret"];

    return YES; 
}

// highlight-start
- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler {
    if ([SHKShake isShakeNotification:response.notification]){
        [SHKShake reportNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
        return;
    }

    completionHandler();
}
// highlight-end

// highlight-start
- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
    if ([SHKShake isShakeNotification:notification]){
        [SHKShake reportNotificationCenter:center willPresentNotification:notification withCompletionHandler:completionHandler];
        return;
    }

    completionHandler(UNNotificationPresentationOptionAlert | UNNotificationPresentationOptionSound); 
}
// highlight-end
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // highlight-next-line
        UNUserNotificationCenter.current().delegate = self

        Shake.start(clientId: "your_client_id", clientSecret: "your_client_secret")

        return true
    }

    // highlight-start
    func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        if Shake.isShakeNotification(response.notification) {
            Shake.report(center, didReceive: response, withCompletionHandler: completionHandler)
            return;
        }

        completionHandler()
    }
    // highlight-end

    // highlight-start
    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        if Shake.isShakeNotification(notification) {
            Shake.report(center, willPresent: notification, withCompletionHandler: completionHandler)
            return;
        }

        completionHandler([.badge, .sound, .alert])
    }
    // highlight-end
}
```
</TabItem></Tabs>

With the setup like above, notifications that originate from Shake are handled by Shake,
and all other notifications are handled by your app.

This keeps Shake isolated and configurable, but we do recommend using the above snippets because
Shake will internally determine if notification should be presented, and also perform expected actions
when notifications are tapped.

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

<!---
#### Remote notifications background behaviour

When Shake sucessfully registers your _device + user_ for remote notifications, it will start sending remote notifications. 
However, in the _event_ of unregistering your application [user](/ios/users/register-user), Shake must remove that _device + user_ entry from its servers to avoid an "unregistered" device user to receive private messages from Shake dashboard, and this "unregister" network request can potentially fail (for example when offline).

Shake has multiple mechanisms to still provide an expected behaviour in various edge-cases, but can only cover all of them while the application is active / in foreground. 

:::caution
Most regular Shake customers probably don't need to think about this, as this should only happen in specific edge cases and Shake will always end up
in the "correct" final state eventually / when online.

Consider this approach if you wan't to be absolutely sure that an unregistered user / device will never see the notifications for a recently unregistered user while application is in background / suspended.
:::

While your app is in background, the application process is suspended and won't execute code. This means that by default, 
all remote notifications received while in background are presented, and the delegate methods won't get called.

This behaviour can be controlled with the [filtering entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_usernotifications_filtering) combined with the [Notification Service Extension](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension).

You can use this execution time in the extension to _double-check_ with Shake if the _pending_ remote notification would actually
be presented if the app was in the foreground, and potentially silent it completely.

The simple way of doing this is sending a custom completion handler to the _Shake.willPresentNotification_ method and checking the
presentation option sent in the callback. If your custom completion handler reports a _UNNotificationPresentationOptionNone_ this means
that Shake would drop this notification if the app was in foreground, so you can drop it manually in the extension.
-->

## Unread messages

If you want to show number of unread chat messages somewhere in your app, you can set the unread messages listener.
The listener is called immediately when set and on each change in the number of unread messages for a registered app user:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="ViewController.m"
// highlight-start
SHKShake.unreadMessagesListener = ^(NSUInteger count) {
    // Update count in your text element
};
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="ViewController.swift"
// highlight-start
Shake.unreadMessagesListener = { count in
    // Update number in your text element
}
// highlight-end
```

</TabItem>
</Tabs>

To remove the unread messages listener, use `Shake.unreadMessagesListener = nil`.
