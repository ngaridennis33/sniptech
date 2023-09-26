import React, { useContext } from 'react'
import Link from 'next/link'
import styles from './authLinks.module.scss';



const AuthLinks = ({handleModalClose,handleHamburgerClose}) => {
    // Temp status
    const status = "notauthenticated"

  return(
  <div className={styles.authStatusCont}>
    {status === "notauthenticated" ? (
    <div className={styles.button} onClick={handleHamburgerClose}><button className={styles.action} onClick={handleModalClose} >Login</button></div> 
    ):(
    <div className={styles.authCont}>
        <Link href = "/write" className={styles.write}>Write</Link> 
        <span className={styles.logout}>Logout</span>
    </div>
    )}

  </div>
  )
  
}

export default AuthLinks