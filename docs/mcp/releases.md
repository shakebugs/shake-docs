---
id: releases
title: Release Notes
---
>This page lists all updates to the Shake iOS SDK.

## v1.0.0 — Initial release
#### Added
 - ShakeBugs ticket details retrieval via `get_user_feedback_details` (read-only)
 - Activity history / logs retrieval via `get_user_feedback_activity_history` (read-only), including console output, errors, and network request traces

 - `analyze_user_feedback_ticket` prompt for guided, step-by-step debugging of a single ticket (details → timeline → logs → RCA)
 - `batch_user_feedback_analysis` prompt for analyzing multiple tickets, producing per-ticket categorization and a summarized table of findings

#### Behavior
 - Automatic tool invocation when users provide app.shakebugs.com ticket URLs or ask for analysis/debugging
 - Automatic log tool invocation when users request logs, console output, stack traces, network activity, or crash timelines
