import React, { useState ,useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import {Form ,Button , Row, ListGroup , Tab} from 'react-bootstrap';
import axios from "axios";
import Profile from './Profile';
import AddServices from './AddService';
import MyServiceCard from './MyServiceCard';


function AdminDashboard() {


const [category, setCategory] = useState();

useEffect(() => {
  axios
    .get("http://localhost:5000/admin/category")
    .then((response) => setCategory(response.data))
    .catch((err) => console.log(err));
}, []);


//  console.log(category);
return (
  <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
    <h1>Provider dashboard</h1>
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
            <h5>Omii</h5>
            <p>Provider</p>
          </ListGroup.Item>
          <ListGroup.Item action href="#link1">
            Profile
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            Add Services
          </ListGroup.Item>
          <ListGroup.Item action href="#link3">
            My Services
          </ListGroup.Item>
          <ListGroup.Item action href="/">
            log out
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="#link1">{Profile()}</Tab.Pane>
          <Tab.Pane eventKey="#link2">{AddServices()}</Tab.Pane>
          <Tab.Pane eventKey="#link3">
            {category &&
              category.map((item, index) => {
                return (
                  <>
                    <MyServiceCard category={item} />
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

export default AdminDashboard;



