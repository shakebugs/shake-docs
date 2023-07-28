---
id: callbacks
title: Callbacks
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Execute a block of a code when a certain action is executed by Shake

## Shake open callback

If you want to perform an action when Shake interface is **opened**, you can do it like shown below:

```javascript title="index.js"
// highlight-start
Shake.setShakeOpenListener(() => {
    console.log('Shake opened!');
});
// highlight-end
```

## Shake dismiss callback

If you want to perform an action when Shake interface is **closed**, you can do it like shown below:

```javascript title="index.js"
// highlight-start
Shake.setShakeDismissListener(() => {
    console.log('Shake dismissed!');
});
// highlight-end
```

## Shake submit callback

To detect when user **pressed a submit button** on the New ticket screen, add a submit listener like in the example below.

This listener provides **type** and **fields** parameters:
- reportType: **string** - "crash" or "feedback" depending on the type of the ticket
- fields: **{ [key: string]: string; }** - key value pairs of submitted form fields

```javascript title="index.js"
// highlight-start
Shake.setShakeSubmitListener((reportType, fields) => {
    console.log('Shake submitted!');
});
// highlight-end
```
