---
id: unregister-user
title: Unregister app user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Unregistering an app user should be done when your app user decides to _log out_ and use your app as a _guest_ or when you no longer 
want the subsequent tickets to be associated with the current app user.

Unregistering is done by calling the `Shake.unregisterUser` method:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="profile.js"
const onLogoutClick = async () => {
  const success = await networkService.logout();
  // highlight-next-line
  Shake.unregisterUser();
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="profile.ts"
const onLogoutClick = async () => {
  const success: boolean = await networkService.logout();
  // highlight-next-line
  Shake.unregisterUser();
}
```

</TabItem>
</Tabs>
