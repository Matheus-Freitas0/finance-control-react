import email_icon from "../Assets/email.png";
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import React from "react";
import "./LoginSignUp.css";

function LoginSignUp() {
  return (
    <div className="container">
      <div className="header">
        <div className="text"> Sign up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user" />
          <input type="text" placeholder="User" />
        </div>

        <div className="input">
          <img src={email_icon} alt="email" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="forgot-password">
        <p>
          'Lost password? <span>Click here</span>'
        </p>
      </div>

      <div className="submit-container">
        <div className="submit"> Sign Up</div>
        <div className="submit"> Login</div>
      </div>
    </div>
  );
}
export default LoginSignUp;
