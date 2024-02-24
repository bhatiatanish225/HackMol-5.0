import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Payment = () => {
  return (
    <div>
         <Box
      maxWidth={400}
      height={270}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow={"10px 10px 20px #ccc"}
      padding={3}
      margin={"auto"}
      marginTop={5}
      borderRadius={5}
    >
        <Typography sx={{color:'#08456f'}} margin="normal">Enter the UPI ID</Typography>
      <TextField margin='normal' label="UPI ID" id="fullWidth"  />
      <Button sx={{background:'#189ec8', color:'white'}}>Add Amount</Button>
    </Box>
   
       
    </div>
  );
}

export default Payment
