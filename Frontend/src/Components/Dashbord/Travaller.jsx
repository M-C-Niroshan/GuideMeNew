import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import { useUserContext } from "../pages/UserContext";
import "./Travaller.css";

const textContainerStyle = {
  width: "100%",
  padding: "5px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
  overflow: "hidden",
  wordWrap: "break-word",
};

const TravelerDashboard = () => {
  // Example userData object
  const u_Data = {
    _id: "66a4632bb0a3d660a6c0a7ed",
    fName: "John",
    lName: "Doe",
    profileImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    NICpassportNum: "A1234567",
    email: "johnx.doe@example.com",
    contactNumber: "+1234567890",
    travelerId: 3001,
  };

  // Your component or useEffect
  const { setUserData } = useUserContext(); // Get the setUserData method
  const { userData } = useUserContext();

  useEffect(() => {
    // Setting user data using the userData variable
    setUserData(u_Data);
  }, [setUserData]);
  
  // Ensure userData is not null or undefined
  if (!userData) {
    return <div>Loading...</div>; // Or some placeholder/loading UI
  }

  return (
    <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: "center",
        height: "100vh",
        width: "100%",
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <div className="bluecon"></div>

      <CardOverflow
        variant="solid"
        color="primary"
        sx={{
          flex: "0 0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "auto",
          px: "var(--Card-padding)",
          borderRadius: 0,
        }}
      >
        <Avatar
          alt="Profile Image"
          src={userData.profileImage}
          sx={{ width: 80, height: 80, mb: 2, mx: "auto" }}
        />
        <Typography textColor="primary.200" sx={{ fontSize: "1.5rem" }}>
          User Account
        </Typography>
        <Typography textColor="primary.200">
          {userData.fName} {userData.lName}
        </Typography>
      </CardOverflow>

      <CardContent sx={{ gap: 1.5, minWidth: 200, width: "100%" }}>
        <div className="user-dashboard">
          <h2>User Dashboard</h2>
          <div className="user-info">
            <label>
              Name:
              <div style={textContainerStyle}>
                {userData.fName} {userData.lName}
              </div>
            </label>
            <label>
              Email:
              <div style={textContainerStyle}>{userData.email}</div>
            </label>
            <label>
              ID:
              <div style={textContainerStyle}>{userData.travelerId}</div>
            </label>
            <label>
              NIC/Passport Number:
              <div style={textContainerStyle}>{userData.NICpassportNum}</div>
            </label>
            <label>
              Contact Number:
              <div style={textContainerStyle}>{userData.contactNumber}</div>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelerDashboard;
