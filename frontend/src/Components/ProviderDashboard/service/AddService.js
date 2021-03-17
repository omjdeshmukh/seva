
import {React, useState} from "react";
// import {Form ,Button , Card, Col} from 'react-bootstrap';
import { Card }  from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText , FormFeedback} from 'reactstrap';
import axios from "axios";

function AddService() {

    const [formData, setFormData] = useState({})

  // const updateInput = e => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  // const handleSubmit = event => {
  //   event.preventDefault()
  //   sendCategory()
  // }

  // function afterPost(){
  //   console.log(formData);
  //   setFormData({
  //     category: '',
  //     description: '',
  //     icon: '',
  //   })
  //   window.location.reload(); 
  // }


    const sendCategory = () => {
        axios({
            method: "GET",
            url: "https://seva-backend1.herokuapp.com/provider/my/service/604d8695711ca305b4941102",
            // data: formData,
            headers: {
              'auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGQ4Njk1NzExY2EzMDViNDk0MTEwMiIsImlhdCI6MTYxNTk3Njc2MX0.byNd8CvcCVi5oTk8TrYHFmSHwTXSxUDQgbexU8Py2Tk` 
            }

          })
            .then(function (response) {
              //handle success
              console.log(response.data);
              //alert("hurry! Cateory added.." );
              //afterPost()
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
      }

  return (
    <>


<Card align="left">
  <Card.Header as="h2" align="center">Add Service</Card.Header>
  <Card.Body>

    <Card.Text>

    <Button color="primary" size="lg" onClick={sendCategory}>Submit</Button>
{/* <Form onSubmit={handleSubmit} >
      <FormGroup>
        <Label for="category">Category</Label>
        <Input
          type="text"
          name="category"
          placeholder="category"
          onChange={updateInput}
          value={formData.category || ''}
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
          value={formData.description || ''}
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleFile">Icon</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>

      <FormGroup>
        <Label for="icon">Icon</Label>
        <Input 
          type="text"
          name="icon"
          placeholder="icon"
          onChange={updateInput}
          value={formData.icon || ''} />
      </FormGroup>
      <Button color="primary" size="lg" type="submit" >Submit</Button>
    </Form> */}
    
    </Card.Text>
  </Card.Body>
</Card>
    </>
  );
}

export default AddService;
