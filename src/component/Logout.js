import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import classes from "../component/Logout.module.css"
import { logout, selectUser } from '../features/userSlices';


const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
  }

  return (
    <div>
        <button className={classes.button__logout} onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout