---
id: auto-attach-files
title: Auto attach files
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Automatically attach a log file to each ticket, or user's profile photo, or whatever will help you resolve the ticket faster when you receive it. Files you attach automatically are **not** visible to your users.


## Auto-attached files vs. Files uploaded by users

When submitting a ticket from the [New ticket screen](/ios/shake-ui/new-ticket-screen.md),
your users can also upload their files (images, documents) to tickets.
That has nothing to do with these auto-attached files.


## Methods

You can programmatically attach files by using any of the methods described below.


### Set a custom filename and add data

_ShakeFile_ can be initialized with a filename (String) and data (NSData / Data):

<Tabs 
  groupId="ios" 
  defaultValue="swift" 
  values={[ 
    { label: 'Objective-C', value: 'objectivec'}, 
    { label: 'Swift', value: 'swift'},
  ] 
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m" 
NSString fileName = ...
NSData fileData = ...

//highlight-start
SHKShake.onPrepareReportData = ^NSArray<SHKShakeFile *> * _Nonnull {
    NSMutableArray <SHKShakeFile *> attachedFiles = NSMutableArray.new;
    SHKShakeFile attachedFile = [[SHKShakeFile alloc] initWithName:fileName andData:fileData];
    [attachedFiles addObject:attachedFile];
    return attachedFiles;
};
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
let fileName: String = ...
let logData: Data = ...

//highlight-start
Shake.onPrepareReportData = {
    var attachedFiles = [ShakeFile]()
    let attachedFile = ShakeFile(name: fileName, data: fileData)
    attachedFiles.append(attachedFile)

    return attachedFiles
}
//highlight-end
```

</TabItem>
</Tabs>


### Set a custom filename and then attach a file

_ShakeFile_ can also be initialized with a desired filename (String) and a local url (NSURL) to your file:

<Tabs 
  groupId="ios" 
  defaultValue="swift" 
  values={[ 
    { label: 'Objective-C', value: 'objectivec'}, 
    { label: 'Swift', value: 'swift'},
  ] 
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
NSString fileName = ...
NSURL fileUrl = ...

//highlight-start
SHKShake.onPrepareReportData = ^NSArray<SHKShakeFile *> * _Nonnull {
    NSMutableArray <SHKShakeFile *> attachedFiles = NSMutableArray.new;
    SHKShakeFile attachedFile = [[SHKShakeFile alloc] initWithName:fileName andFileURL:fileUrl];
    [attachedFiles addObject:attachedFile];
    return attachedFiles;
};
//highlight-end
```
</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
let fileName: String = ...
let fileUrl: URL = ...

//highlight-start
Shake.onPrepareReportData = {
    var attachedFiles = [ShakeFile]()
    if let attachedFile = ShakeFile(name: fileName, fileUrl: fileUrl) {
        attachedFiles.append(attachedFile)
    }
    return attachedFiles
}
//highlight-end
```
</TabItem>
</Tabs>

### Attach a file without the custom filename
Lastly, you can initialize _ShakeFile_ only with a local file url (NSURL).
If you initialize it this way, the filename shown on your Shake dashboard will be determined automatically from the passed file's name.

<Tabs 
  groupId="ios" 
  defaultValue="swift" 
  values={[ 
    { label: 'Objective-C', value: 'objectivec'}, 
    { label: 'Swift', value: 'swift'},
  ] 
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
NSURL *fileUrl = ...

//highlight-start
SHKShake.onPrepareReportData = ^NSArray<SHKShakeFile *> * _Nonnull {
    NSMutableArray <SHKShakeFile *> attachedFiles = NSMutableArray.new;
    SHKShakeFile attachedFile = [[SHKShakeFile alloc] initWithFileURL:fileUrl];
    [attachedFiles addObject:attachedFile];
    return attachedFiles;
};
//highlight-end
```
</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
let fileUrl: URL = ...

//highlight-start
Shake.onPrepareReportData = {
    var attachedFiles = [ShakeFile]()
    if let attachedFile = ShakeFile(fileUrl: fileUrl) {
        attachedFiles.append(attachedFile)
    }
    return attachedFiles
}
//highlight-end
```

</TabItem>
</Tabs>

## Limitations

The maximum number of auto attached files per ticket is 1 for Free workspaces and 10 for Premium workspaces.
If more files are attached, Shake SDK will successfully upload only some of them.

The maximum allowed individual size for any of those auto attached files is 10 MB.
If you programmatically attach a file that's larger than that, it won't be uploaded with the ticket.