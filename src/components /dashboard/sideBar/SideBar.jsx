import React from 'react'
import styles from './sideBar.module.css'

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
    <div className={styles.top}>
        <span className={styles.title}> DashBoard</span>
    </div>
     <hr className={styles.hr}/>
    <div className={styles.center}>
        <ul>
            <li> <span> DashBoard</span></li>
            <li> <span> DashBoard</span></li>
            <li> <span> DashBoard</span></li>
            <li> <span> DashBoard</span></li>
            <li> <span> DashBoard</span></li>
        </ul>
    </div>
    <div className={styles.bottom}>Color</div>
    
        
    </div>
  )
}

export default SideBar