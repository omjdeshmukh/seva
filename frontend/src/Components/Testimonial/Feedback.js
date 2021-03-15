import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedbackCard from "./TestimonialCards/FeedbackCards";
import axios from "axios";

function Feedback() {
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/feedback")
      .then((response) => setFeedback(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <FeedbackContainer>
        <FeedbackInnerContainer>
          {feedback &&
            feedback.map((item, index) => {
              return (
                <>
                  <FeedbackCard feedback={item} />
                </>
              );
            })}
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
`;
