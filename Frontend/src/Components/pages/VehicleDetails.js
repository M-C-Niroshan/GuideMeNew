import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, Grid, MenuItem, InputLabel, Select, FormControl } from "@mui/material";
import { useUserContext } from './UserContext'; // Import the custom hook
import './VehicleDetails.css'; // Import the CSS file

const VehicleDetails = () => {
  const location = useLocation();
  const { state } = location;
  const vehicle = state || null;
  const { userData } = useUserContext(); // Get user data from context

  useEffect(() => {
    if (userData) {
      console.log('User Data:', userData);
    }
  }, [userData]);

  // States for user inputs
  const [pickupDate, setPickupDate] = React.useState('');
  const [pickupTime, setPickupTime] = React.useState('');
  const [handoverDate, setHandoverDate] = React.useState('');
  const [handoverTime, setHandoverTime] = React.useState('');
  const [numberOfVehicles, setNumberOfVehicles] = React.useState(1);

  if (!vehicle) return <Typography>No details found</Typography>;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({
      pickupDate,
      pickupTime,
      handoverDate,
      handoverTime,
      numberOfVehicles,
      vehicle
    });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Renter Name: {vehicle.name}
      </Typography>
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="vehicle-image"
      />
      <Box mt={2}>
        <Typography variant="h6">Description:</Typography>
        <Typography>{vehicle.description}</Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Reservation Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Pickup Date"
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Pickup Time"
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Handover Date"
                type="date"
                value={handoverDate}
                onChange={(e) => setHandoverDate(e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Handover Time"
                type="time"
                value={handoverTime}
                onChange={(e) => setHandoverTime(e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="number-of-vehicles-label">Number of Vehicles</InputLabel>
                <Select
                  labelId="number-of-vehicles-label"
                  value={numberOfVehicles}
                  onChange={(event) => setNumberOfVehicles(event.target.value)}
                  label="Number of Vehicles"
                  fullWidth
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" type="submit">
                Confirm Reservation
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default VehicleDetails;
