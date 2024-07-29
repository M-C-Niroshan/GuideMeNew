import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, Grid, Paper, CircularProgress, Alert, LinearProgress } from "@mui/material";
import axios from 'axios'; // Import axios
import { useUserContext } from '../UserContext'; // Import the custom hook
import './GuiderReservation.css'; // Import the CSS file (if needed)

const GuiderReservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const guider = state || null;
  const { userData } = useUserContext(); // Get user data from context

  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [reservationDateError, setReservationDateError] = useState('');
  const [reservationTimeError, setReservationTimeError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [error, setError] = useState(''); // State for error message
  const [countdown, setCountdown] = useState(null); // State for countdown
  const [showCountdown, setShowCountdown] = useState(false); // State to control countdown display

/*   useEffect(() => {
    if (userData) {
      console.log('User Data:', userData);
    }
  }, [userData]); */

  useEffect(() => {
    if (countdown === 0) {
      navigate('/'); // Redirect to home page
    } else if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown, navigate]);

  if (!guider) return <Typography variant="h6" color="error">No details found</Typography>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    let hasError = false;
    // Validate inputs
    if (!reservationDate) {
      setReservationDateError('Reservation date is required.');
      hasError = true;
    } else {
      setReservationDateError('');
    }

    if (!reservationTime) {
      setReservationTimeError('Reservation time is required.');
      hasError = true;
    } else {
      setReservationTimeError('');
    }

    if (hasError) return; // Stop submission if there are errors

    // Prepare data for API request
    const reservationData = {
      travelerId: userData.travelerId,
      guiderId: guider.guiderId,
      serviceId: guider.serviceId,
      reservationDate,
      reservationTime,
    };
    const fullReservationData = {
      travelerId: userData.travelerId,
      guiderId: guider.guiderId,
      serviceId: guider.serviceId,
      reservationDate,
      reservationTime,
      name: guider.name,
      profileImg: guider.profileImg,
      description: guider.description,
      rating: guider.rating,
      email: userData.email,
      name: userData.name,
      contactNum:guider.contactNum
    };

    try {
      setLoading(true); // Show the loading spinner
      setError(''); // Clear any existing error
      console.log('Sending reservation data:', reservationData);
      // Make API request using axios
      await axios.post('http://localhost:3001/api/guider-booking-details', reservationData);

      console.log('Reservation confirmed, navigating to success page...');
      // Navigate to a success page or another component
      navigate('/guider-reservation-success', { state: { fullReservationData } });

    } catch (error) {
      console.error('Error:', error);
      setError('Reservation failed. Please try again later.'); // Set error message
      setShowCountdown(true); // Show countdown and initiate redirection
      setCountdown(5); // Set countdown duration in seconds
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

        {showCountdown && (
          <Box sx={{ width: '100%', mb: 2 }}>
            <Typography variant="body1" align="center">Redirecting in {countdown} seconds...</Typography>
            <LinearProgress variant="indeterminate" />
          </Box>
        )}

        <img
          src={guider.profileImg}
          alt={guider.name}
          className="guider-image"
          style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
        />

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Typography variant="h6" gutterBottom>Reservation Details</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Guider Name"
                value={guider.name}
                fullWidth
                InputProps={{ readOnly: true }} // Make it read-only
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                value={userData.email}
                fullWidth
                InputProps={{ readOnly: true }} // Make it read-only
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Reservation Date"
                type="date"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!reservationDateError}
                helperText={reservationDateError}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Reservation Time"
                type="time"
                value={reservationTime}
                onChange={(e) => setReservationTime(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                inputProps={{ step: 300 }} // 5 min
                error={!!reservationTimeError}
                helperText={reservationTimeError}
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

export default GuiderReservation;
