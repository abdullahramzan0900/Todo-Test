import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Task } from "@mui/icons-material";
import { del } from "../services/todoApi";
import { update } from "../services/todoApi";
import { Data } from "../services/todoApi";

function Tasks({ message, setArray, fetchData }) {
  console.log("ancc", message);

  const [Text, Changetext] = useState("");
  const [Uptade, SetUptade] = useState(false);
  const [id, SetId] = useState(0);
  const [check, setCheck] = useState(false);


  useEffect(() => {}, [setArray]);

  const handleChnage1 = (e) => {
    Changetext(e.target.value);
  };

  const delData = async (id) => {
    let x = await del(id);
    setArray((prev) => (prev = [...x.data.data]));
    // console.log("my x", x)
    await fetchData();
  };
  const uptadeData = async (id) => {
    let x = await update(id, Text);
    console.log("what is", x.data.data);
    setArray([x.data.data]);
    await fetchData();
  };
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
  
    <div className="container">
      <div className="inner_container">
        {message &&
          message?.map((item, index) => {
            return (
              <div className="items" key={index}>
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                >
                  {Uptade && item._id === id && (
                    <TextField
                      id="outlined-required"
                      placeholder="entet tasks"
                      type="text"
                      name="message1"
                      onChange={handleChnage1}
                      defaultValue={item.task}
                    />
                  )}
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    onClick={() => {
                      SetUptade(false);
                    }}
                  >
                    {!Uptade && (
                      <TextField
                        value={item.task}
                        type="text"
                        disabled={true}
                      />
                    )}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="typo">
                      <Button
                        onClick={(e) => {
                          console.log(item._id, "aaaaa");
                          delData(item._id);
                        }}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                      >
                        DEL
                      </Button>
                      <Button
                        onClick={(e) => {
                          SetUptade(true);
                          // uptadeData(item._id);
                          SetId(item._id);
                          // setShow(true);
                        }}
                        variant="outlined"
                        startIcon={<EditIcon />}
                      >
                        Edit
                      </Button>

                      {Uptade && (
                        <CheckIcon
                          onClick={() => {
                            SetUptade(false);
                            uptadeData(item._id);
                            setCheck(true);
                          }}
                        >
                          UPTADE
                        </CheckIcon>
                      )}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Tasks;
