---
id: home-screen
title: Home screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Shake enables you to customize home screen according to your preferences and needs.

<p class="p2 mt-40">You're viewing the Android docs. Other platforms →&nbsp;
<a href="/docs/ios/configuration-and-data/home-screen/">iOS</a>&nbsp;
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
tap on the submit new ticket action start a [new ticket screen](/android/shake-ui/new-ticket-screen)
* *Start a new chat action* -
tap on the new chat action starts a [chat screen](/android/shake-ui/chat-screen)

:::note

Start a new chat action won't be visible if your app user is not [registered](/android/users/register-user).

:::

Here's an example how you can set custom actions on the home screen:

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
void setShakeHomeActions() { 
    // highlight-start
    ShakeHomeAction customAction = new ShakeHomeAction(
            R.string.visit_roadmap,
            R.string.visit_roadmap_subtitle,
            R.drawable.ic_open_link,
            () -> {
                // Open URL
                return null;
            });
    ShakeHomeAction submitAction = new ShakeHomeSubmitAction(
             R.string.submit_ticket,
             R.string.submit_ticket_subtitle,
             R.drawable.ic_new_ticket,
    );
    ShakeHomeAction chatAction = new ShakeHomeChatAction(
             R.string.start_chat,
             R.string.start_chat_subtitle,
             R.drawable.ic_new_chat,
    );
    
    ArrayList<ShakeHomeAction> actions = (ArrayList<ShakeHomeAction>) Arrays.asList(customAction, submitAction, chatAction);
    Shake.getReportConfiguration().setHomeActions(actions);
    // highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
fun setShakeHomeActions() {
    // highlight-start
    val customAction = ShakeHomeAction(
        title = R.string.visit_roadmap,
        subtitle = R.string.visit_roadmap_subtitle,
        icon = R.drawable.ic_open_link,
        handler = { 
            // Open URL
        }
    )
    val submitAction = ShakeHomeSubmitAction(
        title = R.string.submit_ticket,
        subtitle = R.string.submit_ticket_subtitle,
        icon = R.drawable.ic_new_ticket,
    )
    val chatAction = ShakeHomeChatAction(
        title = R.string.start_chat,
        subtitle = R.string.start_chat_subtitle,
        icon = R.drawable.ic_new_chat,
    )

    val actions = arrayListOf(customAction, submitAction, chatAction)
    Shake.getReportConfiguration().homeActions = actions
    // highlight-end
}
```

</TabItem>
</Tabs>

## Changing the home screen subtitle

If you want to change subtitle message on the home screen, you can do it using the following method:

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
Shake.getReportConfiguration().setHomeSubtitle(R.string.shake_home_subtitle);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().homeSubtitle = R.string.shake_home_subtitle
```

</TabItem>
</Tabs>

