---
id: ios-releases
title: Release notes
---
This page lists all updates to the Shake iOS SDK.

What would you like us to build next? We're dying to hear from you — upvote upcoming features and suggest new ideas on [feedback.shakebugs.com](https://feedback.shakebugs.com/)

### 14.1.4
<span class="tag-button">April 8, 2021</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

**Bug fixes**

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.

### 14.1.3
<span class="tag-button">March 24, 2021</span>&nbsp;&nbsp;

**Bug fixes**

We’ve fixed several issues and taken care of a few hiccups, nothing major.

### 14.1.2
<span class="tag-button">February 4, 2021</span>&nbsp;&nbsp;

**Bug fixes**

We've tinkered with some details and gave the interiors a thorough clean. The SDK is now smoother than it was.

### 14.1.1
<span class="tag-button">January 21, 2021</span>&nbsp;&nbsp;

**What's new**

We updated the start method. The configuration keys are now loaded via the method, and not with the values from the `.plist` file. Don’t worry, the existing implementation will still work for some time.

### 14.1
<span class="tag-button">December 14, 2020</span>&nbsp;&nbsp;

**What's new**

Users can finally report [different types of feedback](/ios/feedback_type.md): bugs, suggestions and questions.

Screenshots are cool, but wouldn't it be even cooler if you could watch a short video of what a user did before reporting the bug? That's why we introduced [Automatic screen recording](/ios/automatic-screen-recording.md).

Your users can record an additional video of their screen or grab one or two more extra screenshots and attach them to the feedback they're submitting — without ever leaving your app.

Shake will now automatically [redact sensitive data](ios/manage-sensitive-data.md#automatically-redacted-sensitive-data) from your network requests, notifications and touch events so it never reaches Shake servers.

Shake now allows you to [manage sensitive data](ios/manage-sensitive-data.md) on the mobile device itself, so it never reaches the Shake servers. It can be used for notifications, network requests, screens and screen elements.

We've added [console logs](ios/activity.md#console-logs) to Activity history.

You can now use the in-app Shake [onboarding dialog](ios/intro-message.md) to inform your users about Shake availability.

Removed support for iOS 10.

### 12.1
<span class="tag-button">November 19, 2020</span>&nbsp;&nbsp;

**What's new**

You wanted us to get rid of Quick Facts (one long concatenated string)
and introduce [Metadata](/ios/metadata.md) (useful key-value pairs) instead. So we did it.

We've added Swift Package Manager support, and removed Carthage support.

### 12.0
<span class="tag-button">September 18, 2020</span>&nbsp;&nbsp;

**What's new**

Not all of you love the default Shake color. Now, whenever users open it up, Shake can appear in your brand color and with your logo.

### 11.0
<span class="tag-button">September 8, 2020</span>&nbsp;&nbsp;

**What's new**

Your users can at last attach their own files to a bug report! They can also remove any of them with a subtle long press. Neat.

There’s no such thing as too many [invocation methods](/ios/invoke.md). Shake can now be invoked by a one-finger swiping gesture from the right edge of the screen too.

The Wrap-up screen is now a tiny bit more helpful than before. If your users want to, they can read how to report great bugs or recommend us.

If you want to, our [Activity history](/ios/activity.md) now allows you to send yourself any custom logs, and read the notifications users receive.

### 10.0
<span class="tag-button">July 8, 2020</span>


**What's new**

To continue delivering you more and more options in a scalable manner,
we have rewritten the whole iOS SDK API Version 10.
It's like getting a flu shot — feel free to hate us for a few minutes while you tweak a call or two,
but we sincerely promise you'll enjoy all the benefits 100 times over.

By popular demand, Shake can now be [invoked through code](/ios/invoke.md) as well.

Submit yourself a [silent bug report](/ios/silent-reports.md) from the background,
without interrupting your end user whatsoever!

Privacy options are important. That’s why you now have a method to
disable or enable [Activity history](/ios/activity.md) whenever you want to.

If you want to, you can [hide the Inspect bug button](/ios/inspect.md) from your users. Brilliant.

### 9.0

<span class="tag-button">February 14, 2020</span>&nbsp;&nbsp;

**What's new**

Shake is now fully equipped to track user’s full [Activity history](/ios/activity.md) —
browse user's interactions with your app, their network requests and system events prior to a bug being reported.

**Resolved issues**

Shake didn’t show up correctly in projects created in Xcode 11. That’s history now.

### 8.0
<span class="tag-button">December 16, 2019</span>


**What's new**

With a Disable Shake feature you can now easily allow only a portion of your app users to use Shake
(for example, the ones that have opted in for beta access), while not allowing it to others.

Think globally, act locally. The latest version of Shake SDK has been cautiously translated to
Spanish, German and French. Users whose default device language is set to one of these,
will automatically see Shake in their language.

### 7.0
<span class="tag-button">July 16, 2019</span>

**What's new**

Shake now officially, and nicely, works on your tablet apps

Putting our best foot forward.
Just like before an airplane crash, Shake now records a user's detailed environment profile covering the last 60 seconds
before a bug was submitted. This feature is called — you’ve guessed it — [Black box](/ios/blackbox.md).

**Resolved issues**

There was a problem where code signing of your app failed if it contained Shake SDK. This will not happen any more.

### 6.0
<span class="tag-button">June 24, 2019</span>

**What's new**

Shake is now a tiny bit cooler because you can also use it in landscape mode.

With [Quick facts](/android/quick-facts.md), you can now send a value of literally any variable from a user's app to your web Dashboard.

### 5.0
<span class="tag-button">May 29, 2019</span>

**What's new**

You can now inspect your bug right inside your mobile app, no need to submit it at all. Shake the device and tap the Inspect bug button.

Everyone loves colors! That's why users can now choose from 6 of them.

### 4.1
<span class="tag-button">April 22, 2019</span>

**What's new**

Jolly good! Your users can now leave their email address with every bug report so you can just follow that up.

### 4.0
<span class="tag-button">April 8, 2019</span>

**What's new**

Some things are not meant for sharing. Users can now blur out parts of the screen they want to keep private.

Actually, users are now allowed to delete the screenshot attachment altogether if they feel that way.

Are your users visual types? Instead of shaking their device or taking a screenshot,
you can put a floating Report a bug button to be constantly visible inside your app. No way to miss that.

**Resolved issues**

You weren't able to invoke Shake SDK inside the Simulator on your computer. Well, now you are.

### 3.0
<span class="tag-button">February 25, 2019</span>

**What's new**

Users can change their brush color to mark the bugs more creatively and clearly.

From now on, your users can report bugs with Shake while on a plane or in a subway. Hooray for full offline support!

**Resolved issues**

Looooong bug descriptions would cause the SDK screen to start jumping up and down on a user's phone.
Now, everything is running smoothly.

### 2.0
<span class="tag-button">January 28, 2019</span>

**What's new**

If your users want to report bugs by taking a screenshot — instead of shaking their phone — you are all in luck
because Shake SDK can now be invoked that way too. Head over to [Invoke](/ios/invoke.md) to choose your desired SDK invoke gesture.

**Resolved issues**

A user's screenshot would sometimes arrive to you narrower than it actually is.
We can proudly say it no longer happens.
