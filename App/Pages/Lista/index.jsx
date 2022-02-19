import React from 'react';
import './style.css'
// import { Button } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { logout } from '../redux/userSlice';


export function Task() {
  // const dispatch = useDispatch()

  // const handleLogout = () => {
  //   dispatch(logout())
  // }

  return (
    <div>
      <h1 className="title">Crono List</h1>
      <form action="">
        <div>
          <label htmlFor="name">NOME COMPLETO</label>
          <input id='name' name="name" type="text" placeholder="Nome Completo" />
        </div>
        <div>
          <label htmlFor="name">Yor name</label>
          <input id='name' name="name" type="text" placeholder="Password" />
        </div>
        <div>
          <label htmlFor="name">Yor name</label>
          <input id='name' name="name" type="text" placeholder="Age" />
        </div>
      </form>
      {/* <Button onClick={handleLogout}>Logout</Button> */}
    </div>
  );
}
