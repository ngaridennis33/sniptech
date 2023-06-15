import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"

const links = [
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:2,
        title:"About",
        url:"/about",
    },
    {
        id:3,
        title:"portfolio",
        url:"/portfolio",
    },
    {
        id:4,
        title:"Dashboard",
        url:"/dashboard",
    },
    {
        id:5,
        title: "blog",
        url:"/blog",
    },
    {
        id:6,
        title:"Contact",
        url:"/contact",
    }

]

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Sniptech</Link>
        <div className={styles.links}>
            {links.map(link=>(
                <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
            ))}
            <button className={styles.logout} onClick={console.log("Logged out")}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar