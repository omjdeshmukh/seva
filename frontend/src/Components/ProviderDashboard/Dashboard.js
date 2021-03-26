import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import { Row, ListGroup, Tab } from "react-bootstrap";
import AddService from "./service/AddService";
import ServiceCards from "./service/ServiceCard";
import Profile from "./profile/Profile";
import Dashboard from "./Dashboard/Dashboard";
import styled from "styled-components";
import { getCookieData } from "../userData";
import axios from "axios";
import Vector from "./vector";
import { Link } from "react-router-dom";
const cookieData = getCookieData();
const token = cookieData.token;
const _id = cookieData.userId;

// console.log(_id);

function ProviderDashboard() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://seva-backend1.herokuapp.com/provider/profile/${_id}`,
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        setProfile(response.data);
        // console.log(response.data.fullName);
      })
      .catch(function (response) {
        console.log(response);
      });
  }, []);

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#dashboard">
      {/* <h1>Admin dashboard</h1> */}
      <br></br>
      <Row>
        <Col sm={3} style={{ marginBottom: "20px" }}>
          <ListGroup>
            <ListGroup.Item>
              <img
                src="https://res.cloudinary.com/drampnn2w/image/upload/v1615827809/Face-Profile-User-Man-Boy-Person-Avatar-512_ervo1s.png"
                width="60%"
                height="60%"
              />
              <h5>{profile && profile.fullName}</h5>
              <p>{profile && profile.role}</p>
            </ListGroup.Item>
            <ListGroup.Item action href="#dashboard">
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Profile
            </ListGroup.Item>
            <ListGroup.Item action href="#addService">
              Add Service
            </ListGroup.Item>
            <ListGroup.Item action href="#showMyService">
              Show My Service
            </ListGroup.Item>
            <Link to="/">
              <ListGroup.Item action>Home</ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="#dashboard">
              <Dashboard {...cookieData} />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <Profile {...cookieData} />
            </Tab.Pane>
            <Tab.Pane eventKey="#addService">
              <AddService />
            </Tab.Pane>
            <Tab.Pane eventKey="#showMyService">
              <ServiceCardContainer>
                <ServiceCards {...cookieData} />
              </ServiceCardContainer>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ProviderDashboard;

const ServiceCardContainer = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
`;

const NoServiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h6 > a {
    font-family: hindMedium;
    text-decoration: none;
    color: #393232;
    font-weight: 300;
  }

  h6 > span {
    font-family: hindMedium;
    text-decoration: none;
    color: #5ab9ea;
    font-weight: 300;
  }
`;

const VectorContainer = styled.div`
  width: 150px;
  height: 150px;

  > svg {
    width: 100%;
    height: 15rem;
  }
`;
