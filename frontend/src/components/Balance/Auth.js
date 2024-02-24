import React, { useState } from 'react'
import { TextField,Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const [verify, setVerify] = useState('');

 

  const handleNextButton = () => {
      localStorage.setItem("verify", verify);
      navigate("/done");
  }
  return (
    <Box  maxWidth={400}
    height={270}
    display="flex"
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    boxShadow={"10px 10px 20px #ccc"}
    padding={3}
    margin={"auto"}
    marginTop={5}
    borderRadius={5}>
        <h1>Enter Passcode </h1>
      <TextField id="outlined-basic" label="Pin" variant="outlined" margin="normal" type='password'/>
      <Button onClick={handleNextButton} variant="contained" size="large" sx={{background:'linear-gradient(90deg, rgba(36,0,6,1) 0%, rgba(8,69,111,1) 16%, rgba(9,121,120,1) 50%, rgba(24,158,200,1) 100%)'}}>Validate</Button>
    </Box>
  )
}
