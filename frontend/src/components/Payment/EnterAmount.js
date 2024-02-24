import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const EnterAmount = () => {
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
        <Typography sx={{color:'#08456f'}} margin="normal">Enter Amount</Typography>
      <TextField margin='normal' label="Amount" id="fullWidth"  />
      <Button sx={{background:'#189ec8', color:'white'}}>Pay</Button>
    </Box>
    </div>
  )
}

export default EnterAmount
