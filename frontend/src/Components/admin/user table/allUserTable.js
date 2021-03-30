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

function AllUserTable() {
    const [suggestion, setSuggestion] = useState();
 
    const [postPerpages] = useState(10);
    const [currentpage , setCurrentpage] = useState(1)
 //   console.log(suggestion);


    useEffect(() => {
        fetch(`https://seva-backend1.herokuapp.com/admin/alluser`)
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
        <h4>All Users</h4>
        <br></br>
      
      <Scroll>
      <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>role</th>
          <th>State</th>
          <th>District</th>
          <th>City</th>
          <th>Pin Code</th>
          <th>Registration date</th>
        </tr>
      </thead>
      
      <tbody>
        {currentPost &&
            currentPost.map((item, index) => {
              //console.log(item);
              return (
                <>
                <tr>
                <th scope="row">{index+1}</th>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.state}</td>
                <td>{item.city}</td>
                <td>{item.village}</td>
                <td>{item.pincode}</td>
                <td>{item.createdAt}</td>
                
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

export default AllUserTable;

const Scroll = styled.div`
max-height:600px;
overflow-y:scroll;
overflow-x:hidden;
white-space:nowrap;

`;
