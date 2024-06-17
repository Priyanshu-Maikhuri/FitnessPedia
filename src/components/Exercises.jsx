import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { ExerciseCard } from './'
import { useGymContext } from '../utils/Context'

const Exercises = () => {
  const {exercises, currentPage, paginate} = useGymContext()

  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  return (
    <Box id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '150px' } }}
        flexWrap='wrap' justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            count={Math.ceil(exercises.length / exercisesPerPage)}
            size='large'
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises