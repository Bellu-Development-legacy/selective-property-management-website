import React from "react";

import "./page-lead.scss";

export default function PageLead({ heading, body }) {
  return (
    <section className="page-lead">
      <div className="contain">
        <h1>{ heading || "Selective Property Management"}</h1>
        <p>{body || "With a focus on providing great personalized services to our managed condominiums, we work to ensure our goals are in line with our client's goals When choosing SPM, you invest in us, so we invest in you. We work hard to build trusting relationships and stive to maintain the respect of everyone we deal with. We maintain a strong code of ethics. We also stress being responsive as well as being reliable in your time of need. Our 24-hour emergency service enables us torespond to your needs in a very expedient manner."}</p>
      </div>
    </section>
  );
}
