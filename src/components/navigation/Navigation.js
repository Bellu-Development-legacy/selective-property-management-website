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
        <Link to="/"><img src={logo} alt="Selective Property Management" className="logo" /></Link>
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
                <Link to="/services/administration">Administration</Link>
              </li>
              <li>
                <Link to="/services/accounting-reporting">Accounting &amp; Reporting</Link>
              </li>
              <li>
                <Link to="/services/maintenance">Maintenance</Link>
              </li>
              <li>
                <Link to="/services/homeowners-associations">Homeowner's Associations</Link>
              </li>
              <li>
                <Link to="/services/condominium-management">Condominium Management</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className="drop-down right">
            <a className="no-anim">Forms</a>
            <ul>
              <li>
                <Link to="/forms/rules-regulations">Rules &amp; Regulations Request</Link>
              </li>
              <li>
                <Link to="/forms/condominium-documents">Condominum Documents Request</Link>
              </li>
              <li>
                <Link to="/forms/insurance-certificate">Insurance Certificate Request</Link>
              </li>
              <li>
                <Link to="/forms/submit-maintenance">Submit Maintenance Request</Link>
              </li>
              <li>
                <Link to="/forms/resale-certificate">Resale Certificate Request</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
