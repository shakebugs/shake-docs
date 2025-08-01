---
id: cdn
title: CDN
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Learn how to add Shake to your Web app using CDN.

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/install/spm/">iOS</a>&nbsp; 
<a href="/docs/android/installation/">Android</a>&nbsp;
<a href="/docs/react/installation/">React Native</a>&nbsp;
<a href="/docs/flutter/installation/">Flutter</a>&nbsp;  
<a href="/docs/chrome-extension/installation/">Chrome extension</a>&nbsp;
</p>


## Create a new app on Dashboard

Visit your [Shake Dashboard](https://app.shakebugs.com) and add a new Web app by clicking the *Add new app* button located in the bottom right corner.

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Add new app"
  width="380"
  src={useBaseUrl('img/add-new-app-button.png')}
/>
</table>

Once you're done, you're ready to proceed with the steps below.

## Add script element to your page

Shake can be added to your project through CDN. Bundle is delivered through JSDelivr CDN.

Add the following script to your code:

```html title="index.html"
// highlight-start
<script type="module">
    import Shake from 'https://cdn.jsdelivr.net/npm/@shakebugs/browser@latest/+esm'
    window.Shake = Shake;
</script>
// highlight-end
```

import ReactVersion from '@site/src/base/ReactVersion';

Make sure that you're using the latest Shake <ReactVersion/>.

## Initialize Shake

Call `Shake.start()` in your main file.
Replace `app-api-key` with the actual value you have in [your app settings](https://app.shakebugs.com/administration/apps):

```js title="index.js"
// highlight-next-line
window.Shake.start('app-api-key');
```

Now build and run your project. Shake should be working, as simple as that.

## Conditional initialization

We recommend initializing Shake in the entry point of your app.
However, depending on your app, you'll want to initialize Shake just in a specific conditions, depending on your app data.
You can do it as shown in the example below when your app data is available:

```js title="index.js"
if (User.isTester) {
    // highlight-next-line
    window.Shake.start('app-api-key');
}
```

## Visit your Shake dashboard

Follow the instructions there to send your first feedback with Shake and you're all set.

## SDK customizations

Now that Shake SDK is in your app and you have sent the first feedback for fun, everything else is optional.
As the next step, try the three most popular SDK customizations:

<div class="featuresList">
    <div>
        <img src="/docs/img/screen-recording@2x.png" alt="Screen recording"/>
        <p><a href="/docs/web/configuration-and-data/screen-recording">Screen recording</a></p>
    </div>
    <div>
        <img src="/docs/img/feature-custom-ticket-data@2x.png" alt="Custom Ticket data"/>
        <p><a href="/docs/web/configuration-and-data/ticket-metadata/">Custom Ticket data</a></p>
    </div>
</div>
