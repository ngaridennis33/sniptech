import React, { Fragment, useState } from 'react'
import styles from "./dropDown.module.css"
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
        <li className={styles.listItem}>
          <div className={styles.icon}>{icon}</div>
          <Link href={link} className={styles.listItemName}>
            {label}
          </Link>
        </li>
      )}
      {!link && (
        <div className={styles.dropdownCont} onClick={toggleDropdown}>{icon}
        <div className={styles.dropdownMunuIcon}>
          <span isdropdownopen={isdropdownopen.toString()} className={styles.dropdownLabel}>
            {label}
          </span>
          {isdropdownopen ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon className={styles.rotate}/>}
        </div>
          </div>
      )}
      {children && isdropdownopen && <div className={styles.treeChildContainer}>{children}</div>}
    </ul>
  );
};


const Dropdown = ({ tree,children }) => {
    const createTree = (branch) => (
      <TreeItem label={branch.label} link={branch.link} icon={branch.icon} other={children}>
        {branch.branches?.map((subBranch, index) => (
          <Fragment key={index}>{createTree(subBranch)}</Fragment>
        ))}
      </TreeItem>
    );
  
    return (
      <div className={styles.dropdownContainer}>
        {tree.map((branch, index) => (
          <Fragment key={index}>{createTree(branch)}</Fragment>))}
      </div>);
  };

export default Dropdown