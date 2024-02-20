import React from 'react'
import styles from './TimeAndLocation.module.css'

export const TimeAndLocation = () => {
  return (
    <div className={styles.timeAndLocation}>
        <p className={styles.dateTime}>
            Tuesday, 31 May 2022 | Local time: 12:46 PM
        </p>
        <p className={styles.city}>
            Berlin, DE
        </p>
    </div>
  )
}
