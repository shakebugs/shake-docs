---
id: setup-manually
title: Manually
---
A guide to add Shake to your app without a dependency manager or a build automation tool.

:::note

By not using a dependency manager like CocoaPods, you won't be able to use the simple `pod update Shake` command to 
always pull the latest version of Shake SDK into your app. Instead, you will have to repeat the Step 1 described below.

:::

### Download Shake SDK from GitHub
Visit Shake iOS SDK [GitHub repo](https://github.com/shakebugs/shake-ios) and click the green Clone or download button. 
Shake directory will be downloaded to your computer — drag-and-drop the Shake.framework folder into your project.

### Add Client ID and Client secret key
Open your workspace and in the Project Navigator, right click on `Info.plist`, and `Open as › Source code`.
Paste this but replace `sign-in-to-see-your-api-client-id-here` and `sign-in-to-see-your-api-client-secret-here` 
with the actual values you have in [Your settings](https://app.shakebugs.com/settings/workspace#general).

```xml {4-10} title="Info.plist"
<?xml version="1.0" encoding="utf-8" ?>
<plist version="1.0">
  <dict>
      <key>Shake</key>
      <dict>
        <key>APIClientID</key>                                                
        <string>sign-in-to-see-your-api-client-id-here</string>
        <key>APIClientSecret</key>                                            
        <string>sign-in-to-see-your-api-client-secret-here</string>
      </dict>
  </dict>
</plist>
```

### Initialize Shake

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec {2,6} title="AppDelegate.m"
#import "AppDelegate.h"
@import Shake;

@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [SHKShake start];
  return YES;
}
@end
```

</TabItem>

<TabItem value="swift">

```swift {2,9} title="AppDelegate.swift"
import UIKit
import Shake

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
      Shake.start()
      return true
  }
}
```

</TabItem>
</Tabs>

Now select `Product › Run` in the menu bar. This first run will automatically 
add your app to your Shake Dashboard based on your app bundle ID.
