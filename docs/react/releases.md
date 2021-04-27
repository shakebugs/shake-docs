---
id: react-releases
title: Release notes
---
This page lists all updates to the Shake React Native SDK.

What would you like us to build next? We're dying to hear from you — upvote upcoming features and suggest new ideas on [feedback.shakebugs.com](https://feedback.shakebugs.com/)

## Version

### 14.1.3
<span class="tag-button">April 27, 2021</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

**Bug fixes**

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.

### 14.1.2
<span class="tag-button">April 22, 2021</span>&nbsp;&nbsp;

**Bug fixes**

We fixed a bug that caused a problem with tracking notifications without title or description.

### 14.1.1
<span class="tag-button">April 13, 2021</span>&nbsp;&nbsp;

**What's new**

You wanted us to get rid of Quick Facts (one long concatenated string)
and introduce [Metadata](/react/metadata.md) (useful key-value pairs) instead. So we did it.

Not all of you love the default Shake color. Now, whenever users open it up, Shake can appear in your brand color and with your logo.

Your users can at last attach their own files to a bug report! They can also remove any of them with a subtle long press. Neat.

The Wrap-up screen is now a tiny bit more helpful than before. If your users want to, they can read how to report great bugs or recommend us.

If you want to, our [Activity history](/react/activity.md) now allows you to send yourself any custom logs, and read the notifications users receive.

Users can finally report [different types of feedback](/react/feedback-type.md): bugs, suggestions and questions.

Screenshots are cool, but wouldn't it be even cooler if you could watch a short video of what a user did before reporting the bug? That's why we introduced [Automatic screen recording](/react/automatic-screen-recording.md).

Your users can record an additional video of their screen or grab one or two more extra screenshots and attach them to the feedback they're submitting — without ever leaving your app.

Shake will now automatically [redact sensitive data](react/manage-sensitive-data.md#automatically-redacted-sensitive-data) from your network requests, notifications and touch events so it never reaches Shake servers.

Shake now allows you to [manage sensitive data](react/manage-sensitive-data.md) on the mobile device itself, so it never reaches the Shake servers. It can be used for notifications, network requests, screens and screen elements.

We've added [console logs](react/activity.md#console-logs) to Activity history.

You can now use the in-app Shake [onboarding dialog](react/intro-message.md) to inform your users about Shake availability.

We updated the start method. The configuration keys are now loaded via the method, and not with the values from the `.plist` and `.xml` files.

### 10.0
<span class="tag-button">September 8, 2020</span>&nbsp;&nbsp;

**What's new**

By popular demand, Shake can now be [invoked through code](/react/invoke.md) as well.

Submit yourself a [silent bug report](/react/silent-reports.md) from the background,
without interrupting your end user whatsoever!

Privacy options are important. That’s why you now have a method to
disable or enable [Activity history](/react/activity.md) whenever you want to.

If you want to, you can [hide the Inspect bug button](/react/inspect.md) from your users. Brilliant.


### 9.0
<span class="tag-button">June 25, 2020</span>

**What's new**

You can now use Shake React Native SDK in the React Native applications. Check [Setup](/react/setup.md) guide and follow step by step
guide to integrate Shake SDK into your React Native application.
