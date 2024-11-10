import type * as types from './types'

export interface SiteConfig {
  rootNotionPageId: string
  rootNotionSpaceId?: string

  name: string
  legal_name?: string
  company_vat_id?: string
  company_identifier?: string
  domain: string
  author: string
  description?: string
  language?: string

  google_tag_manager_id?: string
  google_adwords_id?: string

  telephone?: string,
  email?: string,

  twitter?: string
  twitterX?: string
  github?: string
  gitlab?: string
  linkedin?: string
  newsletter?: string
  youtube?: string
  instagram?: string
  reddit?: string
  zhihu?: string
  mastodon?: string
  bugtracker?: string
  google_business?: string

  defaultPageIcon?: string | null
  defaultPageCover?: string | null
  defaultPageCoverPosition?: number | null

  isPreviewImageSupportEnabled?: boolean
  isTweetEmbedSupportEnabled?: boolean
  isRedisEnabled?: boolean
  isSearchEnabled?: boolean

  includeNotionIdInUrls?: boolean
  pageUrlOverrides?: types.PageUrlOverridesMap
  pageUrlAdditions?: types.PageUrlOverridesMap

  navigationStyle?: types.NavigationStyle
  navigationLinks?: Array<NavigationLink>

  footerLinks?: Array<NavigationLink>
}

export interface NavigationLink {
  title: string
  pageId?: string
  url?: string
}

export const siteConfig = (config: SiteConfig): SiteConfig => {
  return config
}
