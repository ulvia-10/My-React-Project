import React from 'react'
import { selectUser } from '../features/userSlices';
import style from "../pages/Dashboard.module.css"
import { useSelector } from 'react-redux';
import Widget from '../component/Widget';
import Navbar from "../component/Navbar"

const Dashboard = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <Navbar/>
    <h1>Hi! Welcome Back {user.name ? <span className={style.username}>{user.name} </span>: "Tidak ada Nama "}</h1>
    <div className={style.widget}>
      <Widget type="Pasien"/>
      <Widget type="Dokter"/>
      <Widget type="Antrian"/>
    </div>
</div>
    

  ) 
}

export default Dashboard