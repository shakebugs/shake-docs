---
id: home-screen
title: Home screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Shake enables you to customize home screen according to your preferences and needs.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/home-screen/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/home-screen/">Android</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/home-screen/">Flutter</a>&nbsp;  
</p>

## Home screen actions

By default, Home screen shows *Submit new ticket* button and *New chat* button at the top of the screen.
If you want, you can extend or customize these buttons using the custom actions.

There are several types of actions you can set on the home screen.

### Custom action

Tap on the custom action executes a custom function.

`ShakeHomeAction`

Properties:
- title **string** - represents button title
- subtitle **string | null** - represents button subtitle
- icon **string | null** - represents button icon in base64 format
- handler **()=>void | null** - function executed on button tap

### Submit new ticket action

Tap on the submit new ticket action start a [new ticket screen](/react/shake-ui/new-ticket-screen).

`ShakeSubmitAction`

Properties:
- title **string** - represents button title
- subtitle **string | null** - represents button subtitle
- icon **string | null** - represents button icon in base64 format

Use `new ShakeSubmitAction()` if you want default values for this action.

### Start new chat action

Tap on the new chat action starts a [new chat screen](/react/shake-ui/chat-screen).

`ShakeChatAction`

Properties:
- title **string** - represents button title
- subtitle **string | null** - represents button subtitle
- icon **string | null** - represents button icon in base64 format

Use `new ShakeChatAction()` if you want default values for this action.

:::note

Start a new chat action won't be visible if your app user is not [registered](/react/users/register-user).

:::

### Setting up custom actions

Here's an example how you can set custom actions on the home screen:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
import Shake, {ShakeChatAction, ShakeHomeAction, ShakeSubmitAction} from '@shakebugs/react-native-shake';

const setShakeHomeActions = () => {
    // highlight-start
    const actions = [
        new ShakeHomeAction(
            'Visit our roadmap',
            'Check what features are next',
            roadmapImage,
            () => {
                // Open URL
            },
        ),
        new ShakeSubmitAction(
            'Submit a new ticket',
            'Let us know your problem',
            submitImage,
        ),
        new ShakeChatAction(
            'Start a chat',
            'We are here to answer you questions',
            chatImage,
        ),
    ];

    Shake.setHomeActions(actions);
    // highlight-end
};
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, {ShakeChatAction, ShakeHomeAction, ShakeSubmitAction, ShakeBaseAction} from '@shakebugs/react-native-shake';

const setShakeHomeActions = () => {
    // highlight-start
    const actions: ShakeBaseAction[] = [
        new ShakeHomeAction(
            'Visit our roadmap',
            'Check what features are next',
            roadmapImage,
            () => {
                // Open URL
            },
        ),
        new ShakeSubmitAction(
            'Submit a new ticket',
            'Let us know your problem',
            submitImage,
        ),
        new ShakeChatAction(
            'Start a chat',
            'We are here to answer you questions',
            chatImage,
        ),
    ];

    Shake.setHomeActions(actions);
    // highlight-end
};
```

</TabItem>
</Tabs>

:::note

Custom action icon should be in the base64 format without prefix eg. **data:image/png;base64,...**

:::

## Home screen subtitle

If you want to change subtitle message on the home screen, you can do it using the following method:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
Shake.setHomeSubtitle("Feel free to submit your bug reports, suggestions and questions to us.");
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.setHomeSubtitle("Feel free to submit your bug reports, suggestions and questions to us.");
```

</TabItem>
</Tabs>
