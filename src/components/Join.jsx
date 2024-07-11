import React, { useRef } from 'react'
import { Box, Stack, Button, Typography, TextField } from '@mui/material'
import emailjs from '@emailjs/browser'

const Join = () => {
     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();

          emailjs
               .sendForm('service_gzc8lwn', 'template_19athwm', form.current, {
                    publicKey: 'cYeERCoYfFxdMNMta',
               }).then(
                    () => {
                         console.log('SUCCESS!');
                    },
                    (error) => {
                         console.log('FAILED...', error.text);
                    },
               );
     };

     return (
          <Stack
               direction={{ xs: 'column', md: 'row' }}
               justifyContent='center'
               alignItems='center'
               sx={{
                    gap: { lg: '35%', md: '122px', xs: '30px' },
                    mt: { lg: '70px', xs: '40px' },
                    ml: { sm: '50px' },
                    mb: { lg: '70px', xs: '40px' },
                    px: '20px'
               }}>
               <Box position='relative'>
                    <div>
                         <Typography variant='h4' mr='15px' sx={{
                              color: 'white',
                              fontWeight: 'bold',
                              WebkitTextStroke: '2px black',
                              textStroke: '2px black', // standard property
                              display: 'inline',
                              pt: '20px'
                         }}>
                              <span style={{ borderTop: '3px solid #ff2625' }}>READY</span> TO
                         </Typography>
                         <Typography variant='h4' display='inline' fontWeight='bold'>
                              LEVEL UP
                         </Typography>
                    </div>
                    <div>
                         <Typography variant='h4' mr='15px' display='inline' fontWeight='bold'>
                              LEVEL UP
                         </Typography>
                         <Typography variant='h4' sx={{
                              color: 'white',
                              fontWeight: 'bold',
                              WebkitTextStroke: '2px black',
                              textStroke: '2px black', // standard property
                              display: 'inline'
                         }}>
                              WITH US?
                         </Typography>
                    </div>
               </Box>
               <form ref={form} onSubmit={sendEmail}>
                    <TextField
                         type="email"
                         name="user_email"
                         placeholder='Enter your Email address'
                         height='76px'
                         sx={{
                              input: {
                                   fontWeight: '600',
                                   border: 'none',
                                   borderRadius: '5px'
                              },
                              backgroundColor: '#fff',
                              borderRadius: '40px'
                         }} />
                    <Button
                         type='submit'
                         variant='contained'
                         color='error'
                         sx={{ backgroundColor: '#ff2625', height: '56px', padding: '10px' }}
                    >
                         Join Now
                    </Button>
               </form>
          </Stack>
     )
}

export default Join