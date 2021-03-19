import React, { useState, useEffect } from "react";
import Main from "./Tagline/Main";
import MostVisitedServices from "./MostVisitedServices/MostVisitedServices";
import Feedback from "./Testimonial/Feedback";
import Prompt from "./Prompt/Prompt";
import userData, { getCookieData } from "../userData";

function Homepage() {
  const [checkPincode, setCheckPincode] = useState();
  const [pincodeExist, setPincodeExist] = useState(false);

  useEffect(() => {
    if (!document.cookie) {
      const cookieData = JSON.stringify(userData);
      document.cookie = cookieData;
    }

    let cookieData = getCookieData();

    if (pincodeExist) {
      setCheckPincode(cookieData.pincode);
    }

    if (cookieData.pincode) {
      setCheckPincode(cookieData.pincode);
    }
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
