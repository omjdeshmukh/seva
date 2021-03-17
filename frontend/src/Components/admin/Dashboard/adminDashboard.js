import React from "react";
import {Form ,Button , Card} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import styled from "styled-components";
import axios from "axios";

function Dashboard(props) {


  return (
    <>

    <Container>
      <Row xs="2">
          <Col>
          <CardContainer>
         <CardInnerContainer>
           <InfoContainer>
             <img src="https://i.pinimg.com/474x/95/d1/17/95d11754e7ec8e94cbdbed88cd67668a.jpg" alt="" />
             <Info>
             <h4>
                    4
               </h4>
               <h5>Total Category</h5>
            
               
             </Info>
             <Action>
             {/* <Button color="danger" onClick={ ActionDelete }>Delete</Button> */}
             </Action>
            
           </InfoContainer>
           
         </CardInnerContainer>
       </CardContainer>

          </Col>
          <Col>
          <CardContainer>
         <CardInnerContainer>
           <InfoContainer>
           <img src="http://cdn.onlinewebfonts.com/svg/img_281676.png" alt="" />
             <Info>
                <h4>
                    5
               </h4>
               <h5>Total Suggestion</h5>
               
             </Info>
             <Action>
             {/* <Button color="danger" onClick={ ActionDelete }>Delete</Button> */}
             </Action>
           </InfoContainer>
         </CardInnerContainer>
       </CardContainer>

          </Col>
          <Col>
          <CardContainer>
         <CardInnerContainer>
         <InfoContainer>
           <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png" alt="" />
             <Info>
             <h4>
                    10 +
               </h4>
               <h5>Total User</h5>
               
             </Info>
             <Action>
             {/* <Button color="danger" onClick={ ActionDelete }>Delete</Button> */}
             </Action>
           </InfoContainer>
         </CardInnerContainer>
       </CardContainer>
          </Col>

          <Col>
          <CardContainer>
         <CardInnerContainer>
         <InfoContainer>
           <img src="https://static.thenounproject.com/png/684821-200.png" alt="" />
             <Info>
               <h4>
                    20 + 
               </h4>
               <h5>Total Service</h5>
               
             </Info>
             <Action>
             {/* <Button color="danger" onClick={ ActionDelete }>Delete</Button> */}
             </Action>
           </InfoContainer>
         </CardInnerContainer>
       </CardContainer>
          </Col>
      

      </Row>
    </Container>
       
    </>
  );
}

export default Dashboard;



const CardContainer = styled.div`
margin: 1rem 0;
padding: 2rem 0;

width: 100%;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
border-radius: 10px;

// font-family: hindLight;
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




