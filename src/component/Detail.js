import React from 'react'
import Navbar from './Navbar'
import classes from "../component/Detail.module.css"
const Detail = (props) => {
console.log(props.users)
  return (
    <div> 
      <Navbar/>
      <div className={classes.content}>
      
        <div className={classes.images}> 
         <h3>Detail Page </h3>

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