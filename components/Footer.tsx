import cs from 'classnames'
import * as React from 'react'
import { IoMoonSharp, IoSunnyOutline } from 'react-icons/io5'
import { useNotionContext } from 'react-notion-x'

import { footerLinks } from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import { PageSocialButtons } from './PageSocial'
import { StaticLogo } from './StaticLogo'
import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export function FooterImpl() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const currentYear = new Date().getFullYear()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const { components, mapPageUrl } = useNotionContext()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSocial}>
        <StaticLogo />

        <div className={cs(styles.settings,styles.toggleDarkModeContainer)}>
          {hasMounted && (
            <button
            type="button"
            className={styles.toggleDarkMode}
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </button>
          )}
        </div>
        <div className={styles.social}>
          <PageSocialButtons iconSize={32} />
        </div>
      </div>
      <div className="SiteInfo">
        <div className={styles.siteInfoLinks}>
            {footerLinks
            ?.map((link, index) => {
              if (!link.pageId && !link.url) {
                return null
              }

              if (link.pageId) {
                return (
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    target={link.url.startsWith('/') && ''}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}
          </div>
          <div className={styles.copyright}>© Copyright {currentYear}. All rights reserved.</div>
        </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
