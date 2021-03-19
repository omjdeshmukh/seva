import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import { Button, Form, FormGroup, Label, Input, FormText , FormFeedback} from 'reactstrap'

function SuggestionsForm() {
    const [category , setCategory] = useState();
    const [FormData, setFormData] = useState({})
    function PostData(){
        // axios(" https://seva-backend1.herokuapp.com/suggestion",{
        //     method:"post",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(FormData)
        // })
        const api = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA";
        axios({
            method: "POST",
            url: "https://seva-backend1.herokuapp.com/user/suggestion",
            data: FormData,
            headers: {
              // 'Content-Type': "application/json",
              "auth-token": `${api}`,
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
          ServiceType:"",
          category:"",
          ServicePinCode:"",
          ServiceDescription:"",
        });
        window.location.reload();
      }

     function handleInput(e){
         setFormData({
             ...FormData,
             [e.target.name]:e.target.value
         })
     }
    
    function handleSubmit(event){
        event.preventDefault()
        PostData()
    }

    useEffect(() => {
        axios
        .get("https://seva-backend1.herokuapp.com/admin/category")
        .then((response) => setCategory(response.data))
        .catch((err) => console.log(err));
    }, []);

console.log(FormData)
return(
    <Card align="left">
        <Card.Header as="h2" align="center">Suggestions</Card.Header>
        <Card.Body>

            <Card.Text>
               <Form onSubmit={handleSubmit}>

               <FormGroup>
                       <Label for="ServiceType">Service Type</Label>
                       <Input type="text"
                              placeholder="ServiceType"
                              value={FormData.ServiceType || ''}
                              name="ServiceType"
                              onChange={handleInput}/>
                   </FormGroup>

                    <FormGroup>
                        <Label for="exampleSelect">Service Category</Label>
                        <Input type="select" name="category"
                                            value={FormData.category}
                                            onChange={handleInput} id="exampleSelect"
                                            defaultValue
                        >
                             <option 
                                    >select category</option>
                                
                       {category && category.map((item, index) => {
                                    // console.log(item)
                                    // {console.log(item.category)}
                                return (
                                    <>
                                    <option value={item._id} 
                                    >{item.category}</option>
                                    </>
                                );
                                })}

                        </Input>
                    </FormGroup>
                  
                   <FormGroup>
                       <Label for="ServicePinCode">Service Pincode</Label>
                       <Input type="text"
                              placeholder="ServicePinCode"
                              value={FormData.ServicePinCode || ''}
                              name="ServicePinCode"
                              onChange={handleInput}/>
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
                   <Button color="primary" size="lg" type="submit">Submit</Button>
               </Form>
            </Card.Text>
        </Card.Body>
    </Card>
)
}
export default SuggestionsForm;