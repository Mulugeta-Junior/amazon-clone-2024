import React, { useState } from "react"
import { Link } from "react-router-dom";
import classes from './signup.module.css'
import {auth} from '../../Utility/fireBase'


function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(email, password)

  return (
    <section className={classes.login}>
      {/* {Logo} */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      {/* {form} */}

      <div className={classes.login_container}>
        <h1>sign in</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            {/* controlled input */}
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />
          </div>
          <button className={classes.login_signInButton}>sign in</button>
        </form>
        <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.</p>

          {/* {signup} */}
          <button className="classes.login_registerButton">Create your Amazon Account</button>
      </div>
    </section>
  );
} 

export default Auth;
