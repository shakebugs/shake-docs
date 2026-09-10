---
id: tools-resources-prompts
title: Tools, Resources and Prompts
---

# Shake MCP server
> The Shake MCP server lets your AI agent read your tickets, crashes and end users, triage and update them, reply to the people who reported them, and set up new apps — without leaving your editor.

Start every session with **`shake_whoami`**. Every other tool needs a workspace slug or an `app_key`, and that is the tool that returns them.

Wherever a tool asks for a ticket or a crash, you can give it a full dashboard URL, an `app_key/key` pair such as `H4UQEBL0/412`, or the record's UUID.

## Access

The server uses two OAuth scopes, both granted when you authorize the connection:
 - `mcp:read` — everything under *Discover*, *Read* and *Search* below
 - `mcp:write` — everything that changes data

You only ever see the workspaces, apps and tickets your Shake account already has access to. The MCP server grants nothing extra.

## Confirmation flow

`reply_to_reporter`, `notify_reporters`, `delete_ticket`, and `manage_workspace`'s `invite_member` / `remove_member` never act on the first call. They return a **preview** and a `confirm_token`:

1. Your agent calls the tool without a token, and shows you the preview — who will be messaged, the exact text they will receive, how many records are affected.
2. You approve.
3. Your agent calls again with the same arguments plus the token.

The token is single-use, expires after five minutes, and is bound to exactly what the preview described. If anything changed in between — the wording, the recipient list, the number of linked tickets — the action is refused and your agent has to preview again, because you approved the earlier version of it.

## Discover

### shake_whoami
Lists your workspaces and apps. **Call this first.** Returns each workspace's slug, name and your role in it, plus every app you can access with its `app_key`, platform, bundle id and approval state.
 - Input: `include_search_fields` (optional) — also returns the metadata keys each app records, for filtering in `search_tickets`. Off by default, because collecting them samples up to 500 tickets per app.
 - Read-only

### get_shake_docs
Searches the Shake documentation — this site. Call it with nothing to list the platforms, with `platform` to list that platform's pages, with `topic` to fetch one exact page, or with `query` for free-text search.
 - Input: `platform`, `topic`, `query` (all optional)
 - Read-only

### get_dashboard_link
Returns a dashboard URL for the things the MCP server deliberately does not do: billing, integrations (Jira, Slack, Linear and the other service hooks), white labeling, app settings, bulk deletion, and crash-group deletion.
 - Input: `kind` — one of `ticket`, `ticket_list`, `crash`, `crash_list`, `billing`, `members`, `integrations`, `common_comments`, `workspace_settings`, `white_labeling`, `app_settings`; plus `workspace`, and `app_key` / `key` for app- and record-scoped links
 - Read-only

## Read

### get_ticket
Fetches a Shake ticket. Auto-invoked whenever you paste an `app.shakebugs.com` ticket URL or ask to analyze, debug or investigate a ticket.
 - Input: `ref`, and `include` — the sections to fetch, so the agent asks only for what it needs
 - `details` (default) — title, device, OS, app version, custom fields, reproduction steps, and Sentry handoff context when that integration is active
 - `logs` — console output, network requests and system events in chronological order
 - `chat` — the conversation and activity timeline
 - `screenshot` — the image itself, so the agent can actually look at it, plus its URL
 - `video`, `replay` — attachment URLs
 - `similar` — other tickets that look like this one
 - Read-only

### get_crash
Fetches a Shake crash group. Auto-invoked whenever you paste a crash-reports URL or ask to analyze a crash.
 - Input: `ref`, and `include`:
 - `details` (default) — status, priority, assignee, tags, crash and linked-group counts
 - `events` — the most recent crash events in the group (up to 20)
 - `stack_trace` — the thread/exception/frame tree of the most recent event
 - `blamed_frame` — the single frame Shake attributes the crash to
 - `statistics` — app-wide crash statistics, currently whether any dSYMs are missing
 - `missing_dsyms` — the app's missing dSYM UUIDs, context for an unsymbolicated trace
 - `chat` — the conversation and activity timeline on the most recent event
 - Read-only

### get_end_user
Fetches one of an app's end users — the people who report tickets and crashes from the SDK, not your workspace members. Answers "who reported this?", "what else has this person hit?" and "is this user banned?".
 - Input: `ref` — an end-user UUID or `app_key/end_user_id`, such as `H4UQEBL0/alice@example.com` — and `include`: `details` (default) or `tickets`
 - Someone who reinstalled the app has one record per device. `device_records` says how many exist; the newest is the one returned
 - Read-only

## Search

### search_tickets
Searches an app's tickets and returns a dashboard URL that reproduces the same search.
 - Input: `app_key`, plus any of `text`, `status`, `priority`, `assignee` (`"me"` or an email), `tags`, `exclude_tags`, `app_version`, `os_version`, `browser`, `device`, `current_view`, `reporter_email`, `created_after`, `created_before`, `metadata`, `custom_fields`, `unread`, `limit`, `offset`
 - Versions compare: `"1.0.1"` is exact, `">=1.0.1"` is a comparison
 - Dates are **UTC** — `created_after="today"` means since 00:00 UTC, not your local midnight. The response states the window it used
 - Read-only

### search_crashes
Searches an app's crash groups. Same shape as `search_tickets`, with `report_type` (`fatal` or `non_fatal`) as the one field unique to crashes; crash groups have no metadata, custom fields, browser or unread state.
 - Input: `app_key`, plus any of `text`, `status`, `priority`, `assignee`, `tags`, `exclude_tags`, `app_version`, `os_version`, `device`, `current_view`, `reporter_email`, `report_type`, `created_after`, `created_before`, `limit`, `offset`
 - Read-only

### search_end_users
Searches an app's end users. Each result carries the end user's id, ban state, city and country, their metadata, how many tickets and crashes they have reported, and a dashboard URL.
 - Input: `app_key`, plus any of `text`, `end_user_id`, `banned`, `city`, `country`, `metadata`, `sort` (`created` or `tickets`), `include_search_fields`, `limit`, `offset`
 - Only `first_name` and `last_name` are searchable metadata keys. Filtering on any other key is refused rather than silently returning nothing
 - Read-only

### check_release_health
Answers "I shipped the fix — did it work?" after a deploy, and "is this safe to announce?" before one.
 - Input: `app_key`, `app_version` — `"1.0.1"` for one exact build, `"1.0"` for every patch release under it
 - Returns: `crash_free_rate`, `total_crashes`, `new_groups` (first seen in this version), `regressed_groups` (previously resolved, crashing again), and `top_groups` (loudest first). Every group carries a dashboard URL
 - Read-only

## Change

### update_ticket
Updates one or more tickets in a single call — status, priority, assignee, title, tags and an internal note can all change together.
 - Input: `refs` (always a list), plus at least one of `status`, `priority`, `assignee`, `title`, `tags_add`, `tags_remove`, `note`
 - `note` posts an internal note, the same as the dashboard's *Add note*. It is **never** delivered to the reporter — use `reply_to_reporter` for that
 - `status` is `New`, `In progress` or `Closed`; `priority` is `High`, `Medium` or `Low`
 - `assignee` takes `"me"`, a team member's email, or `""` to unassign. Any `#tags` in a new `title` are extracted and added as tags
 - All refs must belong to the same app

### update_crash
The same, for crash groups.
 - Input: `refs` (always a list), plus at least one of `status`, `priority`, `assignee`, `tags_add`, `tags_remove`
 - `status` is `New`, `In progress`, `Closed` or `Locked` — crashes add `Locked`, which tickets do not have; `priority` is `High`, `Medium` or `Low`
 - All refs must belong to the same app

### setup_shake_app
Finds or creates a Shake app in a workspace and returns its SDK key — the tool behind the `integrate_shake_sdk` prompt.
 - Input: `workspace`, `platform`, `bundle_id` (required for mobile, ignored for Web), `app_name`
 - An app that already exists with the same platform and bundle id is returned as-is, never duplicated
 - `Flutter` and `ReactNative` exist for both iOS and Android. If neither exists yet, qualify the platform — `"Flutter (iOS)"` — rather than letting the server guess
 - The returned `sdk_key` is a credential. It belongs in environment variables or a secrets file, never in source control

## Talk to reporters

Both of these reach real people and cannot be unsent, so both require [confirmation](#confirmation-flow).

### reply_to_reporter
Replies to the end user who reported a ticket. The message lands in their Shake SDK inbox inside your app and triggers a push notification.
 - Input: `ticket_ref`, `message` **or** `common_reply_id`, and `confirm_token` on the second call
 - The preview names the recipient, the ticket, the exact text, and your workspace's **common replies** — the wordings your team has already agreed on. Prefer one of those over improvised phrasing when one fits
 - Tickets raised from the dashboard have no reporter, and are rejected: there is no inbox to deliver to

### notify_reporters
Messages everyone who reported a bug at once — the "we shipped the fix" tool.
 - Input: `message`, and either `crash_ref` (everyone who hit that crash) or `ticket_refs` (the reporters of those tickets), plus `confirm_token` on the second call
 - The preview states how many people will be messaged, a sample of their addresses, and the exact text. There is no cap on that number, so the count *is* the decision — your agent shows it and you make the call
 - Each person is messaged once, even if they reported several of the tickets

## Administer

### delete_ticket
Deletes one ticket. Requires [confirmation](#confirmation-flow).
 - Input: `ref`, and `confirm_token` on the second call
 - The ticket is archived and can be restored from the dashboard. **The links to it cannot** — every ticket linked to this one is unlinked permanently, and restoring the ticket does not bring those links back. That is what the preview's `linked_children` count is warning about
 - Deleting several tickets at once, or deleting a crash group, is dashboard-only by design — use `get_dashboard_link`

### manage_workspace
Administers a workspace: members, invitations, approved email domains, and common replies. Pick one `action` and pass only what it needs.
 - `list_members` — everyone in the workspace, with their roles
 - `invite_member` — `email`, optional `role` (`member` or `admin`). Requires [confirmation](#confirmation-flow)
 - `remove_member` — `email`. Admins can remove anyone; anyone can remove themselves. Requires [confirmation](#confirmation-flow)
 - `rename_workspace` — `new_name`. Admin only. The slug and every existing link stay as they are
 - `list_approved_domains` / `add_approved_domain` (`domain` + an `email` at that domain) / `remove_approved_domain` (`domain`) — an approved domain lets anyone with an email there join the workspace, and only takes effect once the verification email is opened. Admin only for the two writes
 - `list_common_replies` / `add_common_reply` (`title` + `message`) / `update_common_reply` (`common_reply_id` + `title` + `message`, both replaced) / `remove_common_reply` (`common_reply_id`)
 - Not available here: adding an existing user without an invitation, changing someone's role, and inviting guests. Use `get_dashboard_link` with `kind="members"` for those, and for billing

## Resources

Clients that support MCP resources can address Shake records directly, without a tool call. Each one is authorized exactly like its equivalent tool, and returns JSON.

| URI | What it returns |
| --- | --- |
| `shake://docs/{platform}` | That platform's slice of the documentation index — page titles and paths |
| `shake://ticket/{app_key}/{key}` | A ticket's details, resolved and authorized exactly like `get_ticket` |
| `shake://crash/{app_key}/{key}` | A crash group's details, resolved and authorized exactly like `get_crash` |

## Prompts

### integrate_shake_sdk
Wires the Shake SDK into the repository you have open. Detects the platform from the project files rather than asking you, calls `setup_shake_app` to find or create the app, and installs the SDK with the key it returns.
 - Input: `workspace` (optional — you are asked only if you have more than one)

### triage_ticket
Diagnoses a ticket end to end: fetch the details, classify it as a bug, an improvement request or a question, pull the logs and correlate them against the reported time, fall back to the screenshot and similar tickets when the cause is still unclear, then report the likely root cause with its evidence, a recommended fix, and a severity.
 - Input: `ref`

### release_check
Checks a release and drafts the follow-up: `check_release_health` for the crash-free rate and any regressions, `get_crash` on each regressed group to say what is failing, and — only if you ask for it — a `notify_reporters` draft for the people affected.
 - Input: `app_key`, `version`

## Deprecated tools

These five still work, so existing setups keep running, but they are superseded by `get_ticket` and should not be used in anything new. Each one does exactly what a single `include` section of `get_ticket` does, and `get_ticket` can fetch several of them in one call.

| Deprecated tool | Use instead |
| --- | --- |
| `get_user_feedback_details` | `get_ticket(ref, include=["details"])` |
| `get_user_feedback_activity_history` | `get_ticket(ref, include=["logs"])` |
| `get_user_feedback_screenshot` | `get_ticket(ref, include=["screenshot"])` — returns the same image |
| `get_user_feedback_video` | `get_ticket(ref, include=["video"])` |
| `get_user_feedback_session_replay` | `get_ticket(ref, include=["replay"])` |

Ask questions about your Shake tickets — [see examples](/docs/mcp/overview.md#prompt-examples).
