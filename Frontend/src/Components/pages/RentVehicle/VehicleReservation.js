import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, Grid, Paper, CircularProgress, Alert } from "@mui/material";
import axios from 'axios'; // Import axios
import { useUserContext } from '../UserContext'; // Import the custom hook
import './VehicleReservation.css'; // Import the CSS file

const VehicleReservation = () => {
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
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [error, setError] = useState(''); // State for error message

  useEffect(() => {
    if (userData) {
      console.log('User Data:', userData);
    }
  }, [userData]);

  if (!vehicle) return <Typography variant="h6" color="error">No details found</Typography>;

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
      travelerId: userData.travelerId,
      renterId: vehicle.renterId,
      pickupDate,
      pickupTime,
      handoverDate,
      handoverTime,
    };
    const fullReservationData = {
      travelerId: userData.travelerId,
      renterId: vehicle.renterId,
      pickupDate,
      pickupTime,
      handoverDate,
      handoverTime,
      vehicleRegNum: vehicle.vehicleRegNum,
      type: vehicle.type,
      vehicleImage: vehicle.vehicleImage,
      rentPrice: vehicle.rentPrice,
      avilableLocation: vehicle.avilableLocation,
      description: vehicle.description,
      email: userData.email,
      name: userData.name,
    };

    try {
      setLoading(true); // Show the loading spinner
      setError(''); // Clear any existing error
      console.log('Sending reservation data:', reservationData);
      // Make API request using axios
      await axios.post('https://your-api-endpoint/reservations', reservationData);

      console.log('Reservation confirmed, navigating to success page...');
      // Navigate to a success page or another component
      navigate('/vehicle-reservation-success', { state: { fullReservationData } });

    } catch (error) {
      console.error('Error:', error);
      setError('Reservation failed. Please try again later.'); // Set error message
    } finally {
      setLoading(false); // Hide the loading spinner
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <img
          src={vehicle.vehicleImage}
          alt={vehicle.name}
          className="vehicle-image"
          style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
        />

        <Typography variant="h4" gutterBottom>{vehicle.name}</Typography>

        <Box mt={2} mb={2}>
          <Typography variant="h6" gutterBottom>Description:</Typography>
          <Typography variant="body1">{vehicle.description}</Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Typography variant="h6" gutterBottom>Reservation Details</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Pickup Date"
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!pickupDateError}
                helperText={pickupDateError}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Pickup Time"
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 300 }} // 5 min
                error={!!pickupTimeError}
                helperText={pickupTimeError}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Handover Date"
                type="date"
                value={handoverDate}
                onChange={(e) => setHandoverDate(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!handoverDateError}
                helperText={handoverDateError}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Handover Time"
                type="time"
                value={handoverTime}
                onChange={(e) => setHandoverTime(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 300 }} // 5 min
                error={!!handoverTimeError}
                helperText={handoverTimeError}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" type="submit" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : 'Confirm Reservation'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default VehicleReservation;
