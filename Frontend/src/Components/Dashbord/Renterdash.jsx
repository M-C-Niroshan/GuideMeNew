import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { storage } from '..//Login1/firebase'; // Import your configured Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const textContainerStyle = {
  width: '100%',
  padding: '5px',
  marginTop: '5px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
  overflow: 'hidden',
  wordWrap: 'break-word'
};

const vehicleImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '8px',
};

const Renterdash = () => {
  const [renter, setRenter] = useState(null);
  const [rentServices, setRentServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    vehicleRegNum: '',
    type: '',
    vehicleImage: '',
    rentPrice: '',
    avilableLocation: '',
    description: ''
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Example renter data
  const u_Data = {
    _id: "66a4632bb0a3d660a6c0a7ed",
    fName: "John",
    lName: "Doe",
    profileImage: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
    NICpassportNum: "A1234567",
    email: "johnx.doe@example.com",
    contactNumber: "+1234567890",
    renterId: 1003,
  };

  useEffect(() => {
    // Set renter data
    setRenter(u_Data);

    // Fetch vehicle rent services based on renterId
    const fetchRentServices = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/vehicle-rent-services?renterId=${u_Data.renterId}`);
        setRentServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching rent services:', error);
        setLoading(false);
      }
    };

    fetchRentServices();
  }, [u_Data.renterId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = '';
    if (image) {
      // Define a reference to the storage location
      const storageRef = ref(storage, `vehicleImages/${image.name}`);

      // Start the upload task
      const uploadTask = uploadBytesResumable(storageRef, image);

      try {
        // Create a promise to handle the upload completion
        await new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // Handle progress here if needed
            },
            (error) => {
              // Handle unsuccessful uploads
              console.error('Upload error:', error);
              reject(error);
            },
            async () => {
              // Handle successful uploads
              try {
                imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                resolve();
              } catch (error) {
                reject(error);
              }
            }
          );
        });
      } catch (error) {
        setErrorMessage('Image upload failed. Please try again.');
        setSnackbarOpen(true);
        return;
      }
    }

    const newVehicle = {
      ...form,
      renterId: u_Data.renterId,
      vehicleImage: imageUrl,
      rating: 0,
      vehicleStatus: "available",
    };

    try {
      await axios.post('http://localhost:3001/api/vehicle-rent-service', newVehicle);
      setSuccessMessage('Vehicle added successfully!');
      setSnackbarOpen(true);
      // Refresh vehicle services
      const response = await axios.get(`http://localhost:3001/api/vehicle-rent-services?renterId=${u_Data.renterId}`);
      setRentServices(response.data);
    } catch (error) {
      setErrorMessage('Error adding vehicle. Please try again.');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  if (!renter) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card
        size="lg"
        variant="plain"
        orientation="horizontal"
        sx={{
          textAlign: 'center',
          height: '100vh',
          width: '100%',
          borderRadius: 0,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto'
        }}
      >
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
            src={renter.profileImage}
            sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
          />
          <Typography textColor="primary.200" sx={{ fontSize: '1.5rem' }}>
            Renter Account
          </Typography>
          <Typography textColor="primary.200">
            {renter.fName} {renter.lName}
          </Typography>
        </CardOverflow>

        <CardContent sx={{ gap: 1.5, minWidth: 200, width: '100%' }}>
          <div className="user-dashboard">
            <h2>Renter Dashboard</h2>
            <div className="user-info">
              <label>
                Name:
                <div style={textContainerStyle}>{renter.fName} {renter.lName}</div>
              </label>
              <label>
                Email:
                <div style={textContainerStyle}>{renter.email}</div>
              </label>
              <label>
                Address:
                <div style={textContainerStyle}>{renter.address || 'N/A'}</div>
              </label>
              <label>
                NIC/Passport Number:
                <div style={textContainerStyle}>{renter.NICpassportNum}</div>
              </label>
              <label>
                Contact Number:
                <div style={textContainerStyle}>{renter.contactNumber}</div>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Vehicle Form */}
      <Box sx={{ marginTop: 4, padding: 2 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Add New Vehicle
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Vehicle Registration Number"
            variant="outlined"
            fullWidth
            margin="normal"
            name="vehicleRegNum"
            value={form.vehicleRegNum}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Type"
            variant="outlined"
            fullWidth
            margin="normal"
            name="type"
            value={form.type}
            onChange={handleInputChange}
            required
          />
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          {imagePreview ? (
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                borderRadius: '8px',
                objectFit: 'cover',
                cursor: 'pointer',
                marginBottom: '16px',
              }}
              src={imagePreview}
              alt="Image preview"
              onClick={() => document.getElementById('image-upload').click()}
            />
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => document.getElementById('image-upload').click()}
            >
              Upload Image
            </Button>
          )}
          <TextField
            label="Rent Price"
            variant="outlined"
            fullWidth
            margin="normal"
            name="rentPrice"
            value={form.rentPrice}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Available Location"
            variant="outlined"
            fullWidth
            margin="normal"
            name="avilableLocation"
            value={form.avilableLocation}
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Add Vehicle
          </Button>
        </form>
      </Box>

      {/* Vehicle List */}
      <div>
        {loading ? (
          <CircularProgress />
        ) : (
          rentServices.map((service) => (
            <Card key={service._id} sx={{ mb: 2 }}>
              <CardOverflow>
                <CardContent>
                  <img src={service.vehicleImage} alt={service.vehicleRegNum} style={vehicleImageStyle} />
                  <Typography variant="h6" sx={{ mb: 1 }}>{service.vehicleRegNum}</Typography>
                  <Typography variant="body2">Type: {service.type}</Typography>
                  <Typography variant="body2">Rent Price: {service.rentPrice}</Typography>
                  <Typography variant="body2">Location: {service.avilableLocation}</Typography>
                  <Typography variant="body2">Description: {service.description}</Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          ))
        )}
      </div>

      {/* Snackbar for messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={successMessage ? "success" : "error"}>
          {successMessage || errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Renterdash;
