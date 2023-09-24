import React from 'react'
import styles from "./card.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/apps.jpg" alt = "" fill className={styles.image}/> 
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}> 11.02.2023 - </span>
                    <span className={styles.category}> CULTURE </span>
                </div>
                <Link href="/">
                <h1 className={styles.title}>Lorem ipsum adipisicing elit. Inventore, corrupti.</h1>
                </Link>
                <p className={styles.desc}>Lorem  Saepe tenetur explicabo tempora officia culpa accusamus vero iste sunt quisquam optio?</p>
                <Link className={styles.authLink} href="/"><button className={styles.readmoreLink}> Read More...</button></Link>
            </div>
    </div>
  )
}

export default Card