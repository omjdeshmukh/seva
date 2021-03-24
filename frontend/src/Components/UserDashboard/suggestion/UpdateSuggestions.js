import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { getCookieData } from "../../userData";

function UpdateSuggestion(props) {
  const { open, close, id } = props;

  const [category, setCategory] = useState();
  const [FormData, setFormData] = useState({});

  function DataPost() {

    const cookieData = getCookieData();
    const token = cookieData.token;

    axios({
      method: "PUT",
      url: "https://seva-backend1.herokuapp.com/user/suggestion/" + id,
      data: FormData,
      headers: {
        // 'Content-Type': "application/json",
        "auth-token": `${token}`,
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        alert("suggestion added");
        afterPost();
      })
      .catch(function (response) {
        //handle error
        alert("something went wrong while adding suggestion");
        console.log(response);
      });
  }
  function afterPost() {
    console.log(FormData);
    setFormData({
      ServiceType: "",
      category: "",
      ServicePinCode: "",
      ServiceDescription: "",
    });

  }

  function handleInput(e) {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    DataPost();
  }

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/suggestion/" + id)
      .then((response) => setFormData(response.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://seva-backend1.herokuapp.com/admin/category")
      .then((response) => setCategory(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Modal show={open} onHide={close} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Update Suggestion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="ServiceType">Service Type</Label>
            <Input
              type="text"
              placeholder="ServiceType"
              value={FormData.ServiceType || ""}
              name="ServiceType"
              onChange={handleInput}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Service Category</Label>
            <Input
              type="select"
              name="category"
              value={FormData.category}
              onChange={handleInput}
              id="exampleSelect"
              defaultValue
            >
              <option>select category</option>

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

          <FormGroup>
            <Label for="ServicePinCode">Service Pincode</Label>
            <Input
              type="text"
              placeholder="ServicePinCode"
              value={FormData.ServicePinCode || ""}
              name="ServicePinCode"
              onChange={handleInput}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="exampleFormControlTextarea1">
              Service Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              value={FormData.ServiceDescription}
              name="ServiceDescription"
              onChange={handleInput}
              rows="4"
            />
          </FormGroup>

          <Button
            variant="primary"
            type="submit"
            // onClick={}
            color="primary"
          >
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
export default UpdateSuggestion;
