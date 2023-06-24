import React from 'react'
import styles from './hurmberger.module.css'


// Open Menu Icon
export const Menu = () =>{
    return(
        <div className={styles.container}>
            {/* Todo Add the icons  */}
            <span className={styles.icon}>Open</span>
        </div>
    )
}


// Close Menu Icon
export const CloseMenu = () => {
  return (
    <div className={styles.container}>
            {/* Todo Add the icons  */}
            <span className={styles.icon}>Close</span>
        </div>
  )
}
