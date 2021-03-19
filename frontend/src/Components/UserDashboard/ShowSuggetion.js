import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Button } from "reactstrap";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA";

function ShowSuggetion() {
  const [data, setData] = useState({
    ServiceType:''
  });

  useEffect(() => {
   
     axios({
       method: "GET",
       url:
         "https://seva-backend1.herokuapp.com/user/my/suggestion/604cc1fd43e82822a85786e6",
       headers: {
         "auth-token": `${token}`,
       },
     })
       .then(function (response) {
           setData(response.data)
         console.log(response);      
       })
       .catch(function (response) {
         console.log(response);
       })
      
  }, []);


  return (
    <div>
     
        <CardContainer>
          <CardInnerContainer>
            <InfoContainer>
              <Info>
                  
              </Info>
            </InfoContainer>
          </CardInnerContainer>
        </CardContainer>
    
    </div>
  );
}

export default ShowSuggetion;



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
  color: black;
  > h4 {
    padding: 0;
  }
`;

const Action = styled.div`
  padding: 0 1rem;
  /* align-items: right; */
  > button {
    padding: 12;
  }
`;