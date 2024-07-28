import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

/* import './Userdash.css'; */

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

const Guiderdash = () => {
  const [guider, setGuider] = useState(null);

  useEffect(() => {
    const fetchGuider = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/guiders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assuming data is an array and we want the first guider
        setGuider(data[0]);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchGuider();
  }, []);

  if (!guider) {
    return <div>Loading...</div>;
  }

  return (
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
      <div className='bluecon'></div>

      <CardOverflow
        variant="solid"
        color="primary"
        sx={{
          flex: '0 0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: 'auto',
          px: 'var(--Card-padding)',
          borderRadius: 0,
        }}
      >
        <Avatar
          alt="Profile Image"
          src={guider.profileImage}
          sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
        />
        <Typography textColor="primary.200" sx={{ fontSize: '1.5rem' }}>
          Guider Account
        </Typography>
        <Typography textColor="primary.200">
          {guider.fName} {guider.lName}
        </Typography>
      </CardOverflow>

      <CardContent sx={{ gap: 1.5, minWidth: 200, width: '100%' }}>
        <div className="user-dashboard">
          <h2>Guider Dashboard</h2>
          <div className="user-info">
            <label>
              Name:
              <div style={textContainerStyle}>{guider.fName} {guider.lName}</div>
            </label>
            <label>
              Email:
              <div style={textContainerStyle}>{guider.email}</div>
            </label>
            <label>
              NIC/Passport Number:
              <div style={textContainerStyle}>{guider.NICnum}</div>
            </label>
            <label>
              Contact Number:
              <div style={textContainerStyle}>{guider.contactNum}</div>
            </label>
            <label>
              Age:
              <div style={textContainerStyle}>{guider.age}</div>
            </label>
            <label>
              Gender:
              <div style={textContainerStyle}>{guider.gender}</div>
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Guiderdash;
