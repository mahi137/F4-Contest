import React from "react";
import "../index.css";

//adding icons
import refresh from "../Assets/refreshs.svg";
import github from "../Assets/github.svg";
import linkedin from "../Assets/linkedin.svg";
import email from "../Assets/email.svg";
import instagram from "../Assets/instagram.svg";
import dropD from "../Assets/dropD.svg";

const Footer = () => {
  return (
    <div className="footer">
    
      <div className="buttons">
        <div className="btnGr">
          <button className="refreshBtn">
            <img src={refresh} alt="refresh" />
          </button>
        </div>

        <div className="btnGr1">
          <button>esc</button>
          <span>- reset</span>
        </div>

        <div className="btnGr2">
          <button>10</button>
          <button>50</button>
          <button>80</button>
          <button>100</button>
          <span>- no. of words</span>
        </div>
      </div>

      <div className="links">
      <div className="leftLink">
        <a href="https://github.com/Mahi135">
          <img src={github} alt="git" />
        </a>
        <a href="https://www.linkedin.com/in/mahi-15a6a4233/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="mailto:msdmahi@gmail.com">
          <img src={email} alt="email" />
        </a>
        <a href="-">
          <img src={instagram} alt="instagram" />
        </a>
      </div>

      <div className="rightDdown">
        <button>
          <p>Coloured-Green |</p>
          <img src={dropD} alt="dropD" />
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;