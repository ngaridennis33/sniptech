"use client"
import React from 'react'
import Link from 'next/link'
import styles from './authLinks.module.scss';



const AuthLinks = ({openModal}) => {
    // Temp status
    const status = "notaudthenticated";

  return(
  <div className={styles.authStatusCont}>
    {status === "notauthenticated" ? (
    <div className={styles.button}><button className={styles.action} onClick={()=> openModal("login")}>Login</button></div> 
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