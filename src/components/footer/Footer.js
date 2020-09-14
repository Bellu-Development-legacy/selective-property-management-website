import React from "react";

import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="contain">
        <p className="copyright">
          Copyright © 2020 Selective Property Management
        </p>
        <ul className="navigation">
          <li>
            <a href="https://bellucci.dev" target="_blank" rel="noreferrer noopener">Designed and Developed with &#9829; by Andrew</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
