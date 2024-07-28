import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination, Fade, CircularProgress, Typography } from "@mui/material";
import Axios from "axios";
import GuiderCard from "./GuiderCard"; // Assuming you have a GuiderCard component

const itemsPerPage = 6;

const GetGuider = ({ selectedLanguage }) => {
  const [page, setPage] = useState(1);
  const [guiders, setGuiders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const fetchGuiders = async () => {
      try {
        setLoading(true);
        const response = await Axios.get("http://localhost:3001/api/guide-servise", {
          params: {
            language: selectedLanguage.title, // Pass the selected language to the API
          },
        });
        console.log("API Response:", response.data); // Log the response
        setGuiders(response.data); // Directly set the guiders data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedLanguage) {
      fetchGuiders();
    }
  }, [selectedLanguage]);

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

  // Slice the guiders array for pagination
  const displayedItems = guiders.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", padding: 2 }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading guiders...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", padding: 2 }}>
        <Typography variant="h6" color="error">
          Error fetching guiders: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 15 }}>
      <Fade in={!transition} timeout={500}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {displayedItems.length > 0 ? (
            displayedItems.map((guider) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={guider.guiderId} // Use a unique key for each guider
                display="flex"
                justifyContent="center"
              >
                <GuiderCard {...guider} /> {/* Render GuiderCard component */}
              </Grid>
            ))
          ) : (
            <Typography variant="h6">No guiders found.</Typography>
          )}
        </Grid>
      </Fade>
      <Pagination
        count={Math.ceil(guiders.length / itemsPerPage)} // Use guiders.length for pagination
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
};

export default GetGuider;
