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
    { label: 'Javascript', value: 'javascript'},
    { label: 'Dart', value: 'dart'},
  ]
}>

<TabItem value="java">

```java title="App.java"
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

```objectivec title="App.m"
Branch *branch = [[Branch alloc] init];
Commit *commit = [[Commit alloc] init];

branch = [self getHead];
commit = [self getLastCommit: branch];

// highlight-start
[SHKShake setMetadata:@"commitHash" data: [commit id]];
[SHKShake setMetadata:@"commitMessage" data: [commit message]];
[SHKShake setMetadata:@"branch" data: [branch name]];
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
let branch = getHead()
let commit = getLastCommit(branch)

// highlight-start
Shake.setMetadata("commitHash", commit.id);
Shake.setMetadata("commitMessage", commit.message);
Shake.setMetadata("branch", branch.name);
// highlight-end
```

</TabItem>

<TabItem value="javascript">

```javascript title="App.js"
let branch = Branch()
let commit = getLastCommit(branch)

// highlight-start
Shake.setMetadata("commitHash", commit.id);
Shake.setMetadata("commitMessage", commit.message);
Shake.setMetadata("branch", branch.name);
// highlight-end
```

</TabItem>

<TabItem value="dart">

```dart title="App.dart"
Branch branch = getHead();
Commit commit = getLastCommit(branch);

// highlight-start
Shake.setMetadata("commitHash", commit.id);
Shake.setMetadata("commitMessage", commit.message);
Shake.setMetadata("branch", branch.name);
// highlight-end
```

</TabItem>

</Tabs>

