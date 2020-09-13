import React from "react";

import "./contact.scss";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contain">
        <h3>Reach out</h3>
        <div className="contact-map">
          <div className="contact-box">
            <form action="">
              <div className="fields">
                <input type="text" placeholder="Full Name" />
                <input type="email" name="" id="" placeholder="Email Address" />
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
          <div className="map"></div>
        </div>
      </div>
    </section>
  );
}
