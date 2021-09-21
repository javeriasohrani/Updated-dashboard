import React, { useState } from "react";
import "./LoginSignup.css";

import SvgCircle from "../../svg/Circle";
import SvgComas from "../../svg/Comas";
import Signup from "../../Components/Signup";
import Login from "../../Components/Login";

export default function LoginSignUp() {
  const [view, setView] = useState(true);

  return (
    <div className="signup-page">
      <div className="left-side">
        <div className="paragraph">
          <div>
            <SvgComas />
            <p>
              The passage experienced a surge in popularity
              <br /> during the 1960s when Letraset used it on their
              <br /> dry-transfer sheets, and again during the 90s as <br />
              desktop publishers bundled the text with their
              <br /> software.
            </p>
            <div className="head">
              <h6>Vincent Obi</h6>
              <SvgCircle />
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        {view ? (
          <>
            <span onClick={() => setView(!view)}>
              {" "}
              Already have an account? Login{" "}
            </span>
            <Signup />
          </>
        ) : (
          <> 
            <span onClick={() => setView(!view)}>
              {" "}
              Do not have an account? Signup{" "}
            </span>
            <Login />
          </>
        )}
      </div>
    </div>
  );
}
