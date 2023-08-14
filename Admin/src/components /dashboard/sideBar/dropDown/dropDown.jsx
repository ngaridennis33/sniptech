import React, { Fragment, useState } from 'react'
import styles from "./dropDown.module.scss"
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';




const TreeItem = ({label,icon,link,children})=>{
    const [isdropdownopen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isdropdownopen);
      };

  return(
    <ul className={styles.list}>
      {link && (
          <Link href={link} className={styles.listItemName}>
        <li className={styles.listItem}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.label}>{label}</div>
        </li>
          </Link>
      )}
      {!link && (
        <li className={styles.dropdownContainer} onClick={toggleDropdown}>{icon}
        <div className={styles.dropdownMunuIcon}>
          <span isdropdownopen={isdropdownopen.toString()} className={styles.dropdownLabel}>
            {label}
          </span>
          {isdropdownopen ? < KeyboardArrowUpIcon  style={{fontSize:"18"}}/> : <KeyboardArrowDownIcon style={{fontSize:"18"}}/>}
        </div>
        </li>
      )}
      {children && isdropdownopen && <div className={styles.treeChildContainer}>{children}</div>}
    </ul>
  );
};


const Dropdown = ({ tree }) => {
    const createTree = (branch) => (
      <TreeItem label={branch.label} link={branch.link} icon={branch.icon}>
        {branch.branches?.map((subBranch, index) => (
          <Fragment key={index}>{createTree(subBranch)}</Fragment>
        ))}
      </TreeItem>
    );
  
    return (
      <div className={styles.container}>
        {tree.map((branch, index) => (
          <Fragment key={index}>{createTree(branch)}</Fragment>))}
      </div>);
  };

export default Dropdown