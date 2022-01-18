---
id: inspect
title: Inspect ticket
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The *Inspect screen* allows your user to see the current ticket details — its [Essentials](flutter/configuration-and-data/data-attached-by-default.md) and [Metadata](flutter/configuration-and-data/ticket-metadata.md) — before submitting it.

## Introduction
The *Inspect screen* can be reached via *Inspect* button on the [New ticket screen](flutter/shake-ui/new-ticket-screen.md).

<img
  alt="Inspect screen"
  src={useBaseUrl('screens/new_screen.png')}
/>

## Hide the *Inspect* button
If you don’t want to show *Inspect* button  to a user, hide it using the following method:

```dart title="main.dart"
// highlight-next-line
Shake.setEnableInspectScreen(false);
```
