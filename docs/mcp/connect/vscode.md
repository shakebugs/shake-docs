---
id: vscode
title: VS Code
---

# VS Code
> Here’s how to connect VS Code to your Shake workspace.

## Follow these steps

1. Press `CTRL + SHIFT + P` or `CMD + P`
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

That’s it! You can now ask VS Code questions about your Shake tickets — [see examples](/docs/mcp/overview.md#prompt-examples).
