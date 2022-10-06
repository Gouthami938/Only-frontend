import BaseMem from "../components/BaseMem";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
import { useState } from "react";
import {toast } from 'react-toastify';
import { loginUser } from "../services/user-service";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
 import card from "./card.jpg";
import Login from "./Login";

function SubmittedForm() {

    return (

<BaseMem>

        <div 

        style={{
        
        backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:750
        
        }}>

<Container>


<Col sm={{size:10,offset:0}} >
    


<CardHeader>


</CardHeader><h3>
        <pre><i><h2><b>             Hey User Want To See More Profiles?</b></h2></i></pre>
        <pre><i><h2><b>                      And Want To Connect With Them!</b></h2></i> </pre>
                <pre>                                 Then Why Late </pre>
        <pre>                                     Come And Avail The Membership!! </pre> </h3>
            <div>
    <th>
     <img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width="250px"  className='img-fluid' alt='Sample' />
     
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_B2lerxs2J5Mwrg420VNbt1DoqRvuPb9pYti77UTSEyxKhqpH386mC1iyeBvPS08-ng&usqp=CAU' width="250px"  className='img-fluid' alt='Sample' />

     
       
        <pre><h5>Name:Mark Age:32       Name:Rita Age:30 </h5> </pre>
        {/* <Button onClick={e=>userAccept(e)}>Accept</Button> <Button >Declaine</Button> */}
         
                {/* <Button onClick={e=>userAccept(e)}>Accept</Button> <Button >Declaine</Button> */}
          </th>
            </div>



</Col>

</Container>






        </div>
        </BaseMem>


          );
        }

        export default SubmittedForm;
        
        
        