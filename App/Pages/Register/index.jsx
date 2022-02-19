import React from 'react';
import './style.css'
// import { Button } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { logout } from '../redux/userSlice';

export function Register() {
  
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [telephone, setTelephone] = useState('');
  // const [password, setPassword] = useState('');
  // const [confPassword, setConfPassword] = useState('');

  function onChange() {
    console.log("test ---- " + firstName + lastName + email + telephone + password + confPassword);
    console.log("test22 ----- " + setFirstName + setLastName + setEmail + setTelephone + setPassword + setConfPassword);  
  }


  return (
    <div>
      <h1 className="title">Welcome, register</h1>
      <form>
        <div className="input-form-group">
          <label htmlFor="firstName">Yor name</label>
          <input id='firstName' name="firstName" type="text" placeholder="First name" />
          <input id='lastName' name="lastName" type="text" placeholder="last Name" />
        </div>
        <div className="input-form-group">
          <label htmlFor="email">E-mail</label>
          <input id='email' name="email" type="text" placeholder="E-mail" />
        </div>
        <div className="input-form-group">
          <label htmlFor="telephone">Telephone</label>
          <input id='telephone' name="telephone" type="number" placeholder="Telephone" />
        </div>
        <div className="input-form-group">
          <label htmlFor="Password">Password</label>
          <input id='Password' name="Password" type="password" placeholder="Password" />
        </div>
        <input className="btn-primary" type="submit" value="Send Register"/>
      </form>
      {/* <button className="btn-primary" onClick={()=>{onChange}}>Cadastrar</button> */}
    </div>
  );
}