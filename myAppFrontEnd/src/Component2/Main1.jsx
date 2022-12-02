import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { Data } from "../services/todoApi";
import Tasks from "./Tasks";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { Add } from "../services/todoApi";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "./Table";
function Main1() {
  const [message, setMessage] = useState([]);

  // const [Array, setArray] = useState(false);
  const [response, setResponse] = useState([]);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const [age, setAge] = useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
    if(event.target.value=='Table')
    {
      setCheck(!check);
    }
    else {
      setCheck(!check);
    }
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const fetch = async () => {
    let x = await Data();
    console.log("hello wrld", x);
    console.log("xtt", x);
    setResponse((prev) => (prev = x));
    return response;
  };
  useEffect(() => {
    fetch();
  }, [setResponse]);

  const AddTask = async (message) => {
    const x = await Add(message);
    fetch();
  };

  return (
<div className="uper_div">

    <div  className="Main">
      <nav class="navbar navbar-dark bg-mynav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            My App
          </a>
        </div>
      </nav>
     
      <div
        className="inner"
        style={{
          backgroundColor: "white",
          borderRadius: 23,
        }}
        >
        <div className="both"
          style={{
            marginTop: 30,
            display:"flex",
            
            
            
            
          }}
          >
          <div className="textfield">

          <TextField
            label="Enter your task"
            placeholder="Enter your task"
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            style={
              {
                
              }
            }
            />
          <Button
            style={{
              marginTop: 7,
              
            }}
            onClick={() => {
              AddTask(message);
              setMessage("");
            }}
            >
            ADD
          </Button>
            </div>
            <div style={{
              
            }} className="form_button">
        
 

          <Box sx={{ minWidth: 120}}>
        <FormControl  style={{
          width:130,
          marginTop:20,
        }}>
          {/* <InputLabel id="demo-simple-select-label">TYPE</InputLabel> */}
          <Select 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label=""
            onChange={handleChange2}>
            <MenuItem value={10}>Table</MenuItem>
            <MenuItem value={20}>ACCORD</MenuItem>      
          </Select>
        </FormControl>
      </Box>
        </div>
        </div>
        {!check && (
          <Tasks message={response} setArray={setResponse} fetchData={fetch} />
          )}
        {check && (
          <Table message={response} setArray={setResponse} fetchData={fetch} />
          )}
      </div>
    </div>
          </div>
  );
}
export default Main1;
