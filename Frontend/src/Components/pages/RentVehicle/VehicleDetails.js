import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, Grid } from "@mui/material";
import axios from 'axios'; // Import axios
import { useUserContext } from '../UserContext'; // Import the custom hook
import './VehicleDetails.css'; // Import the CSS file

const VehicleDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const vehicle = state || null;
  const { userData } = useUserContext(); // Get user data from context

  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [handoverDate, setHandoverDate] = useState('');
  const [handoverTime, setHandoverTime] = useState('');
  const [pickupDateError, setPickupDateError] = useState('');
  const [pickupTimeError, setPickupTimeError] = useState('');
  const [handoverDateError, setHandoverDateError] = useState('');
  const [handoverTimeError, setHandoverTimeError] = useState('');

  useEffect(() => {
    if (userData) {
      console.log('User Data:', userData);
    }
  }, [userData]);

  if (!vehicle) return <Typography>No details found</Typography>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    let hasError = false;
    // Validate inputs
    if (!pickupDate) {
      setPickupDateError('Pickup date is required.');
      hasError = true;
    } else {
      setPickupDateError('');
    }

    if (!pickupTime) {
      setPickupTimeError('Pickup time is required.');
      hasError = true;
    } else {
      setPickupTimeError('');
    }

    if (!handoverDate) {
      setHandoverDateError('Handover date is required.');
      hasError = true;
    } else {
      setHandoverDateError('');
    }

    if (!handoverTime) {
      setHandoverTimeError('Handover time is required.');
      hasError = true;
    } else {
      setHandoverTimeError('');
    }

    if (hasError) return; // Stop submission if there are errors

    // Prepare data for API request
    const reservationData = {
      email: userData.email,
      name: userData.name,
      vehicleId: vehicle.id,
      pickupDate,
      pickupTime,
      handoverDate,
      handoverTime
    };

    try {
      // Make API request using axios
      await axios.post('https://your-api-endpoint/reservations', reservationData);

      // Navigate to a success page or another component
      navigate('/reservation-success', { state: { reservationData } });

    } catch (error) {
      console.error('Error:', error);
      // Handle API error here if needed
    }
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
                error={!!pickupDateError}
                helperText={pickupDateError}
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
                error={!!pickupTimeError}
                helperText={pickupTimeError}
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
                error={!!handoverDateError}
                helperText={handoverDateError}
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
                error={!!handoverTimeError}
                helperText={handoverTimeError}
              />
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
