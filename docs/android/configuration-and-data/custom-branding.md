---
id: custom-branding
title: Custom branding
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> This feature enables you to customize the look and feel of the Shake SDK. You can reflect your brand's identity by modifying colors, fonts, and other attributes of screen elements.

## Setting up a custom theme

Use *ShakeTheme* instance to customize appearance of the Shake screens. Here is an example how you can create and set a new Shake theme:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakeTheme shakeTheme = new ShakeTheme(
    R.font.font_medium,
    R.font.font_bold,
    R.color.background_color,
    R.color.secondary_background_color,
    R.color.text_color,
    R.color.secondary_text_color,
    R.color.accent_color,
    R.color.accent_text_color,
    R.color.outline_color,
    R.dimen.border_radius,
    R.dimen.card_elevation
);

Shake.getReportConfiguration().setTheme(shakeTheme);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val shakeTheme = ShakeTheme(
    R.font.font_medium,
    R.font.font_bold,
    R.color.background_color,
    R.color.secondary_background_color,
    R.color.text_color,
    R.color.secondary_text_color,
    R.color.accent_color,
    R.color.accent_text_color,
    R.color.outline_color,
    R.dimen.border_radius,
    R.dimen.card_elevation
)

Shake.getReportConfiguration().theme = shakeTheme
// highlight-end
```

</TabItem>
</Tabs>

### Dark and light mode

If you want to create a different appearance for the dark and light mode, you should use resources like shown below:

<Tabs
groupId="android"
defaultValue="xml-dark"
values={[
{ label: 'Dark', value: 'xml-dark'},
{ label: 'Light', value: 'xml-light'},
]
}>

<TabItem value="xml-dark">

```xml title="values-night/colors.xml"
// highlight-start
<?xml version="1.0" encoding="utf-8"?>
<resources>
    ...
    <color name="accent_color">#FFFFFF</color>
</resources>
// highlight-end
```

</TabItem>

<TabItem value="xml-light">

```xml title="values/colors.xml"
// highlight-start
<?xml version="1.0" encoding="utf-8"?>
<resources>
    ...
    <color name="accent_color">#000000</color>
</resources>
// highlight-end
```

</TabItem>
</Tabs>

## Changing the default theme

Sometimes you'll want to change just a specific color from the default theme.
Let's say you want to change the default accent color on the screens but wants to keep all other default colors.

You can do it like shown in the example below:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
Shake.getReportConfiguration().getTheme().setAccentColor(R.color.accent_color);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().theme.accentColor = R.color.accent_color
```

</TabItem>
</Tabs>
