import React from 'react'
import {auth,provider} from './firebase-config'
import {signInWithPopup} from "firebase/auth"
function Login() {

  const signin = () => {
        signInWithPopup(auth,provider);
  }
  return (
    <div>
      <button className="mb-100" onClick={signin}>Sign In</button>
      
    </div>
  )
}

export default Login;
