---
id: installation
title: Installation
---

> Learn how to add Shake to your Flutter app.

:::note
Shake supports post Flutter 1.12 projects. If your project was created with the older version
of Flutter, please migrate your project to the new Android APIs via [official guide](https://flutter.dev/go/android-project-migration) first.
:::

## Create a new app on Dashboard

Visit your [Shake Dashboard](https://app.shakebugs.com) and add a new Flutter Android/iOS app by clicking
the _Add new app_ button or from _Top navbar → App → ... → Add new app_.
Once you're done, you're ready to proceed with the steps below.

## Install

Add Shake as a dependency:

```bash
//highlight-next-line
flutter pub add shake_flutter
```

This will add a line like this to your package's _pubspec.yaml_ (and run an implicit `flutter pub get`):

import FlutterVersionBlock from '@site/src/base/FlutterVersionBlock';

<FlutterVersionBlock></FlutterVersionBlock>

Now in your Dart code, you can use:

```dart title="main.dart"
//highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';
```

## Set compileSdkVersion version in the build.gradle file

Since Shake requires `compileSdkVersion` 29 or greater, verify that `compileSdkVersion` is correctly set in the _/android/app/build.gradle_ file:

```groovy title="build.gradle"
android {
    // highlight-next-line
    compileSdkVersion 29

    defaultConfig {
        applicationId "com.shakebugs.flutter.example"
        minSdkVersion 24
        targetSdkVersion 29
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
    }
}
```

## Set applicationId in the build.gradle file

ApplicationId can be set in the `build.gradle` file. You can find your applicationld in Shake Dashboard. Go to `Workspace administration → Apps` and select an app to which you want to add Shake SDK. Check `Essentials` card to find your applicationID as `bundleID`.

```groovy title="build.gradle"
android {
    compileSdkVersion 29
    defaultConfig {
        // highlight-next-line
        applicationId "com.shakebugs.flutter.example"
    }
}
```

## Initialize Shake

Call `Shake.start()` method in your _main.dart_ file.
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace administration](https://app.shakebugs.com):

```dart title="main.dart"
//highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void main() {
    //highlight-start
    WidgetsFlutterBinding.ensureInitialized();

    Shake.setShowFloatingReportButton(true);
    Shake.setInvokeShakeOnShakeDeviceEvent(true);
    Shake.setInvokeShakeOnScreenshot(true);
    Shake.start('your-api-client-id', 'your-api-client-secret');
    //highlight-end

    runApp(Home());
}
```

Build and run your project by selecting _Run → Run_ in the menu bar.

## Conditional initialization

We recommend initializing Shake in the entry point of your app.
However, depending on your app, you'll want to initialize Shake just in a specific conditions, depending on your app data.
You can do it as shown in the example below when your app data is available:

```dart title="main_screen.dart"
//highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

class _MainScreenState extends State<MainScreen> {
  @override
  void initState() {
    super.initState();

    if (User.isTester) {
        // highlight-next-line
        Shake.start('your-api-client-id', 'your-api-client-secret');
    }
  }
```

## Visit your Shake dashboard

Follow the instructions there to send your first feedback with Shake and you're all set.

## SDK customizations

Now that Shake SDK is in your app and you have sent the first feedback for fun, everything else is optional.
As the next step, try the three most popular SDK customizations:

<div class="featuresList">
    <div>
        <img src="/docs/img/screen-recording@2x.png" alt="Turn on auto screen recording"/>
        <p><a href="/docs/flutter/configuration-and-data/auto-screen-recording/">Turn on auto screen recording</a></p>
    </div>
    <div>
        <img src="/docs/img/steps-to-reproduce@2x.png" alt="Tweak logging to your debugging needs"/>
        <p><a href="/docs/flutter/configuration-and-data/activity-history">Tweak logging to your debugging needs</a></p>
    </div>
    <div>
        <img src="/docs/img/feature-custom-ticket-data@2x.png" alt="Custom Ticket data"/>
        <p><a href="/docs/flutter/configuration-and-data/ticket-metadata/">Custom Ticket data</a></p>
    </div>
</div>
