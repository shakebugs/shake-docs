---
id: attachments
title: Attachments
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page explains how to instruct the SDK to attach a file to your bug report and send it to your web Dashboard.

## Introduction
By default, a bug report contains only files that the user attaches to it.
However, you can instruct Shake SDK to create and attach custom files that you need, for example,
XMPP logs, a user's profile photo, or whatever you might want to inspect later on.
 All attached files will appear in the center of your web Dashboard.

<img
  alt="Attachments screen"
  src={useBaseUrl('screens/attachments_screen.png')}
/>


## Methods
### Attaching a file with a default name
Files can be attached with an absolute file path to your file.
If you attach files this way, the filename shown on the web Dashboard
will be determined automatically from the passed file's name.

To attach files this way, call the `Shake.setShakeReportData()` method as shown in the example below.
Be careful though, any subsequent calls will override former ones already in place:

```javascript title="App.js"
// highlight-next-line
import Shake, {ShakeFile} from '@shakebugs/react-native-shake';
import RNFS from 'react-native-fs';

attachLogFile = (data) => {
  const path = RNFS.DocumentDirectoryPath + '/log.txt';
  RNFS.writeFile(path, data, 'utf8')
    .then((success) => {
      console.log('File written');
      // highlight-start
      Shake.setShakeReportData([
          ShakeFile.create(path)
        ], "Test quick facts");
      // highlight-end
    })
    .catch((error) => {
        console.log('Failed to create log file');
    });
};
```

### Attaching a file with a custom name
Files can be attached with the desired filename and an absolute file path to your file.

In order to attach files this way, call `Shake.setShakeReportData()` method as shown in the example below.
But be careful only to call it once, since any subsequent calls will override the former ones.

```javascript title="App.js"
// highlight-next-line
import Shake, {ShakeFile} from '@shakebugs/react-native-shake';
import RNFS from 'react-native-fs';

attachLogFile = (data) => {
  const path = RNFS.DocumentDirectoryPath + '/log.txt';
  RNFS.writeFile(path, data, 'utf8')
    .then((success) => {
      console.log('File written');
      // highlight-start
      Shake.setShakeReportData([
          ShakeFile.create(path, "customName1")
        ], "Test quick facts");
      // highlight-end
    })
    .catch((error) => {
        console.log('Failed to create log file');
    });
};
```
