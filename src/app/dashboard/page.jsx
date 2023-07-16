import NavBarDash from '@/components /dashboard/navBarDash/NavBarDash'
import SideBar from '@/components /dashboard/sideBar/SideBar'
import React from 'react'
import styles from "./page.module.css"
import HomePage from '@/app/dashboard/homePage/home'

const DashBoard = () => {
  return (
    <div className={styles.wrapper}>
    <NavBarDash/>
    <div className={styles.home}>
      <SideBar/>
      <div className={styles.homeContainer}> 
      <HomePage/>
      </div>
    </div>
    </div>
  )
}

export default DashBoard 