import * as React from 'react';
import "./Userguider.css";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';



export default function ProductCard() {
  return (
    <div>
    <div className='userguider'>
        <div className="userguidersub">

            <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg',marginBottom:10}}>
            <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                <img src={`${process.env.PUBLIC_URL}/images/rent.jpg`} alt='image' className='rentimg'/><img/>
                </AspectRatio>
            </CardOverflow>
            <CardContent>
            </CardContent>
            <CardOverflow>
                <Button variant="solid" color="danger" size="lg">
                Rent a Vehicle
                </Button>
            </CardOverflow>
            </Card>

            <div className="space1">
            </div>

            <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' ,marginBottom:10}}>
            <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                <img src={`${process.env.PUBLIC_URL}/images/hguider.jpg`} alt='image' className='hguider'/><img/>
                </AspectRatio>
            </CardOverflow>
            <CardContent>
            </CardContent>
            <CardOverflow>
                <Button variant="solid" color="danger" size="lg">
                Hire a Guider
                </Button>
            </CardOverflow>
            </Card>
        </div>

    </div>
    </div>
  );
}
