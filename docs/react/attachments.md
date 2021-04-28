---
id: attachments
title: Attachments
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can instruct the SDK to quietly attach any file to a bug report.
The files you attach are not visible to the user in the SDK.

## Introduction
Send yourself XMPP logs, a user's profile photo, or whatever helps you debug issues faster.
You will see these files in the center of your web Dashboard along with files the user maybe attached themselves.

<img
  alt="Attachments screen"
  src={useBaseUrl('screens/attachments_screen.png')}
/>

## Methods
You can quietly attach files by using any of the methods described below.

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
      ]);
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
          ShakeFile.create(path, 'customName1')
      ]);
      // highlight-end
    })
    .catch((error) => {
        console.log('Failed to create log file');
    });
};
```

## Limitations
The maximum number of attached files per bug is 1 for Free workspaces and 10 for Premium ones.
If more files are attached, the SDK will successfully upload only some of them.

The maximum allowed individual size for any of those files is 5 MB.
If you attach a file that's larger than that it won't be uploaded with the report.

