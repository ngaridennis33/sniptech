"use client"
import React, { useContext, useState } from 'react'
import styles from './sideBar.module.css'
import { dashBoardData } from '../dashBoardData';
import Dropdown from './dropDown/dropDown';
import { ThemeContext } from '../../../../context/ThemeContext';
import Footer from '@/components /footer/Footer';


const SideBar = () => {
  const {mode} = useContext(ThemeContext);
  const [openDropDown, setOpenDropDown] = useState(null)
  const openDropDownHandler = (label)=>{
      if(label === openDropDown) return setOpenDropDown(null);
      setOpenDropDown(label)
  }

  // Dark Theme
  const style = {
    backgroundColor:mode === "dark" ? "#021427" : "#FFFF"
  }

  return (
    <div className={styles.sidebar} style={style}>
      <div className={styles.top}>
        <span className={styles.heading}>SideBar</span>
      </div>
      <hr className={styles.hr} style={style} />
      <div className={styles.center}>
        {/* Map the Section titles */}
        <div>
          {dashBoardData.map(({ label,tree }, index) => {
            return(
              <div className={styles.container} key={index} style={style}>
                <p className={styles.title}>{label}</p>
                <Dropdown onClick={() => openDropDownHandler(label)} tree={tree} />
              </div>
              );
          })}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default SideBar;