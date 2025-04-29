---
id: releases
title: Release notes
---
>This page lists all updates to the Shake Web SDK.

<p class="p2 mt-40">Other platforms → &nbsp;
<a href="/docs/ios/releases/">iOS</a>&nbsp; 
<a href="/docs/android/releases/">Android</a>&nbsp;
<a href="/docs/react/releases/">React Native</a>&nbsp;
<a href="/docs/flutter/releases/">Flutter</a>&nbsp;  
<a href="/docs/chrome-extension/releases/">Chrome Extension</a>&nbsp;
</p>


## What's next?

What would you like us to build next? Upvote upcoming features and suggest new ideas on the [Public feedback board](https://feedback.shakebugs.com/).

## 2.12.0
<span class="tag-button">April 18, 2025</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

#### What's new

We've improved Shake performance and feel. Shake is now more stable and runs even smoother.

## 2.11.0
<span class="tag-button">March 28, 2025</span>&nbsp;&nbsp;

#### What's new

- [Shake's been translated](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to) to other languages
- Collecting full URL instead relative path
- Performance optimization

## 2.10.0
<span class="tag-button">March 13, 2025</span>&nbsp;&nbsp;

#### What's new

- Marking bugs on screenshots is now smoother and easier
- Shake now tracks _fetch_ network requests together with _xhr_

#### Bug fixes

We fixed a few minor bugs that were causing problems.

## 2.9.0
<span class="tag-button">November 26, 2024</span>&nbsp;&nbsp;

#### What's new

We've added a new feature - [Session replay](/web/configuration-and-data/session-replay).

## 2.8.0
<span class="tag-button">November 22, 2024</span>&nbsp;&nbsp;

#### What's new

We've improved Shake performance and feel. Shake is now more stable and runs even smoother.

## 2.7.0
<span class="tag-button">November 8, 2024</span>&nbsp;&nbsp;

#### What's new

Shake SDK install process is now smoother - you don't need to set domain name in Shake.start method anymore.
Instead, control permitted domains from your dashboard.

## 2.6.0
<span class="tag-button">October 31, 2024</span>&nbsp;&nbsp;

#### What's new

Introducing [Custom branding](/web/configuration-and-data/custom-branding)! 🎨️

From now you can customize the appearance of the Shake SDK with your brand's colors,
fonts, and more and align the SDK with your brand's identity for a consistent user experience.

## 2.5.1
<span class="tag-button">October 11, 2024</span>&nbsp;&nbsp;

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 2.5.0
<span class="tag-button">October 2, 2024</span>&nbsp;&nbsp;

#### What's new

[Data privacy is enhanced](/web/configuration-and-data/manage-sensitive-data) by filtering sensitive information directly on the device, ensuring it never reaches Shake servers. 
Shake also allows you to manage and control what network requests data is sent to third-party services.

#### Bug fixes

- Console logs with multiple output parameters are properly captured.  
- Speed of opening Shake when new message is received is improved.

## 2.4.0
<span class="tag-button">September 19, 2024</span>&nbsp;&nbsp;

#### What's new

We're excited to announce the latest feature in our SDK, which allows you to [create a custom feedback form](/web/configuration-and-data/custom-forms).
Now you can collect even more detailed information from your users and tailor the form to your specific needs.
Say goodbye to generic feedback form and hello to personalized data collection!

## 2.3.1
<span class="tag-button">September 11, 2024</span>&nbsp;&nbsp;

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 2.3.0
<span class="tag-button">September 5, 2024</span>&nbsp;&nbsp;

#### What's new

[App users module](/web/users/overview) is added. 

This module enables you to see a list of your app users, their attributes and tickets on your Shake dashboard.
You can now chat with app users to provide you more details about their reported tickets.

## 2.2.0
<span class="tag-button">August 28, 2024</span>&nbsp;&nbsp;

#### What's new

We've integrated Shake with Fullstory. If your website is using Fullstory for customer behavior analytics, 
Fullstory session link will automatically be visible on Shake dashboard.

## 2.1.3
<span class="tag-button">July 25, 2024</span>&nbsp;&nbsp;

#### Bug fixes

We fixed a few minor bugs that were causing problems. Shake is now more stable and runs even smoother.

## 2.1.2
<span class="tag-button">July 19, 2024</span>&nbsp;&nbsp;

#### What's new

We've added a few animations, redesigned drawing toolbox and fixed a few minor issues

## 2.1.1
<span class="tag-button">June 21, 2024</span>&nbsp;&nbsp;

#### Bug fixes

We've fixed a bug that blocks sending reports on some devices.

## 2.1.0
<span class="tag-button">June 6, 2024</span>&nbsp;&nbsp;

#### What's new

Users can now attach additional files together with regular screenshot and videos directly from the Shake.
This new feature makes it easier to provide detailed feedback in bug reports.

## 2.0.0
<span class="tag-button">May 27, 2024</span>&nbsp;&nbsp;

#### What's new

We've introduced api keys. Use api key instead client id and client secret for [starting Shake](/web/install/npm#initialize-shake).
This improves security and control - you can create multiple api keys or delete old ones if needed.

## 1.1.0
<span class="tag-button">May 15, 2024</span>&nbsp;&nbsp;

#### What's new

We've added [activity history](/web/configuration-and-data/activity-history) feature to the SDK. Shake tracks user's interaction with your app, their network traffic,
logs and system events, and automatically attaches all of those to the ticket.

Now you can get rid of bugs easier!

## 1.0.0
<span class="tag-button">April 16, 2024</span>&nbsp;&nbsp;

#### What's new

First version of Shake SDK for browsers, built completely in pure Javascript. This version supports basic operations
for User Feedback module like sending tickets with automatically attached data, silent reports, custom metadata and 
attaching manual screen recording and screenshot.
