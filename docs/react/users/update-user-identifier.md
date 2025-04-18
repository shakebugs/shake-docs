---
id: update-user-identifier
title: Update app user identifier
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>You can update the app user identifier you had used to register the app user. In most app flows, this is a method that's rarely called.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/users/update-user-identifier/">iOS</a>&nbsp; 
<a href="/docs/android/users/update-user-identifier/">Android</a>&nbsp;
<a href="/docs/flutter/users/update-user-identifier/">Flutter</a>&nbsp;  
<a href="/docs/web/users/update-user-identifier/">Web</a>&nbsp;
</p>


For example, suppose that you have registered your app user with an email.
The app user would be able to subsequently change their email in app settings and still continue using your service as the same entity.

Calling `Shake.updateUserId` on an already registered app user:
1. Updates the app user identifier in the Shake database.
1. It becomes the new app user identifier.
1. You continue to pass this new app user identifier to `Shake.registerUser` on this app user's subsequent logins.

:::caution
Updating the app user identifier allows various possibilities for how this feature can be used
but can also lead to possibly unwanted results.
Read the documentation carefully to fully understand possible usages and scenarios.
:::

The code snippet below showcases a common scenario in which the app user identifier is updated.
It's assumed that the app user was previously registered with an email:

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
const changeEmail = email => {
    networkService.updateUserEmail(email,
        user => {
            // highlight-next-line
            Shake.updateUserId(user.email);

            handleEmailChange(user);
        },
        message => {
            // Handle failed update
        });
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
const changeEmail = (email: string) => {
    networkService.updateUserEmail(email,
        (user: User) => {
            // highlight-next-line
            Shake.updateUserId(user.email);

            handleEmailChange(user);
        },
        (message: string) => {
            // Handle failed update
        });
}
```

</TabItem>
</Tabs>
