---
id: cursor
title: Cursor
---

# Cursor
> Here’s how to connect Cursor to your Shake workspace.


To install MCP Server, click on the button below.

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=shakebugs&config=eyJ1cmwiOiJodHRwczovL21jcC5zaGFrZWJ1Z3MuY29tL21jcCJ9)

P.S. If you wish to install it manually, make sure your mcp.json looks like this:

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

That’s it! You can now ask Cursor questions about your Shake tickets — [see examples](/docs/mcp/overview.md#prompt-examples).
