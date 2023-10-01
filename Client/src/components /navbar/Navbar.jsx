"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from "./navbar.module.scss"
import DarkmodeToogle from '../DarkmodeToggle/DarkmodeToogle'
import Logo from './layout/logo/Logo'
import DesktopLinks from './layout/navLinks/deskTop/DesktopLinks'
import { ThemeContext } from '../context/ThemeContext'
import { Menu, CloseMenu } from '../hamburger/Humberger'
import Mobile from './layout/navLinks/mobileLinks/Mobile'
import { useClickOutside } from '@/hooks/hooks'
import AuthLinks from '@/components /authLinks/AuthLinks'
import { HamburgerContext } from '../context/HumbergerContext'
import { ModalContext } from '../context/ModalContext'
import Modal from '../modal/Modal'
import SignIn from '../authLinks/signin/Signin'
import Register from '../authLinks/register/Register'




const Navbar = () => {
    const {isModalOpen,openModal, modalContent,} = useContext(ModalContext);
    const {mode} = useContext(ThemeContext);
    const {navbarOpen,handleHamburgerClose,domNodeClick} = useContext(HamburgerContext);
    const mobileLinks = (`${styles.mobileLinks} ${mode === 'dark' ? styles.dark : ''}`) && (`${styles.mobileLinks} ${navbarOpen === true ? styles.showMenu : ''}`);


//Toggle hamburger open or close when user clicks outside the menu.
let domNode = useClickOutside(()=>{
    domNodeClick();
})


  return (
    <>
    {isModalOpen &&
         <Modal isModalOpen={isModalOpen}>
            {modalContent === "login" ? <SignIn openModal={openModal}/> : <Register openModal={openModal}/>}
         </Modal>
        }
    <div className={styles.navWrapper}>
        <div className={styles.container}>

            {/* left Section */}
            <div className={styles.left}>
                <Link href="/" className={styles.logoLink}>
                    <Logo mode = {mode}/>
                </Link>
            </div>

            {/* Middle Section (Desktop View) */}
            <div className={styles.center}>
                <DesktopLinks mode = {mode}/>
            </div>

            {/* Right Section (Desktop View) */}
            <div className={styles.cta}> 
                <AuthLinks openModal={openModal}/>
                <DarkmodeToogle/>
            </div>

            {/* Mobile View Hamburger */}
            <div className={styles.mobileHamburgerCotainer} onClick={handleHamburgerClose}>
                {navbarOpen ? <CloseMenu mode = {mode}/> : <Menu mode = {mode}/>}
            </div>
        </div>
    </div>

    {/* Mobile Links */}
        {navbarOpen ? <div className={"overlay"}/>:""}
        <div style={{background:`${mode === "dark" ? "#011120" : "#fff"}`,
            boxShadow:`${mode === "dark" ? "0 15px 15px rgba(255, 255, 255, 0.15)" : "0 15px 15px rgba(0, 0, 0, 0.972)"}`}} className={mobileLinks} ref={domNode}>
                <DarkmodeToogle/>
                <Mobile mode = {mode}/>
                <div className={styles.mobileAuth}>
                    <AuthLinks openModal={openModal} />
                </div>
        </div>
    </>
  )
}

export default Navbar