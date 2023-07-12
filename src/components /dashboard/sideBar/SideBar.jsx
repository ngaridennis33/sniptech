"use client"
import React, { useState } from 'react'
import styles from './sideBar.module.css'
import { dashBoardData } from '../dashBoardData';


import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ViewListIcon from '@mui/icons-material/ViewList';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';
import Dropdown from './dropDown/dropDown';

// const SideBar = () => {
//   return (
//     <div className={styles.sidebar}>
//     <div className={styles.top}>
//         <span className={styles.heading}> DashBoard</span>
//     </div>
//      <hr className={styles.hr}/>
//     <div className={styles.center}>
//         <ul className={styles.list}>
//           <p className={styles.title}>MAIN</p>
//             <li className={styles.listItem}> <DashboardIcon className={styles.icon}/> <span className={styles.listItemName}> DashBoard</span></li>
//             <p className={styles.title}>LISTS</p>
//             <li className={styles.listItem}> <PeopleOutlineRoundedIcon className={styles.icon} /> <span className={styles.listItemName} > Users</span></li>
//             <li className={styles.listItem}>  <Inventory2Icon className={styles.icon} /><span className={styles.listItemName} > Products</span></li>
//             <li className={styles.listItem}> <ViewListIcon className={styles.icon} /><span className={styles.listItemName} > Orders</span></li>
//             <li className={styles.listItem}> <LocalShippingIcon className={styles.icon} /><span className={styles.listItemName} > Delivery</span></li>
//           <p className={styles.title}>USEFUL</p>
//             <li className={styles.listItem}> <AnalyticsIcon className={styles.icon} /><span className={styles.listItemName} > Stats</span></li>
//             <li className={styles.listItem}> <NotificationsIcon className={styles.icon} /><span className={styles.listItemName} > Notification</span></li>
//           <p className={styles.title}>SERVICE</p>
//             <li className={styles.listItem}><MonitorHeartIcon className={styles.icon} /> <span className={styles.listItemName} > System Health</span></li>
//             <li className={styles.listItem}> <MoreHorizIcon className={styles.icon} /><span className={styles.listItemName} > More</span>
//               {/*DropDown Menu */}
//                 <ul className={styles.dropDown}>
//                   <li className={styles.dropMenuItem}><Link href={"/dashboard/settings"} className={styles.dropMenuItemLink}>Settings</Link></li>
//                   <li className={styles.dropMenuItem}><Link href={"/dashboard/settings"} className={styles.dropMenuItemLink}>Theme</Link></li>
//                   <li className={styles.dropMenuItem}><Link href={"/dashboard/settings"} className={styles.dropMenuItemLink}>Support</Link></li>
//                 </ul>
//             </li>
//           <p className={styles.title}>USER</p>
//             <li className={styles.listItem}> <PersonIcon className={styles.icon} /><span className={styles.listItemName} > Profile</span></li>
//             <li className={styles.listItem}> <LogoutIcon className={styles.icon} /><span className={styles.listItemName} > Logout</span></li>
//         </ul>
//     </div>
//     <div className={styles.bottom}>
//       <div className={styles.colorOption}></div>
//     </div>
    
        
//     </div>
//   )
// }

// export default SideBar

const SideBar = () => {
  const [openDropDown, setOpenDropDown] = useState(null)
  const openDropDownHandler = (label)=>{
      if(label === openDropDown) return setOpenDropDown(null);
      setOpenDropDown(label)
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <span className={styles.heading}>DashBoard</span>
      </div>
      <hr className={styles.hr} />
      <div className={styles.center}>
        {/* Map the Section titles */}
        <div>
          {dashBoardData.map(({ label,tree }, index) => {
            return(
              <div className={styles.container} key={index}>
                <p className={styles.title}>{label}</p>
                <Dropdown onClick={() => openDropDownHandler(label)} tree={tree} />
              </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;