import React from "react";
import Main from "./Tagline/Main";
import MostVisitedServices from "./MostVisitedServices/MostVisitedServices";
import Feedback from "./Testimonial/Feedback";

function Homepage() {
  return (
    <>
      <Main />
      <MostVisitedServices />
      <Feedback />
    </>
  );
}

export default Homepage;
