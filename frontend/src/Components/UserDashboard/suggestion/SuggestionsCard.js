import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import {Button} from 'reactstrap'
import axios from 'axios'
// import { Input} from 'reactstrap'
import { Modal} from 'react-bootstrap'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
function SuggestionCard(props){
  // const {ServiceType, category, ServiceDescription} =props.suggestions
  // console.log(ServiceType)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA"
  function ActionDelete(){
      axios('http://localhost:5000/user/suggestion/'+`${props.suggestionid}`,{
        method:"DELETE",
        headers:{
           "content-type":"application/json",
           "auth-token":`${token}`
        }
      })
      .then((data) =>{console.log(data)
      alert("user suggestion deleted succesfully")
      refreshPage()
    })
      .catch((err) =>{console.log(err)
        alert("someting went wrong !!!"+ err.message)
      })
  }

      

  function refreshPage(){
    window.location.reload()
  }
  
    return(
           <>
      <CardContainer>
         <CardInnerContainer>
           <InfoContainer>
             <Info>
              <h3>{props.servicetype}</h3>
              <small>{props.categoryName}</small>
              <br></br>
              <small>{props.servicedescription}</small>
             </Info>
           </InfoContainer>

           <ButtonContainer>
           <Action>
             <Button color="danger" onClick={ ActionDelete }>Delete</Button>
             </Action>
             <Action>
             <Button color="primary" onClick={handleShow} >Update
             </Button>


             </Action>
           </ButtonContainer>
         </CardInnerContainer>
       </CardContainer>

       <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Suggestion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleClose}>
            <FormGroup>
              <Label for="ServiceType">Service Type</Label>
              <Input
                type="text"
                placeholder="ServiceType"
                // value={FormData.ServiceType || ""}
                // name="ServiceType"
                // onChange={handleInput}
              />
            </FormGroup>

            {/* <FormGroup>
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
            </FormGroup> */}

            <FormGroup>
              <Label for="ServicePinCode">Service Pincode</Label>
              <Input
                type="text"
                placeholder="ServicePinCode"
                // value={FormData.ServicePinCode || ""}
                // name="ServicePinCode"
                // onChange={handleInput}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="exampleFormControlTextarea1">
                Service Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                // value={FormData.ServiceDescription}
                // name="ServiceDescription"
                // onChange={handleInput}
                rows="4"
              />
            </FormGroup>
            <Button color="primary" size="lg" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
    )
}
export default SuggestionCard

const CardContainer = styled.div`
margin: 1rem 0;
padding: 0.5rem 0;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
border-radius: 10px;
font-family: hindLight;
display:flex;
`;
const CardInnerContainer = styled.div`
width: 95%;
margin: 0 auto;
padding: 2rem 0;
display:flex;
align-items:center;
justify-content:space-around;
`;

const InfoContainer = styled.div`
// display: flex;
flex-direction: row;
justify-content: flex-start;
// align-items: center;
align-items:left;
> img {
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 10%;
}
`;
const Info = styled.div`
padding: 0 1rem;
text-align: left;
width: 85%;
color:black;
padding-left:100px;
// display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
> h3 {
  padding: 0;
}
`;

const Action = styled.div`
padding: 0 1rem;
/* align-items: right; */
justify-content:center
> button {
  padding: 12;
}
`;
const ButtonContainer = styled.div`
display:flex;

`;