import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination, Fade, CircularProgress, Typography } from "@mui/material";
import Axios from "axios";
import VehicleCard from "./VehicleCard";

const itemsPerPage = 6;
//sample data
const vehicleServisesData = [
  {
    renterId: 1,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This imprefhssive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:5,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 2,
    vehicleRegNum: "Wp11258",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:2,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 3,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:4,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 4,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:1,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 5,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:3,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 6,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:5,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 7,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:1,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 8,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:3.5,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 9,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:4.5,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 10,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:2.5,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 11,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:5,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    renterId: 12,
    vehicleRegNum: "Wp1158",
    type:"car",
    vehicleImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    rentPrice: "1500 LKR",
    avilableLocation: "Colombo",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
    rating:2,
    name: "Chamizka Niroshdvan",
    profileImg: "https://www.w3schools.com/w3images/avatar2.png",
  },
];

const GetVehicle = ({ pickupLocation, vehicleType }) => {
  const [page, setPage] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await Axios.get("http://localhost:3001/api/vehiclelist", {
          params: {
            pickupLocation,
            vehicleType,
          },
        });
        setVehicles(response.data?.response || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [pickupLocation, vehicleType]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  // sample data display const displayedItems = vehicles.slice 
  const displayedItems = vehicleServisesData.slice(
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
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Fade in timeout={500}>
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
        count={Math.ceil(vehicles.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
};

export default GetVehicle;
