import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Userguider.css";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';

export default function ProductCard() {
  return (
    <div>
      <div className='userguider'>
        <div className="userguidersub">

          <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg', marginBottom: 10 }}>
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img src={`${process.env.PUBLIC_URL}/images/rent.jpg`} alt='image' className='rentimg' />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
            </CardContent>
            <CardOverflow sx={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/RentVehicle" style={{ textDecoration: 'none', width: '100%' }}>
                <Button variant="solid" color="danger" size="lg" sx={{ width: '100%' }}>
                  Rent a Vehicle
                </Button>
              </Link>
            </CardOverflow>
          </Card>

          <div className="space1">
          </div>

          <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg', marginBottom: 10 }}>
            <CardOverflow>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img src={`${process.env.PUBLIC_URL}/images/hguider.jpg`} alt='image' className='hguider' />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
            </CardContent>
            <CardOverflow sx={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/bookGuider" style={{ textDecoration: 'none', width: '100%' }}>
                <Button variant="solid" color="danger" size="lg" sx={{ width: '100%' }}>
                  Hire a Guider
                </Button>
              </Link>
            </CardOverflow>
          </Card>

        </div>
      </div>
    </div>
  );
}
