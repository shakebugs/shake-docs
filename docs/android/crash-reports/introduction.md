---
id: introduction
title: Introduction
---

Shake records crashes and uncaught exceptions that occur in your app and intelligently groups them on the dashboard, offering enough
contextual information to help you with solving the issue. It is powerful on its own, but when combined with rest 
of the Shake features, it becomes a crash reporting power tool.

## Sending the report

Crash reports are automatically sent during the next app launch after the crash occurs. These reports follow the same rules as regular feedback reports to some extent.
The crash reports will be saved even if the app is offline and sent later when app regains connection. 

Your end users can't opt out of sending their crash report as they can with the standard feedback, however they can optionally [provide more information](/android/crash-reports/describe-crash) and describe what happened prior to the crash.


## Report context

As mentioned before, the crash report is similar to the regular feedback report. 

All of the existing Shake features elegantly interoperate with it, meaning that your crash report will provide the screenshot of the last thing that user saw, and even better, the last 15 seconds of the screen recording before the crash!

A detailed crash report like this one, along with logs and all other useful information, provides you with plenty of usable data to help you resolve the root issue efficiently.

Check our [installation guide](android/installation.md) to start using Shake in your app.
