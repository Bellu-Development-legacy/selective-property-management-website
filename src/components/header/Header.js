import React from "react";
import Navigation from "../navigation/Navigation";

import "./header.scss";

export default function Header() {
  return (
    <>
      <Navigation />
      <header>
        <div className="cta">
          <div className="contain">
            <h2>Be selective in your management.</h2>
            <p>An established property management service built to serve property owners and directors seeking a blend of professionalism, experience, and common sense when it comes to managing their property investments.</p>
            <a href="" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="phone-cta">
          <div className="contain">
            <a className="btn phone-call" href="tel:4012318588">Give us a ring!</a>
          </div>
        </div>
      </header>
    </>
  );
}
