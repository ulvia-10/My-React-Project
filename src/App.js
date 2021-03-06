import Login from "../src/pages/Login";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/userSlices";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ListDoctor from "./pages/ListDoctor";
import Dashboard from "./pages/Dashboard";
import NewForm from "./component/NewForm";
import { PasienInput } from "./component/FormSource";
import ListPatient from "../src/pages/ListPatient";
import { DoctorInput } from "./component/DoctorSource";
import Widget from "./component/Widget";
import {  useState } from "react";
import Detail from "./component/Detail";
import useFetch from "./component/useFetch";

function App() {
  const user = useSelector(selectUser);

  // const [pasienList, setPasienList] = useState ([]);
 
  const [pasienList, setPasienList] = useState(null);
  const[doctorlist, setDoctorList] = useState(null)
  const {data: PasienList, isPending, Error} = useFetch(' http://localhost:8000/PasienList');
  const {data: doctorList, isPendingDokter, ErrorDokter} = useFetch('http://localhost:8001/doctorList ')
  // const {data: pasienList, isPending, Error} = useFetch('')
  let id = 0;
  
  const addPasienHandler = (props) => {
    setPasienList((prevpasienList) => {
      return [
        ...prevpasienList,
        {
          nama: props.nama,
          alamat: props.alamat,
          umur: props.umur,
          email: props.email,
          noTelp: props.noTelp,
          id: id+1,
        },
      ];
    });
  };

  // const [doctorList, setDoctorList] = useState(null);

  const addDoctorHandler = (props) => {
    setDoctorList((prevdoctorList) => {
      return [
        ...prevdoctorList,
        {
          nama: props.nama,
          alamat: props.alamat,
          umur: props.umur,
          email: props.email,
          noTelp: props.noTelp,
          jam: props.jam,
          id: id+1,
        },
      ];
    });
  };



  const deleteListPasien = (id) => {
    setPasienList(pasienList.filter((daftar) => daftar.id !== id));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={user ? <Dashboard /> : <Login />}
          ></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route
            path="/NewForm"
            element={
              <NewForm
                inputs={PasienInput}
                title="Add New Pasien"
                onAddPasien={addPasienHandler}
              />
            }
          ></Route>
          <Route
            path="/NewFormDoctor"
            element={
              <NewForm
                inputs={DoctorInput}
                title="Add New Doctor"
                onAddDoctor={addDoctorHandler}
              />
            }
          ></Route>
          <Route
            path="/ListDoctor"
            element={doctorList && (<ListDoctor users={doctorList} loading={isPending}/>)}
          ></Route>
          <Route
            path="/ListPatient"
            element={
              PasienList && (
                <ListPatient
                  users={PasienList}
                  onDelete={deleteListPasien}
                  loading={isPending}
                />
              )
            }
          ></Route>
          <Route path="/Widget" element={<Widget />}></Route>
          <Route
            path="/ListPatient/:id"
            element={<Detail PasienList={PasienList} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
