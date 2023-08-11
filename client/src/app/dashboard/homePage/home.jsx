"use client"
import React, { useContext } from 'react'
import styles from './home.module.css'
import TopBox from '@/components /dashboard/topBox/TopBox';
import ChartBox from '@/components /dashboard/chatBox/ChartBox';
import { ChatBoxConversion, ChatBoxProducts, ChatBoxRevenue, barChartRevenue, barChartVisits, chartBoxUser } from '@/components /dashboard/dashBoardData';
import BarChartBox from '@/components /dashboard/barChartBox/BarChartBox';
import PieChartBox from '@/components /dashboard/piechartBox/PieChartBox';
import BigChartBox from '@/components /dashboard/bigChartBox/BigChartBox';
import { ThemeContext } from '../../../../context/ThemeContext';
import DashBoard from '../page';

const HomePage = () => {
  const {mode} = useContext(ThemeContext);
  const style = {
    backgroundColor:mode === "dark" ? "#021427" : "#FFFF",
    border:mode === "dark" ? "1px solid #042141" : "1px solid #cfcdcd"
  }
  return (
    <DashBoard>
    <div className={styles.home}>
        <div className={styles.box} id={styles.box1} style={style}>
          <TopBox/>
        </div>
        <div className={styles.box} id={styles.box2} style={style} ><ChartBox {...chartBoxUser}/></div>
        <div className={styles.box} id={styles.box3}style={style} ><ChartBox {...ChatBoxProducts}/></div>
        <div className={styles.box} id={styles.box4}style={style} ><PieChartBox/></div>
        <div className={styles.box} id={styles.box5}style={style} ><ChartBox {...ChatBoxConversion}/></div>
        <div className={styles.box} id={styles.box6}style={style} ><ChartBox {...ChatBoxRevenue}/></div>
        <div className={styles.box} id={styles. box7}style={style} ><BigChartBox/></div>
        <div className={styles.box} id={styles.box8}style={style} ><BarChartBox {...barChartVisits}/></div>
        <div className={styles.box} id={styles.box9}style={style} ><BarChartBox {...barChartRevenue}/></div>
    </div>
    </DashBoard>
  )
}
export default HomePage;