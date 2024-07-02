---
id: releases
title: Release notes
---
>This page lists all updates to the Shake Flutter SDK.

## What's next?

What would you like us to build next? Upvote upcoming features and suggest new ideas on the [Public feedback board](https://feedback.shakebugs.com/).

## 17.0.1
<span class="tag-button">June 24, 2024</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

#### What's new

Our SDK has been refreshed with the latest enhancements and updates to ensure optimal performance and compatibility.

## 17.0.0
<span class="tag-button">May 27, 2024</span>&nbsp;&nbsp;

#### What's new

We've introduced api keys. Use api key instead client id and client secret for [starting Shake](/flutter/installation#initialize-shake).
This improves security and control - you can create multiple api keys or delete old ones if needed.

## 16.2.1
<span class="tag-button">December 12, 2023</span>&nbsp;&nbsp;

#### What's new

We know it's important to keep your dashboard clean and well organized, that's why you can now simply [add tags](/flutter/configuration-and-data/ticket-tags) to your tickets programmatically via code.

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 16.2.0
<span class="tag-button">September 19, 2023</span>&nbsp;&nbsp;

#### What's new

We’ve made it possible for users to open a New [chat](/flutter/user-feedback/invoke) without submitting a New ticket.  
Additionally, you can [customize Shake home screen buttons](/flutter/configuration-and-data/home-screen) according to your taste.

Chat notifications are upgraded with push notifications, so users can [receive chat notifications even when app is closed](/flutter/users/chat#notifications).
Also, there’s now a neat seen indicator that tells you exactly if the message was seen or not. :rocket:

From now, you can  [execute a block of code](/flutter/configuration-and-data/callbacks) when certain actions are triggered within Shake.

This version now contains Turkish, Korean and Dutch translations, which additionally extend [the lists of languages into which Shake's been translated](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to).

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 16.1.0
<span class="tag-button">July 5, 2023</span>&nbsp;&nbsp;

#### What's new

Introducing [Custom branding](/flutter/configuration-and-data/custom-branding)! 🎨️

From now you can customize the appearance of the Shake SDK with your brand's colors,
fonts, and more and align the SDK with your brand's identity for a consistent user experience.

## 16.0.0
<span class="tag-button">April 18, 2023</span>&nbsp;&nbsp;

#### What's new

We're excited to announce the latest feature in our SDK, which allows you to [create a custom feedback form](/flutter/configuration-and-data/custom-forms).
Now you can collect even more detailed information from your users and tailor the form to your specific needs.
Say goodbye to generic feedback form and hello to personalized data collection!

## 15.3.0
<span class="tag-button">July 25, 2022</span>&nbsp;&nbsp;

#### What's new
The [unread chat messages listener](/flutter/users/chat/#unread-messages) is now available in Shake. Anywhere in your app, you can show a user how many unread messages in Shake they have.

#### Bug fixes
Whoops! If you passed null to Shake user register or update methods, that would crash your app. Is crashing any good? No — so we knew what to do. Now everything works smoothly.
While we were at it, we patched a few other obscure edge cases that you were not even aware of. 


## 15.2.0
<span class="tag-button">May 17, 2022</span>&nbsp;&nbsp;

#### What's new
The former Inspect screen has turned into an entire [Inspect section](/flutter/shake-ui/inspect-section). Your testers can now browse, filter and share ticket's Activity history, inspect every log, see Ticket metadata, User metadata and the stack trace — all without ever leaving your app.

#### Bug fixes
We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 15.1.0
<span class="tag-button">December 24, 2021</span>&nbsp;&nbsp;

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
