import React, { useEffect } from "react";

import api from "../api/api";

import Header from "../components/header/Header";
import PageLead from "../components/page-lead/PageLead";
import ImageSection from "../components/image-section/ImageSection";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

import Prop1 from "../assets/images/property1.jpg";
import Prop2 from "../assets/images/property2.jpg";

export default function Index() {
  return (
    <>
      <Header />
      <PageLead />
      <ImageSection
        position="right"
        heading="Experience, Dedication and Personalization"
        text="With well over 30 total years of experience in property management, dedicated solely to condominiums(residential and commercial), Selective Property Management will alleviate the pressures and time-consuming tasks associated with managing your property."
        image={Prop1}
      />
      <ImageSection
        position="left"
        heading="Limitless Maintenance Capabilities"
        text="A full complement of insured landscapers, snow removal firms, and insured, trained technicians for physical plant operations (ex.: pump stations, ejector stations, sewerage, electrical, plumbing, sprinkler systems, pool, etc.) all operating as sub-contractors is available. "
        image={Prop2}
        className="bottom-spacing"
      />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
