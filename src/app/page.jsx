import Image from 'next/image'
import styles from './page.module.css'
import Hero from "/public/hero.png"

export default function Home() {
  return (
  <div>
    <div className={styles.item}>
      <h1>Better Design tour digital products</h1>
     <p> Turning your idea into reality. We bring together the tetam for global tech industry</p>
     <button> See our works</button>
    </div>

    <div className={styles.item}>
    <Image width={500} height={500}  src={Hero} alt='Hero.png' className={styles.img}/>
    </div>
  </div>
  )
}
