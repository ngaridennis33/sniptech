import React from 'react'
import styles from "./button.module.css"
import Link from 'next/link'


// AuthButton Component on Desktop
export const AuthDesktopButton=({url, text}) => {
  return (
    <Link className={styles.authLink} href={url}>
    <button className={styles.authButton}> 
      {text}
    </button>
   </Link>
  )
}

// AuthButton Component on Mobile
export const AuthMobileButton=({url, text,handleHamburgerClose}) => {
  return (
    <Link className={styles.authLink} href={url}>
    <button className={styles.authButton} onClick={handleHamburgerClose}> 
      {text}
    </button>
   </Link>
  )
}

// LogIn/Register Button.
export const LogInRegisterBtn=({text}) => {
  return (
    <button className={styles.logInRegisterBtn} > 
      {text}
    </button>
  )
}


// Control to action Button and logic
export const CtaButton = ({url, text}) => {
  return (
      <Link style={{width:"max-content"}} href={url} rel="preload" as="style" >
        <button className={styles.ctaButton}>{text}
        </button>
      </Link>
  )
}


