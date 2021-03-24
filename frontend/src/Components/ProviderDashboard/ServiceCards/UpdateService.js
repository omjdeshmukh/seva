import React, { useState, useEffect } from "react";
import { Button, CardTitle } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import { getCookieData } from "../../userData";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Card } from "react-bootstrap";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";

const cookieData = getCookieData();
const __id = cookieData.userId;

function UpdateService(props) {
  // console.log(props.data._id)
    const _id  = props.data._id
    // console.log(_id)

  const [open, setOpen] = React.useState(false);
  const [cardData, setCardData] = useState();
  const [category, setCategory] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://seva-backend1.herokuapp.com/provider/service/${_id}`,
     
 
      headers: {
        "auth-token": `${cookieData.token}`,
      },
    })
      .then((response) => {
        // console.log(response);
        setCardData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

//  console.log(cardData);

  const updateInput = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateServiceData();
  };

  const UpdateServiceData = () => {
    axios({
      method: "PUT",
      url: "https://seva-backend1.herokuapp.com/provider/service/" + _id,
      data: cardData,
      headers: {
        "auth-token": `${cookieData.token}`,
      },
    })
      .then(function (response) {
        //console.log(response);
        alert("hurry! Service Updated...");
      })
      .catch(function (response) {
        alert("Opppssss Somthing went wrong...");
        console.log(response);
      });
  };

  // console.log(cardData);

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/admin/category")
      .then((response) => setCategory(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Service</DialogTitle>
        <Card align="left">
          <Card.Body style={{ width: "600px" }}>
            <Card.Text>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="col">
                  <Label for="serviceName">Service Name</Label>
                  <Input
                    type="text"
                    name="serviceNames"
                    placeholder="Service Name"
                    onChange={updateInput}
                    value={cardData.serviceNames || ""}
                  />
                  <FormFeedback>You will not be able to see this</FormFeedback>
                </FormGroup>

                <FormGroup className="col">
                  <Label for="exampleSelect">Service Category</Label>
                  <Input
                    type="select"
                    name="category"
                    value={FormData.category}
                    onChange={updateInput}
                    id="exampleSelect"
                    defaultValue
                  >
                    <option>Select category</option>

                    {category &&
                      category.map((item, index) => {
                        // console.log(item)
                        // {console.log(item.category)}
                        return (
                          <>
                            <option value={item._id}>{item.category}</option>
                          </>
                        );
                      })}
                  </Input>
                </FormGroup>

                <FormGroup className="col">
                  <Label for="serviceEmail">Email</Label>
                  <Input
                    type="text"
                    name="serviceEmail"
                    placeholder="Email"
                    onChange={updateInput}
                    value={cardData.serviceEmail || ""}
                  />
                  <FormFeedback>You will not be able to see this</FormFeedback>
                </FormGroup>

                <FormGroup className="col">
                  <Label for="servicePincode">Pincode</Label>
                  <Input
                    type="text"
                    name="servicePincode"
                    placeholder="Pincode"
                    onChange={updateInput}
                    value={cardData.servicePincode || ""}
                  />
                </FormGroup>

                <FormGroup className="col">
                  <Label for="contactNo">Contact No.</Label>
                  <Input
                    type="text"
                    name="contactNo"
                    placeholder="Contact No."
                    onChange={updateInput}
                    value={cardData.contactNo || ""}
                  />
                </FormGroup>

                <FormGroup className="col">
                  <Label for="map_location">Map Location</Label>
                  <Input
                    type="text"
                    name="map_location"
                    placeholder="Link of Map Location"
                    onChange={updateInput}
                    value={cardData.map_location || ""}
                  />
                </FormGroup>

                <FormGroup className="col">
                  <Label for="description">Description</Label>
                  <Input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={updateInput}
                    value={cardData.description || ""}
                  />
                </FormGroup>

                <FormGroup className="col">
                  <Label for="image">Image</Label>
                  <Input
                    type="link"
                    name="image"
                    placeholder="Image"
                    onChange={updateInput}
                    value={cardData.image || ""}
                  />
                </FormGroup>

                <DialogActions>
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                </DialogActions>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Dialog>
    </div>
  );
}

export default UpdateService;