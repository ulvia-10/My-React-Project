import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import style from "../component/NewForm.module.css";
import * as AiIcons from "react-icons/ai";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";

const NewForm = (props) => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");

  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    umur: "",
    email: "",
    noTelp: "",
  });

  // React.useEffect(() => {
  //   console.log(formData);
  // }, [formData]);


  const onchange = (key) => (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [key]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (event) => {

    event.preventDefault();
    console.log(formData)
    props.onAddPasien(formData);

    navigate('/ListPatient');
  };


  return (
    <>
      <div>
        <Navbar />
        <div className={style.content}>
          <div className={style.title}>
            <h3>
              {" "}
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
                    image: <DriveFolderUploadOutlined />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  ></input>
                </div>

                {props.inputs.map((input) => (
                  <div className={style.formInput} key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      //onchange bisa pake 2 cara, yaitu dengan writing 1, atau yang 2
                      onChange={onchange(input.value)}
                      // onChange={(e) => onchange(e, input.value)}
                    ></input>
                  </div>
                ))}

                <button className={style.btndaftar} type="submit">
                  Daftar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewForm;

// List name={formData.name}
