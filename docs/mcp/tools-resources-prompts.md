---
id: tools-resources-prompts
title: Tools, Resources and Prompts
---

# ShakeBugs MCP Server
> This MCP server helps you fetch and analyze ShakeBugs user feedback tickets (details + activity history/logs), and provides prompts that guide structured debugging for single or multiple tickets.

## Tools

### get_user_feedback_details
Fetches full ShakeBugs ticket details from a user feedback URL (title, description, device/app info, reproduction steps, and other metadata). This tool is read-only and is typically used as the first step before deeper debugging.
 - Input: issue_url (full ShakeBugs URL)
 - URL pattern: https://app.shakebugs.com/[workspace]/user-feedback/[app-key]/[user-feedback-key]
 - Auto-invoked when a user shares a ShakeBugs link or asks to analyze/investigate a ticket

### get_user_feedback_activity_history
Retrieves the ticket's activity history logs (console output, system events, network requests, errors/stack traces) in chronological order. This tool is read-only and is usually called after get_user_feedback_details when log evidence is needed.
 - Input: issue_url (ShakeBugs URL starting with https://app.shakebugs.com/)
 - Returns: list of log entries (timestamps, levels, messages, network/API failures)
 - Auto-invoked when users ask for "logs", "activity history", "console", "network", "output", "stack trace", or crash timelines (especially with a ShakeBugs link)

### get_user_feedback_screenshot
Retrieves the screenshot image attached to a ShakeBugs ticket. This tool returns the actual image data, allowing you to see exactly what the app looked like when the issue occurred. This tool is read-only.
 - Input: issue_url (full ShakeBugs URL)
 - URL pattern: https://app.shakebugs.com/[workspace]/user-feedback/[app-key]/[user-feedback-key]
 - Returns: screenshot image data (PNG, JPEG, GIF, or WebP format)
 - Auto-invoked when users ask for "screenshot", "image", "picture", "visual", or want to see the UI from a ticket
 - Note: Raises an error if no screenshot is attached to the ticket

### get_user_feedback_video
Retrieves the video recording attached to a ShakeBugs ticket. Due to large file sizes, this tool returns the video URL and metadata rather than the full video data. This tool is read-only.
 - Input: issue_url (full ShakeBugs URL)
 - URL pattern: https://app.shakebugs.com/[workspace]/user-feedback/[app-key]/[user-feedback-key]
 - Returns: video URL, content type, and file size
 - Auto-invoked when users ask for "video", "recording", "screen recording", or "replay" with a ShakeBugs link
 - Note: Raises an error if no video is attached to the ticket. Videos must be downloaded directly from the provided URL.

### get_user_feedback_session_replay
Retrieves the session replay recording attached to a ShakeBugs ticket. Due to large file sizes, this tool returns the session replay URL and metadata rather than the full data. This tool is read-only.
 - Input: issue_url (full ShakeBugs URL)
 - URL pattern: https://app.shakebugs.com/[workspace]/user-feedback/[app-key]/[user-feedback-key]
 - Returns: session replay URL, content type, and file size
 - Auto-invoked when users ask for "session replay", "session recording", or want to see the full user session
 - Note: Raises an error if no session replay is attached to the ticket. Session replays must be accessed directly from the provided URL.

## Prompts

### analyze_user_feedback_ticket
A structured workflow for debugging a single ticket:
 - Fetch details with get_user_feedback_details
 - Classify (bug / improvement / question), identify component, and build a timeline
 - If it’s a bug, fetch logs with get_user_feedback_activity_history
 - Correlate logs to the report and provide RCA, evidence, severity, and next steps

### batch_user_feedback_analysis
Analyzes multiple tickets and looks for patterns:
 - Fetch details for each ticket
 - Categorize each (bug / improvement / question)
 - For bug reports, fetch and analyze logs
 - Output a table of findings and highlight cross-ticket trends


Ask questions about your Shake tickets — [see examples](/docs/mcp/overview.md#prompt-examples).