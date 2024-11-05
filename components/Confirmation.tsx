import cs from 'classnames'

import type * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

import { sendGTMEvent } from '@next/third-parties/google'
import { useEffect } from 'react'
import { google_adwords_id, host } from '@/lib/config'

export function Confirmation({ site }: types.PageProps) {
  const title = 'Varausvahvistus'

  // Hacky hack hack
  // FIXME: Use cal.com components directly here and send this event when customer books an appointment
  useEffect(() => {
    // Skip this in local development
    if (window.location.host === host) {
      sendGTMEvent({
        event: 'conversion',
        value: { 'send_to': google_adwords_id }
      });
    } else {
      console.log('Would have sent conversion event to GTM!')
    }
  }, []);

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
