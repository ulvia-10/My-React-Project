import React, { useState } from "react";
import via from "../images/lock.jpg";
import style from "../pages/Login.module.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlices";
import { LockClockTwoTone, LockOpenOutlined } from "@mui/icons-material";

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <>
    <div className={style.context}>
      <div className={style.sidebar}>
        <img src={via} className={style.imgLogin} alt="lock"></img>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={style.content}>
          <h3 style={{marginBottom: '20px', display: 'flex', color:'#FFF'}}>LOGIN PAGE <LockOpenOutlined/></h3>
          <div className={style.formcontrol}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Username.."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          <div className={style.formcontrol}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>
          <div className={style.formcontrol}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </div>
      </form>
      </div>
    </>
  );
};

export default Login;
