---
id: releases
title: Release notes
---
>This page lists all updates to the Shake Flutter SDK.

## What's next?

What would you like us to build next? Upvote upcoming features and suggest new ideas on the [Public feedback board](https://feedback.shakebugs.com/).


## 15.1.0
<span class="tag-button">December 24, 2021</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

#### What's new

[Chat](/flutter/shake-ui/chat-screen), the most popular feature on the Public feedback board, is now available.

#### Bug fixes

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.

## 15.0.0
<span class="tag-button">October 27, 2021</span>&nbsp;&nbsp;

#### What's new

We've completely [redesigned Shake](/flutter/shake-ui/home-screen) to continue delivering you more and more options in a scalable manner.
It also started supporting dark and light themes, so it can beautifully fit into your app in either case.

We introduced a [Home screen](/flutter/shake-ui/home-screen) where [your users](/flutter/users/overview) can see tickets they previously reported.

This version now contains Russian, Italian, Polish, Latvian, Estonian and Thai translations, which additionally extend [the lists of languages into which Shake's been translated](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to). 
Your users whose default device language is set to one of these will automatically see Shake in their language.

## 14.1.2
<span class="tag-button">May 26, 2021</span>&nbsp;&nbsp;

#### What's new

We migrated Shake SDK to null safety. Null safety helps you avoid a class of bugs that are often hard to spot,
and as an added bonus enables a range of performance and stability improvements.

## 14.1.1
<span class="tag-button">April 29, 2021</span>&nbsp;&nbsp;

#### Bug fixes

We happily squashed a few pesky bugs.

## 14.1.0
<span class="tag-button">April 28, 2021</span>&nbsp;&nbsp;

#### What's new

You wanted us to get rid of Quick Facts (one long concatenated string)
and introduce [Ticket metadata](/flutter/configuration-and-data/ticket-metadata) (useful key-value pairs) instead. So we did it.

Not all of you love the default Shake color. Now, whenever users open it up,
Shake can appear in your brand color and with your logo.

Your users can at last attach their own files to tickets!
They can also remove any of them with a subtle long press. Neat.

The Wrap-up screen is now a tiny bit more helpful than before.
If your users want to, they can read how to report great bugs, report any SDK hiccups to us or recommend Shake.

If you want to, Shake's [Activity history](/flutter/configuration-and-data/activity-history) now allows you to send yourself any custom logs,
and read the notifications users receive.

Users can finally report [different types of feedback](/flutter/user-feedback/feedback-type): bugs, suggestions and questions.

Screenshots are cool, but wouldn't it be even cooler if you could watch a short video of what a user did before reporting the ticket?
That's why we introduced [Auto screen recording](/flutter/configuration-and-data/auto-screen-recording).

We've all been waiting for this! Your users can record an additional video of their screen or grab one or two more
extra screenshots and attach them to the ticket they're submitting — without ever leaving your app.

Shake will now [automatically redact sensitive data](/flutter/configuration-and-data/manage-sensitive-data/#automatically-redacted-sensitive-data)
from your network requests, notifications and touch events so it never reaches Shake servers.

Shake now allows you to [protect sensitive data](/flutter/configuration-and-data/manage-sensitive-data) on the mobile device itself,
so it never reaches the Shake servers. It can be used for notifications, network requests, screens and screen elements.

We've added [console logs](/flutter/configuration-and-data/activity-history/#console-logs) to Activity history.

You can now use the in-app [intro message](/flutter/user-feedback/intro-message) to inform your users about Shake availability.

We updated the start method. The configuration keys are now loaded via the method, and not with the values from the `.plist` and `.xml` files.

## 10.0
<span class="tag-button">October 16, 2020</span>&nbsp;&nbsp;

#### What's new

You can now use Shake SDK in your Flutter apps. Start with the [Installation guide](/flutter/installation).