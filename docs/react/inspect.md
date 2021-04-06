---
id: inspect
title: Inspect bug
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The Inspect bug screen allows users to see the details of a bug from their device without reporting it.

## Introduction
Your users can inspect a bug — see its [Essentials](/react/essentials.md) and [Metadata](/react/metadata.md) — before submitting it.
The *Inspect bug* screen is part of the SDK *Wrap-up* screen:

<img
  alt="Inspect screen"
  src={useBaseUrl('screens/inspect_screen.png')}
/>

## Hiding Inspect bug screen
If you don’t want the screen to show when submitting a bug report, you can hide it using the following method:

```javascript title="App.js"
// highlight-next-line
Shake.setEnableInspectScreen(false);
```
