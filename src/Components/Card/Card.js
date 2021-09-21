import React from "react";
import SvgCard from "../../svg/Card";
import "./Card.css";

export default function Card() {
  return (
    <div className="card-wrap">
      <div className="left-card">
        <div className="title">Cards</div>
        <SvgCard />
        <div className="progress-bar">
<progress id="file" value="32" max="100"> 32% </progress>  
<div className="payment">
    <span>Weekly payment limit</span>
    <h6>$350.60 / $4000</h6>
    </div>   
        </div>
      </div>
      <hr className="line" />
      <div className="right-card">
        <div className="numbering">
          <span>$ 2850.75</span>
          <h6>Current balance</h6>
        </div>
        <div className="numbers">
          <span>$ 1500.50</span>
          <h6>Income</h6>
        </div>
        <div className="number">
          <span>$ 350.60</span>
          <h6>Outcome</h6>
        </div>
 <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
      </div>
    </div>
  );
}
