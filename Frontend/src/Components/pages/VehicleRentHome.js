import React, { useEffect } from "react";
import "./VehicleRentHome.css";
import Navigation from "../Navigation";
import Card from "react-bootstrap/Card";

import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';

import Diverse_Vehicle_Selection from "../images/RentVehiclePageImages/Diverse Vehicle Selection.jpg";
import Simple_Booking_Process from "../images/RentVehiclePageImages/Simple Booking Process.jpg";
import Flexible_Rental_Periods from "../images/RentVehiclePageImages/Flexible Rental Periods.jpg";
import Competitive_Pricing from "../images/RentVehiclePageImages/Competitive Pricing.jpg";
import Customer_Support from "../images/RentVehiclePageImages/Customer Support.jpg";
import Convenient_Locations from "../images/RentVehiclePageImages/Convenient Locations.jpg";
import Safe_and_Reliable_Vehicles from "../images/RentVehiclePageImages/Safe and Reliable Vehicles.jpg";
import Vehicle_Ratings from "../images/RentVehiclePageImages/Vehicle Ratings.jpg";
import Bicycle from "../images/RentVehiclePageImages/vehicles/bicycle.jpg";
import Bike from "../images/RentVehiclePageImages/vehicles/bike.jpg";
import Tuk from "../images/RentVehiclePageImages/vehicles/tuk.webp";
import Flex from "../images/RentVehiclePageImages/vehicles/flex.webp";
import Car from "../images/RentVehiclePageImages/vehicles/car.jpg";
import Van from "../images/RentVehiclePageImages/vehicles/van.jpg";
import { useNavigate } from "react-router-dom";

export default function VehicleRentHome() {
  useEffect(() => {
    const rentNowButton = document.querySelector(".rent-now-button");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        rentNowButton.classList.add("sticky");
      } else {
        rentNowButton.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Navigate = useNavigate();

  return (
    <div className="Main">
      <Navigation />
      <div className="head">
        <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
{/*           <div
            style={{ textAlign: "center", padding: "0px", fontSize: "30px" }}
          >
            <img
              src={Bicycle}
              alt="First Slide"
              style={{ width: "100%", height: "auto" }}
            />
          </div> */}
{/*           <div
            style={{ textAlign: "center", padding: "0", fontSize: "30px" }}
          >
            <img
              src={Bike}
              alt="Second Slide"
              style={{ width: "100%", height: "auto" }}
            />
          </div> */}
{/*           <div
            style={{ textAlign: "center", padding: "0", fontSize: "30px" }}
          >
            <img
              src={Tuk}
              alt="Third Slide"
              style={{ width: "100%", height: "auto" }}
            />
          </div> */}
{/*           <div
            style={{ textAlign: "center", padding: "0", fontSize: "30px" }}
          >
            <img
              src={Flex}
              alt="Fourth Slide"
              style={{ width: "100%", height: "auto" }}
            />
          </div> */}
{/*           <div
            style={{ textAlign: "center", padding: "0", fontSize: "30px" }}
          >
            <img
              src={Car}
              alt="Fifth Slide"
              style={{ width: "100%", height: "auto" }}
            />
          </div> */}
{/*           <div
            style={{ textAlign: "center", padding: "0", fontSize: "30px" }}
          >
            <img
              src={Van}
              alt="Sixth Slide"
              style={{ width: "100%", height: "auto" }}
            />
          </div> */}
        </Slide>
        <div className="rental-title">
          <div className="rental-title-label">
            Discover the Freedom to Explore with Our Comprehensive
          </div>
          <div className="rental-title-label">Vehicle Rental Services</div>
        </div>
      </div>

      <div className="rental-action">
        <button className="rent-now-button" onClick={()=> Navigate("/")}>Rent Now</button>
      </div>
      
      <div className="rental-container">
        <div className="rental-services">
          <Card
            style={{
              width: "18rem",
              height: "100%",
              backgroundColor: "#4bccbe",
            }}
          >
            <Card.Img
              variant="top"
              src={Diverse_Vehicle_Selection}
              style={{ width: "100%", height: "61%" }}
            />
            <Card.Body>
              <Card.Title>Diverse Vehicle Selection</Card.Title>
              <Card.Text>
                Choose from a range of vehicles, from compact cars for city
                travel to spacious SUVs for family adventures.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              height: "100%",
              backgroundColor: "#4bccbe",
            }}
          >
            <Card.Img variant="top" src={Simple_Booking_Process} />
            <Card.Body>
              <Card.Title>Simple Booking Process</Card.Title>
              <Card.Text>
                Our intuitive booking system lets you reserve your vehicle with
                ease. Select your dates, pick your vehicle, and confirm your
                booking in minutes.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              height: "100%",
              backgroundColor: "#4bccbe",
            }}
          >
            <Card.Img variant="top" src={Flexible_Rental_Periods} />
            <Card.Body>
              <Card.Title>Flexible Rental Periods</Card.Title>
              <Card.Text>
                Rent a vehicle for as long as you need, with customizable rental
                durations to fit your schedule.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              height: "100%",
              backgroundColor: "#4bccbe",
            }}
          >
            <Card.Img variant="top" src={Competitive_Pricing} />
            <Card.Body>
              <Card.Title>Competitive Pricing</Card.Title>
              <Card.Text>
                Benefit from clear, competitive pricing with no hidden fees.
                Multiple payment options are available to suit your needs.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              height: "100%",
              backgroundColor: "#4bccbe",
            }}
          >
            <Card.Img variant="top" src={Customer_Support} />
            <Card.Body>
              <Card.Title>24/7 Customer Support</Card.Title>
              <Card.Text>
                Our dedicated support team is available around the clock to
                assist with any inquiries or issues you may have.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              height: "100%",
              backgroundColor: "#4bccbe",
            }}
          >
            <Card.Img
              variant="top"
              src={Convenient_Locations}
              style={{ width: "100%", height: "65%" }}
            />
            <Card.Body>
              <Card.Title>Convenient Locations</Card.Title>
              <Card.Text>
                With multiple pickup and drop-off locations, renting a vehicle
                has never been more convenient.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              height: "100%",
              backgroundColor: "#4bccbe",
            }}
          >
            <Card.Img variant="top" src={Safe_and_Reliable_Vehicles} />
            <Card.Body>
              <Card.Title>Safe and Reliable Vehicles</Card.Title>
              <Card.Text>
                Our vehicles are regularly maintained and inspected to ensure
                your safety and comfort during your rental period.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              height: "100%",
              backgroundColor: "#4bccbe",
            }}
          >
            <Card.Img variant="top" src={Vehicle_Ratings} />
            <Card.Body>
              <Card.Title>Customer Vehicle Ratings</Card.Title>
              <Card.Text>
                Read reviews and ratings from previous customers to help you
                choose the best vehicle for your needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
