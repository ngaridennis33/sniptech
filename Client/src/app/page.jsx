import Image from 'next/image'
import styles from './page.module.scss'
import Hero from "/public/hero.png"
import { CtaButton } from '@/components /button/Button'
import Featured from '@/components /featured/Featured';
import CategoryList from '@/components /categorylist/CategoryList';
import CardList from '@/components /cardlist/CardList';
import Menu from '@/components /menu/Menu';

export default function Home() {
  return (
  <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
   
  </div>
  )
}
