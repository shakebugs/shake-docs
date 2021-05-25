---
id: git
title: Git
---
import useBaseUrl from '@docusaurus/useBaseUrl';

<div class='text--center'>
<img
  alt='Git'
  src={useBaseUrl('img/docs-git@2x.png')}
  width='460'
/>
</div>

You could attach some useful git data to your bug report (eg. curent branch, commit...)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="git"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
    { label: 'Dart', value: 'dart'},
    { label: 'Javascript', value: 'javascript'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
import com.shakebugs.shake.Shake;

private void loadGitDetails() {
    String branchName = getBranchName();
    String commitHash = getCommitHash();
    String commitDate = getCommitDate();
    
    // highlight-start
    Shake.setMetadata("commitHash", commitHash);
    Shake.setMetadata("commitDate", commitDate);
    Shake.setMetadata("branch", branchName);
    // highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake

private fun loadGitDetails() {
    String branchName = getBranchName()
    String commitHash = getCommitHash()
    String commitDate = getCommitDate()
    
    // highlight-start
    Shake.setMetadata("commitHash", commitHash)
    Shake.setMetadata("commitDate", commitDate)
    Shake.setMetadata("branch", branchName)
    // highlight-end    
}
```

</TabItem>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;

- (void)loadGitDetails {
    NSString* branchName = [self getBranchName];
    NSString* commitHash = [self getCommitHash];
    NSString* commitDate = [self getCommitDate];

    // highlight-start
    [SHKShake setMetadataWithKey:@"commitHash" value: commitHash];
    [SHKShake setMetadataWithKey:@"commitDate" value: commitDate];
    [SHKShake setMetadataWithKey:@"branch" value: branchName];
    // highlight-end
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
import Shake

func loadGitDetails() {
    let branchName = getBranchName()
    let commitHash = getCommitHash()
    let commitDate = getCommitDate()

    // highlight-start
    Shake.setMetadata(key: "commitHash", value: commitHash)
    Shake.setMetadata(key: "commitDate", value: commitDate)
    Shake.setMetadata(key: "branch", value: branchName)
    // highlight-end
}
```

</TabItem>

<TabItem value="dart">

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void loadGitDetails() {
    String branchName = getBranchName();
    String commitHash = getCommitHash();
    String commitDate = getCommitDate();

    // highlight-start
    Shake.setMetadata('commitHash', commitHash);
    Shake.setMetadata('commitDate', commitDate);
    Shake.setMetadata('branch', branchName);
    // highlight-end
}
```

</TabItem>

<TabItem value="javascript">

```javascript title="main.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const loadGitDetails = () => {
    const branchName = getBranchName();
    const commitHash = getCommitHash();
    const commitDate = getCommitDate();

    // highlight-start
    Shake.setMetadata('commitHash', commitHash);
    Shake.setMetadata('commitDate', commitDate);
    Shake.setMetadata('branch', branchName);
    // highlight-end
};
```

</TabItem>

</Tabs>

