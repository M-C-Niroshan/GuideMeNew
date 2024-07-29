import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const VehicleReservationSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const fullReservationData = state?.fullReservationData || {};

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper
        elevation={5}
        sx={{
          padding: 3,
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Reservation Confirmed
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={fullReservationData.vehicleImage}
                alt="Vehicle"
                sx={{ borderRadius: 2 }}
              />
              <CardContent>
                <Typography variant="h6" color="secondary">
                  Vehicle Details:
                </Typography>
                <Typography>
                  Vehicle Registration Number:{" "}
                  {fullReservationData.vehicleRegNum}
                </Typography>
                <Typography>Type: {fullReservationData.type}</Typography>
                <Typography>Price: ${fullReservationData.rentPrice}</Typography>
                <Typography>
                  Available Location: {fullReservationData.avilableLocation}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="secondary">
                  Reservation Details:
                </Typography>
                <Typography>
                  Pickup Date: {fullReservationData.pickupDate}
                </Typography>
                <Typography>
                  Pickup Time: {fullReservationData.pickupTime}
                </Typography>
                <Typography>
                  Handover Date: {fullReservationData.handoverDate}
                </Typography>
                <Typography>
                  Handover Time: {fullReservationData.handoverTime}
                </Typography>
                <Typography>Name: {fullReservationData.name}</Typography>
                <Typography>Email: {fullReservationData.email}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleReturnHome}
            sx={{ borderRadius: 20 }}
          >
            Return to Home Page
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default VehicleReservationSuccess;
