import React from 'react'
import styles from "./categoryList.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Popular Categories</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style">
          <Image src="/contact.png" width={12} height={32} className={styles.img} alt=""/> </Link>
        </div>
    </div>
  )
}

export default CategoryList