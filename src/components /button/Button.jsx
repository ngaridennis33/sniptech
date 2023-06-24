import React from 'react'
import styles from "./button.module.css"


// Login User Button and Logic
export const AuthLoginButton=() => {
  return (
    <button className={styles.authLoginButton}> Login </button>
  )
}

// Logout User button and logic
export const AuthLogoutButton=({handleLogout,handleHamburgerClick}) => {
  return (
    <button className={styles.authLoginButton} onClick={handleLogout}> Logout </button>
  )
}

// Register a new user button and Logic
export const AuthRegisterButton=({handleHamburgerClick}) => {
  return (
    <button className={styles.authLoginButton} onClick={handleHamburgerClick} > Register </button>
  )
}

// Control to action Button and logic
export const CtaButton = () => {
  return (
    <button className={styles.ctaButton}></button>
  )
}


