"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import styles from './authLinks.module.scss';
import { HamburgerContext } from '../context/HumbergerContext';



const AuthLinks = ({openModal}) => {

  const {handleHamburgerClose} = useContext(HamburgerContext);
    // Temp status
    const status = "notauthenticated";

  return(
  <div className={styles.authStatusCont}>
    {status === "notauthenticated" ? (
    <div onClick={handleHamburgerClose} className={styles.button}><button className={styles.action} onClick={()=> openModal("login")}>Login</button></div> 
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