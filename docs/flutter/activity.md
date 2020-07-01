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

```dart title="lib/main.dart"
// highlight-next-line
import 'package:shake/shake.dart';
...
// highlight-next-line
Shake.setEnableActivityHistory(enabled);

```