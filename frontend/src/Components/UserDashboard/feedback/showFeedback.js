import React, { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import { getCookieData } from "../../userData";
import Vector from "./vector";
import styled from "styled-components";

function ShowFeedback({ token, userId, pincode, role }) {
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    fetch(`https://seva-backend1.herokuapp.com/user/my/feedback/${userId}`, {
      method: "get",
      feedback: feedback,
      headers: {
        "content-type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setFeedback(data))
      .catch((err) => console.log(err));
  });

  //console.log(feedback)
  return (
    <div>
      {feedback && feedback.length != 0 ? (
        <>
          {feedback &&
            feedback.map((item, i) => {
              return (
                <FeedbackCard
                  key={item._id}
                  feedbackid={item._id}
                  feedbackinfo={feedback[i].feedback}
                />
              );
            })}
        </>
      ) : (
        <>
          <NoServiceDiv>
            <h6>Sorry! No feedback available yet.</h6>
            <VectorContainer>
              <Vector />
            </VectorContainer>
          </NoServiceDiv>
        </>
      )}
    </div>
  );
}
export default ShowFeedback;

const NoServiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h6 > a {
    font-family: hindMedium;
    text-decoration: none;
    color: #393232;
    font-weight: 300;
  }

  h6 > span {
    font-family: hindMedium;
    text-decoration: none;
    color: #5ab9ea;
    font-weight: 300;
  }
`;

const VectorContainer = styled.div`
  width: 150px;
  height: 150px;

  > svg {
    width: 100%;
    height: 15rem;
  }
`;
