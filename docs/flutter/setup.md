---
id: setup
title: Install Shake
---
## Install
Add shake as a dependency to pubspec.yaml.
```yaml title="pubspec.yaml"
dependencies:
//highlight-next-line
    shake: ^10.0.0
```
Run `flutter pub get` to download the package.

Then include Shake package in your code
```dart title="lib/main.dart"
//highlight-next-line
import 'package:shake/shake.dart';
```

## Initialize
To start shake you need to enable desired invocation methods, 
and then call `Shake.start()`.

```dart "lib/main.dart"
import 'package:shake/shake.dart';
...
//highlight-start
Shake.setShowFloatingReportButton(true);
Shake.setInvokeShakeOnShaking(true);
Shake.setInvokeShakeOnScreenshot(true);

Shake.start();
//highlight-end
```

## Add Client ID and Secret

### Android
Open your AndroidManifest.xml file. Paste this and replace *your-api-client-id* and
*your-api-client-secret* with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general).

```xml title="AndroidManifest.xml"
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <application
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:theme="@style/AppTheme" >
      <activity android:name=".MainActivity" android:label="@string/app_name" >
        <intent-filter>
          <action android:name="android.intent.action.MAIN" />
          <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      // highlight-start
      <meta-data                                                             
        android:name="com.shakebugs.APIClientID"
        android:value="your-api-client-id" />
      <meta-data
        android:name="com.shakebugs.APIClientSecret"
        android:value="your-api-client-secret" />
        // highlight-end
  </application>
  <uses-permission android:name="android.permission.INTERNET" />
</manifest>
```

### iOS
Open your workspace and in the *Project Navigator*, right click on *Info.plist*, and *Open as › Source code*.
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


