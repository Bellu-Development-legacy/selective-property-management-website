import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/api";
import pageData from "../api/data";
import HeaderAlt from "../components/header/HeaderAlt";
import PageLead from "../components/page-lead/PageLead";
import ImageSection from "../components/image-section/ImageSection";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import LoadingImage from "../assets/images/loading.svg";

export default function Page() {
  const location = useLocation();
  const [pageContent, setPageContent] = useState(null);
  const [pageDatas, setPageDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => await getPage())();
  }, []);

  const getPage = async () => {
    const { pageOrder, pages } = pageData;

    if (pageOrder.includes(location.pathname)) {

      let pageIndex = 0;
      
      pageOrder.some((page, index) => {
        if (page === location.pathname) {
          return pageIndex = index;
        }
      });

      (async () => {
        const page = await api.pages.read({
          id: pages[pageIndex].ghostId
        });
        setPageDatas(pages[pageIndex]);
        setPageContent(page.html);
        setIsLoading(false);
      })();
    } else {
      setIsLoading(false);
    }
  }

  return (
    <>
      <HeaderAlt />
      <div className="general-content">
        {isLoading
          ? (
            <div className="contain">
              <div className="text-center">
                <img src={LoadingImage} alt="Loading" className="loading-indicator main"/>
                <h3>Loading...</h3>
              </div>
            </div>
          )
          : (
              <>
                <PageLead 
                  heading={pageDatas.title}
                  body={pageDatas.subheading}
                />
                <div className="contain" dangerouslySetInnerHTML={{ __html: pageContent }} />
              </>
            )
        }
        
      </div>
      <Contact />
      <Footer />
    </>
  );
}
