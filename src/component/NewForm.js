import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import style from "../component/NewForm.module.css";
import * as AiIcons from "react-icons/ai";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";

const NewForm = (props) => {

  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [isPending, setPending] = useState('false');
  const history = createBrowserHistory()

  const [formData, setFormData] = useState({
    nama:"",
    alamat:"",
    umur:"",
    email:"",
    noTelp:"",
  });


  const [formDataDoctor, setFormDataDoctor] = useState({
    nama:"",
    alamat:"",
    umur:"",
    email:"",
    noTelp:"",
    jam:""
  });

  React.useEffect(() => {
    console.log(formData);
  }, [formData]);

  console.log(props.title)

  const onchange = (key) => (e) => {
    if(props.title === 'Add New Pasien'){
    setFormData((prevState) => {
      return {
        ...prevState,
        [key]: e.target.value,
      };
    });
  return;
};

setFormDataDoctor((prevState)=>{
  return{
    ...prevState,
    [key]: e.target.value,
  };
})
  } 


  const onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(formData);
    setPending(true)

    if (props.title === "Add New Pasien") {
      fetch(' http://localhost:8000/PasienList', {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      }). then(()=> {
        console.log('New Pasien Added')
      })
      // history.go(-1)
      history.push('/ListPatient')
      navigate("/ListPatient");
      return;
    } 

    fetch(' http://localhost:8001/doctorList', {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formDataDoctor)
      }). then(()=> {
        console.log('New Doctor Added')
      })
      props.onAddDoctor(formDataDoctor);
      navigate("/ListDoctor");
  

         // props.onAddPasien(formData);
    // pasti object {}
    // props.onAddPasien ({
    //   nama: formData.nama,
    //   etc
    // });
  };

  return (
    <>
      <div>
        <Navbar />
        <div className={style.content}>
          <div className={style.title}>
            <h3>
              <AiIcons.AiOutlinePlusSquare /> {props.title}
            </h3>
          </div>
        </div>
        <div className={style.newContainer}>
          <div className={style.bottom}>
            <div className={style.left}>
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
              ></img>
            </div>

            <div className={style.right}>
              <form onSubmit={onSubmitHandler}>
                <div className={style.formInput}>
                  <label htmlFor="file" className={style.icon}>
                    image: <DriveFolderUploadOutlined/>
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display:"none"}}
                  ></input>
                </div>
                {/* object itu harus sesuai ya!! */}
                {props.inputs.map((input) => (
                  <div className={style.formInput} key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      //onchange bisa pake 2 cara, yaitu dengan writing 1, atau yang 2
                      onChange={onchange(input.value)}
                      // onChange={(e) => onchange(e, input.value)} kalau tidak ada param (e)
                    ></input>
                  </div>
                ))}

                {!isPending &&<button className={style.btndaftar} type="submit">Daftar</button>}
                {isPending && <button className={style.btndaftar} type="submit">Adding User...</button>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewForm;

// List name={formData.name
