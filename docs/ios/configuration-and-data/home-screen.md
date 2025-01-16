---
id: home-screen
title: Home screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Shake enables you to customize home screen according to your preferences and needs.

<p class="p2 mt-40">You're viewing the iOS docs. Other platforms → &nbsp;
<a href="/docs/android/configuration-and-data/home-screen/">Android</a>&nbsp;
<a href="/docs/react/configuration-and-data/home-screen/">React Native</a>&nbsp; 
<a href="/docs/flutter/configuration-and-data/home-screen/">Flutter</a>&nbsp;  
</p>

## Setting up custom actions

By default, Home screen shows *Submit new ticket* button and *New chat* button at the top of the screen.
If you want, you can extend or customize these buttons using the custom actions.

There are several types of actions you can set on the home screen:

* *Custom action* -
tap on the custom action executes a custom function
* *Submit new ticket action* -
tap on the submit new ticket action start a [new ticket screen](/ios/shake-ui/new-ticket-screen)
* *Start a new chat action* -
tap on the new chat action starts a [chat screen](/ios/shake-ui/chat-screen)

:::note

Start a new chat action won't be visible if your app user is not [registered](/ios/users/register-user).

:::

Here's an example how you can set custom actions on the home screen:

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
- (void)setShakeHomeActions {
  //highlight-start
  SHKHomeAction *customAction = [[SHKHomeAction alloc] initWithTitle:@"Visit our roadmap"
                               subtitle:@"Feel free to send us suggestion"
                                 icon:[UIImage imageNamed:@"customImage"]
                                handler:^{
    // Open URL
    /// Watch for retain cycles, weakly reference the variables in this closure
  }];

  SHKHomeSubmitAction *submitAction = [[SHKHomeSubmitAction alloc] initWithTitle:@"Submit a new ticket"
                                     subtitle:@"Tap on the button to submit us a new ticket"
                                       icon:[UIImage imageNamed:@"newTicket"]];
  SHKHomeChatAction *chatAction = [[SHKHomeChatAction alloc] initWithTitle:@"Start a new chat"
                                  subtitle:@"Tap on the button to start a live chat"
                                    icon:[UIImage imageNamed:@"newChat"]];

  SHKShake.configuration.homeActions = @[customAction, submitAction, chatAction];
  //highlight-end
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
func setShakeHomeAction() {
  //highlight-start
  let customAction = SHKHomeAction(title: "Visit our roadmap", subtitle: "Feel free to send us suggestion", icon: UIImage(named: "customImage")) {
    // Open URL
    /// Watch for retain cycles, weakly reference the variables in this closure
  }

  let submitAction = SHKHomeSubmitAction(title: "Submit a new ticket", subtitle: "Tap on the button to submit us a new ticket", icon: UIImage(named: "newTicket"))
  let chatAction = SHKHomeChatAction(title: "Start a new chat", subtitle: "Tap on the button to start a live chat", icon: UIImage(named: "newChat"))

  Shake.configuration.homeActions = [customAction, submitAction, chatAction]
  //highlight-end
}
```

</TabItem>
</Tabs>

## Changing the home screen subtitle

If you want to change subtitle message on the home screen, you can do it using the following method:

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
