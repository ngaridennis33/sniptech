import React from 'react'
import styles from "./footer.module.scss"

const Footer = () => {
  //Date().getFullYear()
let date =  new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <span className={styles.footerText}>SnipTechAdmin</span>
      <span className={styles.footerText}>© Dashboard {date}</span>
    </div>
    
  )
}

export default Footer