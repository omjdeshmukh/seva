import { React, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import axios from "axios";
import { getCookieData } from "../../userData";

function UseProfile({ token, userId }) {
  const [serviceformData, setFormData] = useState({});

  // console.log(token);
  useEffect(() => {
    axios({
      method: "GET",

      url: `https://seva-backend1.herokuapp.com/user/profile/${userId}`,

      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        setFormData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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

  const UpdateProfile = () => {
    axios({
      method: "PUT",
      url: "https://seva-backend1.herokuapp.com/user/profile/" + userId,
      data: serviceformData,
      headers: {
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        setFormData(response.data);

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
              {/* <FormGroup className="row"> */}

              <FormGroup>
                <Label for="fullName"> User Name </Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="username"
                  disabled
                  onChange={updateInput}
                  value={(serviceformData && serviceformData.userName) || ""}
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="fullName"> Name </Label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full-Name"
                  onChange={updateInput}
                  value={(serviceformData && serviceformData.fullName) || ""}
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="fullName"> Email </Label>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  disabled
                  onChange={updateInput}
                  value={(serviceformData.email && serviceformData.email) || ""}
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
              </FormGroup>

              <FormGroup className="row">
                <FormGroup className="col">
                  <Label for="village">Village/Town</Label>
                  <Input
                    type="text"
                    name="village"
                    placeholder="Village"
                    onChange={updateInput}
                    value={
                      serviceformData.village ? serviceformData.village : ""
                    }
                  />
                </FormGroup>

                <FormGroup className="col">
                  <Label for="pincode">Pin-code</Label>
                  <Input
                    type="text"
                    name="pincode"
                    placeholder="Pin-code"
                    onChange={updateInput}
                    value={
                      (serviceformData.pincode && serviceformData.pincode) || ""
                    }
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
                    value={(serviceformData.city && serviceformData.city) || ""}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="state">State</Label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={updateInput}
                    value={
                      (serviceformData.state && serviceformData.state) || ""
                    }
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

export default UseProfile;
