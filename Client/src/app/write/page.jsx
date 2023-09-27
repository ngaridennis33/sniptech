"use client"
import React, { useState } from 'react'
import styles from "./page.module.scss";
import "react-quill/dist/quill.bubble.css";
import Image from 'next/image';
import ReactQuill from 'react-quill';

const WritePage = () => {

    const [open,setOpen] = useState(false);
    const [value,setValue] = useState("");

  return (
    <div className={styles.container}>
        <input className={styles.input} type="text" placeholder='Title' />
        <div className={styles.editor}>
            <button className={styles.button} onClick={()=> setOpen(!open)}>
                <Image src = "/plus.svg" width={16} height={16} alt ="" />
            </button>
            {open && (
                <div className={styles.add}>
                    <button className={styles.addButton}>
                        <Image src = "/images.svg" width={25} height={25} alt ="" />
                        <span className={styles.tooltip}>Images</span>
                    </button>
                    <button className={styles.addButton}>
                        <Image src = "/new-tab.svg" width={25} height={25} alt ="" />
                        <span className={styles.tooltip}>New tab</span>

                    </button>
                    <button className={styles.addButton}>
                        <Image src = "/play.svg" width={25} height={25} alt ="" />
                        <span className={styles.tooltip}>Video</span>

                    </button>
                </div>
            )}
            <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tell your story" />
        </div>

        <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage