import { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { BodyPartCard, ExerciseCard } from './'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
     const { scrollPrev } = useContext(VisibilityContext)

     return (
          <Typography onClick={() => scrollPrev()} className='left-arrow'>
               <img src={LeftArrowIcon} alt="Left Arrow" />
          </Typography>
     )
}

const RightArrow = () => {
     const { scrollNext } = useContext(VisibilityContext)

     return (
          <Typography onClick={() => scrollNext()} className='right-arrow'>
               <img src={RightArrowIcon} alt="Right Arrow" />
          </Typography>
     )
}

const HorizontalScrollbar = ({ data, isBodyParts }) => {
     return (
          <Box sx={{ overflowX: 'hidden', width: '100%' }}>
               <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                    {data.map((item) => (
                         <Box
                              key={item.id || item}
                              title={item.id || item}
                              itemID={item.id || item}
                              m='0 40px'
                              sx={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                         >
                              {isBodyParts ? <BodyPartCard item={item} />
                                   : <ExerciseCard exercise={item} />}
                         </Box>
                    ))}
               </ScrollMenu>
          </Box>
     )
}

export default HorizontalScrollbar