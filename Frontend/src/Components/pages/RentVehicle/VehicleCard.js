import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { Box, Typography, Stack, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";

  
  const VehicleCard = ({ renterId, vehicleRegNum, type, vehicleImage, rentPrice, avilableLocation, description, rating, name, profileImg}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/reservation/${renterId}`, { state: { renterId, vehicleRegNum, type, vehicleImage, rentPrice, avilableLocation, description, rating, name } });
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "white" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img
              src={profileImg}
              style={{ width: "50%", height: "auto" }}
              alt="Avatar"
            />
          </Avatar>
        }
        title={name}
      />
      <CardMedia component="img" height="194" image={vehicleImage} alt="Vehicle Image" />
      <CardContent>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={3}>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </Stack>
        <Box mt={2} />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack spacing={1} alignItems="center" width="100%">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              padding: "8px 16px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
              borderRadius: "8px",
              boxShadow: "none",
              textTransform: "none",
            }}
            onClick={handleClick}
          >
            Rent Now
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default VehicleCard;
