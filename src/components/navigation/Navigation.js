import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import logo from "./img/logo.svg";

export default function Navigation() {
  const [navigation, setNavigation] = useState("");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let windowY = window.scrollY;
      if (windowY > 85) {
        setNavigation("scrolled");
      } else {
        setNavigation("");
      }
    });
  }, []);

  const toggleNav = () => setMenu(!menu);
  
  return (
    <nav className={`${navigation} ${menu ? "open" : "close"}`}>
      <div className="contain">
        <img src={logo} alt="Selective Property Management" className="logo" />
        <button
          className={`nav-btn ${menu ? "close" : "open"}`}
          onClick={toggleNav}
        />
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/properties">Properties</Link>
          </li>
          <li className="drop-down">
            <a className="no-anim">Services</a>
            <ul>
              <li>
                <a href="/services/administration">Administration</a>
              </li>
              <li>
                <a href="/services/accounting-reporting">Accounting &amp; Reporting</a>
              </li>
              <li>
                <a href="/services/maintenance">Maintenance</a>
              </li>
              <li>
                <a href="/services/homeowners-associations">Homeowner's Associations</a>
              </li>
              <li>
                <a href="/services/condominium-management">Condominium Management</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/testimonials">Testimonials</a>
          </li>
          <li className="drop-down right">
            <a className="no-anim">Forms</a>
            <ul>
              <li>
                <a href="/forms/rules-regulations">Rules &amp; Regulations Request</a>
              </li>
              <li>
                <a href="/forms/condominium-documents">Condominum Documents Request</a>
              </li>
              <li>
                <a href="/forms/insurance-certificate">Insurance Certificate Request</a>
              </li>
              <li>
                <a href="/forms/submit-maintenance">Submit Maintenance Request</a>
              </li>
              <li>
                <a href="/forms/resale-certificate">Resale Certificate Request</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
