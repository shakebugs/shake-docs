---
id: attachments
title: Attachments
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Attachments can be added to ticets either manually
by your users on the [New ticket screen](android/screens/new-ticket-screen.md),
or programmatically by you.
Attachments you add programmatically are not visible to your users.

## Introduction

Automatically add an XMPP log to each ticket, or user's profile photo, or whatever will help you with the ticket later on.
You will see these files at the center of Shake dashboard, together with attachments users add themselves.

## Methods

You can programmatically add attachments by using any of the methods described below.
To define which files will be uploaded when a user submits a ticket,
you must call the `Shake.onPrepareData` method overriding the `attachedFiles` method inside, as shown in the examples below.
You can call the `Shake.onPrepareData` method anywhere in your app,
just be careful to only call it once since any subsequent calls will override the former ones.

*ShakeFile* can be initialized with a desired filename (String) and an absolute file path (String) to your file.
Instead of a file path, you can initialize it with the actual file object (java.io.File) too.

### Set a custom filename and then attach a file

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

### Attach a file without the custom filename

*ShakeFile* can be initialized without a filename, with just an absolute file path (String) to your file.
Instead of a file path, you can initialize it with the actual file object (java.io.File) too.
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

The maximum number of attached files per ticket is 1 for Free workspaces and 10 for Premium workspaces.
If more files are attached, the SDK will successfully upload only some of them.

The maximum allowed individual size for any of those files is 10 MB.
If you attach a file that's larger than that it won't be uploaded with the ticket.
