"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import styles from "./navbar.module.css"
import DarkmodeToogle from '../DarkmodeToggle/DarkmodeToogle'
import Logo from './layout/logo/Logo'
import DesktopLinks from './layout/navLinks/deskTop/DesktopLinks'
import { AuthLoginButton, AuthLogoutButton, AuthRegisterButton } from '../button/Button'
import { ThemeContext } from '../../../context/ThemeContext'
import { Menu, CloseMenu } from '../hamburger/Humberger'
import Mobile from './layout/navLinks/mobileLinks/Mobile'
import { useClickOutside } from '@/hooks/hooks'



const Navbar = () => {
    const {mode} = useContext(ThemeContext);
    const [navbarOpen,setNavbarOpen] = useState(true);
    const handleHamburgerClick = () => setNavbarOpen(!navbarOpen);
    const mobileLinks = `${styles.mobileLinks} ${navbarOpen === true ? styles.showMenu : ''}`;

//Toggle hamburger open or close when user clicks outside the menu.
let domNode = useClickOutside(()=>{
    setNavbarOpen(false)
})


    // Handle User
    const [user, setUser] = useState(true);
    const handleLogout = () => {
        setUser(!user);
        // console.log(user)
    }

  return (
    <>
    <div className={styles.navWrapper}>
        <div className={styles.container}>

            {/* left Section */}
            <div className={styles.left}>
                <Link href="/">
                    <Logo/>
                </Link>
            </div>

            {/* Middle Section (Desktop View) */}
            <div className={styles.center}>
                <DesktopLinks mode = {mode}/>
            </div>

            {/* Right Section (Desktop View) */}
            <div className={styles.cta}> 
            {user ? (<Link href="/dashboard/login"><AuthLogoutButton/></Link>):(<Link href="/dashboard/login"><AuthLoginButton/></Link>)}
                <DarkmodeToogle/>
            </div>

            {/* Mobile View Hamburger */}
            <div className={styles.mobileHamburgerCotainer} onClick={handleHamburgerClick}>
                {navbarOpen ? <CloseMenu/> : <Menu/>}
            </div>
        </div>
    </div>

    {/* Mobile Links */}
    <div className={mobileLinks} ref={domNode} navbarState = {`${navbarOpen ? "showMenu":""}`}>
        <Mobile/>
        <div className={styles.mobileAuth}>
            {user ? (<Link href="/dashboard/login"><AuthLogoutButton handleLogout={handleLogout}/></Link>):(<Link href="/dashboard/login"><AuthLoginButton/></Link>)}
            {user ? (""):(<Link href="/dashboard/register"><AuthRegisterButton handleHamburgerClick={handleHamburgerClick}/></Link>)}
        </div>
        
    </div>
    </>
  )
}

export default Navbar