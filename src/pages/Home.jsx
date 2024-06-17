import { Box } from '@mui/material'
import { HeroBanner, SearchExercises, Exercises } from '../components'
import { useGymContext } from '../utils/Context'
import { useEffect } from 'react'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home