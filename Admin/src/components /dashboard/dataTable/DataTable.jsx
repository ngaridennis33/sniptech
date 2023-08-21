"use client"
import React from 'react'
import styles from "./dataTable.module.scss"
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const DataTable = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 150,
      editable:true,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 150,
      editable:true,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 150,
      editable:true,
    },
    
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'John' },
    { id: 2, lastName: 'Park', firstName: 'Kim' },
    { id: 3, lastName: 'Jane', firstName: 'Cena' },
    { id: 4, lastName: 'Steve', firstName: 'Anthony' },
    { id: 5, lastName: 'Mike', firstName: 'Austin' },
    { id: 6, lastName: 'Pius', firstName: 'Mark' },
    { id: 7, lastName: 'Alex', firstName: 'Jake' },
    { id: 8, lastName: 'Ann', firstName: 'Jude' },
    { id: 9, lastName: 'Steve', firstName: 'James' },
    { id: 10, lastName: 'Philip', firstName: 'John' },
    { id: 11, lastName: 'Simon', firstName: 'Segal' },
  ];

  return (
    <div className={styles.dataTable }>
      <DataGrid
      className={styles.dataGrid}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel:{
              pageSize:10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar:{
            showQuickFilter:true,
            quickFilterProps:{debounceMs:500}
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable