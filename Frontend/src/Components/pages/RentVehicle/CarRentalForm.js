import React from "react";
import { TextField, Button, MenuItem, Grid, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import "./CarRentalForm.css";

const carTypes = [
  { value: "Bicycle", label: "Bicycle" },
  { value: "Bike", label: "Bike" },
  { value: "Tuk", label: "Tuk" },
  { value: "Flex", label: "Flex" },
  { value: "Car", label: "Car" },
  { value: "Van", label: "Van" },
];

const top100Films = [
  { label: "Colombo" },
  { label: "Jafna" },
  { label: "Negambo" },
  { label: "Matara" },
  { label: "Beliatta" },
  { label: "Ampara" },
  { label: "Biyagama" },
  { label: "Mawaramandiya" },
  { label: "Gampaha" },
  { label: "Kandy" },
];

const CarRentalForm = () => {
  const [carType, setCarType] = React.useState("");

  return (
    <div className="Form">
      <Box
        sx={{
          p: 2,
          bgcolor: "background.paper",
          borderRadius: 5,
          boxShadow: 5,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Pickup Location" />
              )}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <TextField
              select
              label="Vehicle Type"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              fullWidth
            >
              <MenuItem value="">Select Vehicle Type</MenuItem>
              {carTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0056b3",
                width: "100%",
                "&:hover": {
                  bgcolor: "#063f7c",
                },
              }}
            >
              Find a Vehicle
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CarRentalForm;
