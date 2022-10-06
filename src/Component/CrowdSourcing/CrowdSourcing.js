import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Nav from "../nav/Nav";
import { MicNone } from "@mui/icons-material";

export default function CrowdSourcing() {
  return (
    <div>
      <Nav />
      <div
        style={{
          width: "70%",
          marginLeft: "18%",
          marginRight: "25%",
          marginTop: "3%",
        }}
      >
        <center>ADD INFORMATION OF A CROP</center>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <br />
          <div style={{ fontSize: 13 }}>*Requiered Fields</div>
          <div>
            <TextField
              required
              id="outlined-required"
              variant="filled"
              label="Crop Name"
            />
            <br />
            <TextField
              required
              id="outlined-required"
              variant="filled"
              label="Sub Crop "
            />
            <TextField label="Sub Crop " />
            <TextField label="Sub Crop " />
            <TextField label="Sub Crop " />
            <br />
            <TextField
              required
              id="outlined-required"
              variant="filled"
              label="Varieties "
            />
            <TextField label="Varities " />
            <TextField label="Varities " />
            <TextField label="Varities " />
            <br />
            <TextField
              style={{ width: "80%" }}
              multiline
              required
              id="outlined-required"
              label="Crop Description"
              variant="filled"
            />
            <br />
            <TextField
              style={{ width: "80%" }}
              multiline
              label="Soil Preparation"
              id="fullWidth"
            />
            <br />
            <TextField
              style={{ width: "80%" }}
              multiline
              label="Seeding method"
              id="fullWidth"
            />
            <br />
            <TextField
              style={{ width: "80%" }}
              multiline
              label="Water Management"
              id="fullWidth"
            />
            <br />
            <TextField
              style={{ width: "80%" }}
              multiline
              label="Harvesting"
              id="fullWidth"
            />
          </div>
        </Box>
      </div>
    </div>
  );
}
