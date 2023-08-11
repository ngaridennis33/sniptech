import React from 'react'
import styles from "./pieChartBox.module.scss"
import { PieChart, Cell, ResponsiveContainer, Pie, Tooltip } from 'recharts'

const data = [
    {name:"Mobile", value:400, color:"#0088FE"},
    {name:"Desktop", value:300, color:"#ec43ec"},
    {name:"Laptop", value:300, color:"#1fdf4c"},
    {name:"Tablet", value:200, color:"#f4e80f"},
]


const PieChartBox = () => {
  return (
    <div className={styles.pieChartBox}>
        <h1>Leads by Source</h1>
        <div className={styles.chart}>
        <ResponsiveContainer width="99%" height={300}>
        <PieChart >
            <Tooltip contentStyle={{background:"#f6f5f5", color:"#ffff", borderRadius:"5px"}}/>
            <Pie
            data={data}
            innerRadius={"70%"}
            outerRadius={"90%"}
            paddingAngle={5}
            dataKey="value"
            >
            {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
                ))}
            </Pie>
        </PieChart>
        </ResponsiveContainer>
        </div>
        <div className={styles.options }>
            {data.map((item) => (
                <div className={styles.option} key={item.name}>
                    <div className={styles.title}>
                        <div className={styles.dot} style={{backgroundColor:item.color}}></div>
                            <span>{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PieChartBox