import React from 'react'
import Navbar from './Navbar'
import classes from "../component/Detail.module.css"
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'


const Detail = () => {

  const { id } = useParams();
  const {data: PasienList, error, isPending} = useFetch('http://localhost:8000/PasienList/' + id)

  console.log(PasienList)
  return (
    <div> 
      <Navbar/>
      <div className={classes.content}>
        <div className={classes.images}> 
        </div> 
        {isPending && PasienList === null ? <div>Loading...</div> :  (<div className={classes.detail}> 
         <h3>Detail Page - {id}   </h3>
         <div>
         <h4>Nama: {PasienList.nama}</h4>
         <h4>Umur: {PasienList.umur}</h4>
         <h4>Alamat: {PasienList.alamat}</h4>
         <h4>Email: {PasienList.email}</h4>
         <h4>No Telepon: {PasienList.noTelp}</h4>
         </div>
         </div>
         )}
        {error && <div>{error}</div>}
        <h1>Why?</h1>
     </div>
        
    </div>
  )
        }

export default Detail