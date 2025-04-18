---
id: activity-history
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Shake tracks user's interaction with your app, their network traffic, logs and system events,
and automatically attaches all of those to the ticket.

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/android/configuration-and-data/activity-history/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/activity-history/">Android</a>&nbsp;
<a href="/docs/android/configuration-and-data/activity-history/">React Native</a>&nbsp;
<a href="/docs/android/configuration-and-data/activity-history/">Flutter</a>&nbsp;  
</p>

## Setup

Shake activity history feature is enabled by default once you start Shake in your app. 
You have flexibility to disable specific data type from the activity history as needed.

Here's a list of data that is collected in the activity history.

### User actions

Shake automatically monitors taps made on your app's UI elements, providing insights into user interactions within your application.

You can enable or disable user actions data like shown below:

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
Shake.report.isUserActionsEnabled = true;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.report.isUserActionsEnabled = true;
```

</TabItem>
</Tabs>

### Network traffic

Shake automatically tracks network requests sent from your app, along with detailed information such as
request body and headers, response body and headers, method, status code, duration and timestamp

You can enable or disable network traffic data like shown below:

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
Shake.report.isNetworkRequestsEnabled = true;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.report.isNetworkRequestsEnabled = true;
```

</TabItem>
</Tabs>

### System events

Shake automatically tracks system events, you can see when user navigated away and returned to your app by changing the browser tab.

You can enable or disable system events data like shown below:

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
Shake.report.isSystemEventsEnabled = true;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.report.isSystemEventsEnabled = true;
```

</TabItem>
</Tabs>


### Screen changes

Screen automatically tracks url changes which helps with understanding how user navigated through the app.

You can enable or disable screen changes data like shown below:

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
Shake.report.isScreenChangesEnabled = true;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.report.isScreenChangesEnabled = true;
```

</TabItem>
</Tabs>

:::note

Shake capture URL changes, if your app is a single page app than we recommend using custom logs for tracking screen changes.

:::

### Custom logs

You can manually add custom logs to the activity history to capture important events:

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
Shake.log(LogLevel.DEBUG, 'Hello world');
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.log(LogLevel.DEBUG, 'Hello world');
```

</TabItem>
</Tabs>

You can enable or disable custom logs data like shown below:

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
Shake.report.isCustomLogsEnabled = true;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.report.isCustomLogsEnabled = true;
```

</TabItem>
</Tabs>

### Console logs

Shake automatically tracks console logs, providing additional information useful for debugging and understanding application states.

You can enable or disable console logs data like shown below:

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
Shake.report.isConsoleLogsEnabled = true;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.report.isConsoleLogsEnabled = true;
```

</TabItem>
</Tabs>

## Disable

If you don't want to send activity history data with the reports, you can disable it like shown below:

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
Shake.report.enableActivityHistory(false);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
  // highlight-next-line
Shake.report.enableActivityHistory(false);
```

</TabItem>
</Tabs>
