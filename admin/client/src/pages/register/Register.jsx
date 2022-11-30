import React from 'react'
import { useState, useRef } from 'react';
import './register.scss'
import logoweb from'../../assets/images/logoweb.png'

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="login">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src= {logoweb}
              alt=""
            />
          </div>
        </div>
        <div className="container">
            <img
                  className="logo"
                  src= {logoweb}
                  alt=""
                />
          <form >
            <h1>Register</h1>
            <input 
              type="email" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="text" 
              placeholder="User" 
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
              />

            <input 
              type="text" 
              placeholder="Phone" 
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="text" 
              placeholder="City" 
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="text" 
              placeholder="Conutry" 
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className="loginButton"
              >
                Register
            </button>
            
            <span>
              New to Cinema? <b>Login now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
  )
}

export default Register