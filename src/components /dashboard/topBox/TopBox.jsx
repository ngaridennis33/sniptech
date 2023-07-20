"use client"
import React from 'react'
import styles from './topbox.module.css'
import {topDataUsers} from "../dashBoardData"
import Image from 'next/image'

const TopBox = () => {
  return (
    <div className={styles.topBox}>
         <h1 className={styles.heading}>Top Deals</h1>
         <div className={styles.list}>
            {topDataUsers.map(user =>(
                <div className={styles.listItem} key={user.id}>
                     <div className={styles.user}>
                        <Image className={styles.image}   src={user.img} alt="" width="15" height="15"  />
                    <div className={styles.userText}>
                        <span className={styles.username}>{user.username}</span>
                        <span className={styles.email}>{user.email}</span>
                    </div>
                     </div>
                     <span className={styles.amount}>$ {user.amount}</span>
                </div>
            ))}
         </div>
    </div>
  )
}

export default TopBox