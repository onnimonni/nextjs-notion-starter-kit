import cs from 'classnames'

import type * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export function Confirmation({ site }: types.PageProps) {
  const title = 'Varausvahvistus'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Kiitos varauksestasi!</h1>

          <p>
            Nähdään pian 👩‍🏫. <a className={cs('notion-link',styles.link)} href="/">Voit palata etusivulle tästä.</a>
          </p>

          <img
            src='/undraw_passing_by_0un9.svg'
            alt='Lady walking with a dog'
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  )
}
