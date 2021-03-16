import {React, useState} from "react";
import {Form ,Button , Card, Col} from 'react-bootstrap';
import axios from "axios";

function ADDCategroyCard() {

    const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    sendCategory()
    console.log(formData);
    setFormData({
      category: '',
      description: '',
      icon: '',
    })
    
  }

    const sendCategory = () => {
        axios({
            method: "POST",
            url: "https://seva-backend1.herokuapp.com/admin/category",
            data: formData,
          })
            .then(function (response) {
              //handle success
              console.log(response);
            //   window.location.reload(false);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
      }

  return (
    <>


<Card align="left">
  <Card.Header as="h2" align="center">Add category</Card.Header>
  <Card.Body>
    {/* <Card.Title>Special title treatment</Card.Title> */}
    <Card.Text>

    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          placeholder="category"
          onChange={updateInput}
          value={formData.category || ''}
        />
         <br></br>
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={updateInput}
          value={formData.description || ''}
        />
        <br></br>
        <input
          type="text"
          name="icon"
          placeholder="icon"
          onChange={updateInput}
          value={formData.icon || ''}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    
    </Card.Text>
  </Card.Body>
</Card>
    </>
  );
}

export default ADDCategroyCard;
