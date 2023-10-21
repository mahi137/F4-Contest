import React from "react";
import "../index.css";

//adding icons
import keyIcon from "../Assets/keyIcon.svg";
import user from "../Assets/user.svg";

const Header = () => {
  return (
    <div className="header">

      <div className="left">
        <div className="text-Logo"><h1>TypeCat</h1></div>
        
        <div className="keyIcon">
          <img src={keyIcon} alt="keyboard" />
        </div>
      </div>

      <div className="right">
        <img src={user} alt="user" />
      </div>
      
    </div>
  );
};

export default Header;
