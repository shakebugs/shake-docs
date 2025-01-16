
---
id: manage-sensitive-data
title: Protect sensitive data
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>As with any third-party service, it’s important for you to understand and have the ability to manage
what data is sent to Shake servers. Shake SDK allows you to filter out sensitive data on the mobile device itself,
so it never reaches the Shake servers.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/manage-sensitive-data/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/manage-sensitive-data/">Android</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/manage-sensitive-data/">Flutter</a>&nbsp;  
<a href="/docs/web/configuration-and-data/manage-sensitive-data/">Web</a>&nbsp;
</p>


## Automatically redacted sensitive data

Shake automatically redacts these sensitive data from your notifications, touch events and network requests:
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

```javascript title="App.js"
// highlight-next-line
Shake.setSensitiveDataRedactionEnabled(false);
```

## Views

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Private views"
  width="380"
  src={useBaseUrl('img/private-view@2x.png')}
/>
</table>

You can mark any view as private, and it'll automatically be deleted
from the [auto screenshot](/react/configuration-and-data/auto-screenshot).
Private views are stored as a weak reference. They get cleared from the memory when not used anymore.

:::note
These methods won't delete sensitive views from auto screen recording — only from the auto screenshot.
:::

:::note
When marking a *View* as private, also add the `collapsable={false}` flag to it in order to avoid the
"Trying to resolve view with tag number which doesn’t exist" error.
:::

Let's suppose you're building a shopping app and you want to delete the credit card number view
from the auto screenshot:

```javascript title="App.js"
// highlight-next-line
const viewRef = useRef(null);

// highlight-next-line
<Text ref={viewRef} style={styles.cardNumber}>{this.state.cardNumber}</Text>
```

This is how you mark view as a private:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.addPrivateView(viewRef.current);
```

To remove a view from private views use the following method:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.removePrivateView(viewRef.current);
```

If you want to delete an entire screen from the auto screenshot, simply mark the root of the screen as private.

To clear all the private views, use the following method:

```javascript title="App.js"
// highlight-next-line
Shake.clearPrivateViews();
```

## Touch events

Marking a view as private will automatically delete its touch events' text properties too.
Consequently, you'll see them as `data_redacted` strings in ticket's
[Activity history](/react/configuration-and-data/activity-history).
The view's ID, accessibility labels and tags remain visible.

## Network requests

Network requests may contain sensitive data which you may not want to send to Shake servers.
Use the `Shake.setNetworkRequestsFilter()` method to obfuscate sensitive parts of those requests,
or to entirely prevent certain network requests from being logged.
As an example, if you'd like to obfuscate the *Authorization* header in all network requests sent from your app, do this:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const setupNetworkFilter = () => {
    // highlight-start
    Shake.setNetworkRequestsFilter((networkRequest) => {
        let headers = networkRequest.getRequestHeaders();
        if (headers.Authorization) {
            headers.Authorization = '***';
        }
        return networkRequest;
    });
    // highlight-end
}
```

If you don't want to log specific network requests, return `null` from the `NetworkRequestsFilter` as shown below:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const setupNetworkFilter = () => {
// highlight-start
    Shake.setNetworkRequestsFilter((networkRequest) => {
        if (networkRequest.getUrl().startsWith('https://api.myapp.com/cards')) {
            return null;
        }
        return networkRequest;
    });
// highlight-end
}
```

To clear the network requests filter, use `Shake.setNetworkRequestsFilter(null)`.

## Notification events

If your app notifications contain sensitive data, use the `Shake.setNotificationEventsFilter()`
method to fully or partially obfuscate those notifications.

For example, if you'd like to obfuscate the description of the notification event that contains an email, do this:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const setupNotificationsFilter = () => {
    // highlight-start
    Shake.setNotificationEventsFilter((notificationEvent) => {
        if (notificationEvent.getTitle() === 'E-mail changed') {
            notificationEvent.setDescription('***@gmail.com');
        }
        return notificationEvent;
    });
    // highlight-end
}
```

If you do not want to track a specific notification event, return `null` from the `NotificationEventsFilter` like below:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';
const setupNotificationsFilter = () => {
    // highlight-start
    Shake.setNotificationEventsFilter((notificationEvent) => {
        if (notificationEvent.getTitle() === 'E-mail changed') {
            return null;
        }
       return notificationEvent;
    });
// highlight-end
}
```

To clear the notification events filter, use `Shake.setNotificationEventsFilter(null)`.
