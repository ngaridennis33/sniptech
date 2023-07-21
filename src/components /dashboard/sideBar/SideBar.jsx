"use client"
import React, { useContext, useState } from 'react'
import styles from './sideBar.module.css'
import { dashBoardData } from '../dashBoardData';
import Dropdown from './dropDown/dropDown';
import { ThemeContext } from '../../../../context/ThemeContext';


const SideBar = () => {
  const {mode} = useContext(ThemeContext);
  const [openDropDown, setOpenDropDown] = useState(null)
  const openDropDownHandler = (label)=>{
      if(label === openDropDown) return setOpenDropDown(null);
      setOpenDropDown(label)
  }

  // Dark Theme
  const style = {
    backgroundColor:mode === "dark" ? "#021427" : "#FFFF",
    border:mode === "dark" ? ".5px solid #042141" : "1px solid #cfcdcd"
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

        <div className={styles.profile}>
          profile
        </div>
      </div>
    </div>
  );
};

export default SideBar;