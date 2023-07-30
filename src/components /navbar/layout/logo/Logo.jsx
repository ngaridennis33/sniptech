import Image from 'next/image'
import React from 'react'
import LogoImg from "/public/logoipsum-261.svg"
import LogoImgDark from "/public/logoipsum-261.svg"
import styles from './logo.module.css'


const Logo = ({mode}) => {
  return (
    <div className={styles.logoImageContainer}>
    {mode === "dark" ? (<Image src={LogoImgDark} className={styles.logoImage} alt="logoImage" />):(<Image src={LogoImg} className={styles.logoImage} alt="logoImage" />)}
    </div>
  )
}

export default Logo