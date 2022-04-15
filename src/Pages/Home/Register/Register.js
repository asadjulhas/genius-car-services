import React, { useRef, useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleLogin from '../Login/GoogleLogin';

const Register = () => {
  const loginSuccesss = useNavigate()
  const [userr] = useAuthState(auth);
  if(userr) {
    loginSuccesss('/')
  }
 
 const [signError, setError] = useState('') 
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  //Email Verifaction
  const [sendEmailVerification, sending, errorr] = useSendEmailVerification(auth);


const loginSuccess = useNavigate()
  const signUpForm = (e) => {
    e.preventDefault();
    setError(error?.message);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    if(!email) {
      setError('Please provide a email');
      return;
    }

    if(!password) {
      setError('Please provide a password');
      return;
    }

    const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!validateEmail.test(email)) {
      setError('Please provide a valid email');
      return;
    }

    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(!validatePassword.test(password)) {
      setError('Password contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number:');
      return;
    }

    if(password !== passwordConfirm) {
      setError('Password not match')
      return;
    }
    createUserWithEmailAndPassword(email, password);
    sendEmailVerification(email)
    if(user) {
      setError('Register Successfully, Login now.');
    } else (
      setError(error?.message)
    )
    
  }

  if(user) {
    loginSuccess('/login')
  }
  return (
    <div className='pt-1'>
       <div className="login_form signup">
        <h3>Sign Up</h3>
        <form onSubmit={signUpForm}>
          <label>Email</label><br />
          <input name='email' required type="email" /><br />
          <label>Password</label><br />
          <input name='password' required type="password" /><br />
          <label>Confirm Password</label><br />
          <input name='passwordConfirm' required  type="password" /><br />
          <span className='text-danger'>{signError}</span>
          <button className='login_btn'>
            {loading ? 'Loading...' : 'Sign Up'}
            </button><br />
          <span>Already have an account? <Link to='/login'>Login</Link></span>
          <p>or</p>
        </form>
         <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Register;