import React from 'react'
import styles from "./categoryList.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Popular Categories</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className = {`${styles.category} ${styles.style}`}>
          <Image src="/contact.png" width={32} height={32} className={styles.img} alt=""/> 
          style
          </Link>

          <Link href="/blog?cat=travel" className = {`${styles.category} ${styles.travel}`}>
          <Image src="/hero.png" width={32} height={32} className={styles.img} alt=""/> 
          Travel
          </Link>

          <Link href="/blog?cat=fashion" className = {`${styles.category} ${styles.fashion}`}>
          <Image src="/bg2.jpg" width={32} height={32} className={styles.img} alt=""/> 
          Fashion
          </Link>

          <Link href="/blog?cat=tech" className = {`${styles.category} ${styles.tech}`}>
          <Image src="/bg3.jpg" width={32} height={32} className={styles.img} alt=""/> 
          Tech
          </Link>
        </div>
    </div>
  )
}

export default CategoryList