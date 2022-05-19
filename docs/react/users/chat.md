---
id: chat
title: Chat
---

>If needed, your users can [chat with you](/react/shake-ui/chat-screen) to provide you more details
about their reported bugs, crashes or feedback. You will be able to fix issues faster and make your customers happier.

## Enable

Once your user is [registered](/react/users/register-user) with Shake, the chat feature is enabled automatically.
Each ticket they send you will be a separate conversation.

This feature is tightly integrated with and follows the lifecycle of your _User_ registration,
which means that calling `Shake.unregisterUser` also _disconnects_ the current user from chat
and they won't receive any new messages until registered again.

## Notifications

Shake will notify your user when you send them a new message from the Shake dashboard.
Notifications are presented automatically to the user. You don't have to code anything.

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

```objectivec title="AppDelegate.m"
#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>

// highlight-start
@import Shake;
@import UserNotifications;
// highlight-end

static void InitializeFlipper(UIApplication *application) {
    FlipperClient *client = [FlipperClient sharedClient];
    SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
    [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
    [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
    [client addPlugin:[FlipperKitReactPlugin new]];
    [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
    [client start];
}
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions{
    #ifdef FB_SONARKIT_ENABLED
        InitializeFlipper(application);
    #endif

    // highlight-start
    UNUserNotificationCenter* center = [UNUserNotificationCenter currentNotificationCenter];
    center.delegate = self;
    // highlight-end

    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"example"
                                            initialProperties:nil];

    if (@available(iOS 13.0, *)) {
        rootView.backgroundColor = [UIColor systemBackgroundColor];
    } else {
        rootView.backgroundColor = [UIColor whiteColor];
    }

    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    UIViewController *rootViewController = [UIViewController new];
    rootViewController.view = rootView;
    self.window.rootViewController = rootViewController;
    [self.window makeKeyAndVisible];
    return YES;
}

// highlight-start
- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler {
    if ([response.notification.request.content.categoryIdentifier containsString:SHKNotificationCategoryIdentifierDomain]){
        [SHKShake reportNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
        return;
    }

    completionHandler();
}
// highlight-end

// highlight-start
- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
    if ([notification.request.content.categoryIdentifier containsString:SHKNotificationCategoryIdentifierDomain]) {
        [SHKShake reportNotificationCenter:center willPresentNotification:notification withCompletionHandler:completionHandler];
        return;
    }

    completionHandler(UNNotificationPresentationOptionAlert | UNNotificationPresentationOptionSound);
}
// highlight-end

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge{
    #if DEBUG
        return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
    #else
        return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    #endif
}

@end
```

```objectivec title="AppDelegate.h"
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

// highlight-next-line
@import UserNotifications;

// highlight-next-line
@interface AppDelegate : UIResponder <UIApplicationDelegate, UNUserNotificationCenterDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
```

Given the above setup, all notifications originated from Shake are handled by the Shake SDK, and all other notifications remain handled by your application.


:::tip

You can cancel the display of notifications in certain contexts by simply not reporting anything to Shake, or even stub the received native completion handler with your own 
set of _UNNotificationPresentationOptions_ which will be respected by the Shake SDK.

:::

## Unread messages

If you want to show number of unread chat messages somewhere in your app, you can set the unread messages listener.
The listener is called immediately when set and on each change in the number of unread messages for a registered user:

```javascript title="App.js"
// highlight-start
Shake.setUnreadMessagesListener(count => {
    // Update number in your text element
});
// highlight-end
```

To remove the unread messages listener, use `Shake.setUnreadMessagesListener(null)`.
