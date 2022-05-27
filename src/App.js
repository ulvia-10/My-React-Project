import Login from "../src/pages/Login";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/userSlices";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ListDoctor from "./pages/ListDoctor";
import Dashboard from "./pages/Dashboard";
import NewForm from "./component/NewForm";
import { PasienInput } from "./component/FormSource";
import ListPatient from "../src/pages/ListPatient"
import { DoctorInput } from "./component/DoctorSource";
import Widget from "./component/Widget";
import { useState } from "react";

function App() {
  const user = useSelector(selectUser);

  const [pasienList, setPasienList] = useState ([]);

  const addPasienHandler = (props) => {
    setPasienList((prevpasienList)=>{
      return[
        ...prevpasienList,{
          nama: (props.nama), 
          alamat: (props.alamat), 
          umur: (props.umur),
          email: (props.email),
          noTelp: (props.noTelp),
          id: Math.random(),
        }
      ];
    });
  };


  const [doctorList, setDoctorList] = useState ([]);

  const addDoctorHandler = (props) => {
    setDoctorList((prevdoctorList)=>{
      return[
        ...prevdoctorList,{
          nama: (props.nama), 
          alamat: (props.alamat), 
          umur: (props.umur),
          email: (props.email),
          noTelp: (props.noTelp),
          jam: (props.jam),
          id: Math.random(),
        }
      ];
    });
  };

  const deleteListPasien = (id) =>{
    setPasienList(pasienList.filter((daftar)=>
    daftar.id !== id
    ))
  }


    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={user ? <Dashboard /> : <Login />}
          ></Route>
          <Route path="/Dashboard" exact element={<Dashboard />}></Route>
          <Route
            path="/NewForm"
            element={<NewForm inputs={PasienInput} title="Add New Pasien" onAddPasien={addPasienHandler} />}  ></Route>
          <Route path="/NewFormDoctor" element={<NewForm inputs={DoctorInput} title="Add New Doctor" onAddDoctor={addDoctorHandler}/> }></Route>
          <Route path="/ListDoctor" element={<ListDoctor users={doctorList}/>}></Route>
          <Route path="/ListPatient" element={<ListPatient users={pasienList} onDelete={deleteListPasien}/>}></Route>
          <Route path="/Widget" element={<Widget/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
