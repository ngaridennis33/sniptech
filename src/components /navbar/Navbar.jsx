"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from "./navbar.module.css"
import DarkmodeToogle from '../DarkmodeToggle/DarkmodeToogle'
import Logo from './layout/logo/Logo'
import DesktopLinks from './layout/navLinks/deskTop/DesktopLinks'
import { AuthLoginButton } from '../button/Button'
import { ThemeContext } from '../../../context/ThemeContext'
import MobileLinks from './layout/navLinks/mobileLinks/MobileLinks'



const Navbar = () => {
    const {mode} = useContext(ThemeContext);
  return (
    <div className={styles.navWrapper}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <Logo/>
                </Link>
            </div>

            <div className={styles.desktopLinks}>
                <DesktopLinks mode = {mode}/>
            </div>

            <div className={styles.mobileLinks}>
                <MobileLinks mode = {mode}/>
            </div>

            <div className={styles.cta}> 
            <AuthLoginButton/>
                <DarkmodeToogle/>
            </div>
        </div>
    </div>
  )
}

export default Navbar