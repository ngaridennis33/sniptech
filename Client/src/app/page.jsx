import Image from 'next/image'
import styles from './page.module.css'
import Hero from "/public/hero.png"
import { CtaButton } from '@/components /button/Button'

export default function Home() {
  return (
  <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Better Design tour digital products</h1>
     <p className={styles.desc}>  Turning your idea into reality. We bring together the tetam for global tech industry</p>
    <CtaButton url={"/portfolio"} text={"See our works"}/>
    </div>

    <div className={styles.item}>
    <Image className={styles.image} style={{width:'100%', height:'500px'}}   src={Hero} alt='Hero.png'/>
    </div>
  </div>
  )
}
