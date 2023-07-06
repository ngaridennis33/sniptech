"use client"
import React from 'react'
import styles from './sideBar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
    <div className={styles.top}>
        <span className={styles.title}> DashBoard</span>
    </div>
     <hr className={styles.hr}/>
    <div className={styles.center}>
        <ul className={styles.list}>
            <li className={styles.listItem}> <DashboardIcon/> <span> DashBoard</span></li>
            <li className={styles.listItem}> <span> Users</span></li>
            <li className={styles.listItem}> <span> Products</span></li>
            <li className={styles.listItem}> <span> Orders</span></li>
            <li className={styles.listItem}> <span> Delivery</span></li>
            <li className={styles.listItem}> <span> Stats</span></li>
            <li className={styles.listItem}> <span> Notification</span></li>
            <li className={styles.listItem}> <span> System Health</span></li>
            <li className={styles.listItem}> <span> Notification</span></li>
            <li className={styles.listItem}> <span> Settings</span></li>
            <li className={styles.listItem}> <span> Profile</span></li>
            <li className={styles.listItem}> <span> Logout</span></li>
        </ul>
    </div>
    <div className={styles.bottom}>Color</div>
    
        
    </div>
  )
}

export default SideBar