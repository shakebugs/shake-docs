---
id: manually
title: Manually
---
>A guide to add Shake to your app without a dependency manager or a build automation tool.

:::note

By not using a dependency manager like CocoaPods, you won't be able to use the simple `pod update Shake` command to
always pull the latest version of Shake into your app. Instead, you will have to repeat the the first step described below.

:::


## Download Shake from GitHub
Visit [Shake iOS SDK GitHub repo](https://github.com/shakebugs/shake-ios)
→ *Download ZIP*
→ copy *Shake.framework* folder into your Xcode project
→ drag the copied *Shake.xcframework* into *Frameworks, Libraries, and Embedded content* section of your project *Target* general settings.

Make sure that *Embed&Sign* option is selected for the *Shake.xcframework*.


## Initialize Shake
Initialize Shake in the `didFinishLaunchingWithOptions` callback of your *AppDelegate*.
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general):

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

Some of the Shake features use swizzling.
To avoid swizzling conflicts, call `Shake.start()` before initializing other frameworks.

:::

Now select *Product → Run* in the menu bar. This first run will automatically
add your app to your [Shake Dashboard](https://app.shakebugs.com/) based on your app bundle ID.

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