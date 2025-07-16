---
id: custom-branding
title: Custom branding
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> This feature enables you to customize the look and feel of the Shake SDK. You can reflect your brand's identity by modifying colors, fonts, and other attributes of screen elements.

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/custom-branding/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/custom-branding/">Android</a>&nbsp;
<a href="/docs/react/configuration-and-data/custom-branding/">React Native</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/custom-branding/">Flutter</a>&nbsp;  
</p>


## Setting up a custom theme

You can use CSS variables to customize appearance of the Shake SDK.

For example, if you want to set *red* color as brand color of your app instead the default one, you can do it like shown below:

```css title="index.css"
:root {
    --shake-sdk-color-accent: red !important;
}
```

:::note

To make sure that CSS variable is applied correctly and to avoid CSS importance problem,
we recommend using `!important` flag when changing Shake SDK CSS variables.

:::

Here is a list of default CSS variables - you can use those variables to set your own look and feel:

```css title="index.css"
:root {
    /* Global Shake SDK CSS */
    /* Use this CSS variables to design components globally */

    --shake-sdk-font-family: "Roobert", serif;
    --shake-sdk-overlay: transparent;
    --shake-sdk-color-accent: var(--shake-sdk-purple);

    /* Primary represents right card */
    --shake-sdk-background-color-primary: var(--shake-sdk-pureWhite);
    --shake-sdk-highlight-color-primary: var(--shake-sdk-grey10);
    --shake-sdk-outline-color-primary: var(--shake-sdk-grey20);
    --shake-sdk-text-color-primary-title: var(--shake-sdk-grey90);
    --shake-sdk-text-color-primary-subtitle: var(--shake-sdk-grey60);
    --shake-sdk-icon-color-primary: var(--shake-sdk-grey100);
    --shake-sdk-scrollbar-color-primary: var(--shake-sdk-grey20);

    /* Secondary represents left card */
    --shake-sdk-background-color-secondary: var(--shake-sdk-black);
    --shake-sdk-highlight-color-secondary: var(--shake-sdk-grey100);
    --shake-sdk-outline-color-secondary: var(--shake-sdk-grey90);
    --shake-sdk-text-color-secondary-title: var(--shake-sdk-grey30);
    --shake-sdk-text-color-secondary-subtitle: var(--shake-sdk-grey40);
    --shake-sdk-icon-color-secondary: var(--shake-sdk-grey50);
    --shake-sdk-scrollbar-color-secondary: var(--shake-sdk-grey100);

    --shake-sdk-border-radius-small: 10px;
    --shake-sdk-border-radius-medium: 20px;
    --shake-sdk-border-radius-large: 24px;
    
    /* Shake SDK Components CSS */
    /* Use this CSS variables to design each component more specifically */

    /* Accent button */
    --shake-sdk-button-accent-color: var(--shake-sdk-color-accent);
    --shake-sdk-button-accent-text-color: var(--shake-sdk-white);
    --shake-sdk-button-accent-border: 1px solid var(--shake-sdk-transparent);
    --shake-sdk-button-accent-border-radius: var(--shake-sdk-border-radius-small);

    /* Regular button */
    --shake-sdk-button-color: var(--shake-sdk-highlight-color-secondary);
    --shake-sdk-button-text-color: var(--shake-sdk-grey30);
    --shake-sdk-button-border: 1px solid var(--shake-sdk-outline-color-secondary);
    --shake-sdk-button-border-radius: var(--shake-sdk-border-radius-small);

    /* Attachment card */
    --shake-sdk-attachments-card-background: var(--shake-sdk-background-color-secondary);
    --shake-sdk-attachments-card-border: none;
    --shake-sdk-attachments-card-border-radius: var(--shake-sdk-border-radius-medium);
    --shake-sdk-attachments-card-box-shadow: 0 2px 2px var(--shake-sdk-attachments-card-background);
    --shake-sdk-attachments-card-scroll-bar: var(--shake-sdk-scrollbar-color-secondary);

    /* Context menu */
    --shake-sdk-context-menu-backgroud: var(--shake-sdk-highlight-color-secondary);
    --shake-sdk-context-menu-text-color: var(--shake-sdk-text-color-secondary-title);
    --shake-sdk-context-menu-border: none;
    --shake-sdk-context-menu-border-radius: var(--shake-sdk-border-radius-small);
    --shake-sdk-context-menu-hover-color: var(--shake-sdk-outline-color-secondary);
    --shake-sdk-context-menu-icon-color: var(--shake-sdk-icon-color-secondary);

    /* Sheet */
    --shake-sdk-sheet-backgroud: var(--shake-sdk-background-color-primary);
    --shake-sdk-sheet-text-color: var(--shake-sdk-text-color-primary-title);
    --shake-sdk-sheet-border: none;
    --shake-sdk-sheet-border-radius: var(--shake-sdk-border-radius-medium) var(--shake-sdk-border-radius-medium) 0 0;
    --shake-sdk-sheet-hover-color: var(--shake-sdk-highlight-color-primary);

    /* Tooltip */
    --shake-sdk-tooltip-background: var(--shake-sdk-highlight-color-secondary);
    --shake-sdk-tooltip-text-color: var(--shake-sdk-text-color-secondary-title);
    --shake-sdk-tooltip-border: 1px solid var(--shake-sdk-outline-color-secondary);
    --shake-sdk-tooltip-border-radius: var(--shake-sdk-border-radius-small);

    /* Drawing */
    --shake-sdk-drawing-background-color: var(--shake-sdk-highlight-color-secondary);
    --shake-sdk-drawing-unselected-color: var(--shake-sdk-grey70);
    --shake-sdk-drawing-separator-color: var(--shake-sdk-grey90);
    --shake-sdk-drawing-border: 1px solid var(--shake-sdk-outline-color-secondary);
    --shake-sdk-drawing-border-radius: var(--shake-sdk-border-radius-large);

    /* Main card */
    --shake-sdk-main-card-background: var(--shake-sdk-background-color-primary);
    --shake-sdk-main-card-border: none;
    --shake-sdk-main-card-border-radius:  var(--shake-sdk-border-radius-medium);
    --shake-sdk-main-card-box-shadow: 0 2px 2px var(--shake-sdk-main-card-background);
    --shake-sdk-main-card-scroll-bar: var(--shake-sdk-scrollbar-color-primary);

    /* Toolbar */
    --shake-sdk-toolbar-text-color: var(--shake-sdk-text-color-primary-title);
    --shake-sdk-toolbar-icon-color: var(--shake-sdk-text-color-primary-title);

    /* Heading */
    --shake-sdk-heading-text-color: var(--shake-sdk-text-color-primary-title);
    --shake-sdk-subtitle-text-color: var(--shake-sdk-text-color-primary-subtitle);

    /* Picker */
    --shake-sdk-picker-title-color: var(--shake-sdk-text-color-primary-subtitle);
    --shake-sdk-picker-text-color: var(--shake-sdk-text-color-primary-title);
    --shake-sdk-picker-background-color: var(--shake-sdk-highlight-color-primary);
    --shake-sdk-picker-hover-color: var(--shake-sdk-outline-color-primary);
    --shake-sdk-picker-border: 1px solid var(--shake-sdk-outline-color-primary);
    --shake-sdk-picker-border-selected: 1px solid var(--shake-sdk-color-accent);
    --shake-sdk-picker-border-radius: var(--shake-sdk-border-radius-small);

    /* Text area */
    --shake-sdk-textarea-title-color: var(--shake-sdk-text-color-primary-subtitle);
    --shake-sdk-textarea-text-color: var(--shake-sdk-text-color-primary-title);
    --shake-sdk-textarea-background-color: var(--shake-sdk-transparent);
    --shake-sdk-textarea-border: 1px solid var(--shake-sdk-outline-color-primary);
    --shake-sdk-textarea-border-selected: 1px solid var(--shake-sdk-color-accent);
    --shake-sdk-textarea-border-radius: var(--shake-sdk-border-radius-small);

    /* Submit button */
    --shake-sdk-submit-button-color: var(--shake-sdk-button-accent-color);
    --shake-sdk-submit-button-text-color: var(--shake-sdk-button-accent-text-color);
    --shake-sdk-submit-button-border: 1px solid var(--shake-sdk-button-accent-border);
    --shake-sdk-submit-button-border-radius: var(--shake-sdk-button-accent-border-radius);

    /* Ticket item */
    --shake-sdk-ticket-item-title-color: var(--shake-sdk-text-color-primary-title);
    --shake-sdk-ticket-item-subtitle-color: var(--shake-sdk-text-color-primary-subtitle);
    --shake-sdk-ticket-item-time-color: var(--shake-sdk-text-color-primary-subtitle);
    --shake-sdk-ticket-item-image-border: none;
    --shake-sdk-ticket-item-image-border-radius: var(--shake-sdk-border-radius-small);

    /* Bottom navigation */
    --shake-sdk-bottom-navigation-selected-color: var(--shake-sdk-color-accent);
    --shake-sdk-bottom-navigation-unselected-color: var(--shake-sdk-text-color-primary-subtitle);
    --shake-sdk-bottom-navigation-separator-color: var(--shake-sdk-highlight-color-primary);

    /* Chat bubble */
    --shake-sdk-chat-bubble-sender-background: var(--shake-sdk-button-accent-color);
    --shake-sdk-chat-bubble-sender-text-color: var(--shake-sdk-button-accent-text-color);
    --shake-sdk-chat-bubble-sender-border-radius: var(--shake-sdk-border-radius-small);

    --shake-sdk-chat-bubble-recipient-background: var(--shake-sdk-highlight-color-primary);
    --shake-sdk-chat-bubble-recipient-text-color: var(--shake-sdk-text-color-primary-title);
    --shake-sdk-chat-bubble-recipient-border-radius: var(--shake-sdk-border-radius-small);
    --shake-sdk-chat-bubble-info-text-color: var(--shake-sdk-text-color-primary-subtitle);

    /* Chat input */
    --shake-sdk-chat-message-input-background: var(--shake-sdk-highlight-color-primary);
    --shake-sdk-chat-message-input-text-color: var(--shake-sdk-text-color-primary-title);
    --shake-sdk-chat-message-input-hint-color: var(--shake-sdk-text-color-primary-subtitle);
    --shake-sdk-chat-message-input-border: none;
    --shake-sdk-chat-message-input-border-radius: var(--shake-sdk-border-radius-small);
    --shake-sdk-chat-message-send-button-color: var(--shake-sdk-button-accent-color);
    --shake-sdk-chat-message-send-icon-color: var(--shake-sdk-button-accent-text-color);

    /* Close button */
    --shake-sdk-close-button-background-color: var(--shake-sdk-background-color-primary);
    --shake-sdk-close-button-icon-color: var(--shake-sdk-icon-color-primary);
    --shake-sdk-close-button-box-shadow: 0 1px 1px var(--shake-sdk-outline-color-primary);

    /* Toast */
    --shake-sdk-toast-background-color: var(--shake-sdk-highlight-color-secondary);
    --shake-sdk-toast-title-color: var(--shake-sdk-text-color-secondary-title);
    --shake-sdk-toast-message-color: var(--shake-sdk-text-color-secondary-subtitle);
    --shake-sdk-toast-border: 1px solid var(--shake-sdk-outline-color-secondary);
    --shake-sdk-toast-border-radius: var(--shake-sdk-border-radius-small);
    --shake-sdk-toast-close-color: var(--shake-sdk-icon-color-secondary);

    /* Shake floating button */
    --shake-sdk-floating-button-border-radius: 40px;
    --shake-sdk-floating-button-border-size: 2px;
    --shake-sdk-floating-button-border-color: linear-gradient(91.04deg, #4FCF70 2.28%, #FAD648 26.49%, #A767E5 50.69%, #12BCFE 74.9%, #44CE7B 99.11%);
    --shake-sdk-floating-button-background-color: black;
    --shake-sdk-floating-button-content-padding-vertical: 9px;
    --shake-sdk-floating-button-content-padding-horizontal: 16px;
    --shake-sdk-floating-button-text-color: white;
    --shake-sdk-floating-button-font-size: 16px;
    --shake-sdk-floating-button-font-weight: 700;
    --shake-sdk-floating-button-font-family: var(--shake-sdk-font-family);
    --shake-sdk-floating-button-letter-spacing: none;
    --shake-sdk-floating-button-icon-left: url("../assets/icons/shake-sdk-ic-pen-draw.svg");
    --shake-sdk-floating-button-icon-left-visibility: block;
    --shake-sdk-floating-button-icon-right: none;
    --shake-sdk-floating-button-icon-right-visibility: none;
    --shake-sdk-floating-button-shadow: none;
}
```

## Customize invoke button style

Shake provides several different styles for Shake invoke button. You can select one that best suits your app design.

:::note

Using one of predefined styles for Shake invoke button will add a custom CSS class to the html document,
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

If you want more styling options for Shake invoke button you can do it through Shake CSS variables explained in the section above.

If you want to completely change style and layout of Shake invoke button, we recommend you to implement
your own button and [invoke Shake through code](/web/user-feedback/invoke#invoke-through-code) on a button click.

## Dark and light mode

If you want to use different color scheme for dark and light mode, you can use *prefers-color-scheme* media query:

```css title="index.css"
:root {
    --shake-sdk-background-color-primary: white !important;
}

@media (prefers-color-scheme: dark) {
    :root {
        --shake-sdk-background-color-primary: black !important;
    }
}
```

Optionally, if you need to change theme on a button click, you can create two distinct CSS classes (one for a light mode and one for a dark mode)
and apply classes to the document element of your app when needed.

Keep in mind that CSS variables are assigned at the creation time so you'll need to update them accordingly.


```css title="index.css"
.dark-mode {
    --shake-sdk-background-color-primary: black;
    --shake-sdk-main-card-background: var(--shake-sdk-background-color-primary);
}

.light-mode {
    --shake-sdk-background-color-primary: white;
    --shake-sdk-main-card-background: var(--shake-sdk-background-color-primary);
}
```

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title='settings.js'
const onThemeChanged = (theme) => {
    document.documentElement.classList.remove('dark-mode');
    document.documentElement.classList.remove('light-mode');
    
    // highlight-next-line
    document.documentElement.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
}
```

</TabItem>

<TabItem value='typescript'>

```typescript title='settings.ts'
const onThemeChanged = (theme: string) => {
    document.documentElement.classList.remove('dark-mode');
    document.documentElement.classList.remove('light-mode');
    
    // highlight-next-line
    document.documentElement.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
}
```

</TabItem>
</Tabs>
