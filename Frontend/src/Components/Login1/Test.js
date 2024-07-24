import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SignupForm = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and image upload logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Username" variant="outlined" required />
        <TextField label="Email" type="email" variant="outlined" required />
        <TextField label="Password" type="password" variant="outlined" required />
        
        <Button
          variant="contained"
          component="label"
        >
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
        {image && <p>{image.name}</p>}
        {imagePreview && (
          <Box
            component="img"
            sx={{
              height: 200,
              width: 200,
              borderRadius: '50%',
              objectFit: 'cover',
              mt: 2
            }}
            src={imagePreview}
            alt="Image preview"
          />
        )}

        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>
    </form>
  );
};

export default SignupForm;
