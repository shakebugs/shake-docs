---
id: setup
title: Install Shake
---
This page describes how to install the Shake SDK into your Android application via Gradle.
Whether you are using Java or Kotlin, you can follow the steps below.

## Add Shake dependency to your app-level build.gradle file
import AndroidVersionBlock from '@site/src/base/AndroidVersionBlock';

<AndroidVersionBlock></AndroidVersionBlock>

## Set compileSdkVersion version in the build.gradle file
Since Shake requires `compileSdkVersion` 29 or greater, verify that `compileSdkVersion` is correctly set in the app *build.gradle* file.

```groovy title="build.gradle"
android {
    // highlight-next-line
    compileSdkVersion 30
    defaultConfig {
        applicationId "com.example"
        minSdkVersion 21
        targetSdkVersion 30
        versionCode 1
        versionName "1.0.0"
        testInstrumentationRunner "androidx.support.test.runner.AndroidJUnitRunner"
        multiDexEnabled true
    }
}
```

## Initialize Shake
Initialize Shake in the `onCreate` callback of your *Application*.
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
import android.app.Application;
  // highlight-next-line
import com.shakebugs.shake.Shake;

public class App extends Application {
  @Override
  public void onCreate() {
    super.onCreate();
    // highlight-next-line
    Shake.start(this, "your-api-client-id", "your-api-client-secret");
  }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
import android.app.Application
// highlight-next-line
import com.shakebugs.shake.Shake

class App : Application() {
  override fun onCreate() {
    super.onCreate()
    // highlight-next-line
    Shake.start(this, "your-api-client-id", "your-api-client-secret")
  }
}
```

</TabItem>
</Tabs>

If you’re creating a custom *Application* class for the first time, make sure to specify it in your *AndroidManifest.xml*:

```xml title="AndroidManifest.xml"
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <application
      // highlight-start
      android:name=".App">
      // highlight-end
  </application>
</manifest>
```

Now build your project and see everything work! To build and run your
app, select *Run › Run* in the menu bar. This first run will automatically
add your app to your [Shake Dashboard](https://app.shakebugs.com/) based on your app bundle ID.
