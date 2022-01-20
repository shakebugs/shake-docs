---
id: intro-message
title: Intro message
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>There's a simple way to let all your app users or testers know how to send you feedback.

<table class="media-container media-container-highlighted mt-50 pb-80">
<img
  alt="User feedback intro message"
  width="380"
  src={useBaseUrl('screens/android-macro-intro-message@2x.png')}
/>
</table>

If enabled, a one-off intro message will be shown to your users as soon as they open your app for the first time.
Its text is automatically set based on the [manual invocations you use](/react/user-feedback/invoke.md#invoke-manually), so you don't need to write anything.
This message is disabled by default. Enable it easily using the following method:

```javascript title="App.js"
// highlight-next-line
Shake.setShowIntroMessage(true);
```
