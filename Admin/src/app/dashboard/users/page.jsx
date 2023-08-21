import React from 'react'
import styles from './page.module.scss'
import DataTable from '@/components /dashboard/dataTable/DataTable'
import {CtaButton} from "@/components /button/Button"

const Users = () => {
  return (
    <div className={styles.users}>
     <div className={styles.info}>
     <h1>Users</h1>
      <CtaButton text={"Add New User"} url={"/dashboard/newUser"}/>
     </div>
     <DataTable/>
    </div>
  )
}

export default Users