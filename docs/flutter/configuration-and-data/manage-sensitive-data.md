---
id: manage-sensitive-data
title: Protect sensitive data
---
>As with any third-party service, it’s important for you to understand and have the ability to manage
what data is sent to Shake servers. Shake SDK allows you to filter out sensitive data on the mobile device itself,
so it never reaches the Shake servers.


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

```dart title="main.dart"
// highlight-next-line
Shake.setSensitiveDataRedactionEnabled(false);
```


## Network requests

Network requests may contain sensitive data which you may not want to send to Shake servers.
Use the `Shake.setNetworkRequestsFilter()` method to obfuscate sensitive parts of those requests,
or to entirely prevent certain network requests from being logged.
As an example, if you'd like to obfuscate the *Authorization* header in all network requests sent from your app, do this:

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/models/network_request.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

void setupNetworkFilter() {
    // highlight-start
    Shake.setNetworkRequestsFilter((NetworkRequest networkRequest) {
        var headers = networkRequest.requestHeaders;
        if (headers.containsKey('Authorization')) {
            headers['Authorization'] = '***';
        }
        return networkRequest;
    });
    // highlight-end
}
```

If you do not want to log specific network requests, return `null` from the `NetworkRequestsFilter` like below:

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/models/network_request.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

void setupNetworkFilter() {
    // highlight-start
    Shake.setNetworkRequestsFilter((NetworkRequest networkRequest) {
        if (networkRequest.url.startsWith('https://api.myapp.com/cards')) {
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

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/models/notification_event.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

void setupNotificationsFilter() {
    // highlight-start
    Shake.setNotificationEventsFilter((NotificationEvent notificationEvent) {
        if (notificationEvent.title == 'E-mail changed') {
            notificationEvent.description = '***@gmail.com';
        }
        return notificationEvent;
    });
    // highlight-end
}
```

If you do not want to track a specific notification event, return `null` from the `NotificationEventsFilter` like below:

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/models/notification_event.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

void setupNotificationsFilter() {
    // highlight-start
    Shake.setNotificationEventsFilter((NotificationEvent notificationEvent) {
        if (notificationEvent.title == 'E-mail changed') {
            return null;
        }
        return notificationEvent;
    });
    // highlight-end
}
```

To clear the notification events filter, use `Shake.setNotificationEventsFilter(null)`.