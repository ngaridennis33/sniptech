import React, { useState } from 'react'
import styles from './mobileLinks.module.css'
import { navLinkData } from '@/components /navbar/navbarData'
import Dropdown from './dropDown/Dropdown'
import Link from 'next/link'

const Mobile = () => {
  const [openDropDown, setOpenDropDown] = useState(null)
  const openDropDownHandler = (label)=>{
      if(label === openDropDown) return setOpenDropDown(null);
      setOpenDropDown(label)
  }

  return (
    <>
      {navLinkData.map(({link, label,tree},index) => {
      const isOpen = openDropDown === label;
          return(
          <ul className={styles.navMenu} key = {index}>
            {link && <li className={styles.navMenuItem}><Link style={{width:"100%", padding:"0 5px"}} href={link}>{label}</Link></li>}
            {!link && (<div className={styles.dropdownContainer}onClick={() => openDropDownHandler(label)}>
              <span className={styles.dropdownLabel} isOpen={isOpen}>{label}</span>
            </div>)}
            {isOpen && (<Dropdown tree = {tree}/>)}
          </ul>
        );
      })}
    </>
  )
}

export default Mobile