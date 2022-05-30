import React from "react";
import Navbar from "./Navbar";
import classes from "../component/Detail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { createBrowserHistory } from "history";

const Detail = () => {
  const { id } = useParams();
  const { data: PasienList, error, isPending, } = useFetch("http://localhost:8000/PasienList/" + id);
  const navigate = useNavigate();

 const handleClick=()=>{
    fetch('http://localhost:8000/PasienList/' + id, {
      method: 'DELETE',
    }).then(()=>{
      navigate('/ListPatient')
    })
  }
  console.log(PasienList);
  return (
    <div>
      <Navbar />
        {isPending && PasienList === null ? (
          <div className={classes.loading}> <h1>Loading......</h1></div>
        ) : (
          <div className={classes.content}>
          <div className={classes.images}>
            <h3>Profile</h3>
          </div>

          <div className={classes.detail}>
          <h3 style={{alignItems: "center"}} >Detail Page - {id} </h3>
            <div className={classes.isidetail}>
              <h5>Nama: {PasienList.nama}</h5>
              <h5>Umur: {PasienList.umur}</h5>
              <h5>Alamat: {PasienList.alamat}</h5>
              <h5>Email: {PasienList.email}</h5>
              <h5>No Telepon: {PasienList.noTelp}</h5>
            </div>
            <button
                  // onClick={() => props.onDeletePasien(params.row.id)}
                  onClick={handleClick}
                  className={classes.deletebtn}>
                  Delete
                </button>
          </div>
          
          </div>
        )}
        {error && <div>{error}</div>}
      </div>
  );
};

export default Detail;
