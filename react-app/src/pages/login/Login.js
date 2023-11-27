import React, { useEffect, useState } from 'react'
import './Login.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignin = (e) => {
    e.preventDefault()
  }

  const handleRegister = (e) => {
    e.preventDefault()
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

        <button className='login__createButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
