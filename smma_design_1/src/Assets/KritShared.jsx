import { Box, Button } from "@mui/material";
import {styled} from "@mui/material";

export const KritFlex = styled(Box)({
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
});

export const KritGap = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:'center',
})


export const KritBtn = styled(Button)({
    color:'whitesmoke',
    padding:'1rem 1.5rem',
    borderRadius:'50px',
    "&: hover":{background:'transparent', color:'#1f887c'}    
})
export const KritBtnContained = styled(Button)({
    background:'#1f887c',
    color:'#050408',
    padding:'1rem 1.5rem', 
    borderRadius:'50px',
    "&: hover":{ background:'#1f887c',color:'#050408'}   
})