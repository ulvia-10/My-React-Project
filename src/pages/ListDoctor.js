import React from 'react'
import DataTable from '../component/DataTable'
import classes from '../pages/ListDoctor.module.css'
import {Link} from 'react-router-dom'
import { ListAltOutlined } from '@mui/icons-material'
import Navbar from "../component/Navbar"
import { userSlice } from '../features/userSlices'

const ListDoctor = (props) => {
  console.log(props.users)
  return (
   <div>
      <Navbar/>
   <div className={classes.content}>
    
     <div className={classes.title}>
       <h3 style={{display:'flex'}}><ListAltOutlined/>  List Doctor</h3>
       <div className={classes.link}>
         <Link to="/NewFormDoctor">Add New Doctor</Link>
       </div>
     </div>
     <div className={classes.list}>
       <DataTable List={props.users} />
     </div>
   </div>
   </div>


  
  )
}

export default ListDoctor