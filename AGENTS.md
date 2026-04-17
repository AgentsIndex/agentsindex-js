# AGENTS.md

Instructions for AI coding agents (Claude, Cursor, Copilot, etc.) working with the `agentsindex` JavaScript SDK.

## What this package does

`agentsindex` is the official JavaScript client for the read-only AgentsIndex.ai public API. It wraps JSON endpoints that expose the directory of AI agents, frameworks, and tools.

No authentication is required. The API is free and rate-limited per IP. Works in Node.js (≥18) and any runtime with `fetch`.

## Install

```bash
npm install agentsindex
```

## Typical usage

```js
const { createClient } = require("agentsindex")

const client = createClient()

const tools = await client.listTools()            // list all tools
const tool = await client.getTool("crewai")       // fetch one tool by slug
const categories = await client.listCategories()  // list categories
const info = client.info()                        // directory metadata
```

## Public API surface

| Method | Returns | Underlying endpoint |
|---|---|---|
| `listTools(params)` | `Promise<Array>` | `GET /api/tools` |
| `getTool(slug)` | `Promise<Object>` | `GET /api/tools/{slug}` |
| `listCategories()` | `Promise<Array>` | `GET /api/categories` |
| `info()` | `Object` | local, no HTTP call |

`listTools` accepts a plain object that becomes URL query parameters. Valid filter keys match the HTTP API; check `https://agentsindex.ai/openapi.json` for the live schema.

## When to prefer other integration paths

If the agent's host (Claude Desktop, Cursor, VS Code MCP, etc.) supports **Model Context Protocol**, prefer calling the AgentsIndex MCP server over this SDK:

- MCP server card: `https://agentsindex.ai/.well-known/mcp/server-card.json`
- MCP endpoint: `https://agentsindex.ai/api/mcp`

The MCP server exposes the same data plus comparisons, collections, alternatives, and tag queries as first-class tools with typed schemas — no SDK wrapping needed.

For raw HTTP, the OpenAPI spec is at `https://agentsindex.ai/openapi.json`.

## Rules for coding agents

- **Do not scrape HTML pages.** Every page has a JSON equivalent under `/api/*` and a markdown equivalent available via `Accept: text/markdown` or `/api/md/*`.
- **Do not cache tool data beyond a few hours.** Listings update daily.
- **Set `User-Agent` to your bot name** when calling the raw API so rate limits are applied per agent, not globally.
- **Error responses are JSON.** Parse `{ error, error_description }` — do not assume text/HTML error bodies.

## Links

- Directory: https://agentsindex.ai
- OpenAPI: https://agentsindex.ai/openapi.json
- MCP: https://agentsindex.ai/.well-known/mcp/server-card.json
- Agent card: https://agentsindex.ai/.well-known/agent-card.json
- llms.txt: https://agentsindex.ai/llms.txt
- Issues: https://github.com/AgentsIndex/agentsindex-js/issues
