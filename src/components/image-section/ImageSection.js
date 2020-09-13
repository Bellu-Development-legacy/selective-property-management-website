import React from "react";

import "./image-section.scss";

export default function ImageSection({ position, heading, text, image, className }) {
  return (
    <section className={`image-section ${position} ${className || ""}`}>
      <div className="contain">
        <div
          className="image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="vertical-centering">
          <div className="text-section">
            <h3>{heading}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
