---
id: npm
title: npm
---

> Learn how to add Shake to your React Native app using npm.

## Install
Execute the `npm install` command in your terminal:

```bash title="Terminal"
// highlight-next-line
npm install @shakebugs/react-native-shake
```

If you use React Native version 0.60 or greater, also run the `add` command:

```bash title="Terminal"
// highlight-next-line
react-native add-shake
```

If you use React Native version lower than 0.60, run the `link` command instead:

```bash title="Terminal"
// highlight-next-line
react-native link @shakebugs/react-native-shake
```

Install pods from the project root directory:

```bash title="Terminal"
// highlight-next-line
cd ios && pod install && cd ..
```

import ReactVersion from '@site/src/base/ReactVersion';

After the installation also run `pod update Shake` to be perfectly sure that you're using the latest Shake <ReactVersion/>.

## Set compileSdkVersion version in the build.gradle file
Since Shake requires `compileSdkVersion` 29 or greater, verify that `compileSdkVersion` is correctly set in the *build.gradle* file:

```groovy title="android/build.gradle"
buildscript {
    ext {
        buildToolsVersion = "30.0.2"
        minSdkVersion = 21
        // highlight-next-line
        compileSdkVersion = 30
        targetSdkVersion = 30
        ndkVersion = "20.1.5948944"
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:4.2.1")
    }
}
```

## Initialize Shake

Call `Shake.start()` in your *index.js* file. 
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general):

```js title="index.js"
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

AppRegistry.registerComponent(appName, () => App);

// highlight-next-line
Shake.start('your-api-client-id', 'your-api-client-secret');
```

Build and run your project by running `react-native start` command in the terminal. 
Use the `react-native run-android` command to run your app on the Android device. 
Or use the `react-native run-ios` command to run your app on the iOS device. 
 
This first run will automatically
add your app to your [Shake dashboard](https://app.shakebugs.com/) based on your app bundle ID.

## Conditional initialization

We recommend initializing Shake in the entry point of your app.
However, depending on your app, you'll want to initialize Shake just in a specific conditions, depending on your app data.
You can do it as shown in the example below when your app data is available:

```js title="MainScreen.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const MainScreen = props => {

  useEffect(() => {
    if (User.isTester) {
        // highlight-next-line
        Shake.start('your-api-client-id', 'your-api-client-secret');
    }
  }, []);
}
```

## Visit your Shake dashboard

Follow the instructions there to send your first feedback with Shake and you're all set.

## SDK customizations

Now that Shake SDK is in your app and you have sent the first feedback for fun, everything else is optional.
As the next step, try the three most popular SDK customizations:

<div class="featuresList">
    <div>
        <img src="/docs/img/screen-recording@2x.png" alt="Turn on auto screen recording"/>
        <p><a href="/docs/react/configuration-and-data/auto-screen-recording/">Turn on auto screen recording</a></p>
    </div>
    <div>
        <img src="/docs/img/steps-to-reproduce@2x.png" alt="Tweak logging to your debugging needs"/>
        <p><a href="/docs/react/configuration-and-data/activity-history">Tweak logging to your debugging needs</a></p>
    </div>
    <div>
        <img src="/docs/img/feature-custom-ticket-data@2x.png" alt="Custom Ticket data"/>
        <p><a href="/docs/react/configuration-and-data/ticket-metadata/">Custom Ticket data</a></p>
    </div>
</div>
