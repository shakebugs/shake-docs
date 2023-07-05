---
id: custom-branding
title: Custom branding
---
import useBaseUrl from '@docusaurus/useBaseUrl';

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

Use *ShakeTheme* instance to customize appearance of the Shake screens. Here is an example how you can create and set a new Shake theme:

```dart title="main.dart"
// highlight-start
ShakeTheme shakeTheme = ShakeTheme();
shakeTheme.fontFamilyBold = 'assets/fonts/CoolFont-Bold.ttf';
shakeTheme.fontFamilyMedium = 'assets/fonts/CoolFont-Regular.ttf';
shakeTheme.backgroundColor = '#ffffff';
shakeTheme.secondaryBackgroundColor = '#ffffff';
shakeTheme.textColor = '#0e0e0e';
shakeTheme.secondaryTextColor = '#3f3f3f';
shakeTheme.accentColor = '#ff0000';
shakeTheme.accentTextColor = '#ffffff';
shakeTheme.outlineColor = '#464646';
shakeTheme.borderRadius = 0.0;
shakeTheme.elevation = 10.0;  // Only Android
shakeTheme.shadowOffset = Offset(0.1, 0.1);  // Only iOS
shakeTheme.shadowRadius = 3;  // Only iOS
shakeTheme.shadowOpacity = 0.5;  // Only iOS

Shake.setShakeTheme(shakeTheme);
// highlight-end
```

### Custom font

Shake can be configured to use custom font from your application,
you just have to set font path as a `ShakeTheme` font property like shown in the example above.

Before you can use custom font for Shake, you should [add custom font to your project](https://docs.flutter.dev/cookbook/design/fonts).

### Dark and light mode

If you want to create a different appearance for the dark and light mode, you should call `Shake.setShakeTheme` with desired configuration when app mode is changed.

Here's an example of component you can use to observe dark and light mode changes.
Feel free to adjust this component and use it as a root in your project.

```dart title="dark_mode_observer.dart"
// highlight-start
import 'package:flutter/cupertino.dart';
import 'package:shake_flutter/models/shake_theme.dart';
import 'package:shake_flutter/shake_flutter.dart';

class DarkModeObserver extends StatefulWidget {
  final Widget child;

  DarkModeObserver({required this.child});

  @override
  _DarkModeObserverState createState() => _DarkModeObserverState();
}

class _DarkModeObserverState extends State<DarkModeObserver>
    with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    WidgetsBinding.instance.addPostFrameCallback((_) => setShakeTheme());
  }

  @override
  void didChangePlatformBrightness() {
    super.didChangePlatformBrightness();
    setShakeTheme();
  }

  void setShakeTheme() {
    Brightness currentBrightness =
        View.of(context).platformDispatcher.platformBrightness;
    if (currentBrightness == Brightness.dark) {
      ShakeTheme darkTheme = ShakeTheme();
      darkTheme.accentColor = "#FFFFFF";
      Shake.setShakeTheme(darkTheme);
    } else {
      ShakeTheme lightTheme = ShakeTheme();
      lightTheme.accentColor = "#000000";
      Shake.setShakeTheme(lightTheme);
    }
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return widget.child;
  }
}
// highlight-end
```

## Changing the default theme

Sometimes you'll want to change just a specific color from the default theme.
Let's say you want to change the default accent color on the screens but wants to keep all other default colors.

You can do it like shown in the example below:

```dart title="main.dart"
// highlight-start
ShakeTheme shakeTheme = ShakeTheme();
shakeTheme.accentColor = '#ff0000';

Shake.setShakeTheme(shakeTheme);
// highlight-end
```


## Changing the home screen subtitle

If you want to change subtitle message on the home screen and make it more suitable for your app,
you can do it using the following method:

```dart title="main.dart"
// highlight-next-line
Shake.setHomeSubtitle("Feel free to submit your bug reports, suggestions and questions to us.");
```
