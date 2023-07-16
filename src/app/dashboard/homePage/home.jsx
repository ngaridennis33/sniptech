import React from 'react'
import styles from './home.module.css'
import TopBox from '@/components /dashboard/topBox/TopBox';

const HomePage = () => {
  return (
    <div className={styles.home}>
        <div className={styles.box} id={styles.box1}>
          <TopBox/>
        </div>
        <div className={styles.box} id={styles.box2}>Box2</div>
        <div className={styles.box} id={styles.box3}>Box3</div>
        <div className={styles.box} id={styles.box4}>Box4</div>
        <div className={styles.box} id={styles.box5}>Box5</div>
        <div className={styles.box} id={styles.box6}>Box6</div>
        <div className={styles.box} id={styles.box7}>Box7</div>
        <div className={styles.box} id={styles.box8}>Box8</div>
        <div className={styles.box} id={styles.box9}>Box9</div>
    </div>
  )
}
export default HomePage;