---
id: auto-attach-files
title: Auto attach files
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Automatically attach a log file to each ticket, or user's profile photo, or whatever will help you resolve the ticket faster when you receive it. Files you attach automatically are **not** visible to your users.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/auto-attach-files/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/auto-attach-files/">Android</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/auto-attach-files/">Flutter</a>&nbsp;  
</p>

## Auto-attached files vs. Files uploaded by users

When submitting a ticket from the [New ticket screen](react/shake-ui/new-ticket-screen.md),
your users can also upload their files (images, documents) to tickets.
That has nothing to do with these auto-attached files.

## Methods

You can programmatically attach files by using any of the methods described below.
To define which files will be uploaded, call the `Shake.setShakeReportData` method
and pass the list of *ShakeFile* objects, as shown in the examples below.

:::note
You can call the `Shake.setShakeReportData` method anywhere in your app,
just be careful to only call it once since any subsequent calls will override the former ones.
:::

### Set a custom filename and then attach a file

*ShakeFile* can be initialized with a desired filename (String) and an absolute file path (String) to your file:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
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

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, {ShakeFile} from '@shakebugs/react-native-shake';

const attachLogFiles = () => {
    // highlight-start
    const shakeFile1: ShakeFile = ShakeFile.create(userFile.path, 'userLogs');
    const shakeFile2: ShakeFile = ShakeFile.create(deviceFile.path, 'deviceLogs');

    Shake.setShakeReportData([shakeFile1, shakeFile2]);
    // highlight-end
} 
```

</TabItem>
</Tabs>

### Attach a file without the custom filename

*ShakeFile* can be initialized without a filename, with just an absolute file path (String) to your file.
If you initialize it this way, the filename shown on your Shake dashboard will be determined automatically from the passed file's name.

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
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

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, {ShakeFile} from '@shakebugs/react-native-shake';

const attachLogFiles = () => {
    // highlight-start
    const shakeFile1: ShakeFile = ShakeFile.create(userFile.path);
    const shakeFile2: ShakeFile = ShakeFile.create(deviceFile.path);

    Shake.setShakeReportData([shakeFile1, shakeFile2]);
    // highlight-end
}
```

</TabItem>
</Tabs>
