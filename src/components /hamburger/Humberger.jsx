import React from 'react'
import styles from './hurmberger.module.css'
import OpenIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/CloseRounded';


// Open Menu Icon
export const Menu = () =>{
    return(
        <div className={styles.container}>
            {/* Todo Add the icons  */}
            <span className={styles.icon}><OpenIcon/></span>
        </div>
    )
}


// Close Menu Icon
export const CloseMenu = () => {
  return (
    <div className={styles.container}>
            {/* Todo Add the icons  */}
            <span className={styles.icon}><CloseIcon/></span>
        </div>
  )
}
