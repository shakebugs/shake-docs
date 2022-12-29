---
id: installation
title: Installation
---

> Learn how to add Shake to your Android app using Gradle.

## Create a new app on Dashboard

Visit your [Shake Dashboard](https://app.shakebugs.com) and add a new Native Android app by clicking
the _Add new app_ button or from _Top navbar → App → ... → Add new app_.
Once you're done, you're ready to proceed with the steps below.

## Add Shake dependency to your app-level build.gradle file

import AndroidVersionBlock from '@site/src/base/AndroidVersionBlock';

<AndroidVersionBlock></AndroidVersionBlock>

## Set compileSdkVersion version in the build.gradle file

Since Shake requires `compileSdkVersion` 29 or greater, verify that `compileSdkVersion` is correctly set in the app _build.gradle_ file:

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

## Set applicationId in the build.gradle file

ApplicationId can be set in the _build.gradle_ file. You can find your applicationld in Shake Dashboard. Go to _Workspace administration → Apps_ and select an app to which you want to add Shake SDK. Check _Essentials_ card to find your applicationID as _bundleID_.

```groovy title="build.gradle"
android {
    compileSdkVersion 30
    defaultConfig {
        // highlight-next-line
        applicationId "com.example"
    }
}
```

## Initialize Shake

Initialize Shake in the `onCreate` callback of your _Application_.
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace administration](https://app.shakebugs.com/administration):

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

If you’re creating a custom _Application_ class for the first time, specify it in your _AndroidManifest.xml_:

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

Build and run your project by selecting _Run → Run_ in the menu bar.

## Conditional initialization

We recommend initializing Shake in the entry point of your app.
However, depending on your app, you'll want to initialize Shake just in a specific conditions, depending on your app data.
You can do it as shown in the example below when your app data is available:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="MainActivity.java"
public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        if (User.isTester) {
            // highlight-next-line
            Shake.start(this, "your-api-client-id", "your-api-client-secret");
        }
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="MainActivity.kt"
class MainActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        if (User.isTester) {
            // highlight-next-line
            Shake.start(this, "your-api-client-id", "your-api-client-secret")
        }
    }
}
```

</TabItem>
</Tabs>

:::note

If you are initializing Shake outside _Application_ class, make sure you initialize it in the _onCreate_ callback of the _Activity_.

:::

## Visit your Shake Dashboard again

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
