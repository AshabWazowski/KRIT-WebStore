import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { KritFlex } from '../../Assets/KritShared';
import DetailsBox from './DetailsBox';
import { Box , useMediaQuery} from '@mui/material';


const BottomSection = () => {

  const desktop = useMediaQuery("(min-width:1000px)");
  return (
    <KritFlex  padding={desktop ? "2rem 4%" : "1rem 4%"}>
    <Box display='flex' justifyContent='space-between' alignItems={desktop ? "center" : "start"} width='100%'>
    <DetailsBox
    componentName=<ControlPointIcon sx={{color:'#9947ff'}}/>
    title="Subscribe for a Month"
    subtitle="Try us out for a month and you will see there's no going back.No contracts, No Headaches, just simple credit card payments."
    />

    <DetailsBox
    componentName=<PlayCircleOutlineIcon sx={{color:'#9947ff'}}/>
    title="Make video Requests"
    subtitle="You'll get a world-class social-media marketing agent assigned to you right away.They'll help you develop your unique style and create beautiful video."
    />

    <DetailsBox
    componentName=<TrendingUpIcon sx={{color:'#9947ff'}}/>
    title="Start posting your videos tomorrow"
    subtitle="Our editors always work on the single assignment at a time and usually deliver your videos within one business day."
    />
    
    </Box>
    </KritFlex>
  )
}

export default BottomSection
