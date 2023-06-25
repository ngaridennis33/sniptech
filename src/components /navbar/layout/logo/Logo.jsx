import Image from 'next/image'
import React from 'react'
import LogoImg from "/public/logo.png"
import styles from './logo.module.css'


const Logo = () => {
  return (
    <div className={styles.logoImageContainer}>
    <Image src={LogoImg} className={styles.logoImage} alt="logoImage" />
    </div>
  )
}

export default Logo