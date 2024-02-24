import { Box } from '@mui/material'
import React from 'react'

export default function Balance() {
  return (
 <Box 
  maxWidth={400}
//  height={270}
 display="flex"
 flexDirection={"column"}
 alignItems={"center"}
 justifyContent={"center"}
 boxShadow={"10px 10px 20px #ccc"}
 padding={3}
 margin={"auto"}
 marginTop={5}
 borderRadius={5}>
 <h1>Available Balance</h1>
 <h3>2000Rs</h3>
 </Box>
  )
}
