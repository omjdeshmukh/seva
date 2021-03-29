import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import axios from "axios";
import { getCookieData } from "../../userData";

function AddFeedbackForm() {
  const [feedbackData, SetFeedbackData] = useState({});

  function PostFeedbackdata() {
    const cookieData = getCookieData();
    const token = cookieData.token;

    axios({
      method: "POST",
      url: "https://seva-backend1.herokuapp.com/user/feedback",
      data: feedbackData,
      headers: {
        "content-type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        console.log(response);
        alert("feedback added ");
        afterPost()
      })
      .catch(function (response) {
        alert("something went wrong");
        console.log(response);
      });
  }
  function afterPost() {
    SetFeedbackData({
      feedbackData:""
    })
  }

  function handleInput(e) {
    SetFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    PostFeedbackdata();
  }
  // console.log(feedbackData)
  return (
    <Card align="left">
      <Card.Header as="h2" align="center">
        Feedbacks
      </Card.Header>
      <Card.Body align="center">
        <Card.Text>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="exampleFormControlTextarea1">textarea</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="feedback"
                value={feedbackData.feedback || ""}
                onChange={handleInput}
                rows="5"
              ></textarea>
            </FormGroup>
            <Button color="primary" size="lg" type="submit">
              Submit Feedback
            </Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default AddFeedbackForm;
