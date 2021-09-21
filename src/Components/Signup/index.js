import React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <form className="form">
      <div className="para">
        <h2>Create Account</h2>
        <p>
          To begin this journey, tell us what type of <br/>account you’d be opening.
        </p>
      </div>
      <div className="form-1">
        <label className="label">
          Your Email Adress*
          <input type="text" className="input" />
        </label>
      </div>
      <div className="form-1">
        <label className="label">
          Your Email Adress*
          <input type="text" className="input" />
        </label>
      </div>
      <div className="form-1">
        <label className="label">
          Your Passward*
          <input type="text" className="input" />
        </label>
      </div>

      <div className="checkbox">
        <input type="checkbox" name="" id="" />
        <p>I agree to terms & conditions</p>
      </div>
      <div className="btn">
        <button className="btn-1">Register with Account</button>
        <button className="btn-2">Register with Google</button>
      </div>
    </form>
  );
}
