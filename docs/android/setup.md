---
id: setup
title: Install Shake
---
This page describes how to install the Shake SDK into your Android application via Gradle.
Whether you are using Java or Kotlin, you can follow the steps below.

## Add Maven repository to your top-level build.gradle file
```groovy title="build.gradle"
allprojects {
  repositories {
    // highlight-next-line
    maven { url 'https://dl.bintray.com/shake/shake' }
  }
}
```

## Add Shake dependency to your app-level build.gradle file
import AndroidVersionBlock from '@site/src/base/AndroidVersionBlock';

<AndroidVersionBlock></AndroidVersionBlock>

## Add Client ID and Secret to AndroidManifest.xml as metadata
Open your AndroidManifest.xml file. Paste this but replace `your-api-client-id` and
`your-api-client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general).

```xml title="AndroidManifest.xml"
<?xml version="1.0" encoding="utf-8"?>
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

## Caveat for apps compiling with version 28 and lower
The Shake SDK is built with the latest Android SDK version which requires `android:foregroundServiceType="mediaProjection"` attribute defined in the *AndroidManifest.xml* file for the screen recording service.

If your app `compileSdkVersion` is 28 or lower, you will get the following build error.

```
AAPT: error: attribute android:foregroundServiceType not found.
```

To fix this, you will have to remove *foregroundServiceType* attribute in your *AndroidManifest.xml* file.
Open your *AndroidManifest.xml* file and paste the following code snippet:

```xml title="AndroidManifest.xml"
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
      // highlight-start
      xmlns:tools="http://schemas.android.com/tools"
      // highlight-end
>
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
      <service android:name="com.shakebugs.shake.internal.service.ScreenRecordingService"
            tools:node="replace"/>
      // highlight-end
  </application>/>
</manifest>
```

:::note

[Screen recording](/android/screen-recording.md) feature requires `compileSdkVersion` 29 or greater.
If you want to use screen recording feature, you should verify that `compileSdkVersion` and `targetSdkVersion`
are correctly set in the app *build.gradle* file.

:::

## Initialize Shake
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
    Shake.start(this);
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
    Shake.start(this)
  }
}
```

</TabItem>
</Tabs>

Now build your project and see everything work! To build and run your
app, select *Run › Run* in the menu bar. This first run will automatically
add your app to your [Shake Dashboard](https://app.shakebugs.com/) based on your app bundle ID.
