import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ProviderSvg from "./Provider";

function Dashboard({ token, userId }) {
  const [totalServices, setTotalServices] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://seva-backend1.herokuapp.com/provider/my/service/${userId}`,
      headers: {
        "auth-token": `${token}`,
      },
    })
      .then((response) => setTotalServices(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  //need to fetch more apis
  return (
    <>
      <DashBoardContainer>
        <DashBoardInnerContainer>
          <TotalServices>
            <img
              src="https://static.thenounproject.com/png/684821-200.png"
              alt=""
            />
            <InfoSection>
              <p>{totalServices && totalServices.length}</p>
              <hr />
              <small>Total Services</small>
            </InfoSection>
          </TotalServices>

          <SvgSection>
            <ProviderSvg />
          </SvgSection>
        </DashBoardInnerContainer>
      </DashBoardContainer>
    </>
  );
}

export default Dashboard;

const DashBoardContainer = styled.div`
  /* display:flex; */
  font-family: hindLight;
`;

const DashBoardInnerContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  /* display: flex; */
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    min-width: 45%;
    min-height: 100px;
    border-radius: 10px;
    padding: 1rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    > img {
      width: 60px;
      height: 60px;
    }
  }
`;

const TotalServices = styled.div``;
const InfoSection = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  line-height: 0.5rem;
  font-size: 2rem;
  height: 200px;
  > p {
    font-weight: 600;
  }
`;

const SvgSection = styled.div`
  > svg {
    width: 15rem;
    height: 15rem;
    margin: 0 auto;
  }
`;
