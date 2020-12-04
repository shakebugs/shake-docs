---
id: setup-cocoapods
title: CocoaPods
---
We support integrating Shake into your Xcode project using CocoaPods.

:::note

Not using CocoaPods yet? Follow their brief [installation guide](https://guides.cocoapods.org/using/getting-started.html#installation),
then run `pod init` in the root of your project and you're done — let's move on.

:::

:::note

Shake SDK is distributed as a binary package, more specifically an *XCFramework*.
CocoaPods added support for *XCFrameworks* in the *1.9 beta* release, so make sure your *CocoaPods* installation is 
running with version no lower than *1.9*.

:::

### Add Shake SDK to your Podfile

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

```objectivec title="Podfile"
// highlight-next-line
pod 'Shake'
```

</TabItem>

<TabItem value="swift">

```swift title="Podfile"
// highlight-start
use_frameworks!
pod 'Shake'
// highlight-end
```

</TabItem>
</Tabs>

import IosVersion from '@site/src/base/IosVersion';

Then, run the `pod install` command in your terminal.
After the installation also run `pod update Shake` to be perfectly sure you're using the latest Shake <IosVersion/>.

### Add Client ID and Secret to Info.plist
Open your workspace and in the Project Navigator, right click on *Info.plist*, and *Open as › Source code*.
Paste this but replace *your-api-client-id* and *your-api-client-secret*
with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general):

```xml title="Info.plist"
<?xml version="1.0" encoding="utf-8" ?>
<plist version="1.0">
  <dict>
      // highlight-start
      <key>Shake</key>
      <dict>
        <key>APIClientID</key>
        <string>your-api-client-id</string>
        <key>APIClientSecret</key>
        <string>your-api-client-secret</string>
      </dict>
      // highlight-end
  </dict>
</plist>
```

### Initialize Shake SDK
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
  [SHKShake start];
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
      Shake.start()
      return true
  }
}
```

</TabItem>
</Tabs>

:::note

To avoid a swizzling conflict, call `Shake.start()` before initializing all other frameworks (e.g. Firebase Performance Monitoring SDK). Otherwise, some network requests may not be captured and sent with reports.

:::

Now select *Product › Run* in the menu bar. This first run will automatically
add your app to your [Shake Dashboard](https://app.shakebugs.com/) based on your app bundle ID.
