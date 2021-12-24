---
id: chat
title: Chat
---
The user [can reply](flutter/screens/chat-screen.md) to your message sent over the Dashboard and provide you with more details 
about the reported bug, crash, or feedback - directly from the app without leaving it.
This allows you to easier fix bugs and makes your customers happy, a win-win situation. 

## Enabling

Once your user is [registered](flutter/users/user-registration.md) with Shake, the real time chat feature is enabled automatically.

Each reported _Ticket_ represents a separate conversation, and can naturally be used to obtain valuable information directly from the end user. 

This feature is tightly integrated with, and follows the lifecycle of your _User_ registration, 
which means that calling `Shake.unregisterUser` also _disconnects_ the current user from chat, 
so he won't receive any new messages until registered again.

## Notifications

Shake will notify the end-user when a new message is sent over the Dashboard.

:::note

At the moment, Shake supports only _local_ notifications. Which means that end-users won't get notified about new messages when your application is in the _background_.

:::

### Android

Notifications are automatically presented to the end-user, no additional code is required.

### iOS

To present any kind of notifications to the end-user, the host application must __request a permission__ from the user.
Find a suitable place in your application flow where this native alert dialog will be presented.

In order to be highly customizable and minimally intrusive to existing notification logic of host applications, Shake requires additional setup outlined in the below snippets.

Use the `Shake.report(center: UNUserNotificationCenter ...)` methods to delegate the notification presentation logic to Shake.

```swift title="AppDelegate.swift"
import UIKit
import Flutter
// highlight-next-line
import Shake

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    // highlight-start
    let center = UNUserNotificationCenter.current()
    center.delegate = self
    // highlight-end

    GeneratedPluginRegistrant.register(with: self)
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  // highlight-start
  override func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
      if response.notification.request.content.categoryIdentifier.contains(SHKNotificationCategoryIdentifierDomain) {
          Shake.report(center, didReceive: response, withCompletionHandler: completionHandler)
          return;
      }

      completionHandler()
  }
  // highlight-end

  // highlight-start
  override func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
      if notification.request.content.categoryIdentifier.contains(SHKNotificationCategoryIdentifierDomain) {
          Shake.report(center, willPresent: notification, withCompletionHandler: completionHandler)
          return;
      }

      completionHandler([.badge, .sound, .alert])
  }
  // highlight-end
}

```

Given the above setup, all notifications originated from Shake are handled by the Shake SDK, and all other notifications remain handled by your application.


:::tip

You can cancel the display of notifications in certain contexts by simply not reporting anything to Shake, or even stub the received native completion handler with your own 
set of _UNNotificationPresentationOptions_ which will be respected by the Shake SDK.

:::

