import Link from 'next/link'
import React from 'react'
import styles from "./button.module.css"

export const CtaButton = () => {
  return (
    <button className={styles.ctaButton}></button>
  )
}

export const AuthLoginButton=() => {
  return (
    <button className={styles.authLoginButton}>
      <Link href={"/dashboard/login"}>Login</Link>
    </button>
  )
}


