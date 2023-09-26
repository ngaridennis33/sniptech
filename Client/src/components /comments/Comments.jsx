import React from 'react'
import styles from "./comments.module.scss"
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {

  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Comments</h1>
      {status === "authenticated" ? (<div className={styles.write}>
        <textarea className={styles.input} placeholder='write a comment..'/>
        <button className={styles.action}>Send</button>
      </div>) : (<Link href="/login"> Login in to write a comment</Link>)}
    <div className={styles.comments}>
      <div className={styles.comment}>
        <div className={styles.user}>
          <Image src="/profile.jpg" alt ="" width={50} height={50} className={styles.image} />
          <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}>01.01.2023</span>
          </div>
        </div>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sunt commodi nihil facilis cumque necessitatibus quam sequi qui, enim autem?</p>
      </div>
    </div>

    <div className={styles.comments}>
      <div className={styles.comment}>
        <div className={styles.user}>
          <Image src="/profile.jpg" alt ="" width={50} height={50} className={styles.image} />
          <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}>01.01.2023</span>
          </div>
        </div>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sunt commodi nihil facilis cumque necessitatibus quam sequi qui, enim autem?</p>
      </div>
    </div>

    <div className={styles.comments}>
      <div className={styles.comment}>
        <div className={styles.user}>
          <Image src="/profile.jpg" alt ="" width={50} height={50} className={styles.image} />
          <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}>01.01.2023</span>
          </div>
        </div>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sunt commodi nihil facilis cumque necessitatibus quam sequi qui, enim autem?</p>
      </div>
    </div>

    </div>

  )
}

export default Comments