---
id: silent-user-feedback
title: Silent user feedback
---
>Send yourself feedback from the app background, without showing [Shake UI](react/shake-ui/overview.md).

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/user-feedback/silent-user-feedback/">iOS</a>&nbsp; 
<a href="/docs/android/user-feedback/silent-user-feedback/">Android</a>&nbsp;
<a href="/docs/flutter/user-feedback/silent-user-feedback/">Flutter</a>&nbsp;  
<a href="/docs/web/user-feedback/silent-user-feedback/">Web</a>&nbsp;
</p>


## Overview
You can send silent user feedback to yourself by calling the `Shake.silentReport` method anywhere after `Shake.start`. Feel free to add your own description to it as well.

*ShakeReportConfiguration* determines which data is attached to the silent user feedback:
* [Auto attached files](react/configuration-and-data/auto-attach-files.md)
* [Auto screen recording](react/configuration-and-data/auto-screen-recording.md) if the feature is turned on
* Etc.

```javascript title="App.js"
// highlight-next-line
import Shake, {ShakeFile, ShakeReportConfiguration} from '@shakebugs/react-native-shake';

const sendSilentReport = () => {
    // highlight-start
    const configuration = new ShakeReportConfiguration();
    configuration.blackBoxData = true;
    configuration.activityHistoryData = true;
    configuration.screenshot = true;
    configuration.video = false;

    Shake.silentReport(
        'Description #tag1 #tag2',
        [ShakeFile.create(path)],
        configuration);
     // highlight-end
}
```

## Show the Ticket submitted message

To optionally notify your user that a silent user feedback has just been submitted,
change the `ShakeReportConfiguration` and use that configuration object when
sending the silent user feedback with the `Shake.silentReport` method:

```javascript title="App.js"
// highlight-start
const configuration = new ShakeReportConfiguration();
configuration.showReportSentMessage = true;
// highlight-end
```
