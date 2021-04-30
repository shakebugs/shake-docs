---
id: screenshot
title: Description and screenshot
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers the most obvious content pieces found in every bug report sent to the
 web Dashboard — bug description and the screenshot.

## Introduction
User's screenshot and their brief description of what's happened are 2 most common pieces of
data developers receive with Shake SDK, and you will find this data at the top of your [Dashboard](https://app.shakebugs.com):

<img
  alt="Bug screen"
  src={useBaseUrl('screens/bug_screen.png')}
/>

:::note

Jetpack Compose is a declarative UI toolkit, a paradigm shift from the current View system.
Shake supports capturing Jetpack Compose screens excepting components like LazyColumn, LazyRow Scaffold and Shapes.
On Android O devices, Shake supports capturing excepted components excluding in dialogs.

:::

## User drawing on the screenshot
When users shake their phone and the SDK pops up, they are encouraged to additionally mark a
spot on the screenshot that seems odd to them.

## Adding tags to a bug
If at the very end of a bug description reporter *#adds #some #hashtags*,
those will automatically become <span class="tag-button pink-tag-button">tags</span> in your [Shake Dashboard](https://app.shakebugs.com/).
