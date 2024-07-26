import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination, Fade } from "@mui/material";
import Axios from "axios";

import VehicleCard from "./VehicleCard";

/* import profileImage1 from "./images/Vehicle/1 person.svg";
import profileImage2 from "./images/Vehicle/1 person.svg";
import profileImage3 from "./images/Vehicle/1 person.svg";

import Bicycle from "./images/RentVehiclePageImages/vehicles/bicycle.jpg";
import car from "./images/RentVehiclePageImages/vehicles/bicycle.jpg";
import van from "./images/RentVehiclePageImages/vehicles/bicycle.jpg";
 */
// Vehicle data
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

export default function Test() {
  const [page, setPage] = useState(1);
  const [vehicle, setVehicles] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    getVehicle();
  }, []);

  const getVehicle = () => {
    Axios.get("http://localhost:3001/api/vehiclelist")
      .then((Response) => {
        /* console.log(Response.data.response); */
        setVehicles(Response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const displayedItems = vehicleServisesData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ flexGrow: 1, padding: 15 }}>
      <Fade in timeout={500}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {displayedItems.map((vehicle) => (
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
          ))}
        </Grid>
      </Fade>
      <Pagination
        count={Math.ceil(vehicleServisesData.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      />
    </Box>
  );
}
