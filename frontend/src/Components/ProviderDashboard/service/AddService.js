import { React, useState, useEffect } from "react";
// import {Form ,Button , Card, Col} from 'react-bootstrap';
import { Card } from "react-bootstrap";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  // FormText,
  FormFeedback,
} from "reactstrap";
import axios from "axios";
import {getCookieData} from '../../userData';

const cookieData = getCookieData();
const token = cookieData.token;
const _id = cookieData.userId;


function AddService() {
  const [serviceformData, setFormData] = useState({});
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/admin/category")
      .then((response) => setCategory(response.data))
      .catch((err) => console.log(err));
  }, []);

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

  
  const sendService = () => {
    axios({
      method: "POST",
      url: "https://seva-backend1.herokuapp.com/provider/service",
      data: serviceformData,
      headers: {
        // 'Content-Type': "application/json",
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        //handle success
        // console.log(response.data);
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
          Add Service
        </Card.Header>
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
                  value={serviceformData.serviceNames || ""}
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
                  value={serviceformData.serviceEmail || ""}
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
                  value={serviceformData.servicePincode || ""}
                />
              </FormGroup>

              <FormGroup className="col">
                <Label for="contactNo">Contact No.</Label>
                <Input
                  type="text"
                  name="contactNo"
                  placeholder="Contact No."
                  onChange={updateInput}
                  value={serviceformData.contactNo || ""}
                />
              </FormGroup>

              <FormGroup className="col">
                <Label for="map_location">Map Location</Label>
                <Input
                  type="text"
                  name="map_location"
                  placeholder="Link of Map Location"
                  onChange={updateInput}
                  value={serviceformData.map_location || ""}
                />
              </FormGroup>

              <FormGroup className="col">
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={updateInput}
                  value={serviceformData.description || ""}
                />
              </FormGroup>

              <FormGroup className="col">
                <Label for="image">Image</Label>
                <Input
                  type="file"
                  name="image"
                  placeholder="Image"
                  onChange={updateInput}
                  value={serviceformData.image || ""}
                />
              </FormGroup>

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
