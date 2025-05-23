---
id: callbacks
title: Callbacks
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Execute a block of a code when a certain action is executed by Shake

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/callbacks/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/callbacks/">Android</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/callbacks/">Flutter</a>&nbsp;  
</p>


## Shake open callback

If you want to perform an action when Shake interface is **opened**, you can do it like shown below:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
Shake.setShakeOpenListener(() => {
    console.log('Shake opened!');
});
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
Shake.setShakeOpenListener(() => {
    console.log('Shake opened!');
});
// highlight-end
```

</TabItem>
</Tabs>

## Shake dismiss callback

If you want to perform an action when Shake interface is **closed**, you can do it like shown below:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
Shake.setShakeDismissListener(() => {
    console.log('Shake dismissed!');
});
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
Shake.setShakeDismissListener(() => {
    console.log('Shake dismissed!');
});
// highlight-end
```

</TabItem>
</Tabs>

## Shake submit callback

To detect when user **pressed a submit button** on the New ticket screen, add a submit listener like in the example below.

This listener provides **type** and **fields** parameters:
- reportType: **string** - "crash" or "feedback" depending on the type of the ticket
- fields: **{ [key: string]: string; }** - key value pairs of submitted form fields

<Tabs
    groupId="react"
    defaultValue="javascript"
    values={[
    { label: 'Javascript', value: 'javascript'},
    { label: 'Typescript', value: 'typescript'},
    ]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
Shake.setShakeSubmitListener((reportType, fields) => {
    console.log('Shake submitted!');
});
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
Shake.setShakeSubmitListener((reportType: string, fields: { [key: string]: string; }) => {
    console.log('Shake submitted!');
});
// highlight-end
```

</TabItem>
</Tabs>
