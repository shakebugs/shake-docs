---
id: activity
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Shake diligently tracks user's interaction with your app, their network traffic and system events,
and automatically attaches all of those to every bug report.

## Introduction
You can inspect all events that lead to a bug being reported.
A link to Activity history is located in the top right corner:

<img
  alt="Activity screen"
  src={useBaseUrl('screens/activity_screen.png')}
/>

## Android
### User actions
User actions are tracked automatically and require no additional setup.

### Network requests
Network reuqests tracking is enabled by default, but if you want you can change that:

```javascript title="App.js"
import React, {Component} from 'react';
import {Text, View} from 'react-native';
// highlight-next-line
import {NetworkTracker} from '@shakebugs/react-native-shake';

export default class App extends Component<{}> {
  const enableNetworkTracker = () => {
    // highlight-next-line
    NetworkTracker.setEnabled(true);
  }
  
  const disableNetworkTracker = () => {
    // highlight-next-line
    NetworkTracker.setEnabled(false);
  }
  
  render () {
    return (
      <View>
        <Text>Welcome!</Text>
      </View>
    );
  }
}
```

### System events
System events are tracked automatically and require no additional setup.

## iOS
### User actions
User actions are tracked automatically and require no additional setup.

### Network requests
Network requests tracking is currently not available for iOS.

### System events
System events are tracked automatically and require no additional setup.

:::important
In a Free workspace, you can see up to 20 events that lead to every bug.
 If you need to dive really deep to find causes of the weirdest bugs upgrade to Premium.
  In a Premium workspace you can browse the entire activity history.
:::

## Disabling
Activity history is enabled by default, however, you can use the method below to disable it:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const disableActivityHistory = () => {
    // highlight-next-line
    Shake.setEnableActivityHistory(false)
}
```
