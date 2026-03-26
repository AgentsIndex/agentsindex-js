export interface ClientOptions {
  baseUrl?: string
}

export interface ToolInfo {
  name: string
  slug: string
  tagline?: string
  description?: string
  websiteUrl: string
  tier: string
  categories: { name: string; slug: string }[]
}

export interface CategoryInfo {
  name: string
  slug: string
  description?: string
}

export interface DirectoryInfo {
  name: string
  url: string
  description: string
  github: string
  twitter: string
}

export interface AgentsIndexClient {
  url: string
  getTool(slug: string): Promise<ToolInfo>
  listTools(params?: Record<string, string>): Promise<ToolInfo[]>
  listCategories(): Promise<CategoryInfo[]>
  info(): DirectoryInfo
}

export function createClient(options?: ClientOptions): AgentsIndexClient
