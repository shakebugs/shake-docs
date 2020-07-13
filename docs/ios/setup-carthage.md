---
id: setup-carthage
title: Carthage
---
[Carthage](https://github.com/Carthage/Carthage) is a decentralized dependency manager that builds your dependencies and provides you with binary frameworks.


:::note Before you start
### Install Carthage
If you don't already have Carthage, you can install the latest version using  [Homebrew](http://brew.sh/) by opening up Terminal and entering this  command:
```bash 
brew install carthage 
```
Next, create an empty file named `Cartfile` inside your project root folder:
```bash 
cd /Path/To/Your/Project
touch Cartfile
```
:::



### Install Shake via Carthage
Open your `Cartfile` and add this line:
```txt title="Cartfile"
binary "https://github.com/shakebugs/shake-ios/raw/master/Shake.json"
```

Next, open up Terminal and enter this command:
```bash 
carthage update
```

### Link Shake library
Once `carthage update` is executed, you will find the Shake binary in your project folder inside:

 🗂 Carthage → 🗂 Build → 🗂 iOS  → ◻️ Shake.framework

Open Xcode and select project file in the left section of the screen. Under **General** Scroll down to the  **Frameworks, Libraries and Embedded Content**  section and drag-and-drop `◻️Shake.framework` there. Make sure "Embed & Sign" is selected.

### Add Client ID and Secret to Info.plist
Open your workspace and in the Project Navigator, right click on *Info.plist*, and *Open as › Source code*.
Paste this but replace *your-api-client-id* and *your-api-client-secret*
with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general).

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

Now select *Product › Run* in the menu bar. This first run will automatically
add your app to your [Shake Dashboard](https://app.shakebugs.com/) based on your app bundle ID.
