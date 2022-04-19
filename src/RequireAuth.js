import { sendEmailVerification } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./firebase.init";
import Loading from "./Pages/Home/Login/Loading/Loading";

function RequireAuth({ children }) {
  
  const [user, loading] = useAuthState(auth);
  let location = useLocation();

  if(loading) {
    return(
      <Loading/>
    )
  }

  console.log(user?.email)
  const sendVerifactionEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      alert('Email verification sent!')
    })
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(!user.emailVerified) {
    return(
      <div className="verified_email">
        <h2 className="text-danger">
          Please Verify your email;
        </h2>
          <button onClick={sendVerifactionEmail} className="btn btn-info">Send Verification Email</button>
      </div>
    )
  }

  return children;
}

export default RequireAuth;