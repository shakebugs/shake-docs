---
id: releases
title: Release notes
---
>This page lists all updates to the Shake React Native SDK.

<p class="p2 mt-40">Other platforms → &nbsp;
<a href="/docs/ios/releases/">iOS</a>&nbsp; 
<a href="/docs/android/releases/">Android</a>&nbsp;
<a href="/docs/flutter/releases/">Flutter</a>&nbsp;  
<a href="/docs/web/releases/">Web</a>&nbsp;
<a href="/docs/chrome-extension/releases/">Chrome extension</a>&nbsp;
</p>


## What's next?

What would you like us to build next? Upvote upcoming features and suggest new ideas on the [Public feedback board](https://feedback.shakebugs.com/).

## 17.1.3
<span class="tag-button">August 21, 2025</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 17.1.2
<span class="tag-button">May 28, 2025</span>&nbsp;&nbsp;

#### What's new

Shake now supports React Native 0.79.

#### Bug fixes

We fixed Shake custom theme background color and added a few defensive try catch blocks to ensure app doesn't crash.

## 17.1.1
<span class="tag-button">April 18, 2025</span>&nbsp;&nbsp;

#### What's new

- Shake now support Expo apps
- Collecting **fetch** type network requests together with **xhr**

#### Bug fixes

- Screen recording on Android 15 fixed
- Network requests status code fixed

## 17.1.0
<span class="tag-button">December 16, 2024</span>&nbsp;&nbsp;

#### What's new

We've updated our SDK to use React Native new architecture. 
If your project is still running on old architecture, use 17.0.x version.

## 17.0.1
<span class="tag-button">September 9, 2024</span>&nbsp;&nbsp;

#### Bug fixes

Fixed issue with setting custom form, now Shake picker "key" value is working as intended.

## 17.0.0
<span class="tag-button">May 27, 2024</span>&nbsp;&nbsp;

#### What's new

We've introduced api keys. Use api key instead client id and client secret for [starting Shake](/react/installation#initialize-shake).
This improves security and control - you can create multiple api keys or delete old ones if needed.

## 16.2.1
<span class="tag-button">December 12, 2023</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

#### What's new

We know it's important to keep your dashboard clean and well organized, that's why you can now simply [add tags](/react/configuration-and-data/ticket-tags) to your tickets programmatically via code.

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 16.2.0
<span class="tag-button">September 19, 2023</span>&nbsp;&nbsp;

#### What's new

We’ve made it possible for users to open a New [chat](/react/user-feedback/invoke) without submitting a New ticket.  
Additionally, you can [customize Shake home screen buttons](/react/configuration-and-data/home-screen) according to your taste.

Chat notifications are upgraded with push notifications, so users can [receive chat notifications even when app is closed](/react/users/chat#notifications).
Also, there’s now a neat seen indicator that tells you exactly if the message was seen or not. :rocket:

From now, you can  [execute a block of code](/react/configuration-and-data/callbacks) when certain actions are triggered within Shake.

This version now contains Turkish, Korean and Dutch translations, which additionally extend [the lists of languages into which Shake's been translated](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to).

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 16.1.0
<span class="tag-button">July 6, 2023</span>&nbsp;&nbsp;

#### What's new

Introducing [Custom branding](/react/configuration-and-data/custom-branding)! 🎨️

From now you can customize the appearance of the Shake SDK with your brand's colors,
fonts, and more and align the SDK with your brand's identity for a consistent user experience.

## 16.0.0
<span class="tag-button">April 18, 2023</span>&nbsp;&nbsp;

#### What's new

We're excited to announce the latest feature in our SDK, which allows you to [create a custom feedback form](/react/configuration-and-data/custom-forms).
Now you can collect even more detailed information from your users and tailor the form to your specific needs.
Say goodbye to generic feedback form and hello to personalized data collection!

## 15.3.0
<span class="tag-button">June 23, 2022</span>&nbsp;&nbsp;

#### What's new
The [unread chat messages listener](/react/users/chat/#unread-messages) is now available in Shake. Anywhere in your app, you can show a user how many unread messages in Shake they have.

#### Bug fixes
Whoops! If you passed null to Shake user register or update methods, that would crash your app. Is crashing any good? No — so we knew what to do. Now everything works smoothly.
While we were at it, we patched a few other obscure edge cases that you were not even aware of. 

## 15.2.0
<span class="tag-button">April 19, 2022</span>&nbsp;&nbsp;

#### What's new
The former Inspect screen has turned into an entire [Inspect section](/react/shake-ui/inspect-section). Your testers can now browse, filter and share ticket's Activity history, inspect every log, see Ticket metadata, User metadata and the stack trace — all without ever leaving your app.

#### Bug fixes
We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 15.1.0
<span class="tag-button">December 24, 2021</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

#### What's new

[Chat](/react/shake-ui/chat-screen), the most popular feature on the Public feedback board, is now available.

#### Bug fixes

There were a few minor bugs that caused problems, like bugs do. We fixed those, and improved the SDK stability too.


## 15.0.0
<span class="tag-button">October 14, 2021</span>&nbsp;&nbsp;

#### What's new

We've completely [redesigned Shake](/react/shake-ui/home-screen) to continue delivering you more and more options in a scalable manner.
It also started supporting dark and light themes, so it can beautifully fit into your app in either case.

We introduced a [Home screen](/react/shake-ui/home-screen) where [your users](/react/users/overview) can see tickets they previously reported.

This version now contains Russian, Italian, Polish, Latvian, Estonian and Thai translations, which additionally extend [the lists of languages into which Shake's been translated](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to). 
Your users whose default device language is set to one of these will automatically see Shake in their language.
