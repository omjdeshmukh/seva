import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import {Form ,Button , Card, ListGroup , Tab} from 'react-bootstrap';


const AdminCategory = () => (


  <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
     <h1>Admin dashboard</h1>
     <br></br>
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Profile
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Add Category
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          Show Category
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
        <h1>profile</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          <h1>add categroy</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="#link3">
        <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>


);

export default AdminCategory;
