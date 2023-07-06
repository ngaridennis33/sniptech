import Image from 'next/image'
import React from 'react'
import LogoImg from "/public/logo.png"
import LogoImgDark from "/public/logo2.png"
import styles from './logo.module.css'


const Logo = ({mode}) => {
  return (
    <div className={styles.logoImageContainer}>
    {mode === "dark" ? (<Image src={LogoImgDark} className={styles.logoImage} alt="logoImage" />):(<Image src={LogoImg} className={styles.logoImage} alt="logoImage" />)}
    </div>
  )
}

export default Logo