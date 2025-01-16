---
id: manual-linking
title: Manual linking
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> If you want to link library manually, you can do it this way.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/install/manually/">iOS</a>&nbsp; 
<a href="/docs/android/installation/">Android</a>&nbsp;
<a href="/docs/flutter/installation/">Flutter</a>&nbsp;  
<a href="/docs/web/install/cdn/">Web</a>&nbsp;
</p>


## Create a new app on Dashboard

Visit your [Shake Dashboard](https://app.shakebugs.com) and add a new React Native Android/iOS app by clicking the *Add new app* button located in the bottom right corner.

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Add new app"
  width="380"
  src={useBaseUrl('img/add-new-app-button.png')}
/>
</table>

On "Add app" screen, select *React Native Android* or *React Native iOS* app.
Once you're done, you're ready to proceed with the steps below.

## Android

Add the following lines of code to your *settings.gradle* file:

```groovy title="settings.gradle"
// highlight-start
include ':@shakebugs_react-native-shake'
project(':@shakebugs_react-native-shake').projectDir = new File(rootProject.projectDir, '../node_modules/@shakebugs/react-native-shake/android')
// highlight-end
```

Then, include the following dependency to the app-level *build.gradle* file:

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

## iOS

1. Open your project in Xcode by clicking project's *.xcodeproj* file.
1. Copy *RNShake.xcodeproj* from *$rootDir/node_modules/@shakebugs/react-native-shake/ios/* to the *Libraries* folder of your project.
1. Drag *libRNShake.a* from the *Libraries / RNShake / Products* folder to *Link Binary With Libraries* in the *Build Phases* section.
