---
id: overview
title: Overview
---

# MCP server
> The Shake MCP (Model Context Protocol) server connects your AI agents and tools to the tickets, crashes and end users you have collected in Shake — to read them, triage them, reply to the people who reported them, and set up new apps.

## Prompt examples

After you connect to Shake, here's what you can ask ChatGPT, Claude, Cursor or any other tool you use.

**Understand a ticket**
 - How do I fix this issue https://app.shakebugs.com/acme/user-feedback/app/1 ?
 - What do you think about this feature suggestion https://app.shakebugs.com/acme/user-feedback/web/2 ?
 - Show me the screenshot from https://app.shakebugs.com/acme/user-feedback/app/4
 - Analyze this issue and show me the video: https://app.shakebugs.com/acme/user-feedback/app/5
 - Get the session replay for this ticket and tell me what happened https://app.shakebugs.com/acme/user-feedback/app/6
 - Who reported this, and what else have they run into?

**Find things**
 - What new crashes came in today on Android?
 - Show me every open ticket on version 2.1 that isn't tagged "known"
 - Which of my tickets are unread?
 - Who are our noisiest reporters this month?

**Get work done**
 - Triage this ticket, then assign it to me and set it to In progress
 - Close all of these tickets and tag them "duplicate"
 - Add an internal note explaining what we found
 - Draft me a reply for this user https://app.shakebugs.com/acme/user-feedback/app/3

**Ship and follow up**
 - Is 2.1.4 healthy? Anything regress since 2.1.3?
 - We shipped the fix — let everyone who hit this crash know
 - Set up Shake in this repo
 - In Shake Android SDK, how do we add custom data to bug reports?

:::note
Anything that reaches a real person — replying to a reporter, notifying everyone affected by a crash — or deletes a ticket is previewed first. Your agent shows you exactly who gets what, and sends only after you approve. See [the confirmation flow](/docs/mcp/tools-resources-prompts#confirmation-flow).
:::

## How-to-connect guides

<div class="featuresList">
    <div>
        <img src="/docs/img/mcp/chatgpt.png" alt="ChatGPT"/>
        <p><a href="/docs/mcp/connect/chatgpt/">ChatGPT</a></p>
    </div>
    <div>
        <img src="/docs/img/mcp/claude.png" alt="Claude Desktop"/>
        <p><a href="/docs/mcp/connect/claude-desktop/">Claude Desktop</a></p>
    </div>
    <div>
        <img src="/docs/img/mcp/claude-code.png" alt="Claude Code"/>
        <p><a href="/docs/mcp/connect/claude-code/">Claude Code</a></p>
    </div>
    <div>
        <img src="/docs/img/mcp/cursor.png" alt="Cursor"/>
        <p><a href="/docs/mcp/connect/cursor/">Cursor</a></p>
    </div>
    <div>
        <img src="/docs/img/mcp/vscode.png" alt="VS Code"/>
        <p><a href="/docs/mcp/connect/vscode/">VS Code</a></p>
    </div>
    <div>
        <img src="/docs/img/mcp/windsurf.png" alt="Windsurf"/>
        <p><a href="/docs/mcp/connect/windsurf/">Windsurf</a></p>
    </div>
</div>
