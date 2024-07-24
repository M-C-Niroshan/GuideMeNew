import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Box, Typography } from "@mui/material";

// Import images
import Diverse_Vehicle_Selection from "./images/RentVehiclePageImages/Diverse Vehicle Selection.jpg";
import Simple_Booking_Process from "./images/RentVehiclePageImages/Simple Booking Process.jpg";
import Flexible_Rental_Periods from "./images/RentVehiclePageImages/Flexible Rental Periods.jpg";
import Competitive_Pricing from "./images/RentVehiclePageImages/Competitive Pricing.jpg";
import Customer_Support from "./images/RentVehiclePageImages/Customer Support.jpg";
import Convenient_Locations from "./images/RentVehiclePageImages/Convenient Locations.jpg";
import Safe_and_Reliable_Vehicles from "./images/RentVehiclePageImages/Safe and Reliable Vehicles.jpg";
import Vehicle_Ratings from "./images/RentVehiclePageImages/Vehicle Ratings.jpg";
import Bicycle from "./images/RentVehiclePageImages/vehicles/bicycle.jpg";
import Bike from "./images/RentVehiclePageImages/vehicles/bike.jpg";
import Tuk from "./images/RentVehiclePageImages/vehicles/tuk.webp";
import Flex from "./images/RentVehiclePageImages/vehicles/flex.webp";
import Car from "./images/RentVehiclePageImages/vehicles/car.jpg";
import Van from "./images/RentVehiclePageImages/vehicles/van.jpg";
import CarRentalForm from "./CarRentalForm";
import GetVehicle from './GetVehicle';


// Services Data
const services = [
  {
    img: Diverse_Vehicle_Selection,
    title: "Diverse Vehicle Selection",
    text: "Choose from a range of vehicles, from compact cars for city travel to spacious SUVs for family adventures.",
  },
  {
    img: Simple_Booking_Process,
    title: "Simple Booking Process",
    text: "Our intuitive booking system lets you reserve your vehicle with ease. Select your dates, pick your vehicle, and confirm your booking in minutes.",
  },
  {
    img: Flexible_Rental_Periods,
    title: "Flexible Rental Periods",
    text: "Rent a vehicle for as long as you need, with customizable rental durations to fit your schedule.",
  },
  {
    img: Competitive_Pricing,
    title: "Competitive Pricing",
    text: "Benefit from clear, competitive pricing with no hidden fees. Multiple payment options are available to suit your needs.",
  },
  {
    img: Customer_Support,
    title: "24/7 Customer Support",
    text: "Our dedicated support team is available around the clock to assist with any inquiries or issues you may have.",
  },
  {
    img: Convenient_Locations,
    title: "Convenient Locations",
    text: "With multiple pickup and drop-off locations, renting a vehicle has never been more convenient.",
  },
  {
    img: Safe_and_Reliable_Vehicles,
    title: "Safe and Reliable Vehicles",
    text: "Our vehicles are regularly maintained and inspected to ensure your safety and comfort during your rental period.",
  },
  {
    img: Vehicle_Ratings,
    title: "Customer Vehicle Ratings",
    text: "Read reviews and ratings from previous customers to help you choose the best vehicle for your needs.",
  },
];

// Main Component
export default function VehicleRentHome() {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#eee8e8" }}>
      {/* Slideshow Section */}
      <Box sx={{ padding: { xs: "0px", md: "0px" }}}>
        <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
          {[Bicycle, Bike, Tuk, Flex, Car, Van].map((src, index) => (
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
          ))}
        </Slide>

        {/* Title Section */}
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
            Discover the Freedom to Explore with Our Comprehensive
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
            Vehicle Rental Services
          </Typography>
        </Box>
      </Box>

      {/* Car Rental Form Section */}
      <Box>
        <CarRentalForm />
      </Box>

      {/* Get vehicles */}
      <Box>
        <GetVehicle />
      </Box>
      

      {/* Rental Services Section */}
      <div className="rental-container">
        <div className="rental-services">
          {[
            {
              img: Diverse_Vehicle_Selection,
              title: "Diverse Vehicle Selection",
              text: "Choose from a range of vehicles, from compact cars for city travel to spacious SUVs for family adventures.",
            },
            {
              img: Simple_Booking_Process,
              title: "Simple Booking Process",
              text: "Our intuitive booking system lets you reserve your vehicle with ease. Select your dates, pick your vehicle, and confirm your booking in minutes.",
            },
            {
              img: Flexible_Rental_Periods,
              title: "Flexible Rental Periods",
              text: "Rent a vehicle for as long as you need, with customizable rental durations to fit your schedule.",
            },
            {
              img: Competitive_Pricing,
              title: "Competitive Pricing",
              text: "Benefit from clear, competitive pricing with no hidden fees. Multiple payment options are available to suit your needs.",
            },
            {
              img: Customer_Support,
              title: "24/7 Customer Support",
              text: "Our dedicated support team is available around the clock to assist with any inquiries or issues you may have.",
            },
            {
              img: Convenient_Locations,
              title: "Convenient Locations",
              text: "With multiple pickup and drop-off locations, renting a vehicle has never been more convenient.",
            },
            {
              img: Safe_and_Reliable_Vehicles,
              title: "Safe and Reliable Vehicles",
              text: "Our vehicles are regularly maintained and inspected to ensure your safety and comfort during your rental period.",
            },
            {
              img: Vehicle_Ratings,
              title: "Customer Vehicle Ratings",
              text: "Read reviews and ratings from previous customers to help you choose the best vehicle for your needs.",
            },
          ].map((service, index) => (
            <Card
              key={index}
              style={{
                width: "18rem",
                height: "100%",
                backgroundColor: "#4bccbe",
              }}
            >
              <Card.Img
                variant="top"
                src={service.img}
                style={{
                  width: "100%",
                  height:
                    service.title === "Convenient Locations" ? "65%" : "61%",
                }}
              />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Box>
  );
}
