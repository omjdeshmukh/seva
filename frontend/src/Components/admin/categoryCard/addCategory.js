import { React, useState } from "react";
import { Form, Button, Card, Col } from "react-bootstrap";

import { React, useState } from "react";
// import {Form ,Button , Card, Col} from 'react-bootstrap';
import { Card } from "react-bootstrap";
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

function ADDCategroyCard() {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        [e.target.name] == "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendCategory();
    console.log(formData);
    setFormData({
      category: "",
      description: "",
      icon: "",
    });
  };

  const sendCategory = () => {
    axios({
      method: "POST",
      url: "https://seva-backend1.herokuapp.com/admin/category",
      data: formData,
    })
      .then(function (response) {
        //handle success
        console.log(response);
        //   window.location.reload(false);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendCategory();
  };

  function afterPost() {
    console.log(formData);
    setFormData({
      category: "",
      description: "",
      icon: "",
    });
    window.location.reload();
  }

  const sendCategory = () => {
    axios({
      method: "POST",
      url: "https://seva-backend1.herokuapp.com/admin/category",
      data: formData,
    })
      .then(function (response) {
        //handle success
        console.log(response);
        alert("hurry! Category added..");
        afterPost();
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <>
      <Card align="left">
        <Card.Header as="h2" align="center">
          Add category
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  type="text"
                  name="category"
                  placeholder="category"
                  onChange={updateInput}
                  value={formData.category || ""}
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="description"
                  onChange={updateInput}
                  value={formData.description || ""}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleFile">Icon</Label>
                <Input
                  type="file"
                  name="file"
                  id="exampleFile"
                  onChange={updateInput}
                />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>

              <Card align="left">
                <Card.Header as="h2" align="center">
                  Add category
                </Card.Header>
                <Card.Body>
                  {/* <Card.Title>Special title treatment</Card.Title> */}
                  <Card.Text>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="category"
                        placeholder="category"
                        onChange={updateInput}
                        value={formData.category || ""}
                      />
                      <br></br>
                      <input
                        type="text"
                        name="description"
                        placeholder="description"
                        onChange={updateInput}
                        value={formData.description || ""}
                      />
                      <br></br>
                      <input
                        type="text"
                        name="icon"
                        placeholder="icon"
                        onChange={updateInput}
                        value={formData.icon || ""}
                      ></input>
                      <br></br>
                      <button type="submit">Submit</button>
                    </form>
                  </Card.Text>
                </Card.Body>
              </Card>

              <FormGroup>
                <Label for="icon">Icon</Label>
                <Input
                  type="text"
                  name="icon"
                  placeholder="icon"
                  onChange={updateInput}
                  value={formData.icon || ""}
                />
              </FormGroup>
              <Button color="primary" size="lg" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ADDCategroyCard;
