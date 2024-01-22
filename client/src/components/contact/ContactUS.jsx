import {Box,Typography,styled, TextField, Button} from "@mui/material";

import { useState, useEffect } from "react";

//axios
import axios from "axios";

const Container = styled(Box)`
    margin:100px 100px;
`;


const Heading = styled(Typography)`
    font-size:100px;
    font-family: 'Anton', sans-serif;
    color:white;
`;
const Text = styled(Typography)`
    font-size:25px;
    color:white;
    margin:20px 100px;
`;

const contactInitialValues = {
    name:'',
    email:'',
    country:'',
    city:'',
    date:new Date(),
    query:''
}

const ButtonLearn = styled(Button)`
  color:black;
  background:#C4C5CB;
  margin:50px 20px;
`; 

const ContactUs = ()=>{
    const [contact, setContact] = useState(contactInitialValues);

    const onValueChange = (e)=>{
        setContact({...contact, [e.target.name]: e.target.value})
    }
    console.log(contact);
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        const href = window.location.href.substring(
          window.location.href.lastIndexOf('#') + 1,
        );
        if (window.location.href.lastIndexOf('#') > 0) {
          document.getElementById(href)?.scrollIntoView();
        }
       }, []);

    const contactUs = async()=>{
        let result = await fetch("https://equalityindiversity.onrender.com/contact",{
            method:"post",
            body:JSON.stringify(contact),
            headers:{
                'Content-Type':"application/json"
            }
        });
        alert("Your query has been reported successfully");
        result = await result.json();
    }

    return(
        <Container data-aos="fade-in">
        <Heading>Share with us</Heading>
            <div className="contactForm">
                <input type="text" className="userInput" placeholder="Name" name="name" onChange={(e)=>onValueChange(e)}></input>
                <input type="email" className="userInput" placeholder="Email" name="email" onChange={(e)=>onValueChange(e)}></input>
                <input type="text" className="userInput" placeholder="Country" name="country" onChange={(e)=>onValueChange(e)}></input>
                <input type="text" className="userInput" placeholder="City" name="city" onChange={(e)=>onValueChange(e)}></input>
                <textarea  className="userQuery" rows={5} placeholder="Your query" name="query" onChange={(e)=>onValueChange(e)}></textarea>
                <br />
                <ButtonLearn variant="contained" onClick={()=>contactUs()}>Contact Us</ButtonLearn>
            </div>
        </Container>

    );
}

export default ContactUs;