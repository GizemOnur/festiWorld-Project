import React from 'react';
import './SearchMenu.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchLocation from './SearchLocation';
import SearchMusic from './SearchMusic';
import DateTest from './DateTest';


function SearchMenu() {
 
    const [startDate, setStartDate] = useState(new Date());


  return <div style={{ padding: 20, alignItems: "center", textAlign: "center", marginTop: '2rem' }} >
    <div id='border-wrapper'>
      <h5 className='search-menu-title' style={{ textAlign: "center", fontFamily: "orbitron", alignItems: "center" }}> ORGANIZE YOUR TRIP WITH FESTIWORLD!</h5>
      <div id='border'></div>
    </div>



    <Container className='container-search'>

      <Form className="text-center" style={{ width: "100%" }} >
        <Row className="align-items-center-search" >
          <Col xs="auto">
          <SearchLocation />

          </Col>
          <Col xs="auto">
          <DateTest className='date-picker' selected={startDate} onChange={(date) => setStartDate(date)}  />
          </Col>
          <Col xs="auto">
         <SearchMusic />
          </Col>
          <Col xs="auto">
          
          </Col>


          <Col xs="auto">
            <Button className="button" type="submit" variant="light" className="mb-2" style={{color:"#7eb0ff", width:220, marginTop:"0.5rem", fontWeight:"bolder"}}>
              Search
            </Button>
           
          </Col>
        </Row>
      </Form>

    </Container>

  </div>;
}

export default SearchMenu;


