import { React, useState, useEffect } from "react";
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

function Profile() {
  const [serviceformData, setFormData] = useState({});

  const [data, setData] = useState({});

//   const [category, setCategory] = useState({});

  //onLoadData Fetching

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://seva-backend1.herokuapp.com/provider/profile/60524ad1d4043f0022c86384",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${api}`,
      },
    })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (response) {
        console.log(response);
      });
  }, []);

  console.log(data);

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
    // console.log(serviceformData);
    setFormData({
      img: "",
      userName: "",
      fullName: "",
      email: "",
      role: "",
      state: "",
      city: "",
      village: "",
      pincode: "",
      password: "",
    });
    // window.location.reload();
  }

  const api =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTI0YWQxZDQwNDNmMDAyMmM4NjM4NCIsImlhdCI6MTYxNjAwNTk1N30.p6OZnVyJEH20NfPbWed_UJEGJWNWs-FaJbD9e3Cfu70";

  const sendService = () => {
    axios({
      method: "PATCH",
      url:
        "https://seva-backend1.herokuapp.com/provider/profile/60524ad1d4043f0022c86384",
      data: serviceformData,
      headers: {
        // 'Content-Type': "application/json",
        "auth-token": `${api}`,
      },
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
        alert("hurry! Profile Updated...");
        // afterPost();
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
          Profile
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="userName">userName</Label>
                  <Input
                    type="text"
                    name="userName"
                    placeholder="userName"
                    onChange={updateInput}
                    value={serviceformData.userName || data.userName }
                  />
                  <FormFeedback>You will not be able to see this</FormFeedback>
                </FormGroup>
                <FormGroup className="col">
                  <Label for="img">image</Label>
                  <Input
                    type="text"
                    name="img"
                    placeholder="img"
                    onChange={updateInput}
                    value={serviceformData.img || data.img}
                  />
                </FormGroup>
              </FormGroup>

              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="fullName">fullName</Label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="fullName"
                    onChange={updateInput}
                    value={serviceformData.fullName || data.fullName}
                  />
                  <FormFeedback>You will not be able to see this</FormFeedback>
                </FormGroup>
                <FormGroup className="col">
                  <Label for="email">email</Label>
                  <Input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={updateInput}
                    value={serviceformData.email || data.email}
                  />
                </FormGroup>
              </FormGroup>

              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="role">role</Label>
                  <Input
                    type="text"
                    name="role"
                    placeholder="role"
                    onChange={updateInput}
                    value={serviceformData.role || data.role}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="state">state</Label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="state"
                    onChange={updateInput}
                    value={serviceformData.state || data.state}
                  />
                </FormGroup>
              </FormGroup>

              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="city">city</Label>
                  <Input
                    type="text"
                    name="city"
                    placeholder="city"
                    onChange={updateInput}
                    value={serviceformData.city || data.city}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="village">village</Label>
                  <Input
                    type="text"
                    name="village"
                    placeholder="village"
                    onChange={updateInput}
                    value={serviceformData.village || data.village}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="pincode">pincode</Label>
                  <Input
                    type="text"
                    name="pincode"
                    placeholder="pincode"
                    onChange={updateInput}
                    value={serviceformData.pincode || data.pincode}
                  />
                </FormGroup>
              </FormGroup>
              <FormGroup className="col">
                <Label for="password">password</Label>
                <Input
                  type="text"
                  name="password"
                  placeholder="password"
                  onChange={updateInput}
                  value={serviceformData.password || data.passsword}
                />
              </FormGroup>

              <Button
                color="primary"
                size="lg"
                type="submit"
                // onClick={sendService}
              >
                Update
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Profile;
