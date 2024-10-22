---
id: custom-branding
title: Custom branding
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> This feature enables you to customize the look and feel of the Shake SDK invoke button

## Customize invoke button style

Shake provides several different styles for Shake invoke button. You can select one that best suits your app design.

:::note

Using one of predefined styles for Shake invoke button will add a custom css class to the html document,
make sure that you don't clear it by accident.

:::note

### Jupiter

<table class="media-container media-container-highlighted mt-40 mb-40 p-20">
<img
  alt="Jupiter button"
  width="160"
  src={useBaseUrl('img/custom-button/custom-button-jupiter.png')}
/>
</table>

This is the *default* one. If you want to switch back to this style, you can do it with the following code snippet:

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
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.JUPITER;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.JUPITER;
```

</TabItem>
</Tabs>

### Venus

<table class="media-container media-container-highlighted mt-40 mb-40 p-20">
<img
  alt="Venus button"
  width="160"
  src={useBaseUrl('img/custom-button/custom-button-venus.png')}
/>
</table>

Add this code snippet to use this style:

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
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.VENUS;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.VENUS;
```

</TabItem>
</Tabs>

### Earth

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Earth button"
  width="160"
  src={useBaseUrl('img/custom-button/custom-button-earth.png')}
/>
</table>

Add this code snippet to use this style:

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
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.EARTH;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.EARTH;
```

</TabItem>
</Tabs>

### Mercury

<table class="media-container media-container-highlighted mt-40 mb-40 p-20">
<img
  alt="Mercury button"
  width="150"
  src={useBaseUrl('img/custom-button/custom-button-mercury.png')}
/>
</table>

Add this code snippet to use this style:

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
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.MERCURY;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.MERCURY;
```

</TabItem>
</Tabs>

### Mars

<table class="media-container media-container-highlighted mt-40 mb-40 p-20">
<img
  alt="Mars button"
  width="150"
  src={useBaseUrl('img/custom-button/custom-button-mars.png')}
/>
</table>

Add this code snippet to use this style:

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
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.MARS;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, { ShakeButtonStyle } from '@shakebugs/browser';

// highlight-next-line
Shake.config.floatingButtonStyle = ShakeButtonStyle.MARS;
```

</TabItem>
</Tabs>

## Invoke button css variables

If you want more styling options for Shake invoke button you can do it through css.
Shake exposes different css variables you can use to customize Shake invoke button.

Here is an example:

```css title="index.css"
:root {
    --shake-sdk-floating-button-border-radius: 40px;
    --shake-sdk-floating-button-border-size: 2px;
    --shake-sdk-floating-button-border-color: red;
    --shake-sdk-floating-button-background-color: black;
    --shake-sdk-floating-button-content-padding-vertical: 9px;
    --shake-sdk-floating-button-content-padding-horizontal: 16px;
    --shake-sdk-floating-button-text-color: white;
    --shake-sdk-floating-button-font-size: 16px;
    --shake-sdk-floating-button-font-weight: 700;
    --shake-sdk-floating-button-font-family: "Roobert", serif;
    --shake-sdk-floating-button-letter-spacing: none;
    --shake-sdk-floating-button-icon-left: url("../assets/icons/shake-button-icon.svg");
    --shake-sdk-floating-button-icon-left-visibility: block;
    --shake-sdk-floating-button-icon-right: none;
    --shake-sdk-floating-button-icon-right-visibility: none;
    --shake-sdk-floating-button-shadow: none;
}
```

If you want to completely change style and layout of Shake invoke button, we recommend you to implement 
your own button and [invoke Shake through code](/web/user-feedback/invoke#invoke-through-code) on a button click.

## Dark and light mode

If you want to use different color scheme for dark and light mode, you can create css class for each mode and
apply style to the html *body* element when needed.

```css title="index.css"
.dark-mode {
    --shake-sdk-floating-button-background-color: black;
    --shake-sdk-floating-button-text-color: white;
}

.light-mode {
    --shake-sdk-floating-button-background-color: white;
    --shake-sdk-floating-button-text-color: black;
}
```
 

