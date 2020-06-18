---
id: inspect
title: Inspect
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The Inspect bug screen allows users to see the details of a bug from their device without reporting it.

## Introduction
Your users can inspect a bug — see its [Essentials](/react/essentials.md) and [Quick facts](react/quick-facts.md) — before submitting it. The Inspect bug screen is part of the SDK Wrap-up screen:

<img
  alt="Inspect screen"
  src={useBaseUrl('screens/inspect_screen.png')}
/>

![Inspect screen](/screens/inspect_screen.png)

### Disable
Inspect screen can be disabled using method shown below.  
```javascript
//highlight-next-line
Shake.setEnableInspectScreen(false)
```

