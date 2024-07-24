import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Box, Typography, Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import profileImage1 from "../images/Vehicle/1 person.svg";
import profileImage2 from "../images/Vehicle/1 person.svg";
import profileImage3 from "../images/Vehicle/1 person.svg";

import Bicycle from "../images/RentVehiclePageImages/vehicles/bicycle.jpg";
import car from "../images/RentVehiclePageImages/vehicles/bicycle.jpg";
import van from "../images/RentVehiclePageImages/vehicles/bicycle.jpg";
import bus from "../images/RentVehiclePageImages/vehicles/bicycle.jpg";

// Vehicle data
const vehicleData = [
  {
    pic: profileImage1,
    name: "Chamizka Niroshdvan",
    image: Bicycle,
    description:
      "This impressive paellva is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
  },
  {
    pic: profileImage2,
    name: "Chamisdka Nirsdoshan",
    image: car,
    description:
      "This impressive paedlla is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
  },
  {
    pic: profileImage3,
    name: "Chamsdika Nirosvdshan",
    image: van,
    description:
      "This impressive paella is a perfect pardvty dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with themussels, if you like.",
  },
];

// Card component
const VehicleCard = ({ pic, name, image, description }) => (
  <Card sx={{ maxWidth: 345, backgroundColor: "white" }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          <img src={pic} style={{ width: "50%", height: "auto" }} alt="Avatar" />
        </Avatar>
      }
      title={name}
    />
    <CardMedia component="img" height="194" image={image} alt="Vehicle Image" />
    <CardContent>
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={3}>
        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
      </Stack>
      <Box mt={2} />
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Stack spacing={1} alignItems="center" width="100%">
        <Button variant="outlined">Rent Now</Button>
      </Stack>
    </CardActions>
  </Card>
);

export default function Test() {
  return (
    <Box sx={{ flexGrow: 1, padding: 15 }}>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {vehicleData.map((vehicle, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
            <VehicleCard
              pic={vehicle.pic}
              name={vehicle.name}
              image={vehicle.image}
              description={vehicle.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
