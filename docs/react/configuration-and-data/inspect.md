---
id: inspect
title: Inspect ticket
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The *Inspect screen* allows your user to see the current ticket details — its [Essentials](react/configuration-and-data/data-privacy-disclosure.md) and [Metadata](react/configuration-and-data/ticket-metadata.md) — before submitting it.

## Introduction
The *Inspect screen* can be reached via *Inspect* button on the [New ticket screen](react/shake-ui/new-ticket-screen.md).

<img
  alt="Inspect screen"
  src={useBaseUrl('screens/new_screen.png')}
/>

## Hide the *Inspect* button
If you don’t want to show *Inspect* button  to a user, hide it using the following method:

```javascript title="App.js"
// highlight-next-line
Shake.setEnableInspectScreen(false);
```
