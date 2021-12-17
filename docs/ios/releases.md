---
id: releases
title: Release notes
---
This page lists all updates to the Shake iOS SDK.

What would you like us to build next? We're dying to hear from you — upvote upcoming features and suggest new ideas on [feedback.shakebugs.com](https://feedback.shakebugs.com/)

## Version

### 15.1.0
<span class="tag-button">December 17, 2021</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

**What's new**

[Chat](ios/screens/chat-screen.md), the most upvoted feature on our feedback list is now available!

From now, you can reply to your users who report bugs, experience a crash, or send you feedback. 
Ask a user for bug details over the Dashboard and the user will receive a message notification. 
The user can reply to your question and provide you more details without leaving your app.

Chat supports dark and light theme and is integrated with the white labeling to show it in your brand color.

**Bug fixes**

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.


### 15.0.2
<span class="tag-button">October 27, 2021</span>&nbsp;&nbsp;

**What's new**

Not all of you love the default Shake color. Now, whenever users open it up, Shake can appear in your brand color.

This version now contains a Russian, Italian, Polish, Latvian, Estonian and Thai translation, which additionally extends [the lists of languages Shake's been translated to](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to). 
Your users whose default device language is set to one of these will automatically see Shake in their language.

**Bug fixes**

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.

### 15.0.1
<span class="tag-button">October 14, 2021</span>&nbsp;&nbsp;

**Bug fixes**

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.

### 15.0.0
<span class="tag-button">September 21, 2021</span>&nbsp;&nbsp;

**What's new**

We've completely [redesigned Shake](/ios/screens/home-screen.md) to continue delivering you more and more options in a scalable manner.
It also started supporting dark and light theme so it can beautifully fit into your app in either case.

We've introduced [Home screen](/ios/screens/home-screen.md) where [your users](/ios/users/introduction.md) can see tickets they reported.

### 14.4.0
<span class="tag-button">July 22, 2021</span>&nbsp;&nbsp;

**What's new**

From now, you can [register users of your application](/ios/users/introduction.md) with Shake. You can assign metadata to each user what
 enables a powerful connection between the specific user of your app, and the rest of the Shake features. 
 
**Bug fixes**
 
There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.

### 14.3.0
<span class="tag-button">June 2, 2021</span>&nbsp;&nbsp;

**What's new**

If you are using the shaking gesture as your invocation event, you can now set [how sensitive the device should be to the shaking](/ios/customer-feedback/invoke.md#shaking).
 
Shake now supports [customization of feedback types](/ios/customer-feedback/feedback-type.md#custom-types), you can configure Shake to display any number of custom categories related to your product.

We've added an option to [exclude the screenshot from the reports](/ios/configuration-and-data/screenshot.md#excluding-the-screenshot-from-a-report), this option allows you to capture the screenshot only when required.

This version now contains a Portuguese translation, which additionally extends [the lists of languages Shake's been translated to](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to). 
Your users whose default device language is set to one of these will automatically see Shake in their language.

**Bug fixes**

Fixed issue where Shake was invoking slowly.

Fixed bug where sometimes Shake would stop notification tap native delegate methods from being called.

Made `Shake.handleError` public.

### 14.2.1
<span class="tag-button">May 12, 2021</span>&nbsp;&nbsp;

**Bug fixes**

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.

### 14.2.0
<span class="tag-button">May 10, 2021</span>&nbsp;&nbsp;

**What's new**

Shake Crash beta is released. This personalized crash reporting approach allows you to prevent bad reviews,
build user relationships and fix app crashes faster than before with the power of data automation. 
Read all about it [on its subpage](https://www.shakebugs.com/crash), or dive right into [its Docs](/ios/crash-reports/introduction.md) to enable it in your app.

We've increased the size limit for feedback attachments, now you can attach up to 10 MB per file.

### 14.1.5
<span class="tag-button">April 28, 2021</span>&nbsp;&nbsp;

**Bug fixes**

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.

### 14.1.4
<span class="tag-button">April 13, 2021</span>&nbsp;&nbsp;

**What's new**

This version now contains Traditional and Simplified Chinese translations, which additionally extends [the lists of languages Shake's been translated to](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to). 
Your users whose default device language is set to one of these will automatically see Shake in their language.

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

Users can finally report [different types of feedback](/ios/customer-feedback/feedback-type.md): bugs, suggestions and questions.

Screenshots are cool, but wouldn't it be even cooler if you could watch a short video of what a user did before reporting the bug? That's why we introduced [Automatic screen recording](/ios/configuration-and-data/automatic-screen-recording.md).

Your users can record an additional video of their screen or grab one or two more extra screenshots and attach them to the feedback they're submitting — without ever leaving your app.

Shake will now automatically [redact sensitive data](ios/configuration-and-data/manage-sensitive-data.md#automatically-redacted-sensitive-data) from your network requests, notifications and touch events so it never reaches Shake servers.

Shake now allows you to [manage sensitive data](ios/configuration-and-data/manage-sensitive-data.md) on the mobile device itself, so it never reaches the Shake servers. It can be used for notifications, network requests, screens and screen elements.

We've added [console logs](ios/configuration-and-data/activity.md#console-logs) to Activity history.

You can now use the in-app Shake [onboarding dialog](ios/configuration-and-data/intro-message.md) to inform your users about Shake availability.

Removed support for iOS 10.

### 12.1
<span class="tag-button">November 19, 2020</span>&nbsp;&nbsp;

**What's new**

You wanted us to get rid of Quick Facts (one long concatenated string)
and introduce [Metadata](/ios/configuration-and-data/metadata.md) (useful key-value pairs) instead. So we did it.

We've added Swift Package Manager support, and removed Carthage support.

### 12.0
<span class="tag-button">September 18, 2020</span>&nbsp;&nbsp;

**What's new**

Not all of you love the default Shake color. Now, whenever users open it up, Shake can appear in your brand color and with your logo.

### 11.0
<span class="tag-button">September 8, 2020</span>&nbsp;&nbsp;

**What's new**

Your users can at last attach their own files to a bug report! They can also remove any of them with a subtle long press. Neat.

There’s no such thing as too many [invocation methods](/ios/customer-feedback/invoke.md). Shake can now be invoked by a one-finger swiping gesture from the right edge of the screen too.

The Wrap-up screen is now a tiny bit more helpful than before. If your users want to, they can read how to report great bugs or recommend us.

If you want to, our [Activity history](/ios/configuration-and-data/activity.md) now allows you to send yourself any custom logs, and read the notifications users receive.

### 10.0
<span class="tag-button">July 8, 2020</span>


**What's new**

To continue delivering you more and more options in a scalable manner,
we have rewritten the whole iOS SDK API Version 10.
It's like getting a flu shot — feel free to hate us for a few minutes while you tweak a call or two,
but we sincerely promise you'll enjoy all the benefits 100 times over.

By popular demand, Shake can now be [invoked through code](/ios/customer-feedback/invoke.md) as well.

Submit yourself a [silent bug report](/ios/customer-feedback/silent-reports.md) from the background,
without interrupting your end user whatsoever!

Privacy options are important. That’s why you now have a method to
disable or enable [Activity history](/ios/configuration-and-data/activity.md) whenever you want to.

If you want to, you can [hide the Inspect bug button](/ios/configuration-and-data/inspect.md) from your users. Brilliant.
