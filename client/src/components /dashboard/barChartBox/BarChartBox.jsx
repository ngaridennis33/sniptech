import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import styles from "./barchartBox.module.scss"

const BarChartBox = ({title, chartData, color, dataKey}) => {
  return (
    <div className={styles.barChartBox}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.chart}>
        <ResponsiveContainer width="99%" height={150}>
            <BarChart data={chartData}>
                <Tooltip contentStyle={{backgroundColor:"#000C18",borderRadius:"5px"}}
                labelStyle={{display:"none"}}
                cursor={{fill:"none"}}
                />
                <Bar dataKey={dataKey} fill={color} />
            </BarChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox