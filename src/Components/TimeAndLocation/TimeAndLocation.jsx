import React from 'react'
import styles from './TimeAndLocation.module.css'

export const TimeAndLocation = ({weather: {localTime, name, country}}) => {
  return (
    <div className={styles.timeAndLocation}>
        <p className={styles.dateTime}>
            {localTime}
        </p>
        <div className={styles.city}>
            {`${name}, ${country}`}
        </div>
    </div>
  )
}
