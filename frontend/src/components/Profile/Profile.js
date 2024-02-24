import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box } from '@mui/material';
const Profile = () => {
  return (
    <div>
        <Box sx={{background:'linear-gradient(90deg, rgba(18,0,36,1) 0%, rgba(13,27,31,1) 0%, rgba(8,69,111,1) 16%, rgba(9,121,120,1) 50%, rgba(24,158,200,1) 100%)'}}>

       <Card sx={{ maxWidth: 345, margin:'40px', maxHeight:'400px'}}>
      <PersonOutlineIcon sx={{width:'100px'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Reyansh
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, margin:'40px', maxHeight:'400px'}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Box>
    </div>
  )
}

export default Profile
