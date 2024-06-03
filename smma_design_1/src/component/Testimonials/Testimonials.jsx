import React from 'react'
import { KritFlex, KritGap } from '../../Assets/KritShared'
import { useMediaQuery , Box, Typography} from '@mui/material'
import Leo from '../../Assets/Leo.jpg'
import Jane from '../../Assets/Jane.jpg'
import Mike from '../../Assets/Mike.jpg'


const Testimonials = () => {
    const desktop = useMediaQuery("(min-width:1000px)");

  return (
    <KritFlex flexDirection={desktop ? 'row' : "column"} width='100%' padding='2rem 6%' gap='2.5rem'>

    <KritFlex flexDirection="column" gap='1.5rem'>
    <Box display='flex' justifyContent='center' alignItems='center'>
    <img src={Leo} className='testimonial-img'/>
    </Box>
    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' width='50%'>
    <Typography variant='body' fontWeight='300' sx={{color:'whitesmoke'}} gutterBottom>
    "The team at Krit has transformed our social media presence. Our engagement and sales have skyrocketed!"
    </Typography>
    <Typography sx={{color:'whitesmoke'}} gutterBottom>- Leo D., Retail Business Owner</Typography>
    </Box>

    
    </KritFlex>

    <KritFlex flexDirection="column" gap='1.5rem'>

    <Box display='flex' justifyContent='center' alignItems='center'>
    <img src={Mike} className='testimonial-img'/>
    </Box>

    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' width='50%'>
    <Typography variant='body' fontWeight='300' sx={{color:'whitesmoke'}} gutterBottom>
    "Their strategies and content are top-notch. We've seen a significant increase in brand awareness and customer loyalty."
    </Typography>
    <Typography sx={{color:'whitesmoke'}} gutterBottom>- Mike S., Tech Startup Founder</Typography>
    </Box>

    </KritFlex>

    <KritFlex flexDirection="column" gap='1.5rem'>
    
    <Box display='flex' justifyContent='center' alignItems='center'>
    <img src={Jane} className='testimonial-img'/>
    </Box>
    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' width='50%'>
    <Typography variant='body' fontWeight='300' sx={{color:'whitesmoke'}} gutterBottom>
    "We love working with Krit. They understand our mission and help us connect with our community effectively."
    </Typography>
    <Typography variant='subtitle' sx={{color:'whitesmoke'}} gutterBottom>- Lisa M., Nonprofit Director</Typography>
    </Box>

    </KritFlex>
    
    
    </KritFlex>
  )
}

export default Testimonials
