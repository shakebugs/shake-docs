﻿---
id: screen-capture
title: Screen capture
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> When Shake's interface is invoked, a screenshot is automatically attached to it. Or it can be attached manually by users.

:::note
Shake SDK is using **html2canvas** package for capturing screenshots. 
Currently, this package doesn't support capturing elements with [new color notations](https://developer.mozilla.org/en-US/blog/css-color-module-level-4/#new_functional_notation_for_colors).
Once this package supports new color notations Shake will be upgraded.
:::


## Automatic screenshot

When Shake is invoked, it automatically captures screen of the app and adds screenshot to the user ticket.

Users can manually remove automatically taken screenshot before sending a ticket.

## Manual screenshot

Shake allows its users to attach additional screenshots using in-built screen capture tool.
Screenshots are a useful way to enrich and describe your feedback and bug reports.

Screenshot can be attached by user by pressing **Grab screenshot** button in the **Attachments** section.

## Privacy

Shake captures just element of the host app - screen elements from other apps or user desktop won't be visible.

Also, user has an in-built option to draw on the screenshots and mask sensitive data if he wants.

