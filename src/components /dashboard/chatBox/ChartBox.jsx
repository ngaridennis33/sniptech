"use client"
import React from 'react'
import styles from "./chatBox.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';


const ChartBox = ({title, number,chartData, dataKey,color,percentage,icon}) => {
  return (
    <div className={styles.chartBox}>
        <div className={styles.boxinfo}>
            <div className={styles.title}>
                <Image src={icon} alt="" height={50} width={50}/>
                <span> {title} </span>
            </div>
            <h1>{number}</h1>
            <Link style={{color}} href="/">View all</Link>
        </div>
        <div className={styles.chartInfo}>
            <div className={styles.chart}>
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={chartData}>
                    <Tooltip contentStyle={{background:"transparent", border:"none"}} labelStyle={{display:"none"}} position={{x:10, y:60}}/>
                    <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.texts}>
                <span className={styles.percentage} style={{color: percentage < 0 ? "tomato": "green"}}>{percentage}%</span>
                <span className={styles.duration}>this month</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox