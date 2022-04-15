import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const GoogleLogin = () => {
    // Sign in with Google
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const signInWithGooglePage = () => {
      signInWithGoogle();
    }
    return signInWithGooglePage;
};

export default GoogleLogin;