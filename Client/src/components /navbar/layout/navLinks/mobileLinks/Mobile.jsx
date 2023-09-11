import React, { useContext, useState } from 'react'
import styles from './mobileLinks.module.css'
import { navLinkData } from '@/components /navbar/navbarData'
import Dropdown from './dropDown/Dropdown'
import Link from 'next/link'
import { HamburgerContext } from '../../../../context/HumbergerContext'

const Mobile = ({mode}) => {

  const navMenuItem = (`${styles.navMenuItem} ${mode === 'dark' ? styles.dark : ''}`);
  const dropdownLabel = (`${styles.dropdownLabel} ${mode === 'dark' ? styles.dark : ''}`);

  // HamburgerController
  const {handleHamburgerClose} = useContext(HamburgerContext)

  
  const [openDropDown, setOpenDropDown] = useState(null)
  const openDropDownHandler = (label)=>{
      if(label === openDropDown) return setOpenDropDown(null);
      setOpenDropDown(label)
  }

  return (
    <>
      {navLinkData.map(({link, label,tree,icon},index) => {
      const isopen = openDropDown === label;
      
          return(
          <ul className={styles.navMenu} key = {index}>
            {link && <li className={navMenuItem}><Link onClick={handleHamburgerClose} style={{width:"100%", padding:" 5px", display:"flex", gap:"10px", alignItems:"center"}} href={link}><ul className={styles.icon}>{icon}</ul>{label} </Link></li>}
            {!link && (<div className={styles.dropdownContainer}onClick={() => openDropDownHandler(label)}>
              <span className={dropdownLabel} dataisopen={isopen.toString()} style={{display:"flex", gap:"10px", alignItems:"center"}}><ul className={styles.icon}>{icon}</ul>{label}</span>
            </div>)}
            {isopen && (<Dropdown handleHamburgerClose = {handleHamburgerClose} tree = {tree} mode={mode}/>)}
          </ul>
        );
      })}
    </>
  )
}

export default Mobile