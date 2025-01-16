---
id: manage-sensitive-data
title: Protect sensitive data
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>As with any third-party service, it’s important for you to understand and have the ability to manage
what data is sent to Shake servers. Shake SDK allows you to filter out sensitive data on the device itself,
so it never reaches the Shake servers.

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/android/configuration-and-data/manage-sensitive-data/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/manage-sensitive-data/">Android</a>&nbsp;
<a href="/docs/android/configuration-and-data/manage-sensitive-data/">React Native</a>&nbsp;
<a href="/docs/android/configuration-and-data/manage-sensitive-data/">Flutter</a>&nbsp;  
</p>


## Automatically redacted sensitive data

Shake automatically redacts these sensitive data from your touch events and network requests:
* email addresses
* IP addresses
* credit card numbers
* bearer tokens

Shake also redacts network header values if the header key is:
* password 
* secret
* passwd
* api_key 
* apikey
* access_token
* auth_token
* credentials
* mysql_pwd
* stripetoken
* Authorization
* Proxy-Authorization
* card[number]
* token

To disable this privacy feature, use the method below:

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
Shake.config.sensitiveDataRedaction = false;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
Shake.config.sensitiveDataRedaction = false;
```

</TabItem>
</Tabs>

## Network requests

Network requests may contain sensitive data which you may not want to send to Shake servers.
Use the `Shake.config.networkRequestsFilter` property to obfuscate sensitive parts of those requests,
or to entirely prevent certain network requests from being logged.
As an example, if you'd like to obfuscate the *Authorization* header in all network requests sent from your app, do this:

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
import Shake from '@shakebugs/browser';

// highlight-start
Shake.config.networkRequestsFilter = (networkRequest) => {
    const headers = networkRequest.request_headers;
    if (Object.keys(headers).includes('Authorization')) {
        headers['Authorization'] = '***';
    }

    return networkRequest;
};
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, {NetworkRequest} from '@shakebugs/browser';

// highlight-start
Shake.config.networkRequestsFilter = (networkRequest: NetworkRequest) => {
    const headers: { [key: string]: string } = networkRequest.request_headers;
    if (Object.keys(headers).includes('Authorization')) {
        headers['Authorization'] = '***';
    }

    return networkRequest;
};
// highlight-end
```

</TabItem>
</Tabs>

If you don't want to log specific network requests, return `null` from the `NetworkRequestsFilter` as shown below:

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
import Shake from '@shakebugs/browser';

// highlight-start
Shake.config.networkRequestsFilter = (networkRequest) => {
    if (networkRequest.url.startsWith('https://api.myapp.com/cards')) {
        return null;
    }

    return networkRequest;
};
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, {NetworkRequest} from '@shakebugs/browser';

// highlight-start
Shake.config.networkRequestsFilter = (networkRequest: NetworkRequest) => {
    if (networkRequest.url.startsWith('https://api.myapp.com/cards')) {
        return null;
    }

    return networkRequest;
};
// highlight-end
```

</TabItem>
</Tabs>

To clear the network requests filter, use `Shake.config.networkRequestsFilter = null;`.
