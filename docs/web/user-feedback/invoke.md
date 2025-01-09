---
id: invoke
title: Invoke
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Decide how you want Shake user feedback to be invoked.

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/user-feedback/invoke/">iOS</a>&nbsp; 
<a href="/docs/android/user-feedback/invoke/">Android</a>&nbsp;
<a href="/docs/reactuser-feedback/invoke/">React Native</a>&nbsp;
<a href="/docs/flutter/user-feedback/invoke/">Flutter</a>&nbsp;  
</p>


## Invoke manually
By default, Shake screen is invoked by pressing **Send feedback** floating button.  

Send feedback button is automatically added to the screen after `Shake.start` method is called, 
you don't need to code anything.

### Default screen

Shake will show **New ticket screen** when invoked. Feel free to change which Shake screen is shown on invocation:
* [New ticket screen](/web/shake-ui#new-ticket)
* [Home screen](/web/shake-ui#home-screen)

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
Shake.config.defaultScreen = ShakeScreen.NEW_TICKET;
// highlight-next-line
Shake.config.defaultScreen = ShakeScreen.HOME_SCREEN;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.config.defaultScreen = ShakeScreen.NEW_TICKET;
// highlight-next-line
Shake.config.defaultScreen = ShakeScreen.HOME_SCREEN;
```

</TabItem>
</Tabs>

### Disable Send Feedback

You can disable default send feedback button if you want using the code below:

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
Shake.config.floatingButtonEnabled = false;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.config.floatingButtonEnabled = false;
```

</TabItem>
</Tabs>

## Invoke through code

Shake can be invoked through code by calling the `Shake.show` method anywhere after `Shake.start`.

The `show` method can be called with the argument `ShakeScreen` which determines the first presented screen in the Shake UI.

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
// highlight-next-line
Shake.show(ShakeScren.NEW_TICKET);
// highlight-next-line
Shake.show(ShakeScren.HOME_SCREEN);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.show(ShakeScren.NEW_TICKET); // Same as Shake.show()
// highlight-next-line
Shake.show(ShakeScren.HOME_SCREEN);
```

</TabItem>
</Tabs>

If enabled, [activity history](/web/configuration-and-data/activity-history), and all other data are also automatically attached. No additional code is required.
