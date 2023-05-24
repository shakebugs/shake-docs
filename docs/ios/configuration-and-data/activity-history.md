---
id: activity-history
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


>Shake tracks user's interaction with your app, their network traffic, notifications, logs and system events,
and automatically attaches all of those to the ticket.


## Setup


### User actions

Shake automatically observes taps made on your app's UI elements.

:::note

This feature is disabled for apps built with SwiftUI.

:::note


### Network traffic

#### Setup

Network traffic logging works by stubbing the URLSessionConfiguration object attached to your app's URLSession.

:::note
Make sure to call Shake's registerSessionConfiguration method before initialising your URLSession.
:::

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="NetworkService.m"
//highlight-start
NSURLSessionConfiguration *userConf = [NSURLSessionConfiguration defaultSessionConfiguration];

[SHKShake registerSessionConfiguration:userConf];

NSURLSession *customSession = [NSURLSession sessionWithConfiguration:userConf delegate:self delegateQueue:nil];
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="NetworkService.swift"
//highlight-start
let userConf = URLSessionConfiguration.default

Shake.registerSessionConfiguration(userConf)

let customSession = URLSession(configuration: userConf, delegate: self, delegateQueue: nil)
//highlight-end
```

</TabItem></Tabs>

In the example above, Shake will start intercepting network requests made by your
customSession and they will appear in activity history.

:::note
Shake can intercept only http and https network requests.
Other protocols are neither intercepted or affected.
:::

Apps can have multiple URLSessions or create them for individual requests,
but as long as the _URLSessionConfiguration_ is passed to Shake
via `Shake.registerSessionConfiguration`, the requests will be intercepted.

Integration with other networking libraries is done by registering
the _URLSessionConfiguration_ object with Shake and passing the configuration to the library initializer method.


#### Advanced: Handle authentication challenges

Advanced users may use SSL pinning for their URL requests.

Without Shake, the delegate of the native _URLSession_ receives authentication challenges
via the native `URLSession:didReceiveChallenge:completionHandler` method and is in charge of
calling the completion handler with the appropriate arguments.

Because of the way Shake network traffic logging works,
those authentication delegate methods won't get called any more.
You address that by registering an Authentication Delegate which conforms
to the `SHKSessionAuthenticationProtocol` protocol.
Shake will forward all authentication challenges to the delegate object which is in charge of
calling the completionHandler closure with the appropriate result.

Apps which require server authentication usually have the authentication mechanism already implemented.
It should be easy to just tweak it so it starts from the Shake authentication delegate instead.

:::note
Shake doesn't intercept or affect auth mechanisms of other SDKs in your app.
:::

<Tabs 
groupId="ios" 
defaultValue="swift" 
values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>
    
<TabItem value="objectivec">

```objectivec title="NetworkService.m"
@interface AuthenticationDelegate () <SHKSessionAuthenticationProtocol>

@end

@implementation AuthenticationDelegate

- (void)didReceiveChallenge:(NSURLAuthenticationChallenge *)challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition, NSURLCredential * _Nullable))completionHandler {
    /// React to challenge and call the completion handler
    completionHandler(NSURLSessionAuthChallengePerformDefaultHandling, nil);
}

@end

@interface NetworkService ()

@property (nonatomic, strong) id<SHKSessionAuthenticationProtocol> authenticationDelegate;

@end

@implementation NetworkService

- (void)configureSession {

    NSURLSessionConfiguration *userConf = [NSURLSessionConfiguration defaultSessionConfiguration];
    
    [SHKShake registerSessionConfiguration:userConf];
    
    NSURLSession *customSession = [NSURLSession sessionWithConfiguration:userConf delegate:self delegateQueue:nil];
    
    AuthenticationDelegate *authDelegate = AuthenticationDelegate.new; /// Inject trust certificate handlers etc...
    
    [SHKShake registerAuthDelegate:authDelegate];
    
    self.authenticationDelegate = authDelegate;
}

@end
```

</TabItem><TabItem value="swift">

```swift title="NetworkService.swift"
class AuthenticationDelegate: NSObject, SHKSessionAuthenticationProtocol {

    func didReceive(_ challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {
        /// React to challenge and call the completion handler
        completionHandler(.performDefaultHandling, nil)
    }
}

class NetworkService {

    private lazy var authenticationDelegate: SHKSessionAuthenticationProtocol = {

        let authDelegate = AuthenticationDelegate() /// Inject trust certificate handlers etc...

        return authDelegate
    }()

    private func configureSession() -> URLSession {

        let userConf = URLSessionConfiguration.default

        let authDelegate = self.authenticationDelegate

        Shake.registerSessionConfiguration(userConf)

        let customSession = URLSession(configuration: userConf, delegate: self, delegateQueue: nil)

        Shake.registerAuthDelegate(authDelegate)

    }
}
```
</TabItem></Tabs>

The snippet above causes authentication challenges from your URLSession to sink through the protocol method
in your AuthenticationDelegate class.


#### Advanced: Custom URLProtocol

If your app is registering a custom URLProtocol class and is already intercepting your app's requests,
do not use the `Shake.registerSessionConfiguration` or `Shake.registerAuthDelegate` methods as they would interfere
with the URLProtocol subclass you defined.
Instead, use the `Shake.insertNetworkRequest` method to insert network requests manually
while maintaining your custom implementation intact.


#### Advanced: Manual inserting

Network events can also be manually inserted into Shake's activity history.
Use this if your app is using its own URLProtocol or if there are only certain network events that should be logged.
Here's an example:

<Tabs 
groupId="ios" 
defaultValue="swift" 
    values={[ 
      { label: 'Objective-C', value: 'objectivec'}, 
      { label: 'Swift', value: 'swift'}, 
    ] 
}>

<TabItem value="objectivec">

```objectivec title="UserService.m"
//highlight-start
- (void)getUserWithSession:(NSURLSession )session andRequest:(NSURLRequest *)request {

    [[session dataTaskWithRequest:request completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {

        SHKNetworkRequestEditor *networkRequest = [[SHKNetworkRequestEditor alloc] initWith:request
            response:response
            responseData:data
            error:error
            timestamp:NSDate.new
            duration:0.5];

        [SHKShake insertNetworkRequest:networkRequest];

    }] resume];
}
//highlight-end 
```

</TabItem> 

<TabItem value="swift">

```swift title="UserService.swift"
//highlight-start
private func getUser(withSession session: URLSession, andRequest request: URLRequest) {

    session.dataTask(with: request) { (data, res, error) in
    
        let networkRequest = NetworkRequestEditor(request, response: res, responseData: data, error: error, timestamp: .init(), duration: 0.5)
    
        Shake.insertNetworkRequest(networkRequest)
      }
    .resume()
}
//highlight-end
```

</TabItem> 
</Tabs>


### System events

System events - also known as app lifecycle events - are tracked automatically and require no additional setup.

### Screen changes

In apps built with __UIKit__, Shake automatically logs app screen (ViewController lifecycle) changes.

Apps built with __SwiftUI__ have to use the provided View extension in their top-level Views which represent screens.
shakeIntercept View extension allows Shake to hook into the View lifecycle so it can get notified of screen changes.
The extension won't alter your Views in any way.

```swift title="MySwiftUIContentView.swift"
// highlight-start
struct UserDetailsView: View {

    var user: UserModel

    var body: some View {
        VStack {
            user.avatar
            Text("Name: \(user.name)")
            /// Additional layout
        }.shakeIntercept(viewName: "UserDetails")
    }
}
// highlight-end
 ```

### Notifications

Notifications are tracked automatically and require no additional setup. 

::: note

To display notifications to your users, you must ask them for permission first.

:::

If you want Shake to manually handle notification tracking, use this method instead: 

<Tabs 
groupId="ios" 
defaultValue="swift" 
values={[ 
  { label: 'Objective-C', value: 'objectivec'}, 
  { label: 'Swift', value: 'swift'}, ] }> 
  
<TabItem value="objectivec"> 

```objectivec title="AppDelegate.m"
// highlight-next-line
[SHKShake handleNotificationWithNotificationTitle: notificationTitle notificationDescription:notificationDescription];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.handleNotification(withNotificationTitle: notificationTitle, notificationDescription: notificationDescription)
```

</TabItem>
</Tabs>

### Custom logs
You can add your own logs to Activity history too:

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
[SHKShake logWithLevel: LogLevelInfo message:@"Log message goes here!"];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.log(LogLevel.info, "Log message goes here!")
```

</TabItem>
</Tabs>

You have these log levels at your disposal:

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
LogLevelVerbose
LogLevelDebug
LogLevelInfo
LogLevelWarn
LogLevelError
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
LogLevel.verbose
LogLevel.debug
LogLevel.info
LogLevel.warn
LogLevel.error
```

</TabItem>
</Tabs>

### Console logs
Console logs are recorded automatically and require no additional setup.
If you want to disable this feature use the method below:

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
SHKShake.configuration.isConsoleLogsEnabled = false;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.isConsoleLogsEnabled = false
```

</TabItem>
</Tabs>


## Disable
Activity history is enabled by default, use the method below to disable it altogether:

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
//highlight-next-line
SHKShake.configuration.isActivityHistoryEnabled = NO;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-next-line
Shake.configuration.isActivityHistoryEnabled = false
```

</TabItem>
</Tabs>
