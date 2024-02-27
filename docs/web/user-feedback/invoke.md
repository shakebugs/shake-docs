---
id: invoke
title: Invoke
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Decide how you want Shake user feedback to be invoked.

## Invoke manually
By default, Shake screen is invoked by pressing **Send feedback** floating button.  

Send feedback button is automatically added to the screen after `Shake.start` method is called, 
you don't need to code anything.

## Invoke through code

But if you want to, you can customize that.

Shake can be invoked through code by calling the `Shake.show` method anywhere after `Shake.start`.
This method automatically opens Shake interface where user can send feedback, report a bug or attach additional files.

<Tabs
  groupId="web"
  defaultValue="javascript"
  values={[
    { label: 'Javascript', value: 'javascript'},
    { label: 'Typescript', value: 'typescript'},
  ]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
Shake.show();
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.show();
```

</TabItem>
</Tabs>
