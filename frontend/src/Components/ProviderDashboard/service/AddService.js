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
import CategroyCard from "../../admin/categoryCard/catetoryCard"

function AddService() {
  const [serviceformData, setFormData] = useState({});
  const [category, setCategory] = useState({})

  const updateInput = (e) => {
    setFormData({
      ...serviceformData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendService();
  };

  function afterPost() {
    console.log(serviceformData);
    setFormData({
      image: "",
      serviceName: "",
      serviceEmail: "",
      servicePincode: "",
      contactNo: "",
      category: "",
      map_location: "",
      description: "",
    });
    window.location.reload();
  }

  const api =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGQ4Njk1NzExY2EzMDViNDk0MTEwMiIsImlhdCI6MTYxNTk5NzM1OH0.B0GgYG3lphhYaqm3nSWuecxMoU2DV4M_EDywDGybVNo";

  const sendService = () => {
    axios({
      method: "POST",
      url: "https://seva-backend1.herokuapp.com/provider/service",
      data: serviceformData,
      headers: {
        // 'Content-Type': "application/json",
        "auth-token": `${api}`,
      },
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
        alert("hurry! Service added..");
        afterPost();
      })
      .catch(function (response) {
        //handle error
        alert("Opppssss Somthing went wrong...");
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
              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="serviceName">serviceName</Label>
                  <Input
                    type="text"
                    name="serviceNames"
                    placeholder="serviceNames"
                    onChange={updateInput}
                    value={serviceformData.serviceNames || ""}
                  />
                  <FormFeedback>You will not be able to see this</FormFeedback>
                </FormGroup>
                <FormGroup className="col">
                  <Label for="category">category</Label>
                  <Input
                    type="text"
                    name="category"
                    placeholder="category"
                    onChange={updateInput}
                    value={serviceformData.category || ""}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="exampleSelect">category</Label>
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    className="px-2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                   
                  </Input>
                </FormGroup>
              </FormGroup>

              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="serviceEmail">serviceEmail</Label>
                  <Input
                    type="text"
                    name="serviceEmail"
                    placeholder="serviceEmail"
                    onChange={updateInput}
                    value={serviceformData.serviceEmail || ""}
                  />
                  <FormFeedback>You will not be able to see this</FormFeedback>
                </FormGroup>
                <FormGroup className="col">
                  <Label for="servicePincode">servicePincode</Label>
                  <Input
                    type="text"
                    name="servicePincode"
                    placeholder="servicePincode"
                    onChange={updateInput}
                    value={serviceformData.servicePincode || ""}
                  />
                </FormGroup>
              </FormGroup>

              <FormGroup>
                <FormGroup className="col">
                  <Label for="contactNo">contactNo</Label>
                  <Input
                    type="text"
                    name="contactNo"
                    placeholder="contactNo"
                    onChange={updateInput}
                    value={serviceformData.contactNo || ""}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="map_location">map_location</Label>
                  <Input
                    type="text"
                    name="map_location"
                    placeholder="map_location"
                    onChange={updateInput}
                    value={serviceformData.map_location || ""}
                  />
                </FormGroup>
              </FormGroup>

              <FormGroup className="col">
                <Label for="description">description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="description"
                  onChange={updateInput}
                  value={serviceformData.description || ""}
                />
              </FormGroup>
              <FormGroup className="col">
                <Label for="image">image</Label>
                <Input
                  type="text"
                  name="image"
                  placeholder="image"
                  onChange={updateInput}
                  value={serviceformData.image || ""}
                />
              </FormGroup>

              {/* <FormGroup>
                <Label for="exampleFile">Icon</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>

              <FormGroup>
                <Label for="icon">Icon</Label>
                <Input
                  type="text"
                  name="icon"
                  placeholder="icon"
                  onChange={updateInput}
                  value={serviceformData.icon || ""}
                />
              </FormGroup> */}
              <Button
                color="primary"
                size="lg"
                type="submit"
                // onClick={sendService}
              >
                Submit
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddService;
