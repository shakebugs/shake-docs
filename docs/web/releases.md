---
id: releases
title: Release notes
---
>This page lists all updates to the Shake Web SDK.

## What's next?

What would you like us to build next? Upvote upcoming features and suggest new ideas on the [Public feedback board](https://feedback.shakebugs.com/).

## 2.1.1
<span class="tag-button">Jun 21, 2024</span>&nbsp;&nbsp;
<span class="tag-button green-tag-button">Latest version</span>

#### Bug fixes

We've fixed a bug that blocks sending reports on some devices.

## 2.1.0
<span class="tag-button">Jun 6, 2024</span>&nbsp;&nbsp;

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
