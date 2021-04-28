---
id: upgrading-version
title: Upgrading version
---

We've listed the breaking changes between the two latest major versions to make your upgrading process easier.

## Start method
From now, you can start Shake from Dart code for both Android and iOS by calling `Shake.start()` method.
Client id and client secret keys are passed as parameters of `Shake.start()` method instead in `.xml` and `.plist` files.

Use:
```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void initializeShake() {
    // highlight-next-line
    Shake.start('client-id', 'client-secret');
}
```

Instead:

```xml title="AndroidManifest.xml"
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
            android:allowBackup="true"
            android:icon="@mipmap/ic_launcher"
            android:label="@string/app_name"
            android:theme="@style/AppTheme" >
        // highlight-start
        <meta-data
                android:name="com.shakebugs.APIClientID"
                android:value="your-api-client-id" />
        <meta-data
                android:name="com.shakebugs.APIClientSecret"
                android:value="your-api-client-secret" />
        // highlight-end
    </application>
</manifest>
```

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

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void initializeShake() {
    // highlight-next-line
    Shake.start();
}
```

## Quick facts
Quick facts are removed from SDK in favor of [Metadata](/flutter/metadata.md).

Use:
```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void attachData(User user) {
    // highlight-start
    Shake.setMetadata('userId', user.id);
    Shake.setMetadata('userName', user.name);
    // highlight-end
}
```

Instead:

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void attachData(User user) {
    // highlight-next-line
    Shake.setShakeReportData('userId: ' + user.id + ' userName: ' + user.name, []);
}
```

Note that methods for sending silent reports and attaching files don't require quick facts anymore.
