import './App.css';
import { Box } from '@mui/material';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import HowItWorks from './component/HowItWorks/HowItWorks';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <Box>
    <Navbar/>
    <Home/>
    <Services/>
    <Pricing/>
    <HowItWorks/>
    </Box>
  );
}

export default App;
