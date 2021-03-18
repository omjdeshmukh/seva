import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import { Button, Form, FormGroup, Label, Input, FormText , FormFeedback} from 'reactstrap'

function SuggestionsForm(props){
   
return(
    <Card align="left">
        <Card.Header as="h2" align="center">Suggestions</Card.Header>
        <Card.Body>

            <Card.Text>
               <Form>
                   <FormGroup>
                   <Row>
                        <Col sm={4}>
                       <Label for="categories">categories</Label>
                       <br></br>
                       <Input
                            type="select"
                            name="select"
                            id="exampleSelect"
                            value=""
                        >
                       
                       {console.log(props.name)})    
                      </Input>
                     </Col>
                  </Row>               
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