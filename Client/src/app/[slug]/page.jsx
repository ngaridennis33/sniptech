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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum voluptatem necessitatibus voluptates voluptate laudantium eaque, odit dolorem sequi velit. Reiciendis corrupti saepe dolore provident sed, maxime molestias consectetur obcaecati, ab perferendis non quod necessitatibus, aut nam mollitia quaerat adipisci aliquid facilis enim repudiandae magni soluta. Ipsam veritatis vitae rerum earum nisi architecto inventore rem! Dolore nulla assumenda doloribus laudantium soluta hic nostrum alias similique sed, earum in expedita ea? Sunt fugit voluptate nesciunt odio neque quas totam facere eaque eos tenetur! Ipsum esse voluptates ea sunt eaque cumque ullam saepe sequi, tenetur quibusdam! Veniam quidem nisi provident mollitia consectetur?</p>
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