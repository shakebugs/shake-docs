---
id: chat
title: Chat
---

>If needed, your users can [chat with you](/flutter/shake-ui/chat-screen) to provide you more details
about their reported bugs, crashes or feedback. You will be able to fix issues faster and make your customers happier.

## Enable

Once your user is [registered](/flutter/users/register-user) with Shake, the chat feature is enabled automatically.
Each ticket they send you will be a separate conversation.

This feature is tightly integrated with and follows the lifecycle of your _User_ registration,
which means that calling `Shake.unregisterUser` also _disconnects_ the current user from chat
and they won't receive any new messages until registered again.

## Notifications

Shake will notify your user when you send them a new message from the Shake dashboard.
Notifications are presented automatically to the user. You don't have to code anything.

:::note

Shake supports only local notifications. That means that your users won't get notified about new messages
when your app is in the _background_.

:::

### Android

Notifications are automatically presented to the end-user, no additional code is required.

### iOS

To present any kind of notifications to the end-user, the host application must __request a permission__ from the user.
Find a suitable place in your application flow where this native alert dialog will be presented.

In order to be highly customizable and minimally intrusive to existing notification logic of host applications, Shake requires additional setup outlined in the below snippets.

Use the `Shake.report(center: UNUserNotificationCenter ...)` methods to delegate the notification presentation logic to Shake.

<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="AppDelegate.m"
@import Shake;
@import UserNotifications;

@interface AppDelegate () <UNUserNotificationCenterDelegate>

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    UNUserNotificationCenter.currentNotificationCenter.delegate = self;

    [SHKShake startWithClientId:@"your_client_id" clientSecret:@"your_client_secret"];

    return YES;
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler {

    if ([response.notification.request.content.categoryIdentifier containsString:SHKNotificationCategoryIdentifierDomain]) {
        [SHKShake reportNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
        return;
    }

    completionHandler();
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {

    if ([notification.request.content.categoryIdentifier containsString:SHKNotificationCategoryIdentifierDomain]) {
        [SHKShake reportNotificationCenter:center willPresentNotification:notification withCompletionHandler:completionHandler];
        return;
    }

    completionHandler(UNNotificationPresentationOptionAlert | UNNotificationPresentationOptionSound);
}

```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"

class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

        UNUserNotificationCenter.current().delegate = self

        Shake.start(clientId: "your_client_id", clientSecret: "your_client_secret")

        return true
    }

    func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {

        if response.notification.request.content.categoryIdentifier.contains(SHKNotificationCategoryIdentifierDomain) {
            Shake.report(center, didReceive: response, withCompletionHandler: completionHandler)
            return;
        }

        completionHandler()
    }

    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {

        if notification.request.content.categoryIdentifier.contains(SHKNotificationCategoryIdentifierDomain) {
            Shake.report(center, willPresent: notification, withCompletionHandler: completionHandler)
            return;
        }

        completionHandler([.badge, .sound, .alert])
    }
}

```
</TabItem></Tabs>

Given the above setup, all notifications originated from Shake are handled by the Shake SDK, and all other notifications remain handled by your application.


:::tip

You can cancel the display of notifications in certain contexts by simply not reporting anything to Shake, or even stub the received native completion handler with your own 
set of _UNNotificationPresentationOptions_ which will be respected by the Shake SDK.

:::

