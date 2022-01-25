---
id: handling-error
title: Handling error
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

>Make great use of error handling and document these errors.


## Introduction

Shake allows you to report those caught errors and group them together.
These non-fatal error reports will have all of the same 
contextual information as crash reports and will act as an extension to the crash reporting feature.

:::note
Avoid using unique values for error *clusterID*  as that would cause a large number of reported errors to stay
unrelated and ungrouped, which would clog your Shake dashboard.
:::

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="ViewController.m"
- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSError *error;
    [self functionThatCanThrowError:&error];

    if (error) {
        // highlight-next-line
        [SHKShake handleError:error clusterID: @"MyViewController"];
    }
}

- (void)functionThatCanThrowError:(NSError *)error {
    if (error != NULL) {
        *error = [[NSError alloc] initWithDomain:domain
                                                code:errorCode
                                                userInfo:userInfo];
    }
}
```

</TabItem><TabItem value="swift">

```objectivec title="ViewController.swift"
override func viewDidLoad() {
    super.viewDidLoad()

    do {
        try functionThatCanThrowError()
    } catch let error {
        // highlight-next-line
        Shake.handleError(error, clusterID: "MyViewController")
    }
}

private func functionThatCanThrowError() throws {
    throw MyError.testError
}
```

</TabItem></Tabs>

## Error structure

The ``` handleError``` function will accept NSError types which naturally contain the following properties:
  * code: ```Int```
  * domain: ```String```
  * userInfo: ```[AnyHashable : Any]? = nil```

## Caught exceptions

Shake doesn't provide an interface to directly report caught NSExceptions. 

Cocoa APIs are not exception safe, and should be treated as a developer error which terminates the program shortly after. 

Although the NSException can be caught by using the `@catch` statement, this is considered a bad practice and shouldn't be done anywhere in your code.
