import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';  // Import Avatar

import './Userdash.css';

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  id: '123456',
  nic: '987654321V'
};

export default function FAQCard() {
  return (
    <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <CardOverflow
        variant="solid"
        color="primary"
        sx={{
          flex: '0 0 200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 'var(--Card-padding)',
          borderRadius: 0,
        }}
      >
        {/* Profile card */}
        <Avatar 
          alt="Profile Image" 
          src={`${process.env.PUBLIC_URL}/images/profile.jpg`}        
          sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }} 
        />
        <Typography textColor="primary.200" sx={{ fontSize: '1.5rem' }}>
          User Account
        </Typography>
        <Typography textColor="primary.200">
          K.W Kavinda Chathurange
        </Typography>
      </CardOverflow>

      <CardContent sx={{ gap: 1.5, minWidth: 200 }}>
      <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <div className="user-info">
        <label>
          Name:
          <textarea readOnly value={user.name} />
        </label>
        <label>
          Email:
          <textarea readOnly value={user.email} />
        </label>
        <label>
          ID:
          <textarea readOnly value={user.id} />
        </label>
        <label>
          NIC:
          <textarea readOnly value={user.nic} />
        </label>
      </div>
    </div>

        <CardContent>
          <Typography level="title-lg">Need Some Help?</Typography>
          <Typography fontSize="sm" sx={{ mt: 0.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor.
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            '--variant-borderWidth': '2px',
            borderRadius: 40,
            borderColor: 'primary.500',
            mx: 'auto',
          }}
        >
          See FAQ
        </Button>
      </CardContent>
    </Card>
  );
}
