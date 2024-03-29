import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "reactstrap";
import { getCookieData } from "../../userData";
import wrap from 'word-wrap'

function FeedbackCard(props) {
  const cookieData = getCookieData();
  const token = cookieData.token;

  function ActionDelete() {
    axios("https://seva-backend1.herokuapp.com/user/feedback/" + `${props.feedbackid}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then((data) => {
        alert("user suggestion deleted succesfully");
      })
      .catch((err) => {
        alert("someting went wrong !!!" + err.message);
      });
  }

  return (
    <>
      <CardContainer>
        <CardInnerContainer>
            <Info>
              <p>{props.feedbackinfo} </p>
            </Info>
            <Action>
              <Button color="danger" onClick={ActionDelete}>
                Delete
              </Button>
            </Action>
        </CardInnerContainer>
      </CardContainer>
    </>
  );
}
export default FeedbackCard;

const CardContainer = styled.div`
  margin: 1rem 0;
  padding: 0.5rem 0;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: hindLight;
`;
const CardInnerContainer = styled.div`
  width: 100%;
  //margin: 0 auto;
  padding: 2rem 0;
  display:flex;
  justify-content:space-around;
`;

const Info = styled.div`
  width: 70%;
  padding-left:5%;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  }
`;

const Action = styled.div`
  padding: 0 1rem;
  width:30%;
   display:flex;
   flex-direction:flex-end;
  justify-content:center 
`;

