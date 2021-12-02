---
id: manage-sensitive-data
title: Manage sensitive data
---
As with any third-party service, it’s important for you to understand and have the ability to manage
what data is sent to Shake servers. Shake SDK allows you to filter out sensitive data on the mobile device itself,
so it never reaches the Shake servers.

## Network requests
Certain network requests may contain sensitive data which you may not want to send to Shake servers.
Use the `Shake.setNetworkRequestsFilter()` method to obfuscate only the sensitive parts of those requests, or to entirely prevent certain network requests from being logged.

For example, if you'd like to obfuscate the *Authorization* header in all network requests sent from your app, do this:

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
method to obfuscate only the sensitive parts of those notifications, or to entirely prevent certain notifications from being logged.

For example, if you'd like to obfuscate the description of the notification event that contains e-mail, do this:

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

```dart title="main.dart"
// highlight-next-line
Shake.setSensitiveDataRedactionEnabled(false);
```

