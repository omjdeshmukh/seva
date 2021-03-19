import { React, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import axios from "axios";

function Profile() {
  const [serviceformData, setFormData] = useState({});
  const [data, setData] = useState({});

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
        // setData(response.data);
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
    UpdateProfile();
  };

  const api =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTI0YWQxZDQwNDNmMDAyMmM4NjM4NCIsImlhdCI6MTYxNjAwNTk1N30.p6OZnVyJEH20NfPbWed_UJEGJWNWs-FaJbD9e3Cfu70";

  const UpdateProfile = () => {
    axios({
      method: "PUT",
      url:
        "https://seva-backend1.herokuapp.com/provider/profile/60524ad1d4043f0022c86384",
      data: serviceformData,
      headers: {
        "auth-token": `${api}`,
      },
    })
      .then(function (response) {
        // console.log(response);
        alert("hurry! Profile Updated...");
      })
      .catch(function (response) {
        alert("Opppssss Somthing went wrong...");
        console.log(response);
      });
  };

  return (
    <>
      <Card align="left">
        <Card.Header as="h2" align="center">
          Profile Info
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="fullName"> Name </Label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full-Name"
                    onChange={updateInput}
                    value={serviceformData.fullName || data.fullName}
                  />
                  <FormFeedback>You will not be able to see this</FormFeedback>
                </FormGroup>
                <FormGroup className="col">
                  <Label for="img">Profile Image</Label>
                  <Input
                    type="text"
                    name="img"
                    placeholder="Image"
                    onChange={updateInput}
                    value={serviceformData.img || data.img}
                  />
                </FormGroup>
              </FormGroup>

              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="village">Village/Town</Label>
                  <Input
                    type="text"
                    name="village"
                    placeholder="Village"
                    onChange={updateInput}
                    value={serviceformData.village || data.village}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="pincode">Pin-code</Label>
                  <Input
                    type="text"
                    name="pincode"
                    placeholder="Pin-code"
                    onChange={updateInput}
                    value={serviceformData.pincode || data.pincode}
                  />
                </FormGroup>
              </FormGroup>

              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="city">City</Label>
                  <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={updateInput}
                    value={serviceformData.city || data.city}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="state">State</Label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={updateInput}
                    value={serviceformData.state || data.state}
                  />
                </FormGroup>
              </FormGroup>

              <Button color="primary" size="lg" type="submit">
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
