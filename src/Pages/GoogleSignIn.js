import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './Firebase/firebase.init';


const auth = getAuth(app);

const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider()
    const handleGoogleSignIn =()=>{
        signInWithPopup (auth , provider)
          .then((result) => {
            const user = result.user()
            console.log(user)
          })
          .catch((error) => {
            console.log('error', error)
          })
    }

// ;

    return (
        <div>
<button onClick={handleGoogleSignIn} className="btn btn-outline btn-success my-3 py-3"  > Sign in with your google account</button>


            
        </div>
    );
};

export default GoogleSignIn;