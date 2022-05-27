import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import style from "../component/Datatable.module.css"
import {userColumns} from "../component/Datatablesource"


const DataTable = (props) => {

// create column action
const actionColumn = [{
  field: "Action",
  headerName: "Action",
  width: 200,
  renderCell:()=> {
    return(
      props.List?.map((user)=> (
      <div className={style.cellAction}>
        <div className={style.viewbtn}>View</div>
        <button onClick={()=>props.onDeletePasien(user.id)} className={style.deletebtn}>Delete </button>
      </div>
      ))
  )}

}

]

// console.log(props)

//kalau mapping, jangan pakai array!! (map-> bikin array)

const userRows =
  props.List?.map((user)=> (
    (console.log(user.noTelp)),
  {
    key: (user.id),
    id: (user.id),
    username: (user.name),
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    noTelp: (user.noTelp),
    email: (user.email),
    umur: (user.umur),
   
  
  }
 
  ));


  return (
    <div className={style.datatable}>
    <DataGrid 
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable