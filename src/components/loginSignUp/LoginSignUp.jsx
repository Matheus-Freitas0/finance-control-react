import email_icon from "../Assets/email.png";
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import React, { useState } from "react";
import "./LoginSignUp.css";

function LoginSignUp() {

  const [action, setAction] = useState('Sign Up')

  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user" />
          <input type="text" placeholder="User" required/>
        </div>

        <div className="input">
          <img src={email_icon} alt="email" />
          <input type="email" placeholder="Email" required/>
        </div>

        <div className="input">
          <img src={password_icon} alt="password" />
          <input type="password" placeholder="Password" required/>
        </div>
      </div>

      <div className="forgot-password">
        <p>
          Lost password? <span>Click here</span>
        </p>
      </div>

      <div className="submit-container">
        <div className={action ==='Login'?'submit gray':'submit'}> Sign Up</div>
        <div className={action === "Sign Up"? "submit gray": 'submit'}> Login</div>
      </div>
    </div>
  );
}
export default LoginSignUp;
