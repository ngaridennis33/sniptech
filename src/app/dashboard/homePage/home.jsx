"use client"
import React from 'react'
import styles from './home.module.css'
import TopBox from '@/components /dashboard/topBox/TopBox';
import ChartBox from '@/components /dashboard/chatBox/ChartBox';
import { ChatBoxConversion, ChatBoxProducts, ChatBoxRevenue, barChartRevenue, barChartVisits, chartBoxUser } from '@/components /dashboard/dashBoardData';
import BarChartBox from '@/components /dashboard/barChartBox/BarChartBox';

const HomePage = () => {
  return (
    <div className={styles.home}>
        <div className={styles.box} id={styles.box1}>
          <TopBox/>
        </div>
        <div className={styles.box} id={styles.box2}><ChartBox {...chartBoxUser}/></div>
        <div className={styles.box} id={styles.box3}><ChartBox {...ChatBoxProducts}/></div>
        <div className={styles.box} id={styles.box4}>Box 4</div>
        <div className={styles.box} id={styles.box5}><ChartBox {...ChatBoxConversion}/></div>
        <div className={styles.box} id={styles.box6}><ChartBox {...ChatBoxRevenue}/></div>
        <div className={styles.box} id={styles. box7}>Box7</div>
        <div className={styles.box} id={styles.box8}><BarChartBox {...barChartVisits}/></div>
        <div className={styles.box} id={styles.box9}><BarChartBox {...barChartRevenue}/></div>
    </div>
  )
}
export default HomePage;