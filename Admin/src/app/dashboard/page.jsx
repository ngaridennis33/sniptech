import React from 'react'
import styles from "./page.module.css"
import HomePage from './homePage/page'

const DashBoard = () => {
  return (
      <div className={styles.container}> 
      <HomePage/>
    </div>
  )
}

export default DashBoard 