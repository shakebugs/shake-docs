---
id: setup-manually
title: Manually
---
A guide to add Shake to your app without a dependency manager or a build automation tool.

:::note

By not using a dependency manager like CocoaPods, you won't be able to use the simple `pod update Shake` command to
always pull the latest version of Shake SDK into your app. Instead, you will have to repeat the the first step described below.

:::

### Download Shake SDK from GitHub
Visit Shake iOS SDK [GitHub repo](https://github.com/shakebugs/shake-ios), click the green *Clone* button and then *Download ZIP*.
Shake directory will be downloaded to your computer — drag-and-drop the *Shake.framework* folder into your project. Then select *Embed & Sign* for *Shake.xcframework*  in Xcode *General tab*; *Frameworks, Libraries, and Embedded content* (Xcode 11, Xcode 12).

### Initialize Shake SDK
Initialize Shake in the `didFinishLaunchingWithOptions` callback of your *AppDelegate*.
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
#import "AppDelegate.h"
// highlight-next-line
@import Shake;

@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  // highlight-next-line
  [SHKShake startWithClientId:@"your-api-client-id" clientSecret:@"your-api-client-secret"];
  return YES;
}
@end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
import UIKit
// highlight-next-line
import Shake

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
      // highlight-next-line
      Shake.start(clientId: "your-api-client-id", clientSecret: "your-api-client-secret")
      return true
  }
}
```

</TabItem>
</Tabs>

:::note

Some of the Shake features use swizzling, so to avoid any kind of swizzling conflicts, we recommend calling `Shake.start()` before initializing all other frameworks.

:::

Now select *Product › Run* in the menu bar. This first run will automatically
add your app to your [Shake Dashboard](https://app.shakebugs.com/) based on your app bundle ID.
