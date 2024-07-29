import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { Box, Typography, Stack, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";

const GuiderCard = ({
  guiderId,
  serviceId,
  language,
  price,
  description,
  rating,
  name,
  profileImg,
  email,
  contactNum,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/guider-reservation/${guiderId}`, {
      state: {
        guiderId,
        serviceId,
        language,
        price,
        description,
        rating,
        name,
        profileImg,
        email,
        contactNum,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "white" }}>
      <CardHeader title={name} />
      <CardMedia
        component="img"
        height="194"
        image={profileImg}
        alt="fill Image"
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
            <Typography variant="body2" color="text.secondary">
              {rating}
            </Typography>
          </Stack>
          <Typography variant="h7" color="text.primary">
            LKR{price} / Day
          </Typography>
        </Stack>
        <Box mt={2} />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Languages: {language}
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
            Book Now
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default GuiderCard;
