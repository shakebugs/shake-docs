---
id: windsurf
title: Windsurf
---

# Windsurf
> Here’s how to connect Windsurf to your Shake workspace.

## Follow these steps

1. Press `CTRL + SHIFT + P` or `CMD + P`
2. Type `>Windsurf: MCP Marketplace`
3. Next to *Installed MCPs* click on the gear icon (*Settings*)
4. This will open a new window which will be your `mcp_config.json`
5. Make sure your `mcp_config.json` looks something like this:
```json
// highlight-start
{
  "mcpServers": {
    "Shakebugs": {
      "disabled": false,
      "url": "https://mcp.shakebugs.com/mcp"
    }
  }
}
// highlight-end
```



That’s it! You can now ask Windsurf questions about your Shake tickets — [see examples](/docs/mcp/overview.md#prompt-examples).
