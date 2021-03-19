import React, { useState, useEffect } from "react";
import Main from "./Tagline/Main";
import MostVisitedServices from "./MostVisitedServices/MostVisitedServices";
import Feedback from "./Testimonial/Feedback";
import Prompt from "./Prompt/Prompt";

function Homepage() {
  const [checkPincode, setCheckPincode] = useState();
  const [pincodeExist, setPincodeExist] = useState(false);

  useEffect(() => {
    let userData = document.cookie;
    console.log(userData);
    // userData = JSON.parse(userData);
    // if (userData) {
    //   setPincodeExist(true);
    // }
    // if (pincodeExist) {
    //   setCheckPincode(userData.pincode);
    // }
  });

  return (
    <>
      <Main />
      <MostVisitedServices />
      <Feedback />
      {checkPincode != null ? "" : <Prompt setPincodeExist={setPincodeExist} />}
    </>
  );
}

export default Homepage;
