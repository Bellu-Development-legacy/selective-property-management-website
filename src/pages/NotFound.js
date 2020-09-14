import React, { useEffect } from "react";

import api from "../api/api";

import HeaderAlt from "../components/header/HeaderAlt";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import PageLead from "../components/page-lead/PageLead";

export default function NotFound() {
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
            heading="404"
            body="The page you're looking for could not be found."
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
