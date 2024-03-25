---
id: npm
title: npm
---

> Learn how to add Shake to your Web app using npm.

:::note
Shake SDK npm package contains javascript code and CSS styles for Shake SDK.  
Make sure that your project supports ES6 imports and that you are using CSS loader if you are using npm package. Otherwise, we recommend using Shake from [CDN](/docs/web/install/cdn).
:::

## Create a new app on Dashboard

Visit your [Shake Dashboard](https://app.shakebugs.com) and add a new Web app by clicking the _+_ button in the sidebar.
Once you're done, you're ready to proceed with the steps below.

## Add Shake dependency to your package.json file

Execute the `npm install` command in your terminal:

```bash title="Terminal"
// highlight-next-line
npm install @shakebugs/browser
```

import WebVersion from '@site/src/base/WebVersion';

Make sure that you're using the latest Shake <WebVersion/>.

## Initialize Shake

Call `Shake.start()` in your main file.
Replace `your-api-client-id` and `your-api-client-secret` with the actual values you have in [your workspace administration](https://app.shakebugs.com/administration).
Replace `app-bundle-id` with bundle id of your app located in the _Workspace Administration_ → _Apps_:

```js title="index.js"
// highlight-next-line
import Shake from '@shakebugs/browser';

// highlight-next-line
Shake.start('your-api-client-id', 'your-api-client-secret', 'app-bundle-id');
```

Now build and run your project. Shake should be working, as simple as that.

## Conditional initialization

We recommend initializing Shake in the entry point of your app.
However, depending on your app, you'll want to initialize Shake just in a specific conditions, depending on your app data.
You can do it as shown in the example below when your app data is available:

```js title="MainScreen.js"
// highlight-next-line
import Shake from '@shakebugs/browser';

const MainScreen = (props) => {
	useEffect(() => {
		if (User.isTester) {
			// highlight-next-line
            Shake.start('your-api-client-id', 'your-api-client-secret', 'app-bundle-id');
		}
	}, []);
};
```

## Visit your Shake dashboard

Follow the instructions there to send your first feedback with Shake and you're all set.

## SDK customizations

Now that Shake SDK is in your app and you have sent the first feedback for fun, everything else is optional.
As the next step, try the three most popular SDK customizations:

<div class="featuresList">
    <div>
        <img src="/docs/img/screen-recording@2x.png" alt="Screen recording"/>
        <p><a href="/docs/web/configuration-and-data/screen-recording/">Screen recording</a></p>
    </div>
    <div>
        <img src="/docs/img/feature-custom-ticket-data@2x.png" alt="Custom Ticket data"/>
        <p><a href="/docs/web/configuration-and-data/ticket-metadata/">Custom Ticket data</a></p>
    </div>
</div>
