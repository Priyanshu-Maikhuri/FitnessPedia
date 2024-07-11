import { Box } from '@mui/material'
import { HeroBanner, SearchExercises, Exercises, Join } from '../components'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
      <Join />
    </Box>
  )
}

export default Home