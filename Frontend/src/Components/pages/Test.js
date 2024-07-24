import React, { useState,useEffect } from "react";
import { Box, Grid, Pagination, Fade } from "@mui/material";
import VehicleCard from "./VehicleCard";

import profileImage1 from "../images/Vehicle/1 person.svg";
import profileImage2 from "../images/Vehicle/1 person.svg";
import profileImage3 from "../images/Vehicle/1 person.svg";

import Bicycle from "../images/RentVehiclePageImages/vehicles/bicycle.jpg";
import car from "../images/RentVehiclePageImages/vehicles/bicycle.jpg";
import van from "../images/RentVehiclePageImages/vehicles/bicycle.jpg";

import { useUserContext } from './UserContext'; // Import the custom hook

// Vehicle data
const vehicleData = [
  { id: 1, pic: profileImage1, name: "Chamizka Niroshdvan", image: Bicycle, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 2, pic: profileImage2, name: "Chamisdka Nirsdoshan", image: car, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 3, pic: profileImage3, name: "Chamsdika Nirosvdshan", image: van, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 4, pic: profileImage1, name: "Chamizka Niroshdvan", image: Bicycle, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 5, pic: profileImage2, name: "Chamisdka Nirsdoshan", image: car, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 6, pic: profileImage3, name: "Chamsdika Nirosvdshan", image: van, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 7, pic: profileImage1, name: "Chamizka Niroshdvan", image: Bicycle, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 8, pic: profileImage2, name: "Chamisdka Nirsdoshan", image: car, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 9, pic: profileImage3, name: "Chamsdika Nirosvdshan", image: van, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 10, pic: profileImage1, name: "Chamizka Niroshdvan", image: Bicycle, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 11, pic: profileImage2, name: "Chamisdka Nirsdoshan", image: car, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
  { id: 12, pic: profileImage3, name: "Chamsdika Nirosvdshan", image: van, description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like." },
];

export default function Test() {
  const { setUserData } = useUserContext(); // Get the setUserData method
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const displayedItems = vehicleData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(() => {
    // Setting user data for temporary purposes
    setUserData({ name: 'John Doe', email: 'john@example.com' });
  }, [setUserData]);

  return (
    <Box sx={{ flexGrow: 1, padding: 15 }}>
      <Fade in timeout={500}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {displayedItems.map((vehicle) => (
            <Grid item xs={12} sm={6} md={4} key={vehicle.id} display="flex" justifyContent="center">
              <VehicleCard {...vehicle} />
            </Grid>
          ))}
        </Grid>
      </Fade>
      <Pagination count={Math.ceil(vehicleData.length / itemsPerPage)} page={page} onChange={handlePageChange} sx={{ mt: 2, display: 'flex', justifyContent: 'center' }} />
    </Box>
  );
}
