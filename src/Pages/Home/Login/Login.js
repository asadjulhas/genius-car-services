import React, { useRef, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import GoogleLogin from './GoogleLogin';

const Login = () => {

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [userr] = useAuthState(auth);
  if(userr) {
    navigate(from, { replace: true });
  }
 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signError, setError] = useState('') 
  const emailRef = useRef('')
  const passwordRef = useRef('')  

  const loginForm = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    signInWithEmailAndPassword(email, password);
  }
 
  return (
    <div className='login_page pt-1'>

      <div className="login_form">
        <h3>Login</h3>
        <form onSubmit={loginForm}>
          <label>Email</label><br />
          <input ref={emailRef} required type="email" /><br />
          <label>Password</label><br />
          <input ref={passwordRef} required type="password" /><br />
          <span className='text-danger'>{error?.message}</span>
          <button className='login_btn'>
          {loading ? 'Loading...' : 'Login'}
            </button><br />
          <span>New to genius-car-services? <Link to='/register'>Create New Account</Link></span>
          <p>or</p>
        </form>
        <GoogleLogin/>
      </div>
      
    </div>
  );
};


export default Login;