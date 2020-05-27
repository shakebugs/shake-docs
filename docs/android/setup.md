---
id: setup
title: Setup
---
This page describes how to install the Shake SDK into your Android application via Gradle.
Whether you are using Java or Kotlin, you can follow the steps below.

##  Install
Add Maven repository to your top-level build.gradle file

```javascript {3} title="build.gradle"
allprojects {
  repositories {
    maven { url 'https://dl.bintray.com/shake/shake' }
  }
}
```

Add Shake dependency to your app build.gradle file

```javascript {2} title="build.gradle"
dependencies {
  implementation 'com.shakebugs.android:shake:12.0.1'
}
```

## ProGuard
If you use ProGuard optimizer, you have to add this rule

```javascript title="proguard-rules.pro"
-keep public class com.shakebugs.shake.internal.data.** {
    public protected private *;
}
```

## Add Client ID and Client secret key
Add Client ID and Secret to AndroidManifest.xml as metadata. 
Open your AndroidManifest.xml file. Paste this but `replace sign-in-to-see-your-api-client-id-here` and 
`sign-in-to-see-your-api-client-secret-here` with the actual values you have in Your settings.

```xml {14-19} title="AndroidManifest.xml"
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
      <meta-data
        android:name="com.shakebugs.APIClientID"
        android:value="sign-in-to-see-your-api-client-id-here" />
      <meta-data
        android:name="com.shakebugs.APIClientSecret"
        android:value="sign-in-to-see-your-api-client-secret-here" />
  </application>
  <uses-permission android:name="android.permission.INTERNET" />
</manifest>
```

## Initialize
Initialize Shake in your App class using `Shake.start()` method

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

```java {2,9} title="App.java"
import android.app.Application;
import com.shakebugs.shake.Shake;

public class App extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    Shake.start(this);
  }
}
```

</TabItem>

<TabItem value="kotlin">

```java {2,8} title="App.kt"
import android.app.Application
import com.shakebugs.shake.Shake

class App : Application() {

  override fun onCreate() {
    super.onCreate()
    Shake.start(this)
  }
}
```

</TabItem>
</Tabs>

Now build your project and see everything work! To build and run your app, select `Run › Run` in the menu bar. 
This first run will automatically add your app to your Shake Dashboard based on your app bundle ID.
