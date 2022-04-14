import React, { useRef } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import googleIcon from '../../../images/google.svg'

const Register = () => {

  const signUpForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;
    console.log(email, password, passwordConfirm)
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
          <button className='login_btn'>Sign Up</button><br />
          <span>Already have an account? <Link to='/login'>Login</Link></span>
          <p>or</p>
          <button className='google_signin'><img width={20} src={googleIcon} alt="" /> &nbsp; Continue with Google</button>
        </form>
      </div>
    </div>
  );
};

export default Register;