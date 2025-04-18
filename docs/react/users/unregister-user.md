---
id: unregister-user
title: Unregister app user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Unregistering an app user should be done when your app user decides to _log out_ and use your app as a _guest_ or when you no longer 
want the subsequent tickets to be associated with the current app user.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/users/unregister-user/">iOS</a>&nbsp; 
<a href="/docs/android/users/unregister-user/">Android</a>&nbsp;
<a href="/docs/flutter/users/unregister-user/">Flutter</a>&nbsp;  
<a href="/docs/web/users/unregister-user/">Web</a>&nbsp;
</p>


Unregistering is done by calling the `Shake.unregisterUser` method:

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
const logOut = (email) => {
    networkService.logOut(email,
        () => {
            // highlight-next-line
            Shake.unregisterUser();

            handleLogOut();
        },
        message => {
            // Handle failed log out
        });
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
const logOut = (email: string) => {
    networkService.logOut(email,
        () => {
            // highlight-next-line
            Shake.unregisterUser();

            handleLogOut();
        },
        (message: string) => {
            // Handle failed log out
        });
}
```

</TabItem>
</Tabs>
