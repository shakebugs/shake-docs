---
id: home-screen
title: Home screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Shake enables you to customize home screen according to your preferences and needs.

<p class="p2 mt-40">You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/home-screen/">iOS</a>&nbsp;
<a href="/docs/android/configuration-and-data/home-screen/">Android</a>&nbsp;  
<a href="/docs/react/configuration-and-data/home-screen/">React Native</a>&nbsp; 
</p>

## Home screen actions

By default, Home screen shows *Submit new ticket* button and *New chat* button at the top of the screen.
If you want, you can extend or customize these buttons using the custom actions.

There are several types of actions you can set on the home screen.

### Custom action

Tap on the custom action executes a custom function.

`ShakeHomeAction`

Properties:
- title **String** - represents button title
- handler **Function** - function executed on button tap
- subtitle **String?** - represents button subtitle
- icon **String?** - represents button icon in base64 format

### Submit new ticket action

Tap on the submit new ticket action start a [new ticket screen](/flutter/shake-ui/new-ticket-screen).

`ShakeSubmitAction`

Properties:
- title **String** - represents button title
- subtitle **String?** - represents button subtitle
- icon **String?** - represents button icon in base64 format

Use `ShakeSubmitAction()` if you want default values for this action.

### Start new chat action

Tap on the new chat action starts a [new chat screen](/flutter/shake-ui/chat-screen).

`ShakeChatAction`

Properties:
- title **String** - represents button title
- subtitle **String?** - represents button subtitle
- icon **String?** - represents button icon in base64 format

Use `ShakeChatAction()` if you want default values for this action.

:::note

Start a new chat action won't be visible if your app user is not [registered](/flutter/users/register-user).

:::

### Setting up custom actions

Here's an example how you can set custom actions on the home screen:

```dart title="main.dart"
void setShakeHomeActions() {
    // highlight-start
    List<ShakeBaseAction> homeActions = [
        ShakeHomeAction("Visit our roadmap", () {
            // Open URL
        }, subtitle: "Check what features are next", icon: roadmapImage),
        ShakeSubmitAction(),
        ShakeChatAction(),
    ];
    Shake.setHomeActions(homeActions);
    // highlight-end
}
```

:::note

Custom action icon should be in the base64 format without prefix eg. **data:image/png;base64,...**

:::

## Home screen subtitle

If you want to change subtitle message on the home screen, you can do it using the following method:

```dart title="main.dart"
// highlight-next-line
Shake.setHomeSubtitle("Feel free to submit your bug reports, suggestions and questions to us.");
```

