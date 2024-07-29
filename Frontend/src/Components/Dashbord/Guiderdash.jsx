import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { useUserContext } from "../pages/UserContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Rating from "@mui/material/Rating";

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

const GuiderDash = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const { setUserData, userData } = useUserContext();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    language: "",
    price: "",
    description: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchGuiderServices = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/guide-service-status?guiderId=${userData.guiderId}`
        );
        setServices(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching guider services:", error);
        setLoading(false);
      }
    };

    fetchGuiderServices();
  }, [userData.guiderId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newService = {
      guiderId: userData.guiderId,
      language: form.language,
      price: form.price,
      description: form.description,
      rating: 0, // Assuming default rating; update if necessary
      serviseStatus: "Available", // Ensure this matches API field name
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/guide-servise",
        newService
      );
      setSuccessMessage("Service added successfully!");
      setErrorMessage(""); // Clear error message if successful
      setSnackbarOpen(true);
      // Refresh services
      const fetchServices = await axios.get(
        `http://localhost:3001/api/guide-service-status?guiderId=${userData.guiderId}`
      );
      setServices(fetchServices.data);
      
      setForm({ language: "", price: "", description: "" }); // Clear form fields after successful submission
    } catch (error) {
      if (
        error.response &&
        error.response.data.message === "Service already added for this guider."
      ) {
        setErrorMessage("You have already added this service.");
      } else {
        setErrorMessage("Error adding service. Please try again.");
      }
      setSuccessMessage(""); // Clear success message if there's an error
      setSnackbarOpen(true);
    }
  };

  const handleClear = () => {
    setForm({
      language: "",
      price: "",
      description: "",
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleLogout = () => {
    setUserData(null); // Clear user data
    navigate("/"); // Navigate to home page
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card
        size="lg"
        variant="plain"
        orientation="horizontal"
        sx={{
          textAlign: "center",
          height: "",
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
            Guider Profile
          </Typography>
          <Typography textColor="primary.200">
            {userData.fName} {userData.lName}
          </Typography>
        </CardOverflow>

        <CardContent sx={{ gap: 1.5, minWidth: 200, width: "100%" }}>
          <div className="user-dashboard">
            <h2>Guider Dashboard</h2>
            <div className="user-info">
              <label>
                Full Name:
                <div style={textContainerStyle}>
                  {userData.fName} {userData.lName}
                </div>
              </label>
              <label>
                Email:
                <div style={textContainerStyle}>{userData.email}</div>
              </label>
              <label>
                GuiderId ID:
                <div style={textContainerStyle}>{userData.guiderId}</div>
              </label>
              <label>
                Contact Number:
                <div style={textContainerStyle}>{userData.contactNum}</div>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Guider Service Form */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{ maxWidth: 600, width: "100%", padding: 4, borderRadius: "8px" }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add New Guider Service
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Language"
              variant="outlined"
              fullWidth
              margin="normal"
              name="language"
              value={form.language}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              margin="normal"
              name="price"
              value={form.price}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              required
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button type="submit" variant="contained" color="primary">
                Add Service
              </Button>
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                onClick={handleClear}
              >
                Clear
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>

      {/* Guider Services */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
          Guider Services
        </Typography>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : services.length === 0 ? (
          <Card sx={{ mb: 2, p: 2, textAlign: "center" }}>
            <Typography>No services available.</Typography>
          </Card>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: 2,
              justifyContent: "center",
              padding: "8px",
            }}
          >
            {services.map((service) => (
              <Card
                key={service.serviceId}
                sx={{
                  minWidth: 200,
                  maxWidth: 250,
                  p: 2,
                  textAlign: "center",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography>Service ID: {service.serviceId}</Typography>
                <Typography sx={{ fontSize: "1.2rem" }}>
                  Language: {service.language}
                </Typography>
                <Typography>Price: {service.price} Per Day</Typography>
                {service.serviseStatus === "Booked" && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      padding: "4px 8px",
                      borderRadius: "4px",
                      border: "2px solid #ff0000",
                      color: "#ff0000",
                      backgroundColor: "transparent",
                    }}
                  >
                    Booked
                  </Box>
                )}
                <Box sx={{ marginTop: 2 }}>
                  <Typography>Description: {service.description}</Typography>
                </Box>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
              </Card>
            ))}
          </Box>
        )}
      </Box>

      {/* Home Button */}
{/*       <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <NavLink to="/">
          <Button
            variant="outlined"
            color="primary"
            sx={{
              "--variant-borderWidth": "2px",
              borderRadius: 40,
              borderColor: "primary.500",
            }}
          >
            Home
          </Button>
        </NavLink>
      </div> */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<Logout />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      {/* Snackbar Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={errorMessage ? "error" : "success"}
        >
          {errorMessage || successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default GuiderDash;
