---
id: npm
title: npm
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Learn how to add Shake to your React Native app using npm.

## Create a new app on Dashboard

Visit your [Shake Dashboard](https://app.shakebugs.com) and add a new Android/iOS React Native app by clicking the *Add new app* button located in the bottom right corner.

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Add new app"
  width="380"
  src={useBaseUrl('img/add-new-app-button.png')}
/>
</table>

Once you're done, you're ready to proceed with the steps below.

## Add Shake dependency to your package.json file

Execute the `npm install` command in your terminal:

```bash title="Terminal"
// highlight-next-line
npm install @shakebugs/react-native-shake
```

Install pods from the project root directory:

```bash title="Terminal"
// highlight-next-line
cd ios && pod install && cd ..
```

import ReactVersion from '@site/src/base/ReactVersion';

After the installation also run `pod update Shake` to be perfectly sure that you're using the latest Shake <ReactVersion/>.

## Initialize Shake

Call `Shake.start()` in your _index.js_ file.
Replace `ios-app-api-key` and `android-app-api-key` with the actual values you have in [your apps settings](https://app.shakebugs.com/administration/apps):

```js title="index.js"
// highlight-start
import { Platform } from 'react-native';
import Shake from '@shakebugs/react-native-shake';
// highlight-end

AppRegistry.registerComponent(appName, () => App);

// highlight-start
const apiKey = Platform.OS === 'ios' ? 'ios-app-api-key' : 'android-app-api-key';
Shake.start(apiKey);
// highlight-end
```

Bundle your project code by running `npm run start` command in the terminal.
Then use `npm run android` or `npm run ios` command to run your app on the device.

## Conditional initialization

We recommend initializing Shake in the entry point of your app.
However, depending on your app, you'll want to initialize Shake just in a specific conditions, depending on your app data.
You can do it as shown in the example below when your app data is available:

```js title="MainScreen.js"
// highlight-start
import { Platform } from 'react-native';
import Shake from '@shakebugs/react-native-shake';
// highlight-end

const MainScreen = (props) => {
	useEffect(() => {
		if (User.isTester) {
            // highlight-start
            const apiKey = Platform.OS === 'ios' ? 'ios-app-api-key' : 'android-app-api-key';
            Shake.start(apiKey);
            // highlight-end
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
