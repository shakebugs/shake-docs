---
id: callbacks
title: Callbacks
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Execute a block of a code when a certain action is executed by Shake

## Shake open callback

If you want to perform an action when Shake interface is **opened**, you can do it like shown below:

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
//highlight-start
SHKShake.configuration.shakeOpenListener = ^() {
    NSLog(@"Shake open event");
};
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.shakeOpenListener = {
    print("Shake opened event")
}
//highlight-end
```

</TabItem>
</Tabs>

## Shake dismiss callback

If you want to perform an action when Shake interface is **closed**, you can do it like shown below:

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
//highlight-start
SHKShake.configuration.shakeDismissListener = ^() {
    NSLog(@"Shake dismiss event");
};
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.shakeDismissListener = {
    print("Shake dismiss event")
}
//highlight-end
```

</TabItem>
</Tabs>

## Shake submit callback

To detect when user **pressed a submit button** on the New ticket screen, add a submit listener like in the example below.

This listener provides **type** and **fields** parameters:
- type: **NSString** - "crash" or "feedback" depending on the type of the ticket
- fields: **NSDictionary** - key value pairs of submitted form fields

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
// highlight-start
SHKShake.configuration.shakeSubmitListener = ^(NSString* type, NSDictionary* fields) {
    NSLog(@"Shake submit event");
};
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.shakeSubmitListener = { type, fields in
    print("Shake submit event")
}
//highlight-end
```

</TabItem>
</Tabs>
