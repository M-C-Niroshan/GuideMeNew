import React, { useState } from "react";
import "./BookGuiderHome.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import GetGuider from "./GetGuider";
import {
  Box,
  Typography,
  Button,
  Grid,
  Autocomplete,
  TextField,
} from "@mui/material";
import Guiding_Services_Selection from "./images/RentVehiclePageImages/Diverse Vehicle Selection.jpg";
import Simple_Booking_Process from "./images/RentVehiclePageImages/Simple Booking Process.jpg";
import Flexible_Guide_Periods from "./images/RentVehiclePageImages/Flexible Rental Periods.jpg";
import Competitive_Pricing from "./images/RentVehiclePageImages/Competitive Pricing.jpg";
import Customer_Support from "./images/RentVehiclePageImages/Customer Support.jpg";
import Convenient_Locations from "./images/RentVehiclePageImages/Convenient Locations.jpg";
import Safe_and_Reliable_Guides from "./images/RentVehiclePageImages/Safe and Reliable Vehicles.jpg";
import Guide_Ratings from "./images/RentVehiclePageImages/Vehicle Ratings.jpg";
import Navigation from "../../Navigation/Navigation";
import image1 from "./images/BookGuiderPageImages/guider/image1.png";
import image2 from "./images/BookGuiderPageImages/guider/image2.png";
import image3 from "./images/BookGuiderPageImages/guider/image3.png";
import image4 from "./images/BookGuiderPageImages/guider/image4.jpg";
import image5 from "./images/BookGuiderPageImages/guider/image5.jpg";
import image6 from "./images/BookGuiderPageImages/guider/image6.jpg";
import Footer from "../../Footer/Footer";

const serviceCards = [
  {
    src: Guiding_Services_Selection,
    title: "Diverse Guiding Services",
    text: "Choose from a range of guiding services, from cultural tours to adventurous excursions.",
  },
  {
    src: Simple_Booking_Process,
    title: "Simple Booking Process",
    text: "Our intuitive booking system lets you reserve your guide with ease. Select your dates, pick your guide, and confirm your booking in minutes.",
  },
  {
    src: Flexible_Guide_Periods,
    title: "Flexible Guide Periods",
    text: "Book a guide for as long as you need, with customizable durations to fit your schedule.",
  },
  {
    src: Competitive_Pricing,
    title: "Competitive Pricing",
    text: "Benefit from clear, competitive pricing with no hidden fees. Multiple payment options are available to suit your needs.",
  },
  {
    src: Customer_Support,
    title: "24/7 Customer Support",
    text: "Our dedicated support team is available around the clock to assist with any inquiries or issues you may have.",
  },
  {
    src: Convenient_Locations,
    title: "Convenient Locations",
    text: "With multiple guide locations, booking a guide has never been more convenient.",
  },
  {
    src: Safe_and_Reliable_Guides,
    title: "Safe and Reliable Guides",
    text: "Our guides are thoroughly vetted and trained to ensure your safety and a memorable experience.",
  },
  {
    src: Guide_Ratings,
    title: "Customer Guide Ratings",
    text: "Read reviews and ratings from previous customers to help you choose the best guide for your needs.",
  },
];

const top100Languages = [
  { title: "Sinhala" },
  { title: "English" },
  { title: "Tamil" },
  { title: "Korean" },
  { title: "Japanese" },
  { title: "Spanish" },
  { title: "Mandarin" },
  { title: "Arabic" },
  { title: "Portuguese" },
  { title: "Russian" },
  { title: "French" },
  { title: "German" },
  { title: "Italian" },
  { title: "Dutch" },
  { title: "Turkish" },
  { title: "Swedish" },
  { title: "Norwegian" },
  { title: "Danish" },
  { title: "Polish" },
  { title: "Ukrainian" },
  { title: "Hebrew" },
  { title: "Thai" },
  { title: "Vietnamese" },
  { title: "Indonesian" },
  { title: "Malay" },
  { title: "Filipino" },
  { title: "Bengali" },
  { title: "Hindi" },
  { title: "Urdu" },
  { title: "Persian" },
  { title: "Swahili" },
  { title: "Czech" },
  { title: "Hungarian" },
  { title: "Romanian" },
  { title: "Slovak" },
  { title: "Bulgarian" },
  { title: "Serbian" },
  { title: "Croatian" },
  { title: "Slovenian" },
  { title: "Latvian" },
  { title: "Lithuanian" },
  { title: "Estonian" },
  { title: "Georgian" },
  { title: "Armenian" },
  { title: "Kazakh" },
  { title: "Uzbek" },
  { title: "Turkmen" },
  { title: "Kyrgyz" },
];

const BookGuiderHome = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showGetGuider, setShowGetGuider] = useState(false);

  const handleFindGuideClick = () => {
    if (selectedLanguage) {
      setShowGetGuider(true);
    }
  };

  return (
    <>
      <Navigation />
      <div className="navback">
        <div className="travelheadervr">
          <p className="travelheaderpvr">
            Discover the Freedom to Explore with Our Comprehensive
          </p>
        </div>
        <div className="relative w-full h-screen overflow-hidden" id="backimg">
          <img
            src={`${process.env.PUBLIC_URL}/images/navback.jpg`}
            alt="background"
            className="absolute top-1/2 left-1/2 w-full h-auto transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <Box sx={{ backgroundColor: "white" }}>
        <Box sx={{ padding: { xs: "10px", md: "0px" } }}>
          <Slide slidesToScroll={1} slidesToShow={4} indicators={true}>
            {[image1, image2, image3, image4, image5, image6].map(
              (src, index) => (
                <Box
                  key={index}
                  sx={{ textAlign: "center", padding: "0px", fontSize: "30px" }}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              )
            )}
          </Slide>
          <Box sx={{ padding: { xs: "20px", md: "5px" }, textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                color: "#000",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "Times New Roman, Times, serif",
                marginBottom: "10px",
              }}
            >
              Discover the World with Our Comprehensive
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                color: "#000",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontFamily: "Times New Roman, Times, serif",
              }}
            >
              Guiding Services
            </Typography>
          </Box>
        </Box>

        <div className="Form">
          <Box
            sx={{
              p: 2,
              bgcolor: "background.paper",
              borderRadius: 5,
              boxShadow: 5,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              maxWidth: "800px",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px",
                }}
              >
                <Autocomplete
                  options={top100Languages}
                  getOptionLabel={(option) => option.title}
                  value={selectedLanguage}
                  onChange={(event, newValue) => setSelectedLanguage(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Native Language"
                      variant="outlined"
                      fullWidth
                      sx={{ backgroundColor: "#fff" }}
                    />
                  )}
                  sx={{
                    width: "100%",
                    "& .MuiAutocomplete-inputRoot": {
                      padding: "10px",
                    },
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#0056b3",
                    width: "100%",
                    "&:hover": {
                      bgcolor: "#063f7c",
                    },
                  }}
                  onClick={handleFindGuideClick}
                >
                  Find a Guide
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>

        {showGetGuider && <GetGuider selectedLanguage={selectedLanguage} />}

        <Box sx={{ padding: { xs: "20px", md: "5px", marginTop: "180px" } }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            {serviceCards.map((service, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "45%", md: "30%" },
                  maxWidth: "300px",
                  backgroundColor: "#4bccbe",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={service.src}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "200px",
                  }}
                />
                <Box sx={{ padding: "16px" }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2">{service.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default BookGuiderHome;
