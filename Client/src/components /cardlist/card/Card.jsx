import React from 'react'
import styles from "./card.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key= {key}>
            <div className={styles.imageContainer}>
                <Image src={item.img} alt = "" fill className={styles.image}/> 
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}> {item.createdAt} - </span>
                    <span className={styles.category}>{item.slug} </span>
                </div>
                <Link href="/">
                <h1 className={styles.title}>{item.title}</h1>
                </Link>
                <p className={styles.desc}>{item.desc}</p>
                <Link className={styles.authLink} href="/"><button className={styles.readmoreLink}> Read More...</button></Link>
            </div>
    </div>
  )
}

export default Card