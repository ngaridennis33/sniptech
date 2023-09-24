import React from 'react'
import Link from 'next/link'
import styles from './authLinks.module.scss';


const AuthLinks = ({handleHamburgerClose}) => {
    // Temp status
    const status = "notauthenticated"

  return(
  <div className={styles.authStatusCont}>
    {status === "notauthenticated" ? (
      <Link className={styles.authLink} href="/auth/login" ><button className={styles.authButton} onClick={handleHamburgerClose} >Login</button> </Link>
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