import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback,} from "reactstrap";
import axios from 'axios'

function AddFeedbackForm(){
    const [feedbackData, SetFeedbackData] = useState({})

    function PostFeedbackdata(){  
       const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA";

        axios({
          method:"POST",
          url:"https://seva-backend1.herokuapp.com/user/feedback",
          data:feedbackData,
          headers:{
            "content-type":"application/json",
            "auth-token":`${token}`
          },
      })
        .then(function (response) {
          console.log(response)
          alert("feedback added ")
        })
        .catch(function (response) {
          alert("something went wrong")
          console.log(response)
        })
    }
      function afterPost(){
          window.location.reload();
          feedbackData=""
      }

      function handleInput(e){
          SetFeedbackData({
            ...feedbackData,
            [e.target.name]: e.target.value
          });
      }
     function handleSubmit(event){
          event.preventDefault();
          PostFeedbackdata()
     }
    // console.log(feedbackData)
    return(
      <Card  align="left">
        <Card.Header as="h2" align="center">
                   Feedbacks
         </Card.Header>
           <Card.Body align="center">
             <Card.Text>
               <Form onSubmit={handleSubmit}>
                 <FormGroup>
                 <label htmlFor="exampleFormControlTextarea1">
                     textarea
                 </label>
                 <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="feedback"
                value={feedbackData.feedback || ''}
                onChange={handleInput}
                rows="5"> 
                </textarea>
                </FormGroup>
                <Button color="primary" size="lg" type="submit">
                        Submit Feedback
                </Button>
                 </Form>
                
             </Card.Text>
         </Card.Body>
        </Card>
    )
}
export default AddFeedbackForm;