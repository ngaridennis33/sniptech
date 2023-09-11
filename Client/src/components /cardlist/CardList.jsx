import React from 'react'
import Pagination from '@/components /pagination/Pagination';
import styles from "./cardList.module.scss";


const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination/>
    </div>
  )
}

export default CardList