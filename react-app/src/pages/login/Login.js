import React, { useState } from 'react'
import './Login.scss'

import { auth} from '../../firebase'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = async (e) => {
    e.preventDefault()


    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user, 'user');
      history.push('/')
    })
    .catch(error => alert(error.message))
  }

  const handleRegister = async (e) => {
    e.preventDefault()


    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        history.push('/')
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });


}

  return (
    <div className='login'>
      {/* <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /> */}

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={handleSignin}>
          <h5>Email</h5>

          <input
          type="text"
          name=""
          id=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>

          <input
          type="text"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className='login__signButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to Amazon's clone
          Conditions of Use & Sale. Please just know this is
          for practice purpose so retarin from entering any personal
          information.
        </p>

        <button onClick={handleRegister} className='login__createButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
