---
id: handling-error
title: Handling error
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

Sometimes, the application is making great use of error handling and wants to document these errors, or has some definitive points where caught errors
could use a bit more context.

Shake SDK enables you to report the caught errors and lets you decide how they are grouped. These non-fatal error reports will have all of the same 
contextual information as crash reports, and act as an extension to the crash reporting feature.

:::note

Avoid using unique values for error *clusterID*  as this will cause a large number of reported errors appear unrelated — although they actually are — which will clog your Shake dashboard.

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

- (void)functionThatCanThrowError:(NSError **)error {
	if (error != NULL) {
		*error = [[NSError alloc] initWithDomain:domain
                                                code:errorCode
                                            userInfo:userInfo];
	}
}
```

</TabItem>

<TabItem value="swift">

```swift title="ViewController.swift"
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

</TabItem>
</Tabs>

### Error structure

The `handleError`function will accept NSError types which naturally contain the following properties:

- code:     `Int`
- domain:   `String`
- userInfo: `[AnyHashable : Any]? = nil`


### Caught Exceptions?

Shake doesn't provide an interface to directly report caught NSExceptions. Cocoa APIs are not exception safe, and should 
be treated as a developer error which terminates the program shortly after.
Although the NSException can be caught by using the `@catch` statement, this is considered a bad practice and really shouldn't be
done anywhere in your code.
