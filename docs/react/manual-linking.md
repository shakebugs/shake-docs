---
id: manual-linking
title: Manual linking
---

Normally, linking is done automatically or using link command.
If you want to link it manually, you can do it following way.

### Android
Add the following lines of code to your *settings.gradle* file:

```groovy title="settings.gradle"
// highlight-start
include ':@shakebugs_react-native-shake'
project(':@shakebugs_react-native-shake').projectDir = new File(rootProject.projectDir, '../node_modules/@shakebugs/react-native-shake/android')
// highlight-end
```

Then, include the following dependency to app-level *build.gradle* file:

```groovy title="app/build.gradle"
dependencies {
    // highlight-next-line
    implementation project(':@shakebugs_react-native-shake')
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
    implementation "com.facebook.react:react-native:+"  // From node_modules
}
```

Update the `getPackages()` method:

```java title="MainApplication.java"
 @Override protected List<ReactPackage> getPackages() {
    @SuppressWarnings("UnnecessaryLocalVariable")
    List<ReactPackage> packages = new PackageList(this).getPackages();
    // Packages that cannot be autolinked yet can be added manually here, for example:
    // packages.add(new MyReactNativePackage());
    // highlight-next-line
    packages.add(new ShakePackage());
    return packages;
 } 
```

If you do not have *multiDexEnabled*, update app level *build.gradle*:

```groovy title="app/build.gradle"
defaultConfig {
  applicationId "com.shakebugs.react.example"
  minSdkVersion rootProject.ext.minSdkVersion
  targetSdkVersion rootProject.ext.targetSdkVersion
  versionCode 1
  versionName "1.0.0"
  // highlight-next-line
  multiDexEnabled true
}
```

Enable touch tracking in Android apps by adding following code to the *MainActivity.java*:

```java title="MainActivity.java"
package com.shakebugs.react.example;

// highlight-next-line
import android.view.MotionEvent;

import com.facebook.react.ReactActivity;

// highlight-next-line
import com.shakebugs.shake.Shake;

public class MainActivity extends ReactActivity {
    @Override
    protected String getMainComponentName() {
        return "example";
    }

    // highlight-start
    @Override
    public boolean dispatchTouchEvent(MotionEvent ev) {
        Shake.handleTouchEvent(ev, this);
        return super.dispatchTouchEvent(ev);
    }
    // highlight-end
}

```


### iOS
Open your project in the Xcode by clicking project's *.xcodeproj* file.

Copy *RNShake.xcodeproj* from *$rootDir/node_modules/@shakebugs/react-native-shake/ios/* to the *Libraries* folder of your project.

Drag the *libRNShake.a* from the Library *Products* folder to the *Link Binary With Libraries* in the *Build Phases* section.
