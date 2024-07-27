import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import IconButton from '@mui/joy/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';

import './Userdash.css';

const textContainerStyle = {
  width: '100%',
  padding: '5px',
  marginTop: 'px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
  overflow: 'hidden',
  wordWrap: 'break-word'
};

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  id: '123456',
  nic: '987654321V',
  contactNo: '+1122334455',
  image: `${process.env.PUBLIC_URL}/images/profile.jpg`,
  pickupDate: '2024-07-28',
  returnDate: '2024-08-02'
};


const vehicles = [
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/v1.jpeg`,
    type: 'Sedan',
    pickupDate: '2024-07-30',
    returnDate: '2024-08-05'
  },
  {
    id: '2',
    image: `${process.env.PUBLIC_URL}/images/v2.jpeg`,
    type: 'SUV',
    pickupDate: '2024-07-31',
    returnDate: '2024-08-06'
  }
  // Add more vehicles as needed
];

const guides = [
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '2',
    image: `${process.env.PUBLIC_URL}/images/guider2.jpeg`,
    name: 'Bob Johnson',
    contactNo: '+0987654321',
    gender: 'Male',
    age: 45
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  {
    id: '1',
    image: `${process.env.PUBLIC_URL}/images/guider1.png`,
    name: 'Alice Smith',
    contactNo: '+1234567890',
    gender: 'Female',
    age: 30
  },
  // Add more guides as needed
];

const VehicleCard = ({ vehicle, onRemove }) => (
  <Card
    sx={{
      width: '100%',
      maxWidth: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 2,
      padding: 1
    }}
  >
    <AspectRatio ratio="16/9" sx={{ width: '100%', mb: 1 }}>
      <img src={vehicle.image} alt={vehicle.type} style={{ width: '100%' }} />
    </AspectRatio>
    <Typography level="body2" textAlign="center">{vehicle.type}</Typography>
    <Typography level="body2" textAlign="center">Pickup: {vehicle.pickupDate}</Typography>
    <Typography level="body2" textAlign="center">Return: {vehicle.returnDate}</Typography>
    <IconButton
      onClick={() => onRemove(vehicle.id)}
      sx={{ mt: 1 }}
    >
      <DeleteIcon />
    </IconButton>
  </Card>
);

const GuideCard = ({ guide, onRemove }) => (
  <Card
    sx={{
      width: '100%',
      maxWidth: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 2,
      padding: 1
    }}
  >
    <AspectRatio ratio="1/1" sx={{ width: '100%', mb: 1 }}>
      <img src={guide.image} alt={guide.name} style={{ width: '100%', borderRadius: '50%' }} />
    </AspectRatio>
    <Typography level="body2" textAlign="center">{guide.name}</Typography>
    <Typography level="body2" textAlign="center">Contact: {guide.contactNo}</Typography>
    <Typography level="body2" textAlign="center">Gender: {guide.gender}</Typography>
    <Typography level="body2" textAlign="center">Age: {guide.age}</Typography>
    <IconButton
      onClick={() => onRemove(guide.id)}
      sx={{ mt: 1 }}
    >
      <DeleteIcon />
    </IconButton>
  </Card>
);

const UserCard = ({ user, onRemove }) => (
  <Card
    sx={{
      width: '100%',
      maxWidth: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 2,
      padding: 1
    }}
  >
    <AspectRatio ratio="1/1" sx={{ width: '100%', mb: 1 }}>
      <img src={user.image} alt={user.name} style={{ width: '100%', borderRadius: '50%' }} />
    </AspectRatio>
    <Typography level="body2" textAlign="center">{user.name}</Typography>
    <Typography level="body2" textAlign="center">Contact: {user.contactNo}</Typography>
    <Typography level="body2" textAlign="center">Pickup: {user.pickupDate}</Typography>
    <Typography level="body2" textAlign="center">Return: {user.returnDate}</Typography>
    <IconButton
      onClick={() => onRemove(user.id)}
      sx={{ mt: 1 }}
    >
      <DeleteIcon />
    </IconButton>
  </Card>
);

export default function FAQCard() {
  const handleRemoveVehicle = (vehicleId) => {
    // Logic to remove the vehicle from the database or state
    console.log(`Remove vehicle with ID: ${vehicleId}`);
  };

  const handleRemoveGuide = (guideId) => {
    // Logic to remove the guide from the database or state
    console.log(`Remove guide with ID: ${guideId}`);
  };

  const handleRemoveUser = (userId) => {
    // Logic to remove the user from the database or state
    console.log(`Remove user with ID: ${userId}`);
  };

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
        {/* Profile card */}
        <Avatar
          alt="Profile Image"
          src={`${process.env.PUBLIC_URL}/images/guider1.png`}
          sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
        />
        <Typography textColor="primary.200" sx={{ fontSize: '1.5rem' }}>
          Guider Account
        </Typography>
        <Typography textColor="primary.200">
          {user.name}
        </Typography>
      </CardOverflow>

      <CardContent sx={{ gap: 1.5, minWidth: 200, width: '100%', }}>
        <div className="user-dashboard">
          <h2>User Dashboard</h2>
          <div className="user-info">
            <label>
              Name:
              <div style={textContainerStyle}>{user.name}</div>
            </label>
            <label>
              Email:
              <div style={textContainerStyle}>{user.email}</div>
            </label>
            <label>
              ID:
              <div style={textContainerStyle}>{user.id}</div>
            </label>
            <label>
              NIC:
              <div style={textContainerStyle}>{user.nic}</div>
            </label>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography level="title-lg" sx={{ mt: 2 , marginBottom:20}}>
            You Rented Vehicle Details
          </Typography>
          <div className="vehicle-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {vehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} onRemove={handleRemoveVehicle} />
            ))}
          </div>

          <Typography level="title-lg" sx={{ mt: 2 }}>
            You Hired Guider Details
          </Typography>
          <div className="guide-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {guides.map(guide => (
              <GuideCard key={guide.id} guide={guide} onRemove={handleRemoveGuide} />
            ))}
          </div>

          <Typography level="title-lg" sx={{ mt: 2 }}>
            User Details
          </Typography>
          <div className="user-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <UserCard user={user} onRemove={handleRemoveUser} />
          </div>
        </div>

        <NavLink to='/'>
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
          Home
        </Button>
        </NavLink>
      </CardContent>
    </Card>
  );
}
