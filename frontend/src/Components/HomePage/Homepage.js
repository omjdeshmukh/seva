import React, { useState, useEffect } from "react";
import Main from "./Tagline/Main";
import MostVisitedServices from "./MostVisitedServices/MostVisitedServices";
import Feedback from "./Testimonial/Feedback";
import Prompt from "./Prompt/Prompt";

function Homepage() {
  const [checkPincode, setCheckPincode] = useState();
  const [pincodeExist, setPincodeExist] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("pincode")) {
      setPincodeExist(true);
    }
    if (pincodeExist) {
      console.log(`inside if statement`);
      setCheckPincode(sessionStorage.getItem("pincode"));
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
