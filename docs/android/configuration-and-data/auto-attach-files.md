---
id: auto-attach-files
title: Auto attach files
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Automatically attach a log file to each ticket, or user's profile photo, or whatever will help you resolve the ticket faster when you receive it. Files you attach automatically are **not** visible to your users.


## Auto-attached files vs. Files uploaded by users

When submitting a ticket from the [New ticket screen](android/shake-ui/new-ticket-screen.md),
your users can also upload their files (images, documents) to tickets.
That has nothing to do with these auto-attached files.


## Methods

You can programmatically attach files by using any of the methods described below.
To define which files will be attached when a user submits a ticket,
call the `Shake.onPrepareData` method overriding the `attachedFiles` method inside, as shown in the examples below.

:::note
You can call the `Shake.onPrepareData` method anywhere in your app,
just be careful to only call it once since any subsequent calls will override the former ones.
:::


### Set a custom filename and then attach a file

*ShakeFile* can be initialized with a desired filename (String) and an absolute file path (String) to your file.
Instead of a file path, you can initialize it with the actual file object (java.io.File) too.

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
Instead of a file path, you can initialize it with the actual file object (java.io.File), too.
If you initialize it this way, the filename shown on your Shake dashboard will be determined automatically from the passed file's name.

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

The maximum number of auto attached files per ticket is 1 for Free workspaces and 10 for Premium workspaces.
If more files are attached, Shake SDK will successfully upload only some of them.

The maximum allowed individual size for any of those auto attached files is 10 MB.
If you programmatically attach a file that's larger than that, it won't be uploaded with the ticket.