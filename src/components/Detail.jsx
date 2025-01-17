import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ]

  return (
    <Stack gap='60px' sx={{ flexDirection: { md: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt="Exercise Name" loading='lazy' className='detail-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant='h4' textTransform='capitalize'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercise keeps you strong, {name} {` `}
          is one of the best exercises to target your {target}. It will help you
          to improve your mood and boost your energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} gap='24px' direction='row' alignItems='center' >
            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt="body part" style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography variant='h5' textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail