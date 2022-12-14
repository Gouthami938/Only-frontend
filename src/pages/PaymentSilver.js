import BaseUD from "../components/BaseUD";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
import { useState } from "react";
import {toast } from 'react-toastify';
import { loginUser } from "../services/user-service";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
 import card from "./card.jpg";


function PaymentSilver() {


  const navigate=useNavigate();
  const user= JSON.parse(localStorage.getItem('user-info'))
  console.warn(user)
  
  function redirectp()
  {
    
    navigate('/Silverlist')
    toast.success("Payment Done Successfuly")
  }


    return (


        <div style={{
        
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:750
        
        }}>
        
        <BaseUD>
        <Container>
        
        <Row className="mt-4">
        
                {/* {JSON.stringify(data)} */}
        
        
                <Col  sm={{size:6,offset:3}}>
                <Card color="secondary" >
                <CardHeader>
        
        <h3>Fill The Card Details</h3>   
        
        <img src = {card}></img>


        
        
        </CardHeader>
           
        <CardBody>
            <Container>
            <Form>
            <FormGroup> 
           <Col >
           
               <Input type="int" name="number" id="number" placeholder="Enter Card Number"
            //    required  value={register.username} 
            //    onChange={(e) => changeDetails(e)}
              />
              </Col>
              </FormGroup>
              </Form>
              </Container>
              <Container>
              <Form>
              <FormGroup>
                <Col >
               <Input type="text" name="name" id="name" required placeholder="Enter Card Holder Name" 
        
              //  value={email}
              //  onChange={emailValidation}
               />
                </Col>
                </FormGroup>
                </Form>
                </Container>
              
              {/* <div className="col-3">
                      <label for="password">Password : </label>
                    </div>
                    <div className="col-9">
                      <input type="password" name="password" id="loginPassword" value={register.password}  {...register1("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ })} placeholder="Your password.."  onChange={(e) => changeDetails(e)}/>
                      {errors.password && <p className="error">Please enter valid Password !</p>}
                    </div> */}
           
        <Container >
             <Form>
             <FormGroup>
             <Col xs={8}>
                <Input
                  type="int"
                  name="date"
                  id="date"
                  placeholder="Expiration Date"
                  required
                />
                </Col>
               

                </FormGroup>
                </Form>
        </Container>
        <Container >
             <Form>
             <FormGroup>
             <Col xs={8}>
                <Input
                  type="int"
                  name="year"
                  id="year"
                  placeholder="Expiration Year"
                  required
                />
                </Col>
                
                </FormGroup>
                </Form>
        </Container>
        <Container >
             <Form>
             <FormGroup>
             <Col xs={4}>
                <Input
                  type="int"
                  name="code"
                  id="code"
                  placeholder="CVV(Security Code)"
                  required
                />
                </Col>
                
                </FormGroup>
                </Form>
        </Container>
             <Container className="text-center">
        
     <Button onClick={redirectp} color="dark">Confirm</Button> 
        
              </Container>
          
            </CardBody>
        </Card>
        
        </Col>
        </Row>
          </Container>
          </BaseUD>
        </div>
        
          );
        }
        export default PaymentSilver;
        
        
        