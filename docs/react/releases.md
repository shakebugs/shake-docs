---
id: releases
title: Release notes
---
>This page lists all updates to the Shake React Native SDK.

## What's next?

What would you like us to build next? Upvote upcoming features and suggest new ideas on the [Public feedback board](https://feedback.shakebugs.com/).

## 16.2.0
<span class="tag-button">September 19, 2023</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

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


## 14.1.3
<span class="tag-button">April 28, 2021</span>&nbsp;&nbsp;

#### Bug fixes

We happily squashed a few pesky bugs.


## 14.1.2
<span class="tag-button">April 22, 2021</span>&nbsp;&nbsp;

#### Bug fixes

We fixed a bug that caused a problem with tracking notifications without title or description.


## 14.1.1
<span class="tag-button">April 13, 2021</span>&nbsp;&nbsp;

#### What's new

You wanted us to get rid of Quick Facts (one long concatenated string)
and introduce [Ticket metadata](/react/configuration-and-data/ticket-metadata) (useful key-value pairs) instead. So we did it.

Not all of you love the default Shake color. Now, whenever users open it up,
Shake can appear in your brand color and with your logo.

Your users can at last attach their own files to tickets!
They can also remove any of them with a subtle long press. Neat.

The Wrap-up screen is now a tiny bit more helpful than before.
If your users want to, they can read how to report great bugs, report any SDK hiccups to us or recommend Shake.

If you want to, Shake's [Activity history](/react/configuration-and-data/activity-history) now allows you to send yourself any custom logs,
and read the notifications users receive.

Users can finally report different types of feedback: bugs, suggestions and questions.

Screenshots are cool, but wouldn't it be even cooler if you could watch a short video of what a user did before reporting the ticket?
That's why we introduced [Auto screen recording](/react/configuration-and-data/auto-screen-recording).

We've all been waiting for this! Your users can record an additional video of their screen or grab one or two more
extra screenshots and attach them to the ticket they're submitting — without ever leaving your app.

Shake will now [automatically redact sensitive data](/react/configuration-and-data/manage-sensitive-data/#automatically-redacted-sensitive-data)
from your network requests, notifications and touch events so it never reaches Shake servers.

Shake now allows you to [protect sensitive data](/react/configuration-and-data/manage-sensitive-data) on the mobile device itself,
so it never reaches the Shake servers. It can be used for notifications, network requests, screens and screen elements.

We've added [console logs](/react/configuration-and-data/activity-history/#console-logs) to Activity history.

You can now use the in-app [intro message](/react/user-feedback/intro-message) to inform your users about Shake availability.

We updated the start method. The configuration keys are now loaded via the method, and not with the values from the `.plist` and `.xml` files.
