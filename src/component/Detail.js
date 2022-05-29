import React from 'react'
import Navbar from './Navbar'
import classes from "../component/Detail.module.css"
import { useParams } from 'react-router-dom'

const Detail = (props) => {

  const { pasienId } = useParams();
  return (
    <div> 
      <Navbar/>
      <div className={classes.content}>
        <div className={classes.images}> 
         <h3>Detail Page - {pasienId }</h3>
        </div>
        <div className={classes.detail}> 
       {props.users?.map ((item)=>(
        <ul  key = {item.id}>
          <li>
            <h1>Nama: {item.nama}</h1>
          </li>
        </ul>
       ))}
        </div>

        </div>
    </div>
  )
}

export default Detail