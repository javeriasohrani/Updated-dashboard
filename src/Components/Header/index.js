import React from "react";
import SvgLogo from "../../svg/Logo";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <div className="header-wrap">
        <ul>
          <li><SvgLogo/></li>
          </ul>
          <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li><button className="btn">Log In</button></li>
          <li><button className="btns">Buy Now – 24$</button></li>
        </ul>
       
        
      </div>
    </div>
  );
}
