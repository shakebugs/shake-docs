---
id: flutter-releases
title: Release notes
---
This page lists all updates to the Shake Flutter SDK.

What would you like us to build next? We're dying to hear from you — upvote upcoming features and suggest new ideas on [feedback.shakebugs.com](https://feedback.shakebugs.com/)

## Version

### 14.1.1
<span class="tag-button">April 28, 2021</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

**Bug fixes**

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.

### 14.1.0
<span class="tag-button">April 28, 2021</span>&nbsp;&nbsp;

**What's new**

You wanted us to get rid of Quick Facts (one long concatenated string)
and introduce [Metadata](/flutter/metadata.md) (useful key-value pairs) instead. So we did it.

Not all of you love the default Shake color. Now, whenever users open it up, Shake can appear in your brand color and with your logo.

Your users can at last attach their own files to a bug report! They can also remove any of them with a subtle long press. Neat.

The Wrap-up screen is now a tiny bit more helpful than before. If your users want to, they can read how to report great bugs or recommend us.

If you want to, our [Activity history](/flutter/activity.md) now allows you to send yourself any custom logs, and read the notifications users receive.

Users can finally report [different types of feedback](/flutter/feedback-type.md): bugs, suggestions and questions.

Screenshots are cool, but wouldn't it be even cooler if you could watch a short video of what a user did before reporting the bug? That's why we introduced [Automatic screen recording](/flutter/automatic-screen-recording.md).

Your users can record an additional video of their screen or grab one or two more extra screenshots and attach them to the feedback they're submitting — without ever leaving your app.

Shake will now automatically [redact sensitive data](flutter/manage-sensitive-data.md#automatically-redacted-sensitive-data) from your network requests and notifications so it never reaches Shake servers.

Shake now allows you to [manage sensitive data](flutter/manage-sensitive-data.md) on the mobile device itself, so it never reaches the Shake servers. It can be used for notifications and network requests.

We've added [console logs](flutter/activity.md#console-logs) to Activity history.

You can now use the in-app Shake [onboarding dialog](flutter/intro-message.md) to inform your users about Shake availability.

We updated the start method. The configuration keys are now loaded via the method, and not with the values from the `.plist` and `.xml` files.

### 10.0
<span class="tag-button">October 16, 2020.</span>&nbsp;&nbsp;

**What's new**

You can now use Shake Flutter SDK in the Flutter applications. Check [Setup](/flutter/setup.md) guide and follow step by step
guide to integrate Shake SDK into your Flutter application.
