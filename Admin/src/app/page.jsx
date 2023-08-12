import Login from './auth/login/page'
import HomePage from './dashboard/homePage/page'
import styles from './page.module.css'


export default function Home() {
  return (
  <div className={styles.container}>
    <Login/>
  </div>
  )
}
