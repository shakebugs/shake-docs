---
id: manage-sensitive-data
title: Manage sensitive data
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As with any third-party service, it’s important for you to understand and have the ability to manage
what data is sent to Shake servers. Shake SDK allows you to filter out sensitive data on the mobile device itself,
so it never reaches the Shake servers.

## Views
You can mark any view as private, and it'll automatically be deleted from the screenshot.

Let's suppose you're building a shopping cart app and you want to delete the name and the credit card number views
from the screenshot:

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

To remove view from private views use following method:

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

If you want to delete the whole screen from the screenshot, simply mark the whole view controller as private:

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
        Shake.addPrivateViewController(this)
    }
}
```

</TabItem>
</Tabs>

To remove an view controller from the list of private views, use the following method:

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
Shake.removePrivateViewController((self)
```

</TabItem>
</Tabs>

If you want to clear all the private views, use the following method:

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


Note that these methods won't delete sensitive views from screen recordings, only screenshots.

You can disable [Screen Recording](/ios/screen-recording.md) feature if you want make sure that sensitive data is not recorded.

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
Marking a view as private will automatically delete its touch events' text properties too. Consequently, you'll see them as `data_redacted` strings in your [Activity history.

Bear in mind that the view's ID, accessiblity labels and tags remain visible.

Known limitation:

Shake supports privacy redaction on all kinds of UIView and its subclasses. On the other side, Shake does not support privacy redaction on UIBarItem(s) like: UIBarButtonItem, UIBarButtonItemGroup and UITabBarItem since those are not UIVew subclasses.

## Network requests
Certain network requests may contain sensitive data which you may not want to send to Shake servers.
Use the `Shake.setNetworkRequestsFilter()` method to obfuscate only the sensitive parts of those requests, or to entirely prevent certain network requests from being logged.

Typical subjects of network data redaction are HTTP request headers,  HTTP request body, HTTP response headers and HTTP response body.

For example, if you'd like to obfuscate the *Authorization* header and response body in all network requests sent from your app, do this:

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
    SHKShake.networkRequestsFilter = ^SHKNetworkRequestEditor *(SHKNetworkRequestEditor * networkRequest) {
        NSMutableDictionary<NSString *, NSString *>* headers = networkRequest.requestHeaders;
        
        if (headers[@"Authorization"] != nil) {
            headers[@"Authorization"] = @"4FR9***";
            networkRequest.responseBody = nil;
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
        if let requestHeaders = networkRequest.requestHeaders {
            if requestHeaders["Authorization"] != nil {
                requestHeaders["Authorization"] = "4FR9***"
                networkRequest.responseBody = nil
            }
        }
        return networkRequest
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

If you do not want to log specific network requests, return `nil` from the `NetworkRequestsFilter` like below:

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
    SHKShake.networkRequestsFilter = ^SHKNetworkRequestEditor *(SHKNetworkRequestEditor * networkRequest) {
        NSMutableDictionary<NSString *, NSString *>* headers = networkRequest.requestHeaders;
        
        if ([networkRequest.utl hasPrefix:@"https://api.myapp.com/cards"]) {
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
        
        if networkRequest.utl.contains("https://api.myapp.com/cards") {
            return nil
        }
        
        return networkRequest
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

To clear the network requests filter use `Shake.networkRequestsFilter = nil`

## Notification events
If your app notifications contain sensitive data, use the `Shake.setNotificationEventsFilter()`
method to obfuscate only the sensitive parts of those notifications, or to entirely prevent certain notifications from being logged.

For example, if you'd like to obfuscate the title and desctiption of the notification event that contains e-mail, do this:

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
    SHKShake.notificationEventsFilter = ^SHKNotificationEventEditor *(SHKNotificationEventEditor * notificationEvent) {
        
        if ([notificationEvent.title hasPrefix:@"e-mail changed"]) {
            notificationEvent.title = @"****** changed";
            notificationEvent.description = @"*******@gmail.com";
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

func setupNetworkFilter() {
    
    // highlight-start
    Shake.notificationEventsFilter = { (notificationEvent) in
        
        if notificationEvent.title.contains("e-mail changed") {
            notificationEvent.title = "****** changed"
            notificationEvent.description = "*******@gmail.com"
        }
        
        return notificationEvent
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

If you do not want to track specific notification event, return `nil` from `notificationEventsFilter` like below:

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
    SHKShake.notificationEventsFilter = ^SHKNotificationEventEditor *(SHKNotificationEventEditor * notificationEvent) {
        
        if ([notificationEvent.title hasPrefix:@"e-mail changed"]) {
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
// highlight-next-line
import Shake

func setupNetworkFilter() {
    
    // highlight-start
    Shake.notificationEventsFilter = { (notificationEvent) in
        
        if notificationEvent.title.contains("e-mail changed") {
            return nil
        }
        
        return notificationEvent
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

To clear the notification events filter use `Shake.notificationEventsFilter = nil`
