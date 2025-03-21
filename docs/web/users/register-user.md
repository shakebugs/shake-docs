---
id: register-user
title: Register app user
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Register your app users with Shake by calling the `Shake.registerUser` method.

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/users/register-user/">iOS</a>&nbsp; 
<a href="/docs/android/users/register-user/">Android</a>&nbsp;
<a href="/docs/react/users/register-user/">React Native</a>&nbsp;
<a href="/docs/flutter/users/register-user/">Flutter</a>&nbsp;  
</p>


The passed _user identifier_ argument should ideally reflect the identifier that uniquely represents the app user in your database.
Often it is the app user's email address, but it may be their app User ID, or their device's UUID.
Shake's public method is intentionally
called _register_ and not _logIn_ because app user identification context is different in different apps.

Most apps communicate with their backend through the network layer
which performs the URL request and asynchronously receives a callback with the request result.
That callback's body is a common place where developers call the `Shake.registerUser` method,
but maybe your context is different.
Make sure to call this method at the place where it fits your app's flow perfectly.

<table class="media-container mt-50">
<img
  alt="An example of registering an app User with Shake"
  width="520"
  src={useBaseUrl('screens/register-user-flow.svg')}
/>
</table>
<p class="p2 center-align mb-50">A common case is to register app users from your app's Login screen</p>


<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="login.js"
const onLoginClick = async (email, password) => {
  const user = await networkService.login(email, password);
  // highlight-next-line
  Shake.registerUser(user.id);
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="login.ts"
const onLoginClick = async (email: string, password: string) => {
  const user: User = await networkService.login(email, password);
  // highlight-next-line
  Shake.registerUser(user.id);
}
```

</TabItem>
</Tabs>

:::note

Keep in mind that if your app is already published, some users will be already logged in into the app.
To handle this case, we recommend calling `Shake.registerUser` method also on the first screen app shows.
Registered user is stored locally and this method won't send registration request if it not needed.

:::note
