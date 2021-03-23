import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Tab ,Row } from 'react-bootstrap';
import ServiceCard from './Servicecard'
import SuggestionsForm from './suggestion/suggestionsForm'
import ShowSuggestion from './suggestion/ShowSuggestion';
import AddFeedbackForm from './feedback/AddFeedbackForm';
import ShowFeedback from './feedback/showFeedback';
import UseProfile from './profile/Profile';


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
        <br></br>
        <Row>
            <Col sm={4}>
            <ListGroup>
                <ListGroup.Item>
                <img src="https://res.cloudinary.com/drampnn2w/image/upload/v1615827809/Face-Profile-User-Man-Boy-Person-Avatar-512_ervo1s.png"  width="180px" height="180px"/>
                <h5>Bhupendra</h5>
                <p>User</p>
                </ListGroup.Item>
                <ListGroup.Item action href="#link1">
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
                {/* <Tab.Pane eventKey="#link2">
                    {service && service.map((item ,i) =>{
                        return(
                            <ServiceCard service={item}/>
                        )
                    })}
                </Tab.Pane> */}
                <Tab.Pane eventKey="#link3">
                    <SuggestionsForm />
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                    <ShowSuggestion />
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
