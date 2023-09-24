import React from 'react'
import styles from "./page.module.scss";
import Menu from '@/components /menu/Menu';
import Image from 'next/image';
import Comments from '@/components /comments/Comments';

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
                <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <Image src="/profile.jpg" fill className={styles.avatar} alt=""/>
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>01.02.2024</span>
                </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/apps.jpg" fill className={styles.image} alt=""/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia voluptatem maiores odio facilis tempore qui in vitae consequuntur eligendi.
                    </p>
                    <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, laboriosam!</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque unde fugit eveniet magnam porro eius dolor velit in aspernatur.</p>
                </div>
                <div className={styles.comment}>
                    <Comments/>
                </div>
            </div>
            <Menu/>
        </div>

    </div>
  )
}

export default page