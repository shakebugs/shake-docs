---
id: installation
title: Installation
---
> Learn how to add Shake to your Android app using Gradle.

## Add Shake dependency to your app-level build.gradle file
import AndroidVersionBlock from '@site/src/base/AndroidVersionBlock';

<AndroidVersionBlock></AndroidVersionBlock>

## Set compileSdkVersion version in the build.gradle file
Since Shake requires `compileSdkVersion` 29 or greater, verify that `compileSdkVersion` is correctly set in the app *build.gradle* file: 

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
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general):

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

If you’re creating a custom *Application* class for the first time, specify it in your *AndroidManifest.xml*:

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

:::note

We recommend initializing Shake in the *Application* class.
If, however, you want to initialize Shake after your app has started,
feel free to use `Shake.start()` method in the Activity. Just make sure you call it in the *onCreate* callback of the *Activity*.

:::

Build and run your project by selecting *Run → Run* in the menu bar. This first run will automatically
add your app to your [Shake dashboard](https://app.shakebugs.com/) based on your app bundle ID.

## Visit your Shake dashboard

Follow the instructions there to send your first feedback with Shake and you're all set.

## SDK customizations

Now that Shake SDK is in your app and you have sent the first feedback for fun, everything else is optional.
As the next step, try the three most popular SDK customizations:

<div class="featuresList">
    <div>
        <img src="/docs/img/screen-recording@2x.png" alt="Turn on auto screen recording"/>
        <p><a href="/docs/android/configuration-and-data/auto-screen-recording/">Turn on auto screen recording</a></p>
    </div>
    <div>
        <img src="/docs/img/steps-to-reproduce@2x.png" alt="Tweak logging to your debugging needs"/>
        <p><a href="/docs/android/configuration-and-data/activity-history">Tweak logging to your debugging needs</a></p>
    </div>
    <div>
        <img src="/docs/img/crash-reporting@2x.png" alt="Turn on app crash detection"/>
        <p><a href="/docs/android/crash-reports/overview">Turn on crash detection</a></p>
    </div>
</div>
