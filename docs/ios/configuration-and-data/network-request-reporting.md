---
id: network-request-reporting
title: Network request reporting
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can configure Shake to capture all network traffic from a specific _URLSession_.
Network requests are a vital part of all modern applications. Having a clear presentation of network request logs gives you a valuable insight of your application lifecycle.

## Setup

Shake Network Request reporting feature is enabled with the `Shake.isActivityHistoryEnabled` flag, however this doesn't automatically start intercepting any of your app URL requests.

Shake network intercepting works by _stubbing_ your _URLSessionConfiguration_ object attached to your app's _URLSession_. 

:::note

Make sure to call _registerSessionConfiguration_ Shake method before initialising your URLSession.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="NetworkService.m"
//highlight-start

NSURLSessionConfiguration *userConf = [NSURLSessionConfiguration defaultSessionConfiguration];

[SHKShake registerSessionConfiguration:userConf];

NSURLSession *customSession = [NSURLSession sessionWithConfiguration:userConf delegate:self delegateQueue:nil];

//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="NetworkService.swift"
//highlight-start

let userConf = URLSessionConfiguration.default

Shake.registerSessionConfiguration(userConf)

let customSession = URLSession(configuration: userConf, delegate: self, delegateQueue: nil)

//highlight-end
```

</TabItem></Tabs>

Given the above setup, Shake will start intercepting all of the network requests made by your _customSession_ and the requests will appear on the Shake dashboard.

:::note

Shake can intercept only network requests which use the `http` and `https` protocol. URL requests that don't use said protocols are not intercepted by Shake and are 
not affected in any way.

:::

Apps can have multiple _URLSession_s or even create them for individual requests but as long as the _URLSessionConfiguration_ is passed to Shake via `Shake.registerSessionConfiguration` method, the requests 
will be intercepted.


Integration with other networking libraries boils down to registering the _URLSessionConfiguration_ object with Shake and passing
the configuration to the library initializer method.

## Sensitive data

Network requests can contain sensitive data that you may not want to send to Shake servers. Although Shake will automatically scan the intercepted requests and redact some of the 
data it can recognize, you can set your custom network request filter to precisely filter out all sensitive fields from the intercepted network request.

Checkout the [Manage Sensitive Data](ios/configuration-and-data/manage-sensitive-data.md/#network-requests) article.

## Advanced usage

Advanced users will use client-server authentication mechanism or even register their own _URLProtocol_ classes. This section covers
these use cases and provides a way to integrate Shake in these kinds of implementations.

### Handling authentication challenges

Some advanced users will use SSL pinning for their URL requests, which is used to validate the identity of the client to the server or vice versa.

In the normal app usage without Shake, the delegate of the native _URLSession_ will receive authentication challenges via the native
`URLSession:didReceiveChallenge:completionHandler` method and is in charge of calling the completion handler with the appropriate arguments.

Because of the implementation specifics of Shake Network Request reporting, these authentication delegate methods won't get called, but alternatively, Shake provides
additional setup which enables users to handle authentication challenges while still using Shake to intercept requests, making this kind of setup suitable 
for _Production_ environments.

This is achieved by registering an Authentication Delegate which conforms to the `SHKSessionAuthenticationProtocol` protocol with the Shake SDK. Shake will forward all authentication challenges to the delegate 
object which is in charge of calling the _completionHandler_ closure with the appropriate result.

Chances are high that apps which require server authentication have already implemented the authentication mechanism, so the additional work to make the existing flow start from the 
Shake authentication delegate method mentioned above should be minimal and easy to achieve.


:::note

Shake doesn't intercept or affect the authentication mechanism of any third party SDKs contained in your main application.

:::

<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

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

The above snippet, if set up correctly, causes all of the authentication challenges from your _URLSession_ to sink through the protocol method in 
your _AuthenticationDelegate_ class declared in the above snippet.


### Custom URLProtocol

If your app is registering a custom _URLProtocol_ class and is already intercepting your app's requests for various reasons, do not use the 
`Shake.registerSessionConfiguration` or `Shake.registerAuthDelegate` methods as they will interfere with the _URLProtocol_ subclass 
you defined.

Instead, use the `Shake.insertNetworkRequest` method to insert the network requests manually while maintaining your custom 
implementation intact.


### Manual inserting

Network events can be manually inserted to Shake and require no prior setup. 

We recommend using this option if your application is using its own _URLProtocol_ or there are only 
certain network events that should be logged.

An example can be found in the snippet below:

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
- (void)getUserWithSession:(NSURLSession *)session andRequest:(NSURLRequest *)request {

    [[session dataTaskWithRequest:request completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {

        SHKNetworkRequestEditor *networkRequest = [[SHKNetworkRequestEditor alloc] initWith:request
                                                                                   response:response
                                                                               responseData:data
                                                                                      error:error
                                                                                  timestamp:NSDate.new
                                                                                   duration:0.5];

        [SHKShake insertNetworkRequest:networkRequest];

    }] resume] ;
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

    }.resume()
}
//highlight-end
```

</TabItem>
</Tabs>