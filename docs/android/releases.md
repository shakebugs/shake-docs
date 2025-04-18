---
id: releases
title: Release notes
---
>This page lists all updates to the Shake Android SDK.

<p class="p2 mt-40"> Other platforms →&nbsp;
<a href="/docs/ios/releases/">iOS</a>&nbsp;
<a href="/docs/react/releases/">React Native</a>&nbsp;
<a href="/docs/flutter/releases/">Flutter</a>&nbsp;
<a href="/docs/web/releases/">Web</a>&nbsp;
</p>

## What's next?

What would you like us to build next? Upvote upcoming features and suggest new ideas on the [Public feedback board](https://feedback.shakebugs.com/).

## 17.1.1
<span class="tag-button">April 16, 2025</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 17.1.0
<span class="tag-button">December 16, 2024</span>&nbsp;&nbsp;

#### Bug fixes

We fixed a few minor bugs that were causing problems.

## 17.0.2
<span class="tag-button">September 11, 2024</span>&nbsp;&nbsp;

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 17.0.1
<span class="tag-button">July 02, 2024</span>&nbsp;&nbsp;

#### What's new

We've revised permissions for storage, notifications, and screenshot detection, and removed deprecated methods to ensure optimal functionality and performance.

## 17.0.0
<span class="tag-button">May 27, 2024</span>&nbsp;&nbsp;

#### What's new

We've introduced api keys. Use api key instead client id and client secret for [starting Shake](/android/installation#initialize-shake). 
This improves security and control - you can create multiple api keys or delete old ones if needed.

## 16.2.5
<span class="tag-button">March 28, 2024</span>&nbsp;&nbsp;

#### What's new

We've added missing ProGuard rules, Shake installation is now even smoother.

## 16.2.4
<span class="tag-button">January 31, 2024</span>&nbsp;&nbsp;

#### What's new

This version now contains Danish translations, which additionally extends [the lists of languages into which Shake's been translated](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to).

## 16.2.3
<span class="tag-button">December 6, 2023</span>&nbsp;&nbsp;

#### Bug fixes

We've sorted out the screen recording hiccup on Android 14, fixed a bug with network requests filter,
untangled a little collision with Android splash screen, resolved Coil version clashes and made sure you can now easily spot chat bubble timestamps.

It's all about making things smoother and more enjoyable.

## 16.2.2
<span class="tag-button">September 11, 2023</span>&nbsp;&nbsp;

#### What's new

We know it's important to keep your dashboard clean and well organized, that's why you can now simply [add tags](/android/configuration-and-data/ticket-tags) to your tickets programmatically via code.

#### Bug fixes

Added missing proguard rules for R8 full mode support.

## 16.2.1
<span class="tag-button">July 20, 2023</span>&nbsp;&nbsp;

#### What's new

From now, you can  [execute a block of code](/android/configuration-and-data/callbacks) when certain actions are triggered within Shake.

This version now contains Turkish, Korean and Dutch translations, which additionally extend [the lists of languages into which Shake's been translated](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to).

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 16.2.0
<span class="tag-button">May 24, 2023</span>&nbsp;&nbsp;

#### What's new

We’ve made it possible for users to open a New [chat](/android/user-feedback/invoke) without submitting a New ticket.  
Additionally, you can [customize Shake home screen buttons](/android/configuration-and-data/home-screen) according to your taste.

Chat notifications are upgraded with push notifications, so users can [receive chat notifications even when app is closed](/android/users/chat#notifications).
Also, there’s now a neat seen indicator that tells you exactly if the message was seen or not. :rocket:

## 16.1.0
<span class="tag-button">May 2, 2023</span>&nbsp;&nbsp;

#### What's new

Introducing [Custom branding](/android/configuration-and-data/custom-branding)! 🎨️ 

From now you can customize the appearance of the Shake SDK with your brand's colors,
fonts, and more and align the SDK with your brand's identity for a consistent user experience.

## 16.0.0
<span class="tag-button">March 30, 2023</span>&nbsp;&nbsp;

#### What's new

We're excited to announce the latest feature in our SDK, which allows you to [create a custom feedback form](/android/configuration-and-data/custom-forms).
Now you can collect even more detailed information from your users and tailor the form to your specific needs.
Say goodbye to generic feedback form and hello to personalized data collection!

## 15.3.1
<span class="tag-button">January 31, 2023</span>&nbsp;&nbsp;

#### Bug fixes

Fixed invalid log spam on React Native SDK, improved chat messages notification and SDK stability

## 15.3.0
<span class="tag-button">June 23, 2022</span>&nbsp;&nbsp;

#### What's new
The [unread chat messages listener](/android/users/chat/#unread-messages) is now available in Shake. Anywhere in your app, you can show a user how many unread messages in Shake they have.

#### Bug fixes
Whoops! If you passed null to Shake user register or update methods, that would crash your app. Is crashing any good? No — so we knew what to do. Now everything works smoothly.
While we were at it, we patched a few other obscure edge cases that you were not even aware of. 


## 15.2.0
<span class="tag-button">April 5, 2022</span>&nbsp;&nbsp;

#### What's new
The former Inspect screen has turned into an entire [Inspect section](/android/shake-ui/inspect-section). Your testers can now browse, filter and share ticket's Activity history, inspect every log, see Ticket metadata, User metadata and the stack trace — all without ever leaving your app.

#### Bug fixes
We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 15.1.1
<span class="tag-button">February 28, 2022</span>&nbsp;&nbsp;

#### Bug fixes

We happily squashed a few pesky bugs.

## 15.1.0
<span class="tag-button">December 20, 2021</span>&nbsp;&nbsp;

#### What's new

[Chat](android/shake-ui/chat-screen.md), the most popular feature on the Public feedback board, is now available.

#### Bug fixes

There were a few minor bugs that caused problems, like bugs do. We fixed those and improved SDK stability too.

## 15.0.2
<span class="tag-button">October 27, 2021</span>&nbsp;&nbsp;

#### What's new

Not all of you love the default Shake color. Now, whenever users open it, Shake can appear in your brand color.

This version now contains Russian, Italian, Polish, Latvian, Estonian and Thai translations, which additionally extend [the lists of languages into which Shake's been translated](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to). 
Your users whose default device language is set to one of these will automatically see Shake in their language.

## 15.0.1
<span class="tag-button">October 14, 2021</span>&nbsp;&nbsp;

#### Bug fixes

We happily squashed a few pesky bugs.

## 15.0.0
<span class="tag-button">September 21, 2021</span>&nbsp;&nbsp;

#### What's new

We've completely [redesigned Shake](/android/shake-ui/home-screen.md) to continue delivering you more and more options in a scalable manner.
It also started supporting dark and light themes, so it can beautifully fit into your app in either case.

We introduced a [Home screen](/android/shake-ui/home-screen.md) where [your users](/android/users/overview.md) can see tickets they previously reported.
