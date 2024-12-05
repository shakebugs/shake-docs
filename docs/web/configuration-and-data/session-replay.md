---
id: session-replay
title: Session replay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>You can attach replays to each report without requiring any additional action from the user.

## Automatic recording

Session Replay allows you to automatically capture user interactions within your web app and attach them to feedback or bug reports. 
This feature provides valuable insights into user behavior, helping you reproduce issues and improve your app.

Session replays are recorded automatically and require no additional setup.
You can enable or disable this feature use the method below:

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
Shake.report.isSessionReplayEnabled = true;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.report.isSessionReplayEnabled = true;
```

</TabItem>
</Tabs>

## Limitations

- Session replays are limited to DOM-based interactions (e.g., canvas or video elements may not be fully captured).
- Session replays recreate web app on the dashboard, so if some elements aren't able to be accessed (like CSS or images), the replay won't be displayed fully.
- Depending on the complexity of your app, session replays may differ in length.