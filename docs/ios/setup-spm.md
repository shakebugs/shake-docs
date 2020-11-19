---
id: setup-spm
title: Swift Package Manager
---

We support integrating Shake into your Xcode project using Swift Package Manager.

### Installing the Shake Package

Select *File* › *Swift Packages* › *Add Package Dependency*  

Enter the Shake repository url when prompted:

```swift"
// highlight-next-line
https://github.com/shakebugs/shake-ios
```

Choose the appropriate cloning details and optionally specify the exact Shake version or branch.

Click *Finish* to add the Shake package to your project.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Add Client ID and Secret to Info.plist
Open your project or workspace and in the Project Navigator, right click on *Info.plist*, and *Open as › Source code*.
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
  ]}
  >

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

:::note

Shake is distributed as a binary framework. There is a [known issue](https://bugs.swift.org/browse/SR-13343) 
with SPM signing the binary packages which will pop up when running your app on the real device.
The issue has been fixed in the Xcode Version 12.2 beta 3.

:::

### Temporary workaround

Select your app target, and add a new *Copy Files phase* to the *Build Phases*.
Make sure to change the destination to *Frameworks* folder.

Add a new *Run Script* phase and paste the following script to force the deep signing of frameworks with your own identity.


```script"
// highlight-start
find "${CODESIGNING_FOLDER_PATH}" -name '*.framework' -print0 | while read -d $'\0' framework 
do 
    codesign --force --deep --sign "${EXPANDED_CODE_SIGN_IDENTITY}" --preserve-metadata=identifier,entitlements --timestamp=none "${framework}" 
done
// highlight-end
```
