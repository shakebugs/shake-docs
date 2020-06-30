---
id: activity
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Shake diligently tracks user's interaction with your app, their network traffic and system events,
and automatically attaches all of those to every bug report.

## No coding required
You can inspect all events that lead to the bug being reported out-of-the-box. You’ll see a link to *Activity history* in the top right corner:

<img
  alt="Activity screen"
  src={useBaseUrl('screens/activity_screen.png')}
/>

:::note

Shake intercepts network requests by swizzling URLSession’s `dataTask(with:completionHandler) `method.
If you don’t set `completionHandler` or use the `URLSession` delegate instead, Shake won’t record network responses.

:::

## Limitations
In a Free workspace you can see up to 20 events that lead to every bug.
If you need to dive really deep to find causes of the weirdest bugs,
in a Premium workspace you can browse the entire activity history.
