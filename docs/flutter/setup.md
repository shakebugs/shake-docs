---
id: setup
title: Pub
---
## Install
Add Shake as a dependency to *pubspec.yaml*.

import FlutterVersionBlock from '@site/src/base/FlutterVersionBlock';

<FlutterVersionBlock></FlutterVersionBlock>

Run `flutter pub get` to download the package.

Then include Shake package in your code
```dart title="main.dart"
//highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';
```

## Set compileSdkVersion version in the build.gradle file
Since Shake requires `compileSdkVersion` 29 or greater, verify that `compileSdkVersion` is correctly set in the */android/build.gradle* file.

```groovy title="build.gradle"
buildscript {
    ext {
        buildToolsVersion = "29.0.3"
        minSdkVersion = 21
        // highlight-next-line
        compileSdkVersion = 29
        targetSdkVersion = 29
    }
    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:3.5.2")
    }
}
```

## Initialize Shake

Call `Shake.start()` method in your *main.dart* file. 
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general).

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

Now build your project and see everything work! To build and run your
app, select *Run › Run* in the menu bar. This first run will automatically
add your app to your [Shake Dashboard](https://app.shakebugs.com/) based on your app bundle ID.

:::note

Shake supports post Flutter 1.12 projects. If your project is created with the older version
of Flutter, you should migrate your project to the new Android APIs via [official guide](https://flutter.dev/go/android-project-migration).

:::

:::note

Shake supports devices with Android 7.0 version and higher.

:::
