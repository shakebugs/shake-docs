---
id: claude-code
title: Claude Code
---

# Claude Code
> Here's how to connect Claude Code to your Shake workspace.

:::note
Claude Code is a terminal tool — the command below works in any terminal, and no editor extension is required. If you don't have it yet, see [Anthropic's install guide](https://code.claude.com/docs/en/setup). Claude Code needs a Claude Pro, Max, Team or Enterprise plan.
:::

## Follow these steps

1. Add the Shake MCP server:

```bash title="Terminal"
// highlight-next-line
claude mcp add Shake https://mcp.shakebugs.com/mcp -t http -s user
```

`-t http` sets the transport. `-s user` makes Shake available in every project on your machine — swap it for `-s project` to check the server into the repository's `.mcp.json` and share it with your team instead.

2. Start Claude Code with `claude`, then authorize the connection:

```bash title="Claude Code"
// highlight-next-line
/mcp
```

3. Select *Shake*, then *Authenticate*. Your browser opens the Shake dashboard — click *Authorize*.

4. Run `/mcp` once more, or `claude mcp list` in your terminal, and confirm Shake reports as **connected**.

That's it! You can now ask Claude questions about your Shake tickets — [see examples](/docs/mcp/overview.md#prompt-examples).
