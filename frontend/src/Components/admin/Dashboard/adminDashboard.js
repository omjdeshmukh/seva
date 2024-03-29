import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import PieChart from "../Chart/ChartPie";

function Dashboard(props) {
  const [user, setUser] = useState();
  const [category, setCategory] = useState();
  const [totalServices, setTotalServices] = useState();
  const [totalSuggestion, setTotalSuggestion] = useState();

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/admin/category")
      .then((response) => setCategory(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/service")
      .then((response) => setTotalServices(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/suggestion")
      .then((response) => setTotalSuggestion(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/admin/alluser")
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  //need to fetch more apis
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
              <p>{category && category.length}</p>
              <small>Total Category</small>
            </InfoSection>
          </CatagorySection>
          <SuggectionSection>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_281676.png"
              alt=""
            />
            <InfoSection>
              <p>{totalSuggestion && totalSuggestion.length}</p>
              <small>Total Suggestion</small>
            </InfoSection>
          </SuggectionSection>
          <UserSection>
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png"
              alt=""
            />
            <InfoSection>
              <p>{user && user.length}</p>
              <small>Total Users</small>
            </InfoSection>
          </UserSection>
          <TotalServices>
            <img
              src="https://static.thenounproject.com/png/684821-200.png"
              alt=""
            />
            <InfoSection>
              <p>{totalServices && totalServices.length}</p>
              <small>Total Services</small>
            </InfoSection>
          </TotalServices>
          {/* graph */}

          <PieChart />
        </DashBoardInnerContainer>
      </DashBoardContainer>
    </>
  );
}

export default Dashboard;

const DashBoardContainer = styled.div`
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
