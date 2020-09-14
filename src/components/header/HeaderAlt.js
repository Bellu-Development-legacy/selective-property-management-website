import React from "react";
import Navigation from "../navigation/Navigation";

import "./header.scss";

export default function HeaderAlt({ header }) {
  return (
    <>
      <Navigation />
      <header className="alt">
        <div className="cta">
          <div className="contain text-center">
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
