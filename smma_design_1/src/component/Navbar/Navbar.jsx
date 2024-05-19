import React, { useState } from 'react'
import { KritFlex, KritGap } from '../../Assets/KritShared';
import { Box, Button, IconButton, Menu, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Navbar = () => {

  const desktop =  useMediaQuery("(min-width:1000px)")
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
<KritFlex padding="1rem 3%" sx={{position:'sticky', top:'0', background:'#050408'}}>      
          
{/*DESKTOP VIEW */}
      <KritGap width="100%" sx={{color:'whitesmoke'}}>

          {/*LOGO*/}
          <KritFlex sx={{fontSize:'18px', cursor:'pointer', color:'#1f887c'}}>KRIT WebDev</KritFlex>
      
        { desktop ?
          <>
          <KritGap gap='1.5rem' sx={{color:'whitesmoke', fontWeight:'300', fontSize:'12px'}}> 
          <span style={{cursor:'pointer'}}>HOME</span>
          <span style={{cursor:'pointer'}}>SERVICES</span>
          <span style={{cursor:'pointer'}}>HOW IT WORKS</span>
          <span style={{cursor:'pointer'}}>PRICING</span>
          <span style={{cursor:'pointer'}}>CONTACT US</span>             
          </KritGap>
          <KritGap gap='1.5rem'>
          <Button sx={{color:'whitesmoke', padding:0, margin:0,"&: hover":{background:'transparent', color:'#1f887c'}}}>Sign In</Button>
          <Button variant='outlined' sx={{color:'whitesmoke', borderRadius:'5px',"&: hover":{background:'transparent', color:'#1f887c'}}}>BOOK AN INTRO CALL</Button>
          </KritGap>
          </>
        :
        <IconButton sx={{color:"whitesmoke", padding:'0.5rem'}} onClick={()=>setOpenSidebar(!openSidebar)}>
          <MenuIcon sx={{fontSize:'25px'}}/>
        </IconButton>
        }

      </KritGap>

      {/* Mobile View */}
        {!desktop && openSidebar && 
          
          <KritFlex flexDirection='column' sx={{width:"100%", height:'20%', background:'#d7bff4', position:'fixed', top:'0',transition: "all 1s ease-out" }}>
          <Box display='flex' justifyContent='end' alignItems='center' position='absolute' top='15px' right='10px'>
            <IconButton onClick={()=>setOpenSidebar(!openSidebar)}>
              <CloseIcon sx={{color:'whitesmoke', fontSize:'25px'}}/>
            </IconButton>
          </Box>
                <KritGap flexDirection='column' width="90%">
                <KritGap gap='1.5rem' sx={{color:'#050408', fontWeight:'300', fontSize:'12px'}}> 
          <span style={{cursor:'pointer'}}>HOME</span>
          <span style={{cursor:'pointer'}}>Services</span>
          <span style={{cursor:'pointer'}}>HOW IT WORKS</span>
          <span style={{cursor:'pointer'}}>PRICING</span>
          <span style={{cursor:'pointer'}}>CONTACT US</span>          
          </KritGap>
          <KritGap gap='2rem' padding='5% 0px'>
          <Button variant='outlined' sx={{color:'#050408', padding:0, margin:0,"&: hover":{background:'transparent'}}}>Sign In</Button>
          <Button variant='contained' sx={{background:'#1f887c',color:'#050408', borderRadius:'5px',"&: hover":{ background:'#1f887c',color:'#050408'}}}>BOOK AN INTRO CALL</Button>         
          </KritGap>
                </KritGap> 
          </KritFlex>

        }

</KritFlex>
  )
}

export default Navbar
