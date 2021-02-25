---
id: upgrading-version
title: Upgrading version
---

We've listed the breaking changes between the two latest major versions to make your upgrading process easier.

## Start method
From now, you can start Shake from javascript code for both Android and iOS by calling `Shake.start()` method.
Client id and client secret keys are passed as parameters of `Shake.start()` method instead in `.xml` and `.plist` files.

Use:
```javascript title="index.js"
// highlight-next-line
import Shake from "@shakebugs/react-native-shake";

const initializeShake = () => {
    // highlight-next-line
    Shake.start("client-id", "client-secret");
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

```java title="MainApplication.java"
// highlight-next-line
import com.shakebugs.shake.Shake;

public class MainApplication extends Application implements ReactApplication {
  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
    // highlight-next-line
    Shake.start(this);
  }
    
  ...
}
```

```javascript title="index.js"
// highlight-next-line
import Shake from "@shakebugs/react-native-shake";

const initializeShake = () => {
    // highlight-next-line
    Shake.start();
}
```

## Network tracker
Disabling and enabling network tracker is now done through `Shake.setNetworkRequestsEnabled()` method.
If you want to enable network requests tracker, pass `true` as a parameter, otherwise pass `false`:

Use:
```javascript title="App.js"
// highlight-next-line
import Shake from "@shakebugs/react-native-shake";

const initializeShake = () => {
    // highlight-next-line
    Shake.setNetworkRequestsEnabled(true);
    Shake.start("client-id", "client-secret");
}
```

Instead:
```javascript title="App.js"
// highlight-next-line
import Shake, { NetworkTracker } from "@shakebugs/react-native-shake";

const initializeShake = () => {
    // highlight-next-line
    NetworkTracker.setEnabled(true);
    Shake.start();
}
```

## Quick facts
Quick facts are removed from SDK in favor of [Metadata](/react/metadata.md).

Use:
```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const attachData = (user) => {
    // highlight-start
    Shake.setMetadata("userId", user.id);
    Shake.setMetadata("userName", user.name);
    // highlight-end
}
```

Instead:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const attachData = (user) => {
    // highlight-next-line
    Shake.setShakeReportData([], "userId: " + user.id + " userName: " + user.name);
}
```

Note that methods for sending silent reports and attaching files don't require quick facts anymore.
