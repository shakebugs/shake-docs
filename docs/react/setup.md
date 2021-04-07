---
id: setup
title: npm
---
## Install
Execute the `npm install` command in your terminal:

```bash title="Terminal"
// highlight-next-line
npm install @shakebugs/react-native-shake
```

If you use React Native version 0.60 or greater, you should also run the `add` command:

```bash title="Terminal"
// highlight-next-line
react-native add-shake
```

If you use React Native version lower than 0.60, you should run the `link` command instead:

```bash title="Terminal"
// highlight-next-line
react-native link @shakebugs/react-native-shake
```

Install pods from the project root directory:

```bash title="Terminal"
// highlight-next-line
cd ios && pod install && cd ..
```

## Set compileSdkVersion version in the build.gradle file
Since Shake requires `compileSdkVersion` 29 or greater, verify that `compileSdkVersion` is correctly set in the */android/build.gradle* file.

```groovy title="build.gradle"
buildscript {
    ext {
        buildToolsVersion = "29.0.3"
        minSdkVersion = 21
        // highlight-next-line
        compileSdkVersion = 29
        targetSdkVersion = 29
    }
    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:3.5.2")
    }
}

...
```

## Initialize Shake

Call `Shake.start()` method in your *index.js* file. 
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace settings](https://app.shakebugs.com/settings/workspace#general).

```javascript title="index.js"
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

AppRegistry.registerComponent(appName, () => App);

// highlight-next-line
Shake.start('your-api-client-id', 'your-api-client-secret');
```

Now build your project and see everything work!  

To build and run your app, first run `react-native start` command in the terminal. 
Use `react-native run-android` command to run your app on the Android device. 
Or use `react-native run-ios` command to run your app on the iOS device. 
 
This first run will automatically add your app to your [Shake Dashboard](https://app.shakebugs.com/) based on your app application ID.
