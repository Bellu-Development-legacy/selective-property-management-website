import React from "react";

import "./contact.scss";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contain">
        <h3>Reach out</h3>
        <div className="contact-map">
          <div className="contact-box">
            <form action="https://forms.selectivepropertymanagement.com" method="POST">
              <div className="fields">
                <input type="hidden" className="g-recaptcha-response" name="g-recaptcha-response" />
                <input type="hidden" name="action" value="validate_captcha" />
                <input type="text" name="fullName" placeholder="Full Name" />
                <input type="email" name="emailAddress" id="" placeholder="Email Address" />
                <textarea
                  name="message"
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
