import React from 'react'
import styles from './TemperatureAndDetails.module.css'

const TemperatureAndDetails = () => {
  return (
      <div className={styles.temperatureAndDetails}>
        <div className={styles.weather}>
            Cloudy
        </div>
      <div className={styles.details}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Simple_orange_circle.svg/2048px-Simple_orange_circle.svg.png" alt="" />
      </div>
      </div>

  )
}

export default TemperatureAndDetails
