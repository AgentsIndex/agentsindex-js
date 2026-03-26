# agentsindex

JavaScript client for [AgentsIndex.ai](https://agentsindex.ai) — browse AI agents, frameworks, and tools programmatically.

## Install

```bash
npm install agentsindex
```

## Usage

```js
const { createClient } = require("agentsindex")

const client = createClient()

// Get directory info
console.log(client.info())

// List tools
const tools = await client.listTools()

// Get a specific tool
const tool = await client.getTool("crewai")
```

## What is AgentsIndex?

[AgentsIndex.ai](https://agentsindex.ai) indexes the AI agent ecosystem, from coding agents and frameworks to voice AI, browser automation, and infrastructure tooling. Each listing breaks down pricing, features, use cases, and pros and cons.

- [Browse all tools](https://agentsindex.ai)
- [Compare tools](https://agentsindex.ai/compare)
- [Best-of collections](https://agentsindex.ai/best)
- [Find alternatives](https://agentsindex.ai/alternatives)

## Links

- [Website](https://agentsindex.ai)
- [GitHub](https://github.com/AgentsIndex)
- [Twitter/X](https://x.com/AgentsIndex)

## License

MIT
