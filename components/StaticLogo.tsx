import cs from 'classnames'

import * as config from '@/lib/config'

import styles from './StaticLogo.module.css'

export function StaticLogo() {
  return (
    <a className={cs(styles.logo, styles.link)} href={config.host} rel="home" title="Logo">
      <img src="/favicon.svg"/>
      <span>{config.name}</span>
    </a>
  )
}
