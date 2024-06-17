import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box bgcolor='#fff3f4' mt='80px'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt="logo" width='200px' height='40px' />
        <Typography pb='40px' mt='20px' variant='h5'>
          Made with ❤️ by Priyanshu Maikhuri
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer