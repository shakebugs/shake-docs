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

<p class="p2 mt-40">You're viewing the iOS docs. Other platforms → &nbsp;
<a href="/docs/android/configuration-and-data/manage-sensitive-data/">Android</a>&nbsp;
<a href="/docs/react/configuration-and-data/manage-sensitive-data/">React Native</a>&nbsp; 
<a href="/docs/flutter/configuration-and-data/manage-sensitive-data/">Flutter</a>&nbsp;  
<a href="/docs/ios/configuration-and-data/manage-sensitive-data/">Web</a>&nbsp;
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

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
SHKShake.configuration.isSensitiveDataRedactionEnabled = false;
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.isSensitiveDataRedactionEnabled = false
```

</TabItem>
</Tabs>

## Views

:::note 
This feature is disabled for iOS applications built with SwiftUI. 
:::

:::note
You can mark any UIView or its subclasses as private.
You can not mark UIBarItems
(UIBarButtonItem, UIBarButtonItemGroup and UITabBarItem) as private since those are not UIVew subclasses.
:::

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Private views"
  width="380"
  src={useBaseUrl('img/private-view@2x.png')}
/>
</table>

You can mark any view as private, and it'll automatically be deleted
from the [auto screenshot](/ios/configuration-and-data/auto-screenshot).
Private views are stored as a weak reference. They get cleared from the memory when not used anymore.

:::note
These methods won't delete sensitive views from auto screen recording — only from the auto screenshot.
:::

Let's suppose you're building a shopping app and you want to delete the name and the credit card number views
from the auto screenshot:

<Tabs 
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;
@import Stripe;

- (void)maskSensitiveData {
    // highlight-next-line
    [SHKShake addPrivateView:textUserName];
    // highlight-next-line
    [SHKShake addPrivateView:textCardNumber];
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
import Shake
import Stripe

func maskSensitiveData() {
    // highlight-next-line
    Shake.addPrivateView(textUserName)
    // highlight-next-line
    Shake.addPrivateView(textCardNumber)
}
```

</TabItem>
</Tabs>

To remove a view from private views use the following method:

<Tabs 
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
[SHKShake removePrivateView:view];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.removePrivateView(view)
```

</TabItem>
</Tabs>

If you want to delete an entire screen from the auto screenshot, simply mark the whole view controller as private:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="ViewController.m"
@import UIKit;
// highlight-next-line
@import Shake;
@import Stripe;

@interface PaymentViewController: STPPaymentOptionsViewController
@end

@implementation PaymentViewController

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    // highlight-next-line
    [SHKShake addPrivateViewController:self];
}

@end
```

</TabItem>

<TabItem value="swift">

```swift title="ViewController.swift"
import UIKit
// highlight-next-line
import Shake
import Stripe

class PaymentViewController: STPPaymentOptionsViewController {
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)

        // highlight-next-line
        Shake.addPrivateViewController(self)
    }
}
```

</TabItem>
</Tabs>

To remove a view controller from the list of private views, use the following method:

<Tabs 
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="ViewController.m"
// highlight-next-line
[SHKShake removePrivateViewController:self];
```

</TabItem>

<TabItem value="swift">

```swift title="ViewController.swift"
// highlight-next-line
Shake.removePrivateViewController(self)
```

</TabItem>
</Tabs>

To clear all the private views, use the following method:

<Tabs 
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
[SHKShake clearPrivateViews];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.clearPrivateViews()
```

</TabItem>
</Tabs>

You can disable [Screen Recording](/ios/configuration-and-data/auto-screen-recording) feature if you want to make sure that sensitive data is not recorded.

<Tabs 
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
SHKShake.configuration.isAutoVideoRecordingEnabled = false;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.isAutoVideoRecordingEnabled = false
```

</TabItem>
</Tabs>

## Touch events

Marking a view as private will automatically delete its touch events' text properties too.
Consequently, you'll see them as `data_redacted` strings in ticket's
[Activity history](/ios/configuration-and-data/activity-history).
The view's ID, accessibility labels and tags remain visible.


## Network requests

Network requests may contain sensitive data which you may not want to send to Shake servers.
Use the `Shake.setNetworkRequestsFilter()` method to obfuscate sensitive parts of those requests,
or to entirely prevent certain network requests from being logged.
As an example, if you'd like to obfuscate the *Authorization* header in all network requests sent from your app, do this:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;

- (void)setupNetworkFilter {

    // highlight-start
    SHKShake.networkRequestsFilter = ^SHKNetworkRequestEditor * (SHKNetworkRequestEditor * networkRequest){
        NSMutableDictionary<NSString *, NSString *>* headers = networkRequest.requestHeaders;
        
        if (headers[@"Authorization"] != nil) {
            headers[@"Authorization"] = @"***";
        }
        return networkRequest;
    };
// highlight-end
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
import Shake

func setupNetworkFilter() {

    // highlight-start
    Shake.networkRequestsFilter = { (networkRequest) in
    
        if networkRequest.requestHeaders["Authorization"] != nil {
            networkRequest.requestHeaders["Authorization"] = "***"
        }
        return networkRequest
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

If you don't want to log specific network requests, return `nil` from the `NetworkRequestsFilter` as shown below:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;

- (void)setupNetworkFilter {

    // highlight-start
    SHKShake.networkRequestsFilter = ^SHKNetworkRequestEditor *(SHKNetworkRequestEditor * networkRequest){
    
        if ([networkRequest.url.absoluteString hasPrefix:@"https://api.myapp.com/cards"]) {
            return nil;
        }
        return networkRequest;
    };
    // highlight-end
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
import Shake

func setupNetworkFilter() {

    // highlight-start
    Shake.networkRequestsFilter = { (networkRequest) in
    
        if networkRequest.url.absoluteString.hasPrefix("https://api.myapp.com/cards") {
            return nil
        }
        return networkRequest
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

To clear the network requests filter, use `Shake.networkRequestsFilter = nil`.


## Notification events

If your app notifications contain sensitive data, use the `Shake.setNotificationEventsFilter()`
method to fully or partially obfuscate those notifications.

For example, if you'd like to obfuscate the description of the notification event that contains an email, do this:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;

- (void)setupNotificationEventsFilter {

    // highlight-start
    SHKShake.notificationEventsFilter = ^SHKNotificationEventEditor *(SHKNotificationEventEditor * notificationEvent){
    
        if ([notificationEvent.title hasPrefix:@"E-mail changed"]) {
            notificationEvent.description = @"***@gmail.com";
        }
        return notificationEvent;
    };
// highlight-end
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
import Shake

func setupNotificationEventsFilter() {

    // highlight-start
    Shake.notificationEventsFilter = { (notificationEvent) in
    
        if notificationEvent.title.contains("E-mail changed") {
            notificationEvent.description = "***@gmail.com"
        }
        return notificationEvent
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

If you do not want to track a specific notification event, return `nil` from the `notificationEventsFilter` like below:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;

- (void)setupNotificationEventsFilter {
    // highlight-start
    SHKShake.notificationEventsFilter = ^SHKNotificationEventEditor *(SHKNotificationEventEditor * notificationEvent){
        
        if ([notificationEvent.title hasPrefix:@"E-mail changed"]) {
            return nil;
        }
        return notificationEvent;
    };
    // highlight-end
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-next-line
import Shake

func setupNotificationEventFilter() {
    // highlight-start
    Shake.notificationEventsFilter = { (notificationEvent) in
    
        if notificationEvent.title.contains("E-mail changed") {
            return nil
        }
        return notificationEvent
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

To clear the notification events filter, use `Shake.notificationEventsFilter = nil`.