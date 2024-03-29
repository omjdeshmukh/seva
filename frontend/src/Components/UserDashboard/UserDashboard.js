import React, { useEffect, useState } from "react";
import { Col, ListGroup, Tab, Row } from "react-bootstrap";
import ServiceCard from "./Servicecard";
import { Link } from "react-router-dom";
import SuggestionsForm from "./suggestion/suggestionsForm";
import ShowSuggestion from "./suggestion/ShowSuggestion";
import AddFeedbackForm from "./feedback/AddFeedbackForm";
import ShowFeedback from "./feedback/showFeedback";
import UseProfile from "./profile/Profile";
import UserDashboardData from "./UserDashboardData/UserDashboardData";
import axios from "axios";
import userData, { getCookieData } from "../userData";

function UserDashboard() {
  const [service, setService] = useState();
  const [profileData, setProfileData] = useState();
  const cookieData = getCookieData();

  const token = cookieData.token;
  const _id = cookieData.userId;

  const handleLogOut = () => {
    if (document.cookie) {
      document.cookie = JSON.stringify(userData);
    }
  };

  useEffect(() => {
    fetch(" https://seva-backend1.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://seva-backend1.herokuapp.com/user/profile/${_id}`,
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        setProfileData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //   console.log(profileData.fullName);

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <br></br>
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item>
              <img
                src="https://res.cloudinary.com/drampnn2w/image/upload/v1615827809/Face-Profile-User-Man-Boy-Person-Avatar-512_ervo1s.png"
                width="80%"
                height="80%"
              />
              <h5>{profileData && profileData.fullName}</h5>
              <p>User</p>
            </ListGroup.Item>
            <ListGroup.Item action href="#link1">
              DashBoard
            </ListGroup.Item>
            <ListGroup.Item action href="#profile">
              Profile
            </ListGroup.Item>
            {/* <ListGroup.Item action href="#link2">
                   show service
                </ListGroup.Item> */}
            <ListGroup.Item action href="#link3">
              Add Suggestions
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Show My Suggestion
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              Add Feedback
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              show feedback
            </ListGroup.Item>
            {/* <ListGroup.Item action href="/" onClick={handleLogOut}>
              Log Out
            </ListGroup.Item> */}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <UserDashboardData {...cookieData} />
            </Tab.Pane>
            <Tab.Pane eventKey="#profile">
              <UseProfile {...cookieData} />
            </Tab.Pane>
            {/* <Tab.Pane eventKey="#link2">
                    {service && service.map((item ,i) =>{
                        return(
                            <ServiceCard service={item}/>
                        )
                    })}
                </Tab.Pane> */}
            <Tab.Pane eventKey="#link3">
              <SuggestionsForm {...cookieData} />
            </Tab.Pane>
            <Tab.Pane eventKey="#link4">
              <ShowSuggestion {...cookieData} />
            </Tab.Pane>
            <Tab.Pane eventKey="#link5">
              <AddFeedbackForm {...cookieData} />
            </Tab.Pane>
            <Tab.Pane eventKey="#link6">
              <ShowFeedback {...cookieData} />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
export default UserDashboard;
