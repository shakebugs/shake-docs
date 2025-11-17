---
id: mcp
title: MCP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Shakebugs MCP (Model Context Protocol) server connects your AI agents directly to your bug reports, crash logs, and
user feedback. Let your AI analyze issues, fetch console logs, and help debug problems without leaving your IDE or chat
interface.

## What You Can Do

With the Shakebugs MCP integration, your AI can:

- **Analyze bug reports** — Automatically fetch complete issue details including title, description, device info, app
  version, and reproduction steps
- **Retrieve console logs** — Access chronologically ordered log entries with timestamps, log levels, and system events
  leading up to crashes
- **Debug issues intelligently** — Get guided analysis workflows that correlate logs with ticket information to identify
  root causes
- **Batch analyze tickets** — Process multiple issues at once to identify patterns across bug reports

## Getting Started

Visit your [Shake Dashboard](https://app.shakebugs.com)

<Tabs
defaultValue="chatgpt"
values={[
{ label: 'ChatGPT', value: 'chatgpt' },
{ label: 'Claude Desktop', value: 'claude-desktop' },
{ label: 'Claude Code', value: 'claude-code' },
{ label: 'Cursor', value: 'cursor' },
{ label: 'VS Code', value: 'vscode' },
{ label: 'Windsurf', value: 'windsurf' },
]
}>

<TabItem value="chatgpt">

:::note
You might need to enable developer settings first. Navigate to Settings → Advanced to toggle developer mode.
:::

Steps:

1. From the home page click on your profile icon and go to **Settings**
2. Click on **Apps & Connectors**
3. Click on **Add new app**
4. Enter details
    - Name: **Shakebugs**
    - MCP Server URL: https://mcp.shakebugs.com/mcp
    - Authentication: OAuth
5. Click on **Create**

</TabItem>

<TabItem value="claude-desktop">

:::note
Integration with Claude Desktop is coming soon. We've submitted our application to Anthropic for listing in their
official MCP server directory.
:::

</TabItem>

<TabItem value="claude-code">

:::note
Firstly, you need to
have [Claude Code extension](https://marketplace.visualstudio.com/items?itemName=antropic.claude-code) for Visual Studio
Code installed.
:::

To add Shakebugs MCP to your project, simply run the following command in the terminal:

```bash title="Terminal"
// highlight-next-line
claude mcp add Jam https://mcp.shakebugs.com/mcp -t http -s user
```

</TabItem>

<TabItem value="cursor">

To install MCP Server, click on the button below.

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=shakebugs&config=eyJ1cmwiOiJodHRwczovL21jcC5zaGFrZWJ1Z3MuY29tL21jcCJ9)

If you wish to install it manually, make sure your `mcp.json` looks something like this:

```json
// highlight-start
{
  "mcpServers": {
    "shakebugs": {
      "url": "https://mcp.shakebugs.com/mcp",
      "headers": {}
    }
  }
}
// highlight-end
```

</TabItem>

<TabItem value="vscode">

Steps:

1. `CTRL + P` or `CMD + P`
2. Type `>MCP: Add Server`
3. Select **HTTP (HTTP or Server-Sent Events)**
4. Enter the URL: `https://mcp.shakebugs.com/mcp`
5. Enter the name: `Shakebugs`
6. Choose **Global** or **Workspace** depending on your preference

If you wish to install it manually, make sure your `mcp.json` looks something like this:

```json
// highlight-start
{
  "servers": {
    "Shakebugs": {
      "url": "https://mcp.shakebugs.com/mcp",
      "type": "http"
    }
  },
  "inputs": []
}
// highlight-end
```

</TabItem>

<TabItem value="windsurf">

Steps:

1. `CTRL + P` or `CMD + P`
2. Type `>MCP: Add Server`
3. Select **HTTP (Server-Sent Events)**
4. Enter the URL: `https://mcp.shakebugs.com/mcp`
5. Enter the name: `Shakebugs`
6. Choose **Global** or **Workspace** depending on your preference

If you wish to install it manually, make sure your `mcp.json` looks something like this:

```json
// highlight-start
{
  "mcp": {
    "servers": {
      "Shakebugs": {
        "type": "http",
        "url": "https://mcp.shakebugs.com/mcp"
      }
    }
  }
}
// highlight-end
```

</TabItem>
</Tabs>

## Example Usage

Once connected, you can ask your AI agent questions like:

- "Analyze this bug report: https://app.shakebugs.com/test/user-feedback/H4UQEBL0/1"
- "Show me the console logs for issue https://app.shakebugs.com/test/user-feedback/H4UQEBL0/1"
- "What caused the crash in ticket https://app.shakebugs.com/main/user-feedback/H4UQEBL0/2?"
- "Debug this issue (https://app.shakebugs.com/test/user-feedback/H4UQEBL0/1) and suggest a fix"

Your AI will automatically use the appropriate MCP tools to fetch issue details, retrieve logs, and provide intelligent
analysis.

## Questions or Feedback?

Have suggestions for improving the MCP integration or need help? We'd love to hear from you
at [feedback.shakebugs.com](https://feedback.shakebugs.com/).