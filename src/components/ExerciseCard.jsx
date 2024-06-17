import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography, Button } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card'
      to={`/exercise/${exercise.id}`}
      onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Button sx={{
          ml: '21px',
          color: '#fff',
          background: '#ffa9a9',
          fontSize: '14px',
          borderRadius: '24px',
          textTransform: 'capitalize'
        }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{
          ml: '21px',
          color: '#fff',
          background: '#fcc757',
          fontSize: '14px',
          borderRadius: '24px',
          textTransform: 'capitalize'
        }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        textTransform='capitalize'
        fontWeight='bold'
        fontSize='22px'
        color='#000'
        pb='10px'
        ml='21px'
        mt='11px'>
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard