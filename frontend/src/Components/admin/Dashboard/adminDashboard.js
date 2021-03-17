import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import axios from "axios";

function Dashboard(props) {
  const [user, setUser] = useState();
  const [category, setCategory] = useState();
  const [totalServices, setTotalServices] = useState();
  const [totalSuggestion, setTotalSuggestion] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/category")
      .then((response) => setCategory(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/service")
      .then((response) => setTotalServices(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <DashBoardContainer>
        <DashBoardInnerContainer>
          <CatagorySection>
            <img
              src="https://i.pinimg.com/474x/95/d1/17/95d11754e7ec8e94cbdbed88cd67668a.jpg"
              alt=""
            />
            <InfoSection>
              <p>{category.length}</p>
              <small>Total Category</small>
            </InfoSection>
          </CatagorySection>
          <SuggectionSection>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_281676.png"
              alt=""
            />
            <InfoSection>
              <p>Number</p>
              <small>Total Suggestion</small>
            </InfoSection>
          </SuggectionSection>
          <UserSection>
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png"
              alt=""
            />
            <InfoSection>
              <p>Number</p>
              <small>Total Users</small>
            </InfoSection>
          </UserSection>
          <TotalServices>
            <img
              src="https://static.thenounproject.com/png/684821-200.png"
              alt=""
            />
            <InfoSection>
              <p>{totalServices.length}</p>
              <small>Total Services</small>
            </InfoSection>
          </TotalServices>
        </DashBoardInnerContainer>
      </DashBoardContainer>
    </>
  );
}

export default Dashboard;

const DashBoardContainer = styled.div`
  border: 1px solid #ccc;
  font-family: hindLight;
`;

const DashBoardInnerContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-width: 250px;
    min-height: 150px;
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

const CatagorySection = styled.div``;
const SuggectionSection = styled.div``;
const UserSection = styled.div``;
const TotalServices = styled.div``;
const InfoSection = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  line-height: 0.5rem;

  > p {
    font-weight: 600;
  }
`;
