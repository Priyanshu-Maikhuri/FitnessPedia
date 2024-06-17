import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
import { useGymContext } from '../utils/Context'

const BodyPartCard = ({ item }) => {
     const { selectedBodyPart, setSelectedBodyPart } = useGymContext();

     return (
          <Stack
               type='button'
               alignItems='center'
               justifyContent='center'
               className='bodyPart-card'
               sx={{
                    borderTop: selectedBodyPart === item ? '4px solid #ff2625' : '',
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '170px',
                    height: '182px',
                    gap: '47px',
                    cursor: 'pointer'
               }}
               onClick={() => {
                    setSelectedBodyPart(item)
                    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
               }}
          >
               <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
               <Typography
                    fontSize='24px'
                    fontWeight='bold'
                    textTransform='capitalize'
                    color='#3A1212'>
                    {item}
               </Typography>
          </Stack>
     )
}

export default BodyPartCard