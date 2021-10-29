---
id: attachments
title: Attachments
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Files can be attached visually by users or programmatically by code.
You can instruct the SDK to quietly attach any file to a report.
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

### Setting a custom filename and then attaching a file

*ShakeFile* can be initialized with a desired filename (String) and an absolute file path (String) to your file.

To define which files will be uploaded when a user reports a bug, you must call the `Shake.setShakeReportData` method and pass list of *ShakeFile* objects, as shown in the example below.

You can call the `Shake.setShakeReportData` method anywhere within your app, but be careful only to call it once since any subsequent calls will override the former ones.

```javascript title="App.js"
// highlight-next-line
import Shake, {ShakeFile} from '@shakebugs/react-native-shake';

const attachLogFiles = () => {
    // highlight-start
    const shakeFile1 = ShakeFile.create(userFile.path, 'userLogs');
    const shakeFile2 = ShakeFile.create(deviceFile.path, 'deviceLogs');
    
    Shake.setShakeReportData([shakeFile1, shakeFile2]);
    // highlight-end
}
```

### Attaching a file without the custom filename

*ShakeFile* can be initialized without a filename, with just an absolute file path (String) to your file.
If you initialize it this way, filename shown on the web Dashboard will be determined automatically from the passed file's name.

To define which files will be uploaded when a user reports a bug, you must call the `Shake.setShakeReportData` method and pass list of *ShakeFile* objects, as shown in the example below.

You can call the `Shake.setShakeReportData` method anywhere within your app, but be careful only to call it once since any subsequent calls will override the former ones.

```javascript title="App.js"
// highlight-next-line
import Shake, {ShakeFile} from '@shakebugs/react-native-shake';

const attachLogFiles = () => {
    // highlight-start
    const shakeFile1 = ShakeFile.create(userFile.path);
    const shakeFile2 = ShakeFile.create(deviceFile.path);
    
    Shake.setShakeReportData([shakeFile1, shakeFile2]);
    // highlight-end
}
```

## Limitations

The maximum number of attached files per bug is 1 for Free workspaces and 10 for Premium ones.
If more files are attached, the SDK will successfully upload only some of them.

The maximum allowed individual size for any of those files is 10 MB.
If you attach a file that's larger than that it won't be uploaded with the report.

