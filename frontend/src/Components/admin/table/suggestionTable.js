import React , { useState, useEffect } from "react";
import { Table } from 'reactstrap';
import axios from "axios";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    FormFeedback,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import Pagination from './pagination'
import styled from 'styled-components'

function SuggestionTable() {
    const [suggestion, setSuggestion] = useState();
    const [formData, setFormData] = useState({});

    const [postPerpages] = useState(8);
    const [currentpage , setCurrentpage] = useState(1)
 //   console.log(suggestion);

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     sendSuggestionBypin();
  };

  function clearAll() {
    fetch(`https://seva-backend1.herokuapp.com/suggestion/`)
          .then((response) => response.json())
          .then((response) => setSuggestion(response))
          .catch((err) => console.log(err.message));
  }

  function sendSuggestionBypin(){
    axios({
        method: "GET",
        url: `https://seva-backend1.herokuapp.com/suggestionByPincode/${formData.pincode}`,
      })
        .then(function (response) {
          //handle success
          setSuggestion(response.data);
        //   alert("hurry! Category added..");
        //   afterPost();
        })
        .catch(function (response) {
          //handle error
          alert("Oppes! somthing wrong....");
          console.log(response);
        });
  }

    useEffect(() => {
        fetch(`https://seva-backend1.herokuapp.com/suggestion/`)
          .then((response) => response.json())
          .then((response) => setSuggestion(response))
          .catch((err) => console.log(err.message));
      },[]);
  
      const IndexofLastPost = currentpage * postPerpages;
      const IndexofFirstPost = IndexofLastPost - postPerpages;
      const currentPost = suggestion && suggestion.slice(IndexofFirstPost , IndexofLastPost)
     // console.log(currentPost)
     const paginate =(pageNumber) =>{
       setCurrentpage(pageNumber)
     }
  return (
    <>
        <h4>Requested Suggestion based on area PinCode.....</h4>
        <br></br>
        <Container>
        
        <Form onSubmit={handleSubmit}>
              {/* <FormGroup> */}
              <Row>
                <Col>
                <Input
                  type="text"
                  name="pincode"
                  placeholder="pincode"
                  onChange={updateInput}
                  value={formData.pincode || ""}
                /></Col>
                <Col>
                <Button color="primary" size="lg" type="submit">
                    Submit
                </Button>
              </Col>
              <Button color="primary" size="lg" onClick={clearAll}>
                    Clear All
                </Button>
              </Row>
              
              {/* </FormGroup> */}
        
              
            </Form>
            
            <br></br>

        </Container>
       

      <Scroll>
      <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Requested Area PinCode</th>
          <th>Service Type</th>
          <th>category</th>
          <th>Requested user email</th>
          <th>Service ServiceDescription</th>
          <th>Vote by user</th>
        </tr>
      </thead>
      
      <tbody>
        {currentPost &&
            currentPost.map((item, index) => {
            //   console.log(item);
              return (
                <>
                <tr>
                <th scope="row">{index+1}</th>
                <td>{item.ServicePinCode}</td>
                <td>{item.ServiceType}</td>
                <td>{item.category.category}</td>
                <td>{item.user.email}</td>
                <td>{item.ServiceDescription}</td>
                <td>{item.voteCount}</td>
                </tr>
                  {/* <SuggestionCard key={index} {...item} /> */}
                </>
              );
            })}
       
      </tbody>
    </Table>
    </Scroll>
    <div className>
    <Pagination posts={currentpage} 
                totalsuggestions={suggestion}
                postperpages={postPerpages}
                paginate={paginate}/>
    </div>
    </>
  );
}

export default SuggestionTable;

const Scroll = styled.div`
max-height:500px;
overflow-y:scroll;
overflow-x:hidden;
white-space:nowrap;

`;
