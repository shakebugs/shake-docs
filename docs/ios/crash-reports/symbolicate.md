---
id: symbolicate
title: Symbolicate
---

> Crash reports are a lot more useful when you see your symbolicated application frames.

## Introduction

In order for crash reports to be symbolicated, you need to upload your dSYM files to Shake.

Unsymbolicated crash reports will appear in the special section of your Shake dashboard.
You will see UUIDs of the required dSYM files which you can then find on your system.

## Enable dSYM files for debug builds

If you plan using crash reporting in a development environment, every debug build action needs to generate dSYM files.
When in your project:

1. Click your _App.xcodeproj_ blue project icon usually located at the top of the _File Inspector_ tab in your left-hand pane
1. Select your main app target
1. Open Build Settings for that target
1. Navigate to the Build Options section
1. Set **Debug Information Format** option to _dwarf with dSYM file_ for your Debug/Development configuration

:::note

On Xcode 16+ you should also set **Enable Debug Dylib Support** to _No_. This option affects how dSYM files are generated
and should be disabled until we support it.

:::note


## Upload manually to Shake dashboard

First, open Xcode derived data folder:
_Xcode → Settings → Locations → Derived Data_ → click the _Finder_ folder link.

Find you app's derved data folder and zip the symbolication files, files with the _.dSYM_ extension.

To upload dSYM files to the Shake dashboard:

1. Visit [Workspace administration → Apps](https://app.shakebugs.com/administration)
1. Click your app name to expand it
1. Select **Crash reports** menu and click **Choose a file** button
1. Drag and drop your zipped symbolication files there

## Upload dSYM files using RunPhase script

Shake ships with the `upload-symbols.sh` script which uploads dSYM files to Shake servers.

To ensure that the latest dSYM files are automatically uploaded after every build process, add a new Run Script Phase:
_Product → Scheme → EditScheme_ → expand the _Build_ options → _Post Actions → +_

Make sure that _Provide build settings from_ option is set to your project to ensure that script can access project variables.

Paste this script but make sure to replace `app-api-key` with the actual value you have in [your app settings](https://app.shakebugs.com/administration/apps):

```script
//highlight-next-line
sh $(find $BUILD_DIR -name "upload-symbols.sh") --api_key <app-api-key> 
```

If your crash reports are not being symbolicated, make sure the script is working properly
by doublechecking the Xcode Build log for Shake upload script errors.
When looking at the Build log, search for the **"SHAKE_SCRIPT"** keyword to identify potential problems and see whether the upload was successful.

## Upload dSYM files using fastlane plugin

[fastlane](https://fastlane.tools/) is an open source app automation platform ([docs](http://docs.fastlane.tools)).
You can use it to automate App Store Connect authentication and downloading of dSYM files.

### Install fastlane

First, run the `bundle init` command in your terminal which will generate the Gemfile like this one:

<TabItem value="gemifle">

```gemfile title="Gemfile"
// highlight-start
source "https://rubygems.org"
gem "fastlane"
// highlight-end
```

</TabItem>

Then, run the `bundle install` command to install fastlane and associated dependencies.

Lastly, navigate your terminal to your project's directory and run the `fastlane init` command.

### Install Shake plugin

<TabItem value="ruby">

```ruby title="Terminal"
// highlight-next-line
bundle exec fastlane add_plugin upload_symbols_to_shake
```

</TabItem>

### Use the plugin

Add the `upload_symbols_to_shake` action with [gym](http://docs.fastlane.tools/actions/gym/#gym) to upload dSYMs generated from the build:

<TabItem value="ruby">

```ruby title="Fastfile"
// highlight-start
lane :refresh_dsyms do
    gym
        upload_symbols_to_shake(api_key: "<App api key>", bundle_id: "<Bundle id of project>", plist_path: "<Path to Info.plist>")
end
// highlight-end
```

</TabItem>

Or, you can pass the dSYM file paths manually:

<TabItem value="ruby">

```ruby title="Fastfile"
// highlight-next-line
upload_symbols_to_shake(api_key: "<App api key>", bundle_id: "<Bundle id of project>", dsym_array_paths: ["./App1.dSYM.zip", "./App2.dSYM.zip"],  plist_path: "<Path to Info.plist>")
```

</TabItem>

You can find `<App api key>` in [your app settings](https://app.shakebugs.com/administration/apps):
