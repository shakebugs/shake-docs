---
id: setup
title: Setup
---
## Install
Execute the npm install command in your terminal: 

```bash title="Terminal"
npm install @shakebugs/react-native-shake
```

If you are using a React Native version 0.60 or greater, you should also run add command:

```bash title="Terminal"
react-native add-shake
```

If you are using a React Native version older than 0.60, you should instead run link command:

```bash title="Terminal"
react-native link @shakebugs/react-native-shake
```

Install pods from the project root directory:

```bash title="Terminal"
cd ios && pod install && cd ..
```

## Initialize
### Android
Normally, initialization is done using `react-native link @shakebugs/react-native-shake` or `react-native add-shake` commands.
If you want to initialize Shake manually, you can do it following way.

Include Shake maven repository to your project-level build.gradle file: 

```groovy {16} title="build.gradle"
allprojects {
   repositories {
       mavenLocal()
       maven {
           // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
           url("$rootDir/../node_modules/react-native/android")
       }
       maven {
           // Android JSC is installed from npm
           url("$rootDir/../node_modules/jsc-android/dist")
       }

       google()
       jcenter()
       maven { url 'https://www.jitpack.io' }
       maven { url 'https://dl.bintray.com/shake/shake' }                                             
   }
}
```

Add the following dependency to your app-level Build.gradle file: 

```groovy {2} title="app/build.gradle"
dependencies {
  implementation 'com.shakebugs.android:shake:9.0.+'                         
}
```

If you do not have multiDexEnabled, update app level build.gradle:

```groovy {7} title="app/build.gradle"
defaultConfig {
  applicationId "com.shakebugs.react.example"
  minSdkVersion rootProject.ext.minSdkVersion
  targetSdkVersion rootProject.ext.targetSdkVersion
  versionCode 6
  versionName "2.3.2"
  multiDexEnabled true                                                        
}
```

Set an invocation event and initialize the SDK: 

```java {1,2,9,10} title="MainApplication.java"
import com.shakebugs.shake.Shake;                                          
import com.shakebugs.shake.ShakeInvocationEvent;                            

@Override
public void onCreate() {
 super.onCreate();
 SoLoader.init(this, /* native exopackage */ false);
 initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
 Shake.setInvocationEvents(ShakeInvocationEvent.BUTTON);                    
 Shake.start(this);                                                        
}
``` 

Now build your project and see everything work! This first run will automatically add your app 
to your [Shake Dashboard](https://app.shakebugs.com) based on your app bundle ID.

### iOS
Call `Shake.start()` method whenever you want to enable Shake:

```javascript {2,6} title="App.js"
Import React, {Component} from 'react';
import Shake, {ShakeInvocationEvent} from '@shakebugs/react-native-shake';
Import {View} from 'react-native';
export default class App extends Component<{}> {
	componentDidMount() {
		Shake.start();                                                          
	}
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}
```

This first run will automatically add your app to your [Shake Dashboard](https://app.shakebugs.com) based on your app bundle ID.

## Add Client ID and Client secret key 

### Android
Open your AndroidManifest.xml file. Paste this and replace `sign-in-to-see-your-api-client-id-here`and 
`sign-in-to-see-your-api-client-secret-here` with the actual values you have in Your settings.

```xml {13-18} title="AndroidManifest.xml"
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

### iOS
Open your workspace and in the `Project Navigator`, right click on `Info.plist`, and `Open as › Source code`. 
Paste this but replace `sign-in-to-see-your-api-client-id-here` and `sign-in-to-see-your-api-client-secret-here` 
with the actual values you have in Your settings.

```xml {4-10} title="Info.plist"
<?xml version="1.0" encoding="utf-8" ?>
<plist version="1.0">
  <dict>
      <key>Shake</key>
      <dict>
        <key>APIClientID</key>                                                
        <string>sign-in-to-see-your-api-client-id-here</string>
        <key>APIClientSecret</key>                                            
        <string>sign-in-to-see-your-api-client-secret-here</string>
      </dict>
  </dict>
</plist>
```

## Manual linking
Normally, linking is done automatically or using `react-native link @shakebugs/react-native-shake` command.
If you want to link it manually, you can do it following way.

### Android
Add the following lines of code to your settings.gradle file:

```groovy title="settings.gradle"
include ':@shakebugs_react-native-shake'
project(':@shakebugs_react-native-shake').projectDir = new File(rootProject.projectDir, '../node_modules/@shakebugs/react-native-shake/android')
```

Then, include the following dependency to app-level build.gradle file:

```groovy {2} title="app/build.gradle"
dependencies {
    implementation project(':@shakebugs_react-native-shake')                                    
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
    implementation "com.facebook.react:react-native:+"  // From node_modules
}
```

Update the `getPackages()` method:

```java {6} title="MainApplication.java"
 @Override protected List<ReactPackage> getPackages() { 
    @SuppressWarnings("UnnecessaryLocalVariable")  
    List<ReactPackage> packages = new PackageList(this).getPackages();
    // Packages that cannot be autolinked yet can be added manually here, for example:
    // packages.add(new MyReactNativePackage());
    packages.add(new ShakePackage());                                                            
    return packages;
 } 
```

### iOS

After executing npm install, find `Shake.xcodeproj` in `$rootDir/node_modules/react-native/shake/ios/`. 
Add it to the `Libraries` folder of your app project. 

Navigate to the `Building phases` tab and add `libShake.a` to the `Link Binary With Libraries` section. 
