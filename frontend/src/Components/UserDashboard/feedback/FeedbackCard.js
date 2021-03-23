import React from "react";
import axios from 'axios'
import styled from 'styled-components'
import {Button} from 'reactstrap'
import { getCookieData } from '../../userData'

const cookieData=getCookieData()
const token=cookieData.token
const _id=cookieData.userId

function FeedbackCard(props){

  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA";
  function ActionDelete(){
    axios(' http://localhost:5000/user/feedback/'+_id,{
      method:"DELETE",
      headers:{
         "content-type":"application/json",
         "auth-token":`${token}`
      }
    })
    .then((data) =>{console.log(data)
    alert("user suggestion deleted succesfully")
    refreshPage()
  })
    .catch((err) =>{console.log(err)
      alert("someting went wrong !!!"+ err.message)
      refreshPage()
    })
}

function refreshPage(){
  window.location.reload()
}
    return(
        <>
        <CardContainer>
           <CardInnerContainer>
             <InfoContainer>
               <Info>
                <small>{props.feedbackinfo}</small>
               </Info>
               <Action>
               <Button color="danger" onClick={ ActionDelete }>Delete</Button>
               </Action>
             </InfoContainer>
             
           </CardInnerContainer>
         </CardContainer>
      </>
      )
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
width: 95%;
margin: 0 auto;
padding: 2rem 0;

`;

const InfoContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
// align-items: center;
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
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
> h4 {
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
