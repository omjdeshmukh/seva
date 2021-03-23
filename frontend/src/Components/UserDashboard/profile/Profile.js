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
import { getCookieData } from "../../userData";

const cookieData = getCookieData();
// const token = cookieData.token;
const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA";
const _id = cookieData.userId;

function UseProfile() {

  const [serviceformData, setFormData] = useState({});

  // console.log(token);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://seva-backend1.herokuapp.com/user/profile/604f7ffdf1acad0643111afa",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        setFormData(response.data);
        console.log(response);
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
      url: "https://seva-backend1.herokuapp.com/user/profile/" + _id,
      data: serviceformData,
      headers: {
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        //console.log(response);
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
                  value={serviceformData.userName || ""}
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
                  value={serviceformData.fullName || ""}
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
                  value={serviceformData.email || ""}
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
                    value={serviceformData.village || ""}
                  />
                </FormGroup>

                <FormGroup className="col">
                  <Label for="pincode">Pin-code</Label>
                  <Input
                    type="text"
                    name="pincode"
                    placeholder="Pin-code"
                    onChange={updateInput}
                    value={serviceformData.pincode || ""}
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
                    value={serviceformData.city || ""}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="state">State</Label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="State"
                    onChange={updateInput}
                    value={serviceformData.state || ""}
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