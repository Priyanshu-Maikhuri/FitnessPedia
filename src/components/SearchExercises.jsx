import { Box, Button, Typography, TextField, Stack } from '@mui/material'
import { HorizontalScrollbar } from './'
import { useGymContext } from '../utils/Context'

const SearchExercises = () => {
  const { search, setSearch, handleSearch, bodyParts } = useGymContext()

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { 'lg': '44px', xs: '30px' } }}
        mb='50px'
        textAlign='center'>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          height='76px'
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '5px'
            },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text' />
        <Button
          className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            textTransform: 'none',
            color: '#fff',
            width: { lg: '175px', xs: '80px' },
            fonsSize: { lg: '20px', xs: '14px' },
            position: 'absolute',
            height: '56px',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts} isBodyParts={true}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises