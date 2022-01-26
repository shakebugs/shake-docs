---
id: spm
title: Swift Package Manager
---

>Learn how to add Shake to your iOS app using Swift Package Manager.

## Install the Shake Package

Select *File → Swift Packages → Add Package Dependency*. Enter the Shake repository URL when prompted:

```swift"
// highlight-next-line
https://github.com/shakebugs/shake-ios
```

Choose the appropriate cloning details and optionally specify the exact Shake version or branch.

Click *Finish* to add Shake to your project.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Initialize Shake SDK
Initialize Shake in the `didFinishLaunchingWithOptions` callback of your *AppDelegate*.
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general):

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

Some of the Shake features use swizzling.
To avoid swizzling conflicts, call `Shake.start()` before initializing other frameworks.

:::

Now select *Product → Run* in the menu bar. This first run will automatically
add your app to your [Shake Dashboard](https://app.shakebugs.com/) based on your app bundle ID.

### A know issue and a temporary workaround

:::note

Shake is distributed as a binary framework. There is a [known issue](https://bugs.swift.org/browse/SR-13343) 
with SPM signing the binary packages which will pop up when running your app on the real device.
The issue has been fixed in the Xcode Version 12.2 beta 3.

:::

Select your app target, and add a new *Copy Files phase* to the *Build Phases*.
Make sure to change the destination to *Frameworks* folder.

Add a new *Run Script* phase and paste the following script to force the deep signing of frameworks with your own identity:


```script"
// highlight-start
find "${CODESIGNING_FOLDER_PATH}" -name '*.framework' -print0 | while read -d $'\0' framework
do
    codesign --force --deep --sign "${EXPANDED_CODE_SIGN_IDENTITY}" --preserve-metadata=identifier,entitlements --timestamp=none "${framework}" 
done
// highlight-end
```

## Visit your Shake dashboard

Follow the instructions there to send your first feedback with Shake and you're all set.

## SDK customizations

Now that Shake SDK is in your app and you have sent the first feedback for fun, everything else is optional.
As the next step, try the three most popular SDK customizations:

<div class="featuresList">
    <div>
        <img src="/docs/img/screen-recording@2x.png" alt="Turn on auto screen recording"/>
        <p><a href="/docs/ios/configuration-and-data/auto-screen-recording/">Turn on auto screen recording</a></p>
    </div>
    <div>
        <img src="/docs/img/steps-to-reproduce@2x.png" alt="Tweak logging to your debugging needs"/>
        <p><a href="/docs/ios/configuration-and-data/activity-history">Tweak logging to your debugging needs</a></p>
    </div>
    <div>
        <img src="/docs/img/crash-reporting@2x.png" alt="Turn on app crash detection"/>
        <p><a href="/docs/ios/crash-reports/overview">Turn on crash detection</a></p>
    </div>
</div>
