import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Pagination,
  Fade,
  CircularProgress,
  Typography,
} from "@mui/material";
import Axios from "axios";
import VehicleCard from "./VehicleCard";

const itemsPerPage = 6;

const GetVehicle = ({ pickupLocation, vehicleType }) => {
  const [page, setPage] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          "http://localhost:3001/api/vehiclelist",
          {
            params: {
              pickupLocation,
              vehicleType,
            },
          }
        );
        console.log("API Response:", response.data); // Log the response
        setVehicles(response.data); // Directly set the vehicles data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [pickupLocation, vehicleType]);

  const handlePageChange = (event, value) => {
    setTransition(true);
    setPage(value);
  };

  useEffect(() => {
    if (transition) {
      const timer = setTimeout(() => {
        setTransition(false);
      }, 500); // Match this duration with the transition duration

      return () => clearTimeout(timer);
    }
  }, [transition]);

  // Slice the vehicles array for pagination
  const displayedItems = vehicles.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", padding: 2 }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading vehicles...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", padding: 2 }}>
        <Typography variant="h6" color="error">
          Error fetching vehicles: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 15 }}>
      <Fade in={!transition} timeout={500}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {displayedItems.length > 0 ? (
            displayedItems.map((vehicle) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={vehicle.renterId}
                display="flex"
                justifyContent="center"
              >
                <VehicleCard {...vehicle} />
              </Grid>
            ))
          ) : (
            <Typography variant="h6">No vehicles found.</Typography>
          )}
        </Grid>
      </Fade>
      <Pagination
        count={Math.ceil(vehicles.length / itemsPerPage)} // Use vehicles.length for pagination
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
};

export default GetVehicle;
