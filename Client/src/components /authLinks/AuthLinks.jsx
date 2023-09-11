import React from 'react'
import Link from 'next/link'
import styles from './authLinks.module.scss';
import { AuthDesktopButton, AuthMobileButton } from '../button/Button'

const AuthLinks = ({handleHamburgerClose}) => {
    // Temp status
    const status = "notauuthenticated"

  return(
  <div className={styles.authStatusCont}>
    {status === "notauthenticated" ? (
       <AuthDesktopButton url={"/auth/login"} text={"Login"} handleHamburgerClose={handleHamburgerClose}/>
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