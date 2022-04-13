import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import googleIcon from '../../../images/google.svg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmail = event => {
    setEmail(event.target.value);
  }
  const handlePassword = event => {
    setPassword(event.target.value);
  } 

  const loginForm = event => {
    event.preventDefault();
  }

  return (
    <div className='login_page pt-1'>

      <div className="login_form">
        <h3>Login</h3>
        <form onSubmit={loginForm}>
          <label>Email</label><br />
          <input onChange={handleEmail} required type="email" /><br />
          <label>Password</label><br />
          <input onChange={handlePassword} required type="password" /><br />
          <button className='login_btn'>Login</button><br />
          <span>New to Ema-john? <Link to='/register'>Create New Account</Link></span>
          <p>or</p>
          <button className='google_signin'><img width={20} src={googleIcon} alt="" /> &nbsp; Continue with Google</button>
        </form>
      </div>
      
    </div>
  );
};


export default Login;