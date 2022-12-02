import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Data } from "../services/todoApi";
import {
  Api,
  ContactSupportOutlined,
  UpdateRounded,
} from "@mui/icons-material";
import { MenuItemUnstyled } from "@mui/base";
import { useEffect } from "react";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import { del } from "../services/todoApi";
import { update } from "../services/todoApi";;


// import 'bootstrap/dist/css/bootstrap.min.css';


const handleClick = (param, event) => {
  event.stopPropagation();
};

function Table({ message, setArray, fetchData }) {
  const [change, setChange] = useState("ABCCC");
  useEffect(() => {
    fetchData();
  }, [change]);

  const columns = [
    {
      field: "task",
      headerName: "First name",
      width: 490,
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div>
            <p>{cellValues.row.task}</p>
          </div>
        );
      },
    },
    {
      field: "delete",
      renderCell: (cellValues) => {
        return (
          <>
            {
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => {
                  console.log("abcc", cellValues);
                  console.log(cellValues);
                  console.log("txt", cellValues.row.task);
                  del(cellValues.id);
                  setChange(cellValues.id);
                }}
              >
                del
              </Button>
            }
          </>
        );
      },
    },
  ];
  console.log("rows", message);
  const handleCellEditCommit = (e) => {
    console.log(":e", e);
    update(e.id, e.value);
  };

  return (
    <>
  
    <div className="Table">

      <Box style={
        {
          margin:"auto",
          marginTop:80,
       
        }
      } sx={{ height: 400, width: "70%" }}>
        <DataGrid
          rows={message}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          onCellEditCommit={handleCellEditCommit}
          // experimentalFeatures={{ newEditingApi: true }}npm install bootstrap
          />
      </Box>
     
       
          </div>
    </>
  );
}
export default Table;
