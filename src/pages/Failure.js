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
            heading="Form Error"
            body="Unfortunately there was an issue submitting the form at this time. Please try again later or email us at seprma@verizon.net."
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
