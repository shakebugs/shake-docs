---
id: installation
title: Installation
---

> Learn how to add Shake to your Android app using Gradle.

## Create a new app on Dashboard

Visit your [Shake Dashboard](https://app.shakebugs.com) and add a new Native Android app by clicking the _+_ button in the sidebar.
Once you're done, you're ready to proceed with the steps below.

## Add Shake dependency to your app-level build.gradle file

import AndroidVersionBlock from '@site/src/base/AndroidVersionBlock';

<AndroidVersionBlock></AndroidVersionBlock>

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


:::note

If you are using chat feature and push notifications, make sure that Shake is started in the _Application_ class.

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
