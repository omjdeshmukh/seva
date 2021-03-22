import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import {Button} from 'reactstrap'
import axios from 'axios'
// import { Input} from 'reactstrap'
import { Modal } from 'react-bootstrap'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import UpdateSuggestions from './UpdateSuggestions'
function SuggestionCard(props) {
  const[open , setOpen] =useState(false)
  const { servicetype, categoryName, servicedescription ,suggestionid} = props
  // console.log(ServiceType)


  

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA"
  function ActionDelete() {
    axios('http://localhost:5000/user/suggestion/' + `${suggestionid}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": `${token}`
      }
    })
      .then((data) => {
        console.log(data)
        alert("user suggestion deleted succesfully")
        refreshPage()
      })
      .catch((err) => {
        console.log(err)
        alert("someting went wrong !!!" + err.message)
      })
  }

  function refreshPage() {
    window.location.reload()
  }

  

  return (
    <>
      <CardContainer>
        <CardInnerContainer>
          <InfoContainer>
            <Info>
              <h3>{servicetype}</h3>
              {<small>{categoryName}</small>}
              <br></br>
              <small>{servicedescription}</small>
            </Info>
          </InfoContainer>
          <ButtonContainer>
            <Action>
              <Button color="danger" onClick={ActionDelete}>Delete</Button>
            </Action>
            <Action>
              <Button color="primary" onClick={() =>setOpen(true)} >Update
             </Button>
            </Action>
          </ButtonContainer>
        </CardInnerContainer>
      </CardContainer>
      <UpdateSuggestions open={open} 
                         close={setOpen}
                         id={suggestionid}/>
    </>
  )
}
export default SuggestionCard

const CardContainer = styled.div`
margin: 1rem 0;
padding: 0.5rem 0;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
border-radius: 10px;
font-family: hindLight;
display:flex;
`;
const CardInnerContainer = styled.div`
width: 95%;
margin: 0 auto;
padding: 2rem 0;
display:flex;
align-items:center;
justify-content:space-around;
`;

const InfoContainer = styled.div`
// display: flex;
flex-direction: row;
justify-content: flex-start;
// align-items: center;
align-items:left;
> img {
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 10%;
}
`;
const Info = styled.div`
padding: 0 1rem;
text-align: left;
width: 85%;
color:black;
padding-left:100px;
// display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
> h3 {
  padding: 0;
}
`;

const Action = styled.div`
padding: 0 1rem;
/* align-items: right; */
justify-content:center
> button {
  padding: 12;
}
`;
const ButtonContainer = styled.div`
display:flex;

`;