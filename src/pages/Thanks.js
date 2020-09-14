import React, { useEffect } from "react";

import api from "../api/api";

import HeaderAlt from "../components/header/HeaderAlt";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import PageLead from "../components/page-lead/PageLead";

export default function Failure() {
  useEffect(() => {
    (async () => {
      const pages = await api.pages.browse();;
      console.log(pages);
    })();
  }, []);
  return (
    <>
      <HeaderAlt />
      <div className="general-content">
        <div className="contain">
          <PageLead 
            heading="Thank you."
            body="The form was submitted and is on it's way to our inbox. We'll get back to you as soon as possible."
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
