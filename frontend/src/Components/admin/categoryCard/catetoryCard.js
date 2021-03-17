import React from "react";
// import {Form ,Button , Card} from 'react-bootstrap';
import { Button } from 'reactstrap';
import styled from "styled-components";

function CategroyCard(props) {
  const { category, icon, description } = props.category;
 // console.log(props.category);
  return (
    <>
      <CardContainer>
         <CardInnerContainer>
           <InfoContainer>
             <img src={icon} alt="" />
             <Info>
               <h4>
                 {category}
               </h4>
               <small>{category}</small>
               
             </Info>
             <Action>
             <Button color="danger">Delete</Button>
             </Action>
            
           </InfoContainer>
           
         </CardInnerContainer>
       </CardContainer>
    </>
  );
}

export default CategroyCard;

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
> h4 {
  padding: 0;
}
`;

const Action = styled.div`
padding: 0 1rem;
align: right;
> button {
  padding: 12;
}
`;




