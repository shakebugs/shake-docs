---
id: inspect
title: Inspect ticket
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The *Inspect screen* allows your user to see the current ticket details — its [Essentials](android/essentials.md) and [Metadata](android/metadata.md) — before submitting it.

## Introduction
The *Inspect screen* can be reached via *Inspect* button on the [New ticket screen](android/new-ticket-screen.md).

<img
  alt="Inspect screen"
  src={useBaseUrl('screens/new_screen.png')}
/>

## Hiding Inspect bug screen
If you don’t want to show *Inspect* button  to a user, hide it using the following method:

```javascript title="App.js"
// highlight-next-line
Shake.setEnableInspectScreen(false);
```
