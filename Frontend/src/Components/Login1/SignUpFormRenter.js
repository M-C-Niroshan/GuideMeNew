import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Dropdown from '../SpecialComponents/DropdownVehicle';
import { Box, Button } from '@mui/material';
import './SignUpFormRenter.css'

const SignUpForm = () => {
  const [image1, setImage1] = useState(null);
  const [imagePreview1, setImagePreview1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [imagePreview2, setImagePreview2] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    nic: '',
    age: '',
    mobile: '',
    price: '',
    description: ''
  });

  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview1(previewUrl);
    } else {
      setImagePreview1(null);
    }
  };

  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    setImage2(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview2(previewUrl);
    } else {
      setImagePreview2(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    if (image1) {
      formDataToSend.append('image1', image1);
    }
    if (image2) {
      formDataToSend.append('image2', image2);
    }
    console.log([...formDataToSend]);
    // Perform further actions like sending data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='headingDiv'>
      <h1 className='heading1'>
            Create Account
        </h1>
        </div>

      <div className='subm' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2%', marginLeft: '-52%', marginTop: '8%'}}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            id="image-upload-1"
            type="file"
            accept="image/*"
            onChange={handleImageChange1}
            style={{ display: 'none' }}
          />
          {imagePreview1 ? (
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer',
                marginRight: '10px',
              }}
              src={imagePreview1}
              alt='Image preview'
              onClick={() => document.getElementById('image-upload-1').click()}
            />
          ) : (
            <FaUserCircle 
              size={100}
              color="#ccc"
              style={{ cursor: 'pointer', marginRight: '10px' }}
              onClick={() => document.getElementById('image-upload-1').click()}
            />
          )}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => document.getElementById('image-upload-1').click()}
            sx={{
              marginTop: '10%',
              width: '120px'
            }}
            className='btnPic'
          >
            Set User Image
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '15px' }}>
          <input
            id="image-upload-2"
            type="file"
            accept="image/*"
            onChange={handleImageChange2}
            style={{ display: 'none' }}
          />
          {imagePreview2 ? (
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                borderRadius: '20%',
                objectFit: 'cover',
                cursor: 'pointer',
                marginRight: '10px',
              }}
              src={imagePreview2}
              alt='Image preview'
              onClick={() => document.getElementById('image-upload-2').click()}
            />
          ) : (
            <FaUserCircle 
              size={100}
              color="#ccc"
              style={{ cursor: 'pointer', marginRight: '10px' }}
              onClick={() => document.getElementById('image-upload-2').click()}
            />
          )}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => document.getElementById('image-upload-2').click()}
            sx={{ fontSize: '12px',
              marginTop: '10%',
              width: '120px'
            }}
            className='btnPic'
          >
            Set Vehicle Image
          </Button>
        </div>
      </div>
      <div className='sub1'>
        <div className='minisub1'>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className='tx1'
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className='tx2'
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="nic"
            placeholder="NIC number"
            className='tx4'
            value={formData.nic}
            onChange={handleInputChange}
          />
          <Dropdown/>
          <input
            type="text"
            name="Regno"
            placeholder="Vehicle Reg No"
            className='tx5'
            value={formData.Regno}
            onChange={handleInputChange}
          />
          
          <input
            type="text"
            name="ServiceArea"
            placeholder="Service Area"
            className='tx5'
            value={formData.ServiceArea}
            onChange={handleInputChange}
          />
        </div>
        <div className='minisub2'>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className='tx7'
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className='tx3'
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile number"
            className='tx6'
            value={formData.mobile}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="adrs"
            placeholder="Address"
            className='tx8'
            value={formData.adrs}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price for 1 day"
            className='tx8'
            value={formData.price}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Tell about your vehicle..."
            maxLength={230}
            className='tx9'
            value={formData.description}
            onChange={handleInputChange}
          />
          
          <button className='sign1' type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
