import React, { useRef, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import GoogleLogin from './GoogleLogin';

const Login = () => {
  let errorElement;
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
 
  // Forget Password
    const email = emailRef.current.value;
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const SendPasswordReset =async () => {
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
          alert('Sent email');
    }
   
    if(error || error2) {
      errorElement = 'a';
       errorElement = <span className='text-danger'>{error?.message} {error2?.message}</span>
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
          {errorElement}
          <button className='login_btn'>
          {loading ? 'Loading...' : 'Login'}
            </button><br />
          <span>New to genius-car-services? <Link to='/register'>Create New Account</Link></span>
          <p className='m-0'>or</p>
        </form>
        
        <button className='btn-warning btn-sm mb-2' onClick={SendPasswordReset}>Reset password</button><br />
        <GoogleLogin/>
      </div>
      
    </div>
  );
};


export default Login;