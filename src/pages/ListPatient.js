import React from 'react'
import NewForm from '../component/NewForm'
import style from "../pages/ListPatient.module.css"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import DataTable from '../component/DataTable'
import { ListAltRounded } from '@mui/icons-material'
import Navbar from '../component/Navbar'

const ListPatient = (props) => {
  return (
    
    <div className={style.context}>
      <Navbar/>
    <div className={style.content}>
        <div className={style.title}>
        <h3 style={{display:'flex'}}> <ListAltRounded/> List Pasien</h3>
        <div className={style.link}> 
          <Link to="/NewForm" >Add New Pasien {props.loading && <div> <h1>Loading...</h1></div>} </Link>
        </div>
        </div>
        <DataTable onDeletePasien={props.onDelete}  List={props.users}/>

    </div>
    </div>
    
  )
}

export default ListPatient