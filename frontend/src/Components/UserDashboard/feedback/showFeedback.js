import React, { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import { getCookieData } from "../../userData";

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
    </div>
  );
}
export default ShowFeedback;
