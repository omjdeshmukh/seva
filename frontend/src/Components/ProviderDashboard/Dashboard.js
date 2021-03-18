import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import { Form, Row, ListGroup, Tab } from "react-bootstrap";
import axios from "axios";
import { Button } from "reactstrap";
import AddService from "./service/AddService";
import ServiceCard from "./ServiceCards/ServiceCard";
import Profile from "./profile/Profile";

const api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGQ4Njk1NzExY2EzMDViNDk0MTEwMiIsImlhdCI6MTYxNTk5NzM1OH0.B0GgYG3lphhYaqm3nSWuecxMoU2DV4M_EDywDGybVNo";

function ProviderDashboard() {
 
  const [service, setService] = useState();

  useEffect(() => {
    // axios
    //   .get("https://seva-backend1.herokuapp.com/admin/category")
    //   .then((response) => setService(response.data))
    //   .catch((err) => console.log(err));
    axios({
      method: "GET",
      url:
        "https://seva-backend1.herokuapp.com/provider/my/service/60524ad1d4043f0022c86384",
      headers: {
        "auth-token": `${api}`,
      },
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
        setService([response.data])
        //  alert("woohh! Cateory Deleted..");
        //  refreshPage();
        // window.location.reload();
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }, []);

  console.log(service);

  function refreshPage() {
    window.location.reload();
  }

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
                width="180px"
                height="180px"
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
            <Tab.Pane eventKey="#dashboard">  </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <Profile />
            </Tab.Pane>
            <Tab.Pane eventKey="#addService">
              <AddService />
            </Tab.Pane>
            <Tab.Pane eventKey="#showMyService">
              <Button color="primary" onClick={refreshPage}>
                Reload
              </Button>
              {service &&
                service.map((item, index) => {
                  console.log(item[index]);
                  return (
                    <>
                      <ServiceCard service={item} />
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
