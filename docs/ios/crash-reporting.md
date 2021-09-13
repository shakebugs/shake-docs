---
id: crash-reporting
title: Crash reporting
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get detailed crash reports and insights about the circumstances that led up to them.

## Introduction

Shake records crashes and uncaught exceptions that occur in your app and intelligently groups them on the dashboard, offering enough 
contextual information to help you with solving the issue. It is powerful on its own, but when combined with rest 
of the Shake features, it becomes a crash reporting power tool.

## Enable crash reporting

Crash reporting is disabled by default but can be enabled by setting the `isCrashReportingEnabled` flag to `true` prior 
to calling the `start` method.

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
//highlight-start
SHKShake.configuration.isCrashReportingEnabled = YES;
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isCrashReportingEnabled = true
//highlight-end
```

</TabItem>
</Tabs>


## Sending the report

Crash reports are automatically sent during the next app launch after the crash occurs. These reports follow the same rules as regular feedback reports to some extent.
The crash reports will be saved even if the app is offline and sent later when app regains connection. 

Your end users can't opt out of sending their crash report as they can with the standard feedback, however they can optionally provide more information and describe what happened prior to the crash.

## Editing the report

On the next app launch after the crash occurs, a sheet offering the user a chance to describe the crash will appear.

This can be enabled by setting the `isAskForCrashDescription` flag to `true` prior to calling the `start` method.

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
//highlight-start
SHKShake.configuration.isAskForCrashDescriptionEnabled = YES;
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isAskForCrashDescriptionEnabled = true
//highlight-end
```

</TabItem>
</Tabs>


When enabled, this feature allows the user to provide a more detailed description of the actions that could have led up to the 
crash, and potentially edit the information that is being passed to Shake dashboard.

## Report context

As mentioned before, the crash report is similar to the regular feedback report. 

All of the existing Shake features elegantly interoperate with it, meaning that your crash report will provide the screenshot of the last thing that user saw, and even better, the last 15 seconds of the screen recording before the crash!

A detailed crash report like this one, along with logs and all other useful information, provides you with plenty of usable data to help you resolve the root issue efficiently.

## Symbolicating crash reports

The crash reports are a lot more useful when you see your symbolicated application frames.

In order to symbolicate the reports, Shake needs the dSYMS which can be found on your system.


:::note

Unsymbolicated crash reports will appear in the special section on the Shake dashboard and won't be processed
if the dSYM files are not uploaded. Dashboard will display the UUID of the required dSYMS which can be found on 
you system.

:::

### Enable dSYMS for debug builds

If you plan using Shake Crash in a development environment, every debug build action needs to generate dSYM files.

When in your project / workspace, click your *App.xcodeproj* blue project icon — it's usually located at the top of the *File Inspector* tab in your left-hand pane. 
Select your main app target and open the Build Settings for that target. Navigate to the Build Options section and choose 
*dwarf with dSYM file* option for your Debug/Development configuration.


### Finding dSYMS

Run the below command in your terminal

```finding_dsyms"
// highlight-next-line
mdfind -name .dSYM | while read -r line; do dwarfdump -u "$line"; done 
```

This will list all of the available dSYM files found on the system so you can identify the ones that are missing.

Missing dSYMs are marked on your Shake dashboard.

DSYMS can be uploaded to Shake with one of the methods listed below. 

For the apps built with Bitcode setting, use the Fastlane plugin to grab the correct dSYMS and upload them to Shake.

### Upload dSYMS manually via Shake dashboard

Your application dSYM files can be manually zipped and uploaded to the Shake dashboard.

To access your application mapping files on the *Shake Dashboard* click your *avatar* and navigate to *My Account › Apps* and click
on your application name. Once the menu is expanded click the **Mapping files**.

Symbolication files are located in the project build folder which is easily accessed by navigating to 
Xcode *Preferences › Locations › Derived Data* and clicking the *Finder* folder link.

For archived applications with Bitcode enabled, which have already been uploaded to the AppStore, use the 
Xcode *Organizer* tool (*Xcode › Window › Organizer*) to manually download the AppStore generated debug symbols by clicking the *"Download Debug Symbols"* button on the right hand pane.

Make sure to ZIP the symbolication files before dropping them on the Shake dashboard.

### Upload dSYMS using RunPhase script

Shake ships with the `upload-symbols.sh`script which uploads dSYMS to Shake servers.


When your project is opened with Xcode, select the *Scheme* and then *EditScheme* in the dropdown menu.

Expand the *Build Action* options and select *Post Actions*. Select the **+** icon and add a new *Run Script Phase* to build post actions.

This ensures that latest dSYMS are uploaded after every build process. Make sure to replace the placeholder values
with the correct values for your environment.

```script
//highlight-start
Path/to/upload-symbols.sh \
--client_id your_client_id \
--client_secret your_client_secret
//highlight-end
```

:::note
This method is not suitable for apps using __Bitcode__ binary format.
:::

If your reports are not being symbolicated, make sure the script is working properly
by doublechecking the Xcode Build log for Shake upload script errors. 

:::tip

When viewing the Build log, search for "SHAKE_SCRIPT" keyword to identify potential problems and check if the upload was successful.

:::

### Upload dSYMS using fastlane plugin

Fastlane is an open source platform aimed at simplifying mobile development tasks. It handles authentication with 
App Store Connect and downloading dSYM files.

Use this method if your app has __Bitcode__ format enabled.

#### Installing fastlane

It is recommended that you use `Bundler` and `Gemfile` to define your dependency on fastlane. 
This will clearly define the fastlane version to be used and its dependencies, and will also speed up fastlane execution.

First of all, you should run `bundle init`  command which will generate Gemfile.
After the Gemfile is generated, add `fastlane` gem. 

Now, your newly created Gemfile should look like this:

<TabItem value="gemifle">

```gemfile title="Gemfile"
// highlight-start
source "https://rubygems.org"
gem "fastlane"
// highlight-end
```
</TabItem>

Next, run the `bundle install` command which will install fastlane and all associated dependencies.

Navigate your terminal to your project's directory and run `fastlane init` command.

For more info about installing fastlane, visit the [fastlane](http://docs.fastlane.tools) docs.

#### Installing Shake plugin 

<TabItem value="ruby">

```ruby title="Terminal"
// highlight-next-line
bundle exec fastlane add_plugin upload_symbols_to_shake
```
</TabItem>


#### Using the plugin

If you have [Bitcode](https://help.apple.com/xcode/mac/current/#/devbbdc5ce4f) enabled in your application's project settings, 
dSYM files are generated by the App Store when your app is recompiled after the upload, and will need to be downloaded by fastlane.

In this situation you can use Shake plugin with [download_dsyms](http://docs.fastlane.tools/actions/download_dsyms/#download_dsyms) to upload dSYM files:

<TabItem value="ruby">

```ruby title="Fastfile"
// highlight-start
lane :refresh_dsyms do
  download_dsyms(version: "latest")
  upload_symbols_to_shake(client_id: "<Shake client id>", client_secret: "<Shake client secret>", bundle_id: "<Bundle id of project>",  plist_path: "<Path to Info.plist>")
end
// highlight-end
```
</TabItem>

On the other hand, if you have [Bitcode](https://help.apple.com/xcode/mac/current/#/devbbdc5ce4f) disabled, add the `upload_symbols_to_shake` action with [gym](http://docs.fastlane.tools/actions/gym/#gym) to upload dSYMs generated from the build:

<TabItem value="ruby">

```ruby title="Fastfile"
// highlight-start
lane :refresh_dsyms do
  gym
    upload_symbols_to_shake(client_id: "<Shake client id>", client_secret: "<Shake client secret>", bundle_id: "<Bundle id of project>", plist_path: "<Path to Info.plist>")
end
// highlight-end
```
</TabItem>

You can also pass the dSYM file paths manually:

<TabItem value="ruby">

```ruby title="Fastfile"
// highlight-next-line
  upload_symbols_to_shake(client_id: "<Shake client id>", client_secret: "<Shake client secret>", bundle_id: "<Bundle id of project>", dsym_array_paths: ["./App1.dSYM.zip", "./App2.dSYM.zip"],  plist_path: "<Path to Info.plist>")
```
</TabItem>


## Test it out

Let's crash you app. 
Enable crash reporting and paste the snippet below in the `viewDidLoad` method in one of your view controllers.
We'll crash the app on a button tap by accessing the array with the out of bounds index.

Launch you app after the crash, add a sentence or two if you want to and submit the report. 
Your report will be visible on the Shake dashboard in a few minutes.

:::note

Before testing this, make sure to disconnect your device from the Xcode debugger. Xcode debugger attaches itself 
to the application process and will disable crash recording.

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

```objectivec title="ViewController.m"
//highlight-start
- (void)viewDidLoad {
    [super viewDidLoad];

    UIButton *crashButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];

    [crashButton setTitle:@"Crash me" forState:UIControlStateNormal];
    crashButton.frame = CGRectMake(0, 0, 100, 50);
    crashButton.center = self.view.center;

    [self.view addSubview:crashButton];

    [crashButton addTarget:self action:@selector(crashButtonHandler) forControlEvents:UIControlEventTouchUpInside];
}

- (void)crashButtonHandler {
    NSArray *arr = @[@1, @2, @3];
    id myVar = arr[5];
}
//highlight-end
```
</TabItem>

<TabItem value="swift">

```swift title="ViewController.swift"
//highlight-start
override func viewDidLoad() {
    super.viewDidLoad()

    let crashButton = UIButton(type: .roundedRect)

    crashButton.setTitle("Crash me", for: .normal)
    crashButton.frame = .init(x: 0, y: 0, width: 100, height: 50)
    crashButton.center = self.view.center

    self.view.addSubview(crashButton)

    crashButton.addTarget(self, action: #selector(crashButtonHandler), for: .touchUpInside)
}

@objc func crashButtonHandler() {
    let arr = [1, 2, 3]
    let myVar = arr[5]
}
//highlight-end
```

</TabItem>
</Tabs>


## Handling errors

Sometimes, the application is making great use of error handling and wants to document these errors, or has some definitive points where caught errors
could use a bit more context.

Shake SDK enables you to report the caught errors and lets you decide how they are grouped. These non-fatal error reports will have all of the same 
contextual information as crash reports, and act as an extension to the crash reporting feature.

:::note

Avoid using unique values for error *clusterID*  as this will cause a large number of reported errors appear unrelated — although they actually are — which will clog your Shake dashboard.

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

```objectivec title="ViewController.m"
- (void)viewDidLoad {
    [super viewDidLoad];

    NSError *error;
    [self functionThatCanThrowError:&error];

    if (error) {
        // highlight-next-line
    	[SHKShake handleError:error clusterID: @"MyViewController"];
    }
}

- (void)functionThatCanThrowError:(NSError **)error {
	if (error != NULL) {
		*error = [[NSError alloc] initWithDomain:domain
                                                code:errorCode
                                            userInfo:userInfo];
	}
}
```

</TabItem>

<TabItem value="swift">

```swift title="ViewController.swift"
override func viewDidLoad() {
    super.viewDidLoad()

    do {
        try functionThatCanThrowError()
    } catch let error {
        // highlight-next-line
        Shake.handleError(error, clusterID: "MyViewController")
    }

}

private func functionThatCanThrowError() throws {
    throw MyError.testError
}
```

</TabItem>
</Tabs>

### Error structure

The `handleError`function will accept NSError types which naturally contain the following properties:

- code:     `Int`
- domain:   `String`
- userInfo: `[AnyHashable : Any]? = nil`


### Caught Exceptions?

Shake doesn't provide an interface to directly report caught NSExceptions. Cocoa APIs are not exception safe, and should 
be treated as a developer error which terminates the program shortly after.
Although the NSException can be caught by using the `@catch` statement, this is considered a bad practice and really shouldn't be
done anywhere in your code.
