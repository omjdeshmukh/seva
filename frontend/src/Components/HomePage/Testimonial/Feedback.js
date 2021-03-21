import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Responsive from "./TestimonialCards/CarouselFeedback";
import axios from "axios";

function Feedback() {
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/feedback")
      .then((response) => setFeedback(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <FeedbackContainer>
        <FeedbackInnerContainer>
          <Responsive feedback={feedback} />
        </FeedbackInnerContainer>
      </FeedbackContainer>
    </>
  );
}

export default Feedback;

const FeedbackContainer = styled.div``;
const FeedbackInnerContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;

  @media screen and (max-width: 414px) {
    margin: 0 auto;
    width: 100%;
  }
`;
