import React, { useState, useEffect } from "react";
import { Button, CardTitle } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import { getCookieData } from "../../userData";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Card } from "react-bootstrap";
import {
  Form,
  FormGroup,
  Label,
  Input,
  // FormText,
  FormFeedback,
} from "reactstrap";

const cookieData = getCookieData();
const __id = cookieData.userId;

function ServiceCard(props) {
  // console.log(props);

  const {
    _id,
    serviceNames,
    category,
    description,
    image,
    map_location,
  } = props.data;

  // console.log(category);
  // console.log(image);
  // console.log(serviceNames);
  // console.log(_id);
  // console.log(description);

  function ActionDelete() {
    axios({
      method: "DELETE",
      url: "https://seva-backend1.herokuapp.com/provider/service/" + _id,
      headers: {
        "auth-token": `${cookieData.token}`,
      },
    })
      .then(function (response) {
        // console.log(response);
        alert("Service Deleted Successfully...");
        refreshPage();
        // window.location.reload();
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  function refreshPage() {
    window.location.reload();
  }

  //+++++++++++++++++++++++++++++ Update Service Data  ++++++++++++++++++++++++++++++++//

  function FormDialog() {
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
        url: "https://seva-backend1.herokuapp.com/provider/my/service/" + __id,
        headers: {
          "auth-token": `${cookieData.token}`,
        },
      })
        .then((response) => {
          setCardData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

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
        url: "https://seva-backend1.herokuapp.com/provider/my/service/" + __id,
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
            <Card.Body>
              <Card.Text>
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="col">
                    <Label for="serviceName">Service Name</Label>
                    <Input
                      type="text"
                      name="serviceNames"
                      placeholder="Service Name"
                      onChange={updateInput}
                      // value={cardData.serviceNames || ""}
                    />
                    <FormFeedback>
                      You will not be able to see this
                    </FormFeedback>
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
                      // value={cardData.serviceEmail || ""}
                    />
                    <FormFeedback>
                      You will not be able to see this
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup className="col">
                    <Label for="servicePincode">Pincode</Label>
                    <Input
                      type="text"
                      name="servicePincode"
                      placeholder="Pincode"
                      onChange={updateInput}
                      // value={cardData.servicePincode || ""}
                    />
                  </FormGroup>

                  <FormGroup className="col">
                    <Label for="contactNo">Contact No.</Label>
                    <Input
                      type="text"
                      name="contactNo"
                      placeholder="Contact No."
                      onChange={updateInput}
                      // value={cardData.contactNo || ""}
                    />
                  </FormGroup>

                  <FormGroup className="col">
                    <Label for="map_location">Map Location</Label>
                    <Input
                      type="text"
                      name="map_location"
                      placeholder="Link of Map Location"
                      onChange={updateInput}
                      // value={cardData.map_location || ""}
                    />
                  </FormGroup>

                  <FormGroup className="col">
                    <Label for="description">Description</Label>
                    <Input
                      type="text"
                      name="description"
                      placeholder="Description"
                      onChange={updateInput}
                      // value={cardData.description || ""}
                    />
                  </FormGroup>

                  <FormGroup className="col">
                    <Label for="image">Image</Label>
                    <Input
                      type="link"
                      name="image"
                      placeholder="Image"
                      onChange={updateInput}
                      // value={cardData.image || ""}
                    />
                  </FormGroup>

                  <DialogActions>
                    <Button
                      color="primary"
                      type="submit"
                      // onClick={sendService}
                    >
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

  return (
    <>
      <CardContainer key={_id}>
        <ServiceImage>
          <img src={image} key={image} />
        </ServiceImage>
        <CardInnerContainer>
          <InfoContainer>
            <Block>
              <ItemInfo tag="h5"> {serviceNames} </ItemInfo>
              <hr />
              <ItemInfo tag="h5"> {category.category} </ItemInfo>
              <hr />
              <ItemInfo>{description}</ItemInfo>
              <hr />
              <ItemInfo>
                <a href={map_location}>
                  <h5> Map Location </h5>
                </a>
              </ItemInfo>
            </Block>
          </InfoContainer>
        </CardInnerContainer>
        <ButtonContainer>
          <Action>
            <Button color="danger" onClick={ActionDelete}>
              Delete
            </Button>
          </Action>
          <Action>
            {/* <Button color="warning" onClick={''}>Update</Button> */}
            <FormDialog />
          </Action>
        </ButtonContainer>
      </CardContainer>
    </>
  );
}

export default ServiceCard;

const CardContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 0.1rem 0.1rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: hindLight;
  /* float: left; */
`;

const CardInnerContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
`;

const InfoContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* align-items: center; */
  > img {
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 10%;
  }
`;

const ServiceImage = styled.div`
  display: flex;
  padding: 0 1rem;
  text-align: left;
  align-items: center;
  width: 250px;
  color: black;
  > img {
    height: 200px;
    width: 200px;
  }
`;

const Action = styled.div`
  padding: 0 1rem;
  margin-top: 20px;
  align-items: left;
  > button {
    padding: 12;
  }
`;

const Block = styled.div`
  align-items: right;
`;

const ItemInfo = styled.div`
  display: flex;
  font-weight: bold;
  font-family: hindRegular;
`;

const ButtonContainer = styled.div``;

function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
