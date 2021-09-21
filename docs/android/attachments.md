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
*ShakeFile* can be initialized with a desired filename (String) and an absolute file path (String) to your file, or instead of a file path you can initialize it with the actual file object (java.io.File).

To define which files will be uploaded when a user reports a bug, you must call the `Shake.onPrepareData()` method overriding the `attachedFiles` method inside, as shown in the example below.

You can call the `Shake.onPrepareData()` method anywhere within your app, but be careful only to call it once since any subsequent calls will override the former ones.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
Shake.onPrepareData(new ShakeReportData() {
  @Override
  public List<ShakeFile> attachedFiles() {
    ShakeFile shakeFileOne = new ShakeFile(new File("PathToYourFile"));
    ShakeFile shakeFileTwo = new ShakeFile("AbsolutePathToYourFile");

    return Arrays.asList(shakeFileOne, shakeFileTwo);
  }
});
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.onPrepareData {
    val shakeFileOne = ShakeFile(File("PathToYourFile"))
    val shakeFileTwo = ShakeFile("AbsolutePathToYourFile")
    listOf(shakeFileOne, shakeFileTwo)
}
// highlight-end
```

</TabItem>
</Tabs>

### Attaching a file without the custom filename
*ShakeFile* can be initialized without a filename (String), with just an absolute file path (String) to your file, or instead of a file path you can initialize it with the actual file object (java.io.File).
If you initialize it this way, filename shown on the web Dashboard will be determined automatically from the passed file's name.

To define which files will be uploaded when a user reports a bug, you must call the `onPrepareData` method overriding the `attachedFiles` method inside, as shown in the example below.

You can call the `Shake.onPrepareData()` method anywhere in your app, but be careful only to call it once, since subsequent calls will override the former ones.

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
Shake.onPrepareData(new ShakeReportData() {
  @Override
  public List<ShakeFile> attachedFiles() {
    ShakeFile shakeFileOne = new ShakeFile("fileOne", new File("PathToYourFile"));
    ShakeFile shakeFileTwo = new ShakeFile("fileTwo", "AbsolutePathToYourFile");

    return Arrays.asList(shakeFileOne, shakeFileTwo);
  }
});
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.onPrepareData {
    val shakeFileOne = ShakeFile("fileOne", File("PathToYourFile"))
    val shakeFileTwo = ShakeFile("fileTwo", "AbsolutePathToYourFile")
    listOf(shakeFileOne, shakeFileTwo)
}
// highlight-end
```

</TabItem>
</Tabs>

## Limitations
The maximum number of attached files per bug is 1 for Free workspaces and 10 for Premium ones.
If more files are attached, the SDK will successfully upload only some of them.

The maximum allowed individual size for any of those files is 10 MB.
If you attach a file that's larger than that it won't be uploaded with the report.
