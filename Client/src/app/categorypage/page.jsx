import React from 'react'
import styles from "./page.module.scss"
import CardList from '@/components /cardlist/CardList'
import Menu from '@/components /menu/Menu'

const CategoryPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default CategoryPage