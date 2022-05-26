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


  const addPasienHandler = (uName, uAge, uAlamat, uEmail, unoTelp) => {
    setPasienList((prevpasienList)=>{
      return[
        ...prevpasienList,{
          nama: uName, 
          alamat: uAlamat, 
          umur: uAge,
          email: uEmail,
          noTelp: unoTelp,
          id: Math.random().toString(),
        }
      ];
    });
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
          <Route path="/Dashboard" exact element={<Dashboard />}></Route>
          <Route
            path="/NewForm"
            element={<NewForm inputs={PasienInput} title="Add New Pasien" onAddPasien={addPasienHandler} />}  ></Route>
          <Route path="/NewFormDoctor" element={<NewForm inputs={DoctorInput} title="Add New Doctor"/>}></Route>
          <Route path="/ListDoctor" element={<ListDoctor />}></Route>
          <Route path="/ListPatient" element={<ListPatient users={pasienList}/>}></Route>
          <Route path="/Widget" element={<Widget/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
