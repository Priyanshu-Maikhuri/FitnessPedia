import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { HorizontalScrollbar, Loader } from './'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '70px', xs: '0' } }} p='20px'>
      <Typography variant='h4' mb={5}>
        Similar <span style={{ color: '#ff2625' }}>Target Muscle</span> exercise
      </Typography>
      <Stack
        direction='row'
        sx={{
          p: '20px',
          position: 'relative'
        }}>
        {targetMuscleExercises?.length ?
          <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />}
      </Stack>
      <Typography variant='h4' mb={5} sx={{ mt: { lg: '95px', xs: '30px' } }}>
        Similar <span style={{ color: '#ff2625' }}>Equipment</span> exercise
      </Typography>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {equipmentExercises?.length ?
          <HorizontalScrollbar data={equipmentExercises} />
          : <Loader />}
      </Box>
    </Box>
  )
}

export default SimilarExercises