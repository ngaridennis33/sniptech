import Link from 'next/link'
import React from 'react'
import styles from "./desktop.module.css"


const DesktopLinks = ({mode}) => {
    const navMenuItem = `${styles.navMenuItem} ${mode === 'dark' ? styles.dark : ''}`;


  return (
    <nav className={styles.navMenu}>
        <ul className={styles.navMenuList}>
            <li className={navMenuItem}>
                <Link href={"/"} className={styles.navMenuItemLink}> Home</Link>
            </li>

            {/* Drop Down Menu */}
            <li className={navMenuItem} id={styles.dropDown}>
                <span className={styles.navMenuItemLink}>About</span>
                
                {/* Drop Down */}
                <ul className={styles.dropMenu}>
                    <li className={styles.dropMenuItem}>
                        <Link href={"/about"} className={styles.dropMenuItemLink}>About Us</Link>
                    </li>

                    <li className={styles.dropMenuItem}>
                        <Link href={"/mission"} className={styles.dropMenuItemLink}>Mission</Link>
                    </li>

                    <li className={styles.dropMenuItem}>
                        <Link href={"/vision"} className={styles.dropMenuItemLink}>Vision</Link>
                    </li>
                </ul>
                {/* End of Dropdown */}

            </li>

            <li className={navMenuItem}>
                <Link href={"/blog"} className={styles.navMenuItemLink}> Blog</Link>
            </li>

            <li className={navMenuItem}>
                <span className={styles.navMenuItemLink}> Dashboard</span>
                                {/* Drop Down */}
                                <ul className={styles.dropMenu}>
                    <li className={styles.dropMenuItem}>
                        <Link href={"/dashboard"} className={styles.dropMenuItemLink}>Dashboard </Link>
                    </li>

                    <li className={styles.dropMenuItem}>
                        <Link href={"/users"} className={styles.dropMenuItemLink}>Users</Link>
                    </li>

                    <li className={styles.dropMenuItem}>
                        <Link href={"/Products"} className={styles.dropMenuItemLink}>Products</Link>
                    </li>
                </ul>
                {/* End of Dropdown */}
            </li>

            <li className={navMenuItem}>
                <Link href={"/portfolio"} className={styles.navMenuItemLink}> Portfolio</Link>
            </li>

        </ul>
    </nav>
  )
}



export default DesktopLinks