import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import { Button, Form, FormGroup, Label, Input, FormText , FormFeedback} from 'reactstrap'

function SuggestionsForm() {
    const [category , setCategory] = useState();

    useEffect(() => {
        axios
        .get("https://seva-backend1.herokuapp.com/admin/category")
        .then((response) => setCategory(response.data))
        .catch((err) => console.log(err));
    }, []);
     console.log(category)

return(
    <Card align="left">
        <Card.Header as="h2" align="center">Suggestions</Card.Header>
        <Card.Body>

            <Card.Text>
               <Form>

                    <FormGroup>
                        <Label for="exampleSelect">Category</Label>
                        <Input type="select" name="select" id="exampleSelect">
                        {category &&
                                category.map((item, index) => {
                                    // console.log(item)
                                    // {console.log(item.category)}
                                return (
                                    <>
                                    <option key={item._id}>{item.category}</option>
                                    </>
                                );
                                })}

                        </Input>
                    </FormGroup>
                  
                   <FormGroup>
                       <Label for="pincode">Pincode</Label>
                       <Input type="text"
                              placeholder="pincode"
                              value=""
                              name="Pincode"
                              onChange=""/>
                   </FormGroup>
                   <FormGroup>
                   <div className="form-group">
                           <label htmlFor="exampleFormControlTextarea1">
                                  textarea
                                 </label>
                                  <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  value=""
                                  name="textarea"
                                  onChange=""
                                  rows="4"
                             />
                     </div>
                   </FormGroup>
                   <Button color="primary" size="lg" type="submit">Submit</Button>
               </Form>
            </Card.Text>
        </Card.Body>
    </Card>
)
}
export default SuggestionsForm;