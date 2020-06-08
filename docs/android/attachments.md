---
id: attachments
title: Attachments
---
You can instruct the SDK to quietly attach any file to a bug report. 
The files you attach are not visible to the user in the SDK.

## Introduction
By default, a bug report contains only files that the user attaches to it. 
However, you can instruct Shake SDK to create and attach custom files that you need, for example, 
XMPP logs, a user's profile photo, or whatever you might want to inspect later on.
All attached files will appear in the center of your web Dashboard.

![Attachments screen](/screens/attachments_screen.png)

## Methods
### Attaching a file with a default name
`ShakeFile` can be initialized with just an absolute file path to your file 
or instead you can initialize it with the actual file object (java.io.File).
If you initialize it this way, filename shown on the web Dashboard will be 
determined automatically from the passed file's name.

To define which files will be uploaded when a user reports a bug, 
you must call the `Shake.onPrepareData()` method overriding the `attachedFiles` method inside, 
as shown in the example below.

You can call the `Shake.onPrepareData()` method anywhere in your app, 
but be careful only to call it once, since subsequent calls will override the former ones.

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
Shake.onPrepareData(object: ShakeReportData {
  override fun attachedFiles(): List<ShakeFile> {
    val shakeFileOne = ShakeFile(File("PathToYourFile"))
    val shakeFileTwo = ShakeFile("AbsolutePathToYourFile")
    return listOf(shakeFileOne, shakeFileTwo)
  }
})
// highlight-end
```

</TabItem>
</Tabs>

### Attaching a file with a custom name
`ShakeFile` can be initialized with a desired filename and an absolute file path to your file, 
or instead of a file path you can initialize it with the actual file object (java.io.File).

To define which files will be uploaded when a user reports a bug, 
you must call the `Shake.onPrepareData()` method overriding the `attachedFiles` method inside, 
as shown in the example below.

You can call the `Shake.onPrepareData()` method anywhere within your app, 
but be careful only to call it once since any subsequent calls will override the former ones.

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
Shake.onPrepareData(object: ShakeReportData {
  override fun attachedFiles(): List<ShakeFile> {
    val shakeFileOne = ShakeFile("fileOne", File("PathToYourFile"))
    val shakeFileTwo = ShakeFile("fileTwo", "AbsolutePathToYourFile")
    return listOf(shakeFileOne, shakeFileTwo)
  }
})
// highlight-end
```

</TabItem>
</Tabs>

## Limitations
The maximum number of attached files per bug is 1 for Free workspaces and 10 for Premium ones. 
If more files are attached, the SDK will successfully upload only some of them.

The maximum allowed individual size for any of those files is 5 MB.
If you attach a file that's larger than that it won't be uploaded with the report.
