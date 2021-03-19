import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import { Form, Row, ListGroup, Tab } from "react-bootstrap";
import axios from "axios";
import { Button } from "reactstrap";
import AddService from "./service/AddService";
import ServiceCard from "./ServiceCards/ServiceCard";
import Profile from "./profile/Profile";
import Dashboard from "./Dashboard/Dashboard";
import styled from "styled-components";

const api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGQ4Njk1NzExY2EzMDViNDk0MTEwMiIsImlhdCI6MTYxNTk5NzM1OH0.B0GgYG3lphhYaqm3nSWuecxMoU2DV4M_EDywDGybVNo";

function ProviderDashboard() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://seva-backend1.herokuapp.com/provider/my/service/60524ad1d4043f0022c86384",
      {
        method: "GET",
        headers: {
          "auth-token": `${api}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => setData([...response]))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#dashboard">
      {/* <h1>Admin dashboard</h1> */}
      <br></br>
      <Row>
        <Col sm={3}>
          <ListGroup>
            <ListGroup.Item>
              <img
                src="https://res.cloudinary.com/drampnn2w/image/upload/v1615827809/Face-Profile-User-Man-Boy-Person-Avatar-512_ervo1s.png"
                width="60%"
                height="60%"
              />
              <h5>OM</h5>
              <p>Provider</p>
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
            <ListGroup.Item action href="/">
              log out
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="#dashboard">
              <Dashboard />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <Profile />
            </Tab.Pane>
            <Tab.Pane eventKey="#addService">
              <AddService />
            </Tab.Pane>
            <Tab.Pane eventKey="#showMyService">
              {data &&
                data.map((item, index) => {
                  return (
                    <>
                      <ServiceCard data={item} />
                    </>
                  );
                })}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ProviderDashboard;
