---
id: manually
title: Manually
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> A guide to add Shake to your app without a dependency manager or a build automation tool.

<p class="p2 mt-40">You're viewing the iOS docs. Other platforms → &nbsp;
<a href="/docs/android/installation/">Android</a>&nbsp;
<a href="/docs/react/installation/">React Native</a>&nbsp; 
<a href="/docs/flutter/installation/">Flutter</a>&nbsp;  
<a href="/docs/web/install/cdn/">Web</a>&nbsp;
<a href="/docs/chrome-extension/installation/">Chrome Extension</a>&nbsp;
</p>


:::note

By not using a dependency manager like CocoaPods, you won't be able to use the simple `pod update Shake` command to
always pull the latest version of Shake into your app. Instead, you will have to repeat the the first step described below.

:::

## Create a new app on Dashboard

Visit your [Shake Dashboard](https://app.shakebugs.com) and add a new Native iOS app by clicking the *Add new app* button located in the bottom right corner.

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Add new app"
  width="380"
  src={useBaseUrl('img/add-new-app-button.png')}
/>
</table>

Once you're done, you're ready to proceed with the steps below.

## Download Shake from GitHub

Visit [Shake iOS SDK GitHub repo](https://github.com/shakebugs/shake-ios)
→ _Download ZIP_
→ copy _Shake.framework_ folder into your Xcode project
→ drag the copied _Shake.xcframework_ into _Frameworks, Libraries, and Embedded content_ section of your project _Target_ general settings.

Make sure that _Embed&Sign_ option is selected for the _Shake.xcframework_.

## Initialize Shake

Initialize Shake in the `didFinishLaunchingWithOptions` callback of your _AppDelegate_.
Replace `app-api-key` with the actual value you have in [your app settings](https://app.shakebugs.com/administration/apps):

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
    [SHKShake startWithApiKey:@"app-api-key"];
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
            Shake.start(apiKey: "app-api-key")
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

Build and run your project by selecting _Run → Run_ in the menu bar.

## Conditional initialization

We recommend initializing Shake in the entry point of your app.
However, depending on your app, you'll want to initialize Shake just in a specific conditions, depending on your app data.
You can do it as shown in the example below when your app data is available:

<Tabs
groupId="ios"
defaultValue="swift"
values={[
{ label: 'Objective-C', value: 'objectivec'},
{ label: 'Swift', value: 'swift'},
]
}>

<TabItem value="objectivec">

```objectivec title="Main.m"
#import "Main.h"
// highlight-next-line
@import Shake;

@implementation MainVC

- (void)viewDidLoad {
  [super viewDidLoad];

  if ([User isTester]) {
    // highlight-next-line
    [SHKShake startWithApiKey:@"app-api-key"];
  }
}
```

</TabItem>

<TabItem value="swift">

```swift title="Main.swift"
import UIKit
// highlight-next-line
import Shake

class MainVC: UIViewController {

  override func viewDidLoad() {
    super.viewDidLoad()
    title = "Main"

    if User.isTester() {
         // highlight-next-line
         Shake.start(apiKey: "app-api-key")
    }
  }
}
```

</TabItem>
</Tabs>

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
