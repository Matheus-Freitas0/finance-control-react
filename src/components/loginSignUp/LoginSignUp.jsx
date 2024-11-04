import email_icon from "../Assets/email.png";
import user_icon from "../Assets/person.png";
import password from "../Assets/password.png";
import React from "react";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="cointainer">
      
      <div className="header">
        <div className="text"> Sign up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user" />
          <input type="text" />
        </div>

        <div className="input">
          <img src={email_icon} alt="email" />
          <input type="email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="password" />
          <input type="password" />
        </div>
      </div>

      <div className="forgot-password">
        lost password? <span>Click here</span>
      </div>

      <div className="submit-container">
        <div className="submit"> Sign Up</div>
        <div className="submit"> login</div>
      </div>

    </div>
  );
};
export default LoginSignUp;
