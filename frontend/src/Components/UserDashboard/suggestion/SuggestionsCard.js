import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import {Button} from 'reactstrap'
import axios from "axios";
// import { Input} from 'reactstrap'
import { Modal } from "react-bootstrap";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import UpdateSuggestions from "./UpdateSuggestions";
import { getCookieData } from "../../userData";

function SuggestionCard(props) {
  const [open, setOpen] = useState(false);
  const { servicetype, categoryName, servicedescription, suggestionid } = props;
  // console.log(ServiceType)

  const cookieData = getCookieData();
  const token = cookieData.token;

  function ActionDelete() {
    axios(
      "https://seva-backend1.herokuapp.com/user/suggestion/" +
        `${suggestionid}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "auth-token": `${token}`,
        },
      }
    )
      .then((data) => {
        console.log(data);
        alert("user suggestion deleted succesfully");
      })
      .catch((err) => {
        console.log(err);
        alert("someting went wrong !!!" + err.message);
      });
  }

  return (
    <>
      <ScrollContainer>
        <CardContainer>
          <CardInnerContainer>
            <Info>
              <h3>{servicetype}</h3>
              {<small>{categoryName}</small>}
              <br></br>
              <small>{servicedescription}</small>
            </Info>
            <ButtonContainer>
              <Action>
                <Button color="danger" onClick={ActionDelete}>
                  Delete
                </Button>
              </Action>
              <Action>
                <Button color="primary" onClick={() => setOpen(true)}>
                  Update
                </Button>
              </Action>
            </ButtonContainer>
          </CardInnerContainer>
        </CardContainer>
      </ScrollContainer>

      <UpdateSuggestions open={open} close={setOpen} id={suggestionid} />
    </>
  );
}
export default SuggestionCard;

const CardContainer = styled.div`
  margin: 1rem 0;
  padding: 0.5rem 0;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: hindLight;
  display: flex;
`;
const CardInnerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Info = styled.div`
  padding: 0 1rem;
  text-align: left;
  width: 60%;
  color: black;
  padding-left: 10%;
  // display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3 {
    padding: 0;
  }
`;

const Action = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
width:40%;
padding: 0 0.5%;
display:flex;
flex-direction:row;
align-items: right;
justify-content:center;

@media screen and (max-width: 650px){
     flex-direction:column;
  > div {
    @media screen and (max-width: 650px){
         margin:0.5rem 0;
  }
}
`;

const ScrollContainer = styled.div`
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: wrap;
`;
