import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import { Form, Row, ListGroup, Tab } from "react-bootstrap";
import CategroyCard from "./categoryCard/catetoryCard";
import axios from "axios";
import ADDCategroyCard from "./categoryCard/addCategory";
import { Button } from "reactstrap";
import Dashboard from "./Dashboard/adminDashboard";
import Chart from "./Chart/Chart";
import SuggestionTable from "./table/suggestionTable";
import AllUserTable from "./user table/allUserTable";

function AdminDashboard() {
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/admin/category")
      .then((response) => setCategory(response.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(category);

  function refreshPage() {
    window.location.reload();
  }
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#dashboard">
      {/* <h1>Admin dashboard</h1> */}
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
              <p>ADMIN</p>
            </ListGroup.Item>
            <ListGroup.Item action href="#dashboard">
              Dashboard
            </ListGroup.Item>
            {/* <ListGroup.Item action href="#link2">
              Profile
            </ListGroup.Item> */}
            <ListGroup.Item action href="#addCategory">
              Add Category
            </ListGroup.Item>
            <ListGroup.Item action href="#showCategory">
              Show Category
            </ListGroup.Item>
            <ListGroup.Item action href="#Chart">
              Statistics
            </ListGroup.Item>
            <ListGroup.Item action href="#showSuggestionRequest">
              Show Suggestion Request
            </ListGroup.Item>
            <ListGroup.Item action href="#showallUser">
              Show all User
            </ListGroup.Item>
            {/* <ListGroup.Item action href="/">
              log out
            </ListGroup.Item> */}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#dashboard">
              <Dashboard />
            </Tab.Pane>
            {/* <Tab.Pane eventKey="#link2">
              <h1>profile</h1>
            </Tab.Pane> */}
            <Tab.Pane eventKey="#addCategory">
              <ADDCategroyCard />
            </Tab.Pane>
            <Tab.Pane eventKey="#showCategory">
              <Button color="primary" onClick={refreshPage}>
                Reload
              </Button>
              {category &&
                category.map((item, index) => {
                  return (
                    <>
                      <CategroyCard category={item} />
                    </>
                  );
                })}
            </Tab.Pane>
            <Tab.Pane eventKey="#showSuggestionRequest">
              <SuggestionTable />
            </Tab.Pane>
            <Tab.Pane eventKey="#Chart">
              <Chart />
            </Tab.Pane>
            <Tab.Pane eventKey="#showallUser">
              <AllUserTable />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default AdminDashboard;
