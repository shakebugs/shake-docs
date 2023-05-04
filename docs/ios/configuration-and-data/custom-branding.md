---
id: custom-branding
title: Custom branding
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> This feature enables you to customize the look and feel of the Shake SDK. You can reflect your brand's identity by modifying colors, fonts, and other attributes of screen elements.

<div class="imagesList">
    <div>
        <img src="/docs/img/custom-branding-example-1@2x.png" alt="Star Trek style"/>
        <p>Star Trek style</p>
    </div>
	<div>
        <img src="/docs/img/custom-branding-example-2@2x.png" alt="Super Mario vibes"/>
        <p>Super Mario vibes</p>
    </div>
	<div>
        <img src="/docs/img/custom-branding-example-3@2x.png" alt="Batman UI"/>
        <p>Batman UI</p>
    </div>
</div>

## Setting up a custom theme

Use *SHKTheme* instance to customize appearance of the Shake screens. Here is an example how you can create and set a new Shake theme:

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
SHKShake.configuration.theme = [[SHKTheme alloc] initWithFontFamilyMedium:@"Charter-Roman"
                  fontFamilyBold:@"Charter-Bold"
                  background:UIColor.grayColor
                  secondaryBackground:UIColor.lightGrayColor
                  textColor:UIColor.blackColor
                  secondaryTextColor:UIColor.blackColor
                  brandAccentColor:UIColor.orangeColor
                  brandTextColor:UIColor.whiteColor
                  borderRadius:39
                  outlineColor:UIColor.blackColor
                  shadowInfo:[[SHKShadowInfo alloc]initWithOffset:CGSizeMake(4, 2)
                  opacity:1
                  radius:2
                  color:UIColor.blackColor]];
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.theme = SHKTheme(fontFamilyMedium: "Charter-Roman",
               fontFamilyBold: "Charter-Bold",
               background: .gray,
               secondaryBackground: .lightGray,
               textColor: .black,
               secondaryTextColor: .black,
               brandAccentColor: .orange,
               brandTextColor: .white,
               borderRadius: 39,
               outlineColor: .black,
               shadowInfo: .init(offset: .init(width: 4, height: 2), opacity: 1, radius: 2, color: .black))
//highlight-end
```

</TabItem>
</Tabs>

### Dark and light mode

If you want to create a different appearance for the dark and light mode, you should use dynamic colors like shown below:

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
UIColor *myDynamicBackground = [UIColor colorWithDynamicProvider:^UIColor * _Nonnull(UITraitCollection * _Nonnull traitCollection) {
    return traitCollection.userInterfaceStyle == UIUserInterfaceStyleDark ? UIColor.orangeColor : UIColor.whiteColor;
}];
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
let myDynamicBackground = UIColor { trait in
    return trait.userInterfaceStyle == .dark ? UIColor.orange : UIColor.white
}
//highlight-end
```

</TabItem>
</Tabs>

:::note

Dynamic colors are available from iOS 13. If you want to support dark and light mode on older versions, you should
implement theme configuration listener and set appropriate colors through Shake method.

:::


## Changing the default theme

Sometimes you'll want to change just a specific color from the default theme.
Let's say you want to change the default accent color on the screens but wants to keep all other default colors. 

You can do it like shown in the example below:

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
// highlight-next-line
SHKShake.configuration.theme.brandAccentColor = UIColor.orangeColor;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.theme.brandAccentColor = UIColor.orange
```

</TabItem>
</Tabs>

## Changing the home screen subtitle

If you want to change subtitle message on the home screen and make it more suitable for your app,
you can do it using the following method:

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
// highlight-next-line
SHKShake.configuration.homeSubtitle = @"Feel free to submit your bug reports, suggestions and questions to us.";
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.homeSubtitle = "Feel free to submit your bug reports, suggestions and questions to us."
```

</TabItem>
</Tabs>
