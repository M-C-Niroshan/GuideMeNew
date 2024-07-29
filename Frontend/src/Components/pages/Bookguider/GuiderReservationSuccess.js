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

const GuiderReservationSuccess = () => {
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
                image={fullReservationData.profileImg}
                alt="Guider"
                sx={{ borderRadius: 2 }}
              />
              <CardContent>
                <Typography variant="h6" color="secondary">
                  Guider Details:
                </Typography>
                <Typography>Name: {fullReservationData.name}</Typography>
                <Typography>Email: {fullReservationData.email}</Typography>
                <Typography>
                  ContactNum: {fullReservationData.contactNum}
                </Typography>
                <Typography>
                  Description: {fullReservationData.description}
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
                  Reservation Date: {fullReservationData.reservationDate}
                </Typography>
                <Typography>
                  Reservation Time: {fullReservationData.reservationTime}
                </Typography>
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

export default GuiderReservationSuccess;
