import React from "react";
import Slider from "react-slick";

import "./testimonials.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  "SPM has been our property manager for the past 6 years and we have been very satisfied with their services. Karen Bellucci is a very experienced, skilled property manager and her staff has a great depth of knowledge of the issues and solutions facing condominium boards in today’s fast changing environment. I definitely recommend SPM to any organization looking for high quality property management services.",
  "I am a past President and have been a board member for the past six years for a condominium complex containing 165 units. During this time I have interfaced with Selective Property Management (SPM) many times concerning the management of our complex and have always found them to be very professional and efficient. Karen has a wealth of knowledge concerning the history of repairs to our complex as SPM has been managing our complex for over 19 years, including fee collection, recommending contractors, payments to contractors, focal point with our insurance company, newsletter distribution, etc. Karen has put in many hours and has done an outstanding job concerning the management of our Association including the major ice damming repairs for the winter of 2015. SPM and their staff have always been responsive to our community needs and I am very comfortable recommending them.",
  "My many years with SPM have been nothing but exceptional. Whenever you call, (especially when you are on the run) I get the prompt answers that I need. The writing of letters to owners if needed is done very professionally and to the point. I also am very pleased of the courtesy extended by the staff, always. If you are dealing with another management company and not satisfied, give SPM a chance, you will not be disappointed."
]

export default function Testimonials() {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };
  return (
    <section className="testimonials">
      <div className="contain">
        <h3>Testimonials</h3>
        <div className="reviews">
          <Slider {...settings}>
            {reviews.map(review => (
              <div className="review">
                <p>{review}</p>
              </div>
            ))}            
          </Slider>
        </div>
      </div>
    </section>
  );
}
