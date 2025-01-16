---
id: callbacks
title: Callbacks
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Execute a block of a code when a certain action is executed by Shake

<p class="p2 mt-40">You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/callbacks/">iOS</a>&nbsp;
<a href="/docs/android/configuration-and-data/callbacks/">Android</a>&nbsp;
<a href="/docs/react/configuration-and-data/callbacks/">React Native</a>&nbsp; 
</p>

## Shake open callback

If you want to perform an action when Shake interface is **opened**, you can do it like shown below:

```dart title="main.dart"
// highlight-start
Shake.setShakeOpenListener(() {
  print('Shake opened!');
});
// highlight-end
```

## Shake dismiss callback

If you want to perform an action when Shake interface is **closed**, you can do it like shown below:

```dart title="main.dart"
// highlight-start
Shake.setShakeDismissListener(() {
  print('Shake dismissed!');
});
// highlight-end
```

## Shake submit callback

To detect when user **pressed a submit button** on the New ticket screen, add a submit listener like in the example below.

This listener provides **type** and **fields** parameters:
- reportType: **String** - "crash" or "feedback" depending on the type of the ticket
- fields: **Map<String, String>** - key value pairs of submitted form fields

```dart title="main.dart"
// highlight-start
Shake.setShakeSubmitListener((String reportType, Map<String, String> fields) {
  print('Shake submitted!');
});
// highlight-end
```
