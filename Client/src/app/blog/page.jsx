import React from 'react'
import styles from "./page.module.scss"
import CategoryList from '@/components /categorylist/CategoryList'
import Featured from '@/components /featured/Featured'
import CardList from '@/components /cardlist/CardList'
import Menu from '@/components /menu/Menu'


export const metadata = {
  title: "SnipTech Blog",
  description: "SnipTech blogsite meta",
};

const Blog = () => {
  return (
    <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
   
  </div>
  )
}

export default Blog