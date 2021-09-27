---
id: manage-sensitive-data
title: Manage sensitive data
---
As with any third-party service, it’s important for you to understand and have the ability to manage
what data is sent to Shake servers. Shake SDK allows you to filter out sensitive data on the mobile device itself,
so it never reaches the Shake servers.

## Views
You can mark any view as private, and it'll automatically be deleted from the screenshot.
Private views are stored as a weak reference, they get cleared from the memory when not used anymore.

Let's suppose you're building a shopping cart app and you want to delete the name and the credit card number views
from the screenshot:

```javascript title="App.js"
// highlight-start
<Text ref={r => this.cardNumber = r} style={styles.cardNumber}>{this.state.cardNumber}</Text>
<Text ref={r => this.cardName = r} style={styles.cardName}>{this.state.cardName}</Text>
// highlight-end
```

Then you can add views as a private:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const maskSensitiveData = () => {
    // highlight-start
    Shake.addPrivateView(cardNumber);
    Shake.addPrivateView(cardName);
    // highlight-end
}
```

To remove view from private views use following method:

```javascript title="App.js"
// highlight-next-line
Shake.removePrivateView(viewRef);
```

:::note

If you want to use a *View* as a private view, you should use `collapsable={false}` flag in order to
avoid *Trying to resolve view with tag number which doesn’t exist* error.

:::


If you want to delete the whole screen from the screenshot, simply mark the root of the screen as private.

If you want to clear all the private views, use the following method:

```javascript title="App.js"
// highlight-next-line
Shake.clearPrivateViews();
```

Note that these methods won't delete sensitive views from screen recordings, only screenshots.  
You can disable [Screen Recording](/react/automatic-screen-recording.md) feature if you want make sure that sensitive data is not recorded.

```javascript title="App.js"
// highlight-next-line
Shake.setAutoVideoRecording(false);
```

## Touch events

Marking a view as private will automatically delete its touch events' text properties too. Consequently, you'll see them as `data_redacted` strings in your [Activity history](/react/activity#user-actions).

Bear in mind that the view's ID, accessibility labels and tags remain visible.

## Network requests
Certain network requests may contain sensitive data which you may not want to send to Shake servers.
Use the `Shake.setNetworkRequestsFilter()` method to obfuscate only the sensitive parts of those requests, or to entirely prevent certain network requests from being logged.

For example, if you'd like to obfuscate the *Authorization* header in all network requests sent from your app, do this:

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

If you do not want to log specific network requests, return `null` from the `NetworkRequestsFilter` like below:

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
method to obfuscate only the sensitive parts of those notifications, or to entirely prevent certain notifications from being logged.

For example, if you'd like to obfuscate the description of the notification event that contains e-mail, do this:

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

## Automatically redacted sensitive data
By default, Shake uses a series of regular expressions to redact sensitive data from notifications, touch events and network requests.
In addition, Shake will replace any header value with `data_redacted` string if the header has a key that matches any string from the list of keywords below:  
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

To disable this feature use the method below:

```javascript title="App.js"
// highlight-next-line
Shake.setSensitiveDataRedactionEnabled(false);
```

