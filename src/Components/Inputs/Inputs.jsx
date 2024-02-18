import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import styles from "./Inputs.module.css"

export const Inputs = () => {
  return (
    <div className={styles.inputs}>
        <div className={styles.searchContainer}>
            <input type="text" placeholder='Search for city'/>
        </div>
    </div>
  )
}
