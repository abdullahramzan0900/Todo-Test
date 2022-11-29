import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import Tasks from "./Tasks";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Data } from "../services/todoApi";
import {Add}  from "../services/todoApi";
function Main1() {
  const [message, setMessage] = useState([]);
  
  // const [Array, setArray] = useState(false);
  const [response, setResponse] = useState([]);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const fetch = async() => {
    let x = await Data();
    console.log("hello wrld", x);
    setResponse(prev => prev=x); 
  }
  useEffect(() => {
   
    fetch();
  }, [setResponse]);
 

  const AddTask = async (message) => {

   const x = await Add(message);
  fetch();
  }
 
  return (
    <div className="Main" >
       
  <div className="inner" style={{
   backgroundColor:"white",
   borderRadius:23
    
  }}>
    <div style={{
      marginTop:40
    }}>
      <TextField
      label="Enter your task"
      placeholder="Enter your task"
      type="text"
      id="message"
      name="message"
      onChange={handleChange}
      value={message}
      />

        
      <Button style={{
     marginTop:7 
      }}
        onClick={() => {
          AddTask(message);
          setMessage('');
        }}
        >
        ADD
      </Button>
          </div>
      <Tasks message={response} setArray={setResponse} fetchData={fetch} />

   </div>
        </div>
  );
}
export default Main1;
