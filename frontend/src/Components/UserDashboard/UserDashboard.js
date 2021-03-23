import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Tab ,Row } from 'react-bootstrap';
import styled from 'styled-components'
import axios from 'axios'
import ServiceCard from './Servicecard'
import SuggestionsForm from './suggestion/suggestionsForm'
import ShowSuggestion from './suggestion/ShowSuggestion';
import AddFeedbackForm from './feedback/AddFeedbackForm';
import ShowFeedback from './feedback/showFeedback';
import UseProfile from './profile/Profile';
import { getCookieData } from "../userData";

const cookieData=getCookieData()

const token=cookieData.token
const _id=cookieData.userId
//console.log(_id)
// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA";



function UserDashboard() {

const [username , setUsername] = useState()
useEffect(() => {
    axios({
      method: "GET",
      url: "https://seva-backend1.herokuapp.com/user/profile/"+_id,
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        setUsername(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [service, setService] = useState();
  useEffect(() => {
    fetch(" https://seva-backend1.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(username)

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <br></br>
        <Row>
            <Col sm={4}>
            <ListGroup>
                <ListGroup.Item>
                <img src="https://res.cloudinary.com/drampnn2w/image/upload/v1615827809/Face-Profile-User-Man-Boy-Person-Avatar-512_ervo1s.png"  width="180px" height="180px"/>
                 {/* { <h4>{username.userName}</h4> } */}
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
                <ListGroup.Item action href="#link4">
                    Show My Suggestion
                </ListGroup.Item>
                <ListGroup.Item action href="#link5">
                   Add MyFeedback
                </ListGroup.Item>
                <ListGroup.Item action href="#link6">
                   show feedback
                </ListGroup.Item>
                <ListGroup.Item action href="/">
                    Logout
                </ListGroup.Item>
            </ListGroup>   
            </Col>
            <Col sm={8}>
            <Tab.Content>
                <Tab.Pane eventKey="#link1">
                    <UseProfile/>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                    <SuggestionContainer>
                    {service && service.map((item ,i) =>{
                        return(
                            <ServiceCard service={item}/>
                        )
                    })}
                    </SuggestionContainer>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                    <SuggestionsForm />
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                    <SuggestionContainer>
                    <ShowSuggestion />
                    </SuggestionContainer>
                </Tab.Pane>
                <Tab.Pane eventKey="#link5">
                    <AddFeedbackForm />
                </Tab.Pane>
                <Tab.Pane eventKey="#link6">
                    <ShowFeedback />
                </Tab.Pane>
            </Tab.Content>
            </Col>  
        </Row>

    </Tab.Container>
  );
}
export default UserDashboard;

const SuggestionContainer=styled.div`
max-height:700px;
overflow-y:scroll;
overflow-x:hidden;
white-space:nowrap
`;