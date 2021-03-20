import React, { useEffect, useState } from "react";
import { Col, ListGroup, Tab, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ServiceCard from "./Servicecard";
import ShowSuggetion from "./ShowSuggetion";
import SuggestionsForm from "./suggestionsForm";

function UserDashboard() {
  const [service, setService] = useState();

  useEffect(() => {
    fetch(" https://seva-backend1.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, []);

  //console.log(service)

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <h1>User Dashboard</h1>
      <br></br>
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item>
              <img
                src="https://res.cloudinary.com/drampnn2w/image/upload/v1615827809/Face-Profile-User-Man-Boy-Person-Avatar-512_ervo1s.png"
                width="180px"
                height="180px"
              />
              <h5>Bhupendra</h5>
              <p>User</p>
            </ListGroup.Item>
            <ListGroup.Item action href="#link1">
              Profile
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              show service
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Add Suggestions
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              ShowSuggetion
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Feedback
            </ListGroup.Item>
            <ListGroup.Item action href="/">
              Logout
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <h1>Profile</h1>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              {service &&
                service.map((item, i) => {
                  return <ServiceCard service={item} />;
                })}
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
              <SuggestionsForm />
            </Tab.Pane>
            <Tab.Pane eventKey="#link5">
              <ShowSuggetion />
            </Tab.Pane>
            <Tab.Pane eventKey="#link4">
              <h1>Feedback</h1>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
export default UserDashboard;
