/**
 * AgentsIndex.ai JavaScript Client
 *
 * Browse AI agents, frameworks, and tools programmatically.
 * Directory: https://agentsindex.ai
 *
 * @module agentsindex
 */

const BASE_URL = "https://agentsindex.ai"

/**
 * Create an AgentsIndex client.
 * @param {Object} [options]
 * @param {string} [options.baseUrl] - Base URL override
 * @returns {Object} Client with browse methods
 */
function createClient(options = {}) {
  const baseUrl = options.baseUrl || BASE_URL

  async function fetchJSON(path) {
    const res = await fetch(`${baseUrl}${path}`, {
      headers: { Accept: "application/json" },
    })
    if (!res.ok) throw new Error(`AgentsIndex API error: ${res.status}`)
    return res.json()
  }

  return {
    /** Get the directory URL */
    url: baseUrl,

    /** Get a tool by slug */
    async getTool(slug) {
      return fetchJSON(`/api/tools/${slug}`)
    },

    /** List tools with optional filters */
    async listTools(params = {}) {
      const query = new URLSearchParams(params).toString()
      return fetchJSON(`/api/tools${query ? `?${query}` : ""}`)
    },

    /** List categories */
    async listCategories() {
      return fetchJSON("/api/categories")
    },

    /** Get directory info */
    info() {
      return {
        name: "AgentsIndex.ai",
        url: baseUrl,
        description: "The AI agent ecosystem, indexed.",
        github: "https://github.com/AgentsIndex",
        twitter: "https://x.com/AgentsIndex",
      }
    },
  }
}

module.exports = { createClient }
module.exports.default = { createClient }
