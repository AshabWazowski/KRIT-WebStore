import React from "react";
import { KritBtn, KritFlex , KritGap, KritBtnContained} from "../../Assets/KritShared";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import HomePic from '../../Assets/HomePic.png';
import dots from '../../Assets/DotsWhite.png';
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
  const desktop =  useMediaQuery("(min-width:1000px)");
  return (
    <KritGap padding="4% 6%" flexDirection="column" gap="2rem">

      <KritFlex width={desktop ? "80%" : "90%"} >
        <Typography
          variant={desktop ? "h1" : "h3"}
          textAlign="center"
          fontWeight='400'
          sx={{
            color: "whitesmoke",
          }}
        >
        Amplify Your Brand with Expert Social Media Marketing
        </Typography>
      </KritFlex>
      <KritFlex width={desktop ? "45%" : "90%"}>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            color: "#9c9aa0",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight:'38px'
          }}
          gutterBottom
        >
          Supercharge your contents with us.{" "}
          <span className="homehighlight">Engage</span>,{" "}
          <span className="homehighlight">Grow</span>,{" "} and{" "}
          <span className="homehighlight">Convert</span>,{" "}
          Your Audience with Our Proven Strategies
        </Typography>
      </KritFlex>
      <KritFlex>
      <KritBtn variant="outlined">Get Started</KritBtn>
      </KritFlex>

      <KritFlex width='80%'>
      <img src={HomePic} width='100%' style={{filter: "drop-shadow(0 0 0.75rem #9947ff)"}}/>
      </KritFlex>


      <Testimonials/>
    </KritGap>
  );
};

export default Home;
