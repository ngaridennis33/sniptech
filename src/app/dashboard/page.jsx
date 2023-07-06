import NavBarDash from '@/components /dashboard/navBarDash/NavBarDash'
import SideBar from '@/components /dashboard/sideBar/SideBar'
import React from 'react'
import styles from "./page.module.css"

const DashBoard = () => {
  return (
    <div className={styles.home}>
      <SideBar/>
      <div className={styles.homeContainer}> container</div>
    </div>
  )
}

export default DashBoard 