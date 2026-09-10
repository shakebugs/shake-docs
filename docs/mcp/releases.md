---
id: releases
title: Release Notes
---
>This page lists all updates to the Shake MCP server.

## v2.0.0 — Read, write and administer

#### Added
 - `shake_whoami` — lists your workspaces and apps; the starting point for every other tool
 - `get_ticket` and `get_crash` — one tool per record type, with an `include` list that selects details, logs, chat, screenshot, video, session replay, similar tickets, crash events, stack traces, blamed frame and missing dSYMs
 - `get_end_user` — the person who reported a ticket, their history and ban state
 - `search_tickets`, `search_crashes` and `search_end_users` — filter by status, priority, assignee, tags, version, OS, device, reporter, date and metadata; each returns a dashboard URL reproducing the search
 - `check_release_health` — crash-free rate, new and regressed crash groups, and the loudest groups for a release
 - `update_ticket` and `update_crash` — change status, priority, assignee, title, tags and internal notes on one or many records at once
 - `reply_to_reporter` — reply to a ticket's reporter in their in-app inbox, with your workspace's common replies offered in the preview
 - `notify_reporters` — message everyone who hit a crash, or the reporters of a set of tickets, in one go
 - `delete_ticket` — delete a single ticket, with its linked-ticket blast radius stated up front
 - `setup_shake_app` — find or create an app and return its SDK key
 - `manage_workspace` — members, invitations, approved email domains and common replies
 - `get_dashboard_link` — a dashboard URL for the things that stay dashboard-only: billing, integrations, white labeling, app settings, bulk and crash-group deletion
 - `get_shake_docs` — search this documentation site from your agent
 - Resources: `shake://docs/{platform}`, `shake://ticket/{app_key}/{key}` and `shake://crash/{app_key}/{key}`
 - Prompts: `integrate_shake_sdk`, `triage_ticket` and `release_check`

#### Changed
 - Tickets and crashes can be referenced three ways everywhere: a dashboard URL, an `app_key/key` pair such as `H4UQEBL0/412`, or a UUID
 - `get_ticket` returns the screenshot as image data, exactly as `get_user_feedback_screenshot` did
 - Read and write are separate OAuth scopes, `mcp:read` and `mcp:write`

#### Behavior
 - Anything that reaches a real person — `reply_to_reporter`, `notify_reporters` — plus `delete_ticket` and member changes now take two calls: a preview you approve, then the action. The confirmation token is single-use, expires in five minutes, and stops working if what it described has changed
 - Prompt `analyze_user_feedback_ticket` is replaced by `triage_ticket`, which takes any ticket reference rather than a full URL. `batch_user_feedback_analysis` is withdrawn — ask for several tickets in one request instead

#### Deprecated
 - `get_user_feedback_details`, `get_user_feedback_activity_history`, `get_user_feedback_screenshot`, `get_user_feedback_video` and `get_user_feedback_session_replay` still work, but each is one `include` section of `get_ticket`. Existing setups keep running; new ones should use `get_ticket`

## v1.1.0 — Visual debugging support
#### Added
 - Screenshot retrieval via `get_user_feedback_screenshot` (read-only) — returns the actual screenshot image attached to a ticket
 - Video recording retrieval via `get_user_feedback_video` (read-only) — returns video URL and metadata (file size, content type)
 - Session replay retrieval via `get_user_feedback_session_replay` (read-only) — returns session replay URL and metadata (file size, content type)

#### Behavior
 - Automatic tool invocation when users request screenshots, videos, session replays, or visual evidence from tickets
 - Screenshots are returned as image data for immediate viewing; videos and session replays return URLs due to large file sizes

## v1.0.0 — Initial release
#### Added
 - ShakeBugs ticket details retrieval via `get_user_feedback_details` (read-only)
 - Activity history / logs retrieval via `get_user_feedback_activity_history` (read-only), including console output, errors, and network request traces

 - `analyze_user_feedback_ticket` prompt for guided, step-by-step debugging of a single ticket (details → timeline → logs → RCA)
 - `batch_user_feedback_analysis` prompt for analyzing multiple tickets, producing per-ticket categorization and a summarized table of findings

#### Behavior
 - Automatic tool invocation when users provide app.shakebugs.com ticket URLs or ask for analysis/debugging
 - Automatic log tool invocation when users request logs, console output, stack traces, network activity, or crash timelines
