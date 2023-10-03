import React from 'react'
import styles from "./announcement.module.scss"
import Image from 'next/image'

const Announcement = () => {
  return (
    <div className={styles.container} id={styles.flex}>
        <div className={styles.social}>
          <Image src="/1.png" width={20} height={20} className={styles.icon} alt="sniptech fb"/>
          <Image src="/2.png" width={20} height={20} className={styles.icon} alt="sniptech"/>
          <Image src="/3.png" width={20} height={20} className={styles.icon} alt="sniptech"/>
          <Image src="/4.png" width={20} height={20} className={styles.icon} alt="sniptech"/>
        </div>
    </div>
  )
}

export default Announcement