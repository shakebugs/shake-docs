﻿---
id: auto-screenshot
title: Auto screenshot
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> When Shake's New ticket screen is invoked, a screenshot is automatically attached to it.

<p class="p2 mt-40">You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/auto-screenshot/">iOS</a>&nbsp;  
<a href="/docs/android/configuration-and-data/auto-screenshot/">Android</a>&nbsp;
<a href="/docs/react/configuration-and-data/auto-screenshot/">React Native</a>&nbsp; 
<a href="/docs/web/configuration-and-data/screen-capture/">Web</a>&nbsp; 
</p>

<table class="media-container media-container-highlighted mt-50 mb-40">
<img
  alt="Auto screenshot"
  width="380"
  src={useBaseUrl('img/phone-auto-screenshot@2x.png')}
/>
</table>

## Disable

Imagine a case where you leave the auto screenshot enabled and you set up Shake in a way that your users report all their issues and suggestions
only by visiting **My account → Help** in your app. Since Shake would always be invoked from that same place, every ticket your users send you
would always have the identical screenshot attached. That would be both confusing and useless.

<table class="media-container mt-40 mb-40">
<img
  alt="Open Shake Home screen"
  width="520"
  src={useBaseUrl('screens/open-shake-home-screen@2x.png')}
/>
</table>

Disable auto screenshot using the following snippet:

```dart title="main.dart"
// highlight-next-line
Shake.setScreenshotIncluded(false);
```

## Privacy
Visit [Protect sensitive data](/flutter/configuration-and-data/manage-sensitive-data/#views) to learn
how to easily mark any view as private so it's automatically deleted from the auto screenshot.
