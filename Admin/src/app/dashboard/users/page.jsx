import React from 'react'
import styles from './page.module.scss'
import DataTable from '@/components /dashboard/dataTable/DataTable'

const Users = () => {
  return (
    <div className={styles.users}>
     <div className={styles.info}>
     <h1>Users</h1>
      <button>Add New User</button>
     </div>
     <DataTable/>
    </div>
  )
}

export default Users