import React, { Fragment, useState } from 'react'
import styles from "./dropDown.module.css"
import Link from 'next/link'




const TreeItem = ({label, children, link})=>{
  const [isOpen, setIsOpen] = useState(false)
  return(
    <div className={styles.treeItemContainer}>
      {link && (<li className={styles.navMenuItem}><Link style={{width:"100%",padding: "0 10px"}}  href={link}>{label}</Link></li>)}
      {!link && (<div className={styles.dropdownContainer} onClick={() => setIsOpen((p)=> !p)}>
        <span isOpen={isOpen} className={styles.dropdownLabel}> {label} </span>
      </div>)}
      {children && isOpen && <div className={styles.treeChildContainer}>{children}</div>}
    </div>
  )

}

const Dropdown = ({tree}) => {

const createTree = (branch) => (
  <TreeItem label={branch.label} link = {branch.link}>
    {branch?.branches?.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}</Fragment>
            ))}
  </TreeItem>

)
  return (
    <div className={styles.dropdownContainer}>
      {tree.map((branch, index) => (
      <Fragment key={index}>{createTree(branch)}</Fragment>
      ))}
    </div>
  )
}

export default Dropdown