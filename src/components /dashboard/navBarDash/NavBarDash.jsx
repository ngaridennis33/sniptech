"use client"
import React from 'react'
import styles from "./navBarDash.module.css"
import NotificationIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import Image from 'next/image';

const NavBarDash = () => {
  return (
    <div className={styles.navbar}>

      <div className={styles.left}>
        <span className={styles.heading}>Dash Board</span>
      </div>

      <div className={styles.center}>
        <input className={styles.searchinput} type="text" />
        <SearchIcon className={styles.searchIcon}/>
      </div>

      <div className={styles.right}>
          <div className={styles.user}>
            <Image width={15} height={15} className={styles.profilepic} src="/profile.jpg" alt="user"/>
            <span className={styles.username}>User</span>
          </div>

          <div className={styles.notification}>
            <NotificationIcon className={styles.notifications}/>
            <span className={styles.number}>2</span>
          </div>

          <div className={styles.settings}>
            <SettingsIcon/>
          </div>
      </div>
    </div>
  )
}

export default NavBarDash