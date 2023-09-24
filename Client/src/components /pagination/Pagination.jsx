import React from 'react'
import styles from "./pagination.module.scss"
import Link from 'next/link'

const Pagination = () => {
  return (
    <div className={styles.container}>
      <Link href="/readmore" className={styles.authLink} styles={{width:"maxContent"}}><button className={styles.preNxtBtn}>Previous</button></Link> 
      <Link href="/readmore" className={styles.authLink} styles={{width:"maxContent"}}><button className={styles.preNxtBtn}>Next</button></Link> 
    </div>
  )
}

export default Pagination