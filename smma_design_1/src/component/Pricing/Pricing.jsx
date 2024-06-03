import React from "react";
import { KritBtnContained, KritFlex, KritGap } from "../../Assets/KritShared";
import {
  Typography,
  Box,
  useMediaQuery,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Single from "../../Assets/1.png";
import Two from "../../Assets/2.png";
import Three from "../../Assets/3.png";
import Best from '../../Assets/Best.png';
import BottomSection from "./BottomSection";

const Pricing = () => {
  const desktop = useMediaQuery("(min-width:1000px)");

  return (
    <KritFlex
      padding={desktop ? "2rem 4%" : "0px"}
      sx={{ background: "#d7bff4", margin: "15% 0px", borderRadius: "20px" }}
    >
      <KritGap flexDirection="column" width="100%" height="100%">
        <Box padding="2rem 0px">
          <Typography
            variant={desktop ? "h1" : "h4"}
            fontWeight="300"
            sx={{ color: "#050408" }}
          >
            Supercharge your Growth
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent={desktop ? "space-evenly" : "space-between"}
          alignItems="center"
          flexDirection={desktop ? "row" : "column"}
          width="100%"
          height="80%"
        >
          <Card
            width={desktop ? "20%" : "80%"}
            sx={{
              marginBottom: "10px",
              height: "500px",
              background: "transparent",
              border: "1px solid black",
              borderRadius: "10px",
              gap:'2rem',
              display:'flex',
              justifyContent:'space-between',
              alignItems:'start',
             flexDirection:'column'
            }}
          >
            <CardHeader title="Starter Package: $499/month" />
            <CardMedia
              sx={{ height: "70px", width: "50px", margin: "auto" }}
              image={Single}
              alt="Paella dish"
            />
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-evenly"
                alignItems="start"
                flexDirection="column"
              >
                <Typography
                  variant="subtitle"
                  fontFamily="Roboto Condensed"
                  fontWeight="500"
                  sx={{ color: "black" }}
                  gutterBottom
                  marginBottom='20px'
                >
                  Perfect for testing out our services and one off request.
                </Typography>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                >
                  <KeyboardArrowRightIcon />
                  <Typography
                    variant="body2"
                    fontFamily="Roboto Condensed"
                    fontWeight="500"
                    sx={{ color: "black", margin: "auto 0px" }}
                  >
                    Social media account setup and optimization
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                >
                  <KeyboardArrowRightIcon />
                  <Typography
                    variant="body2"
                    fontFamily="Roboto Condensed"
                    fontWeight="500"
                    sx={{ color: "black", margin: "auto 0px" }}
                  >
                  10 posts per month
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                >
                  <KeyboardArrowRightIcon />
                  <Typography
                    variant="body2"
                    fontFamily="Roboto Condensed"
                    fontWeight="500"
                    sx={{ color: "black", margin: "auto 0px" }}
                  >
                  Monthly performance report
                  </Typography>
                </Box>
              </Box>
            </CardContent>

            <CardActions sx={{marginBottom:'0px'}}> 
            <KritBtnContained sx={{background:'black', color:'#d7bff4', "&:hover":{background:'black', color:'#d7bff4'}}}>Get Started</KritBtnContained>
            </CardActions>
          </Card>

          <Card
          width={desktop ? "20%" : "80%"}
          sx={{
            marginBottom: "10px",
            height: "500px",
            background: "#050408",
            border: "1px solid black",
            borderRadius: "10px",
            gap:'2rem',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'start',
           flexDirection:'column',
           color:'whitesmoke'
          }}
        >
          <CardHeader title="Growth Package: $1,200/month" />
          <CardMedia
            sx={{ height: "70px", width: "60px", margin: "auto" }}
            image={Two}
            alt="Paella dish"
          />
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="start"
              flexDirection="column"
            >
              <Typography
                variant="subtitle"
                fontFamily="Roboto Condensed"
                fontWeight="500"
                sx={{color:'whitesmoke' }}
                gutterBottom
                marginBottom='20px'
              >
                Best for Growing creaters serious about their Brand.
              </Typography>

              <Box
                display="flex"
                justifyContent="center"
                alignContent="center"
              >
                <KeyboardArrowRightIcon sx={{color:'whitesmoke'}}/>
                <Typography
                  variant="body2"
                  fontFamily="Roboto Condensed"
                  fontWeight="500"
                  sx={{ color:'whitesmoke', margin: "auto 0px" }}
                >
                Includes Starter Package features
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                alignContent="center"
              >
                <KeyboardArrowRightIcon sx={{color:'whitesmoke'}}/>
                <Typography
                  variant="body2"
                  fontFamily="Roboto Condensed"
                  fontWeight="500"
                  sx={{ color:'whitesmoke', margin: "auto 0px" }}
                >
                20 posts per month
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                alignContent="center"
              >
                <KeyboardArrowRightIcon sx={{color:'whitesmoke'}}/>
                <Typography
                  variant="body2"
                  fontFamily="Roboto Condensed"
                  fontWeight="500"
                  sx={{ color:'whitesmoke', margin: "auto 0px" }}
                >
                2 ad campaigns
                </Typography>
              </Box>

              <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <KeyboardArrowRightIcon sx={{color:'whitesmoke'}}/>
              <Typography
                variant="body2"
                fontFamily="Roboto Condensed"
                fontWeight="500"
                sx={{ color:'whitesmoke', margin: "auto 0px" }}
              >
              Bi-weekly performance reports
              </Typography>
            </Box>
            </Box>
          </CardContent>

          <CardActions sx={{marginBottom:'0px',width:'90%', display:'flex', justifyContent:'space-between'}}> 
          <KritBtnContained sx={{background:'#9947ff', color:'#d7bff4', "&:hover":{background:'#9947ff', color:'#d7bff4'}}}>Get Started</KritBtnContained>
          <img src={Best} style={{width:'70px', height:'80px', float:'right'}}/>
          </CardActions>
        </Card>

        <Card
        width={desktop ? "20%" : "80%"}
        sx={{
          marginBottom: "10px",
          height: "500px",
          background: "#9947ff",
          border: "1px solid black",
          borderRadius: "10px",
          gap:'2rem',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'start',
         flexDirection:'column'
        }}
      >
        <CardHeader title="Pro Package: $2,500/month" />
        <CardMedia
          sx={{ height: "70px", width: "50px", margin: "auto" }}
          image={Three}
          alt="Paella dish"
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-evenly"
            alignItems="start"
            flexDirection="column"
          >
            <Typography
              variant="subtitle"
              fontFamily="Roboto Condensed"
              fontWeight="500"
              sx={{ color: "black" }}
              gutterBottom
              marginBottom='20px'
            >
              Perfect for Established creaters who want serious results.
            </Typography>

            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <KeyboardArrowRightIcon />
              <Typography
                variant="body2"
                fontFamily="Roboto Condensed"
                fontWeight="500"
                sx={{ color: "black", margin: "auto 0px" }}
              >
              Includes Growth Package features
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <KeyboardArrowRightIcon />
              <Typography
                variant="body2"
                fontFamily="Roboto Condensed"
                fontWeight="500"
                sx={{ color: "black", margin: "auto 0px" }}
              >
              40 posts per month
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <KeyboardArrowRightIcon />
              <Typography
                variant="body2"
                fontFamily="Roboto Condensed"
                fontWeight="500"
                sx={{ color: "black", margin: "auto 0px" }}
              >
              5 ad campaigns
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
            >
              <KeyboardArrowRightIcon />
              <Typography
                variant="body2"
                fontFamily="Roboto Condensed"
                fontWeight="500"
                sx={{ color: "black", margin: "auto 0px" }}
              >
              Weekly performance reports
              </Typography>
            </Box>

            <Box
            display="flex"
            justifyContent="center"
            alignContent="center"
          >
            <KeyboardArrowRightIcon />
            <Typography
              variant="body2"
              fontFamily="Roboto Condensed"
              fontWeight="500"
              sx={{ color: "black", margin: "auto 0px" }}
            >
            Influencer collaborations
            </Typography>
          </Box>

          <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <KeyboardArrowRightIcon />
          <Typography
            variant="body2"
            fontFamily="Roboto Condensed"
            fontWeight="500"
            sx={{ color: "black", margin: "auto 0px" }}
          >
          Custom packages available upon request
          </Typography>
        </Box>

            

          </Box>
        </CardContent>

        <CardActions sx={{marginBottom:'0px'}}> 
        <KritBtnContained sx={{background:'black', color:'#d7bff4', "&:hover":{background:'black', color:'#d7bff4'}}}>Get Started</KritBtnContained>
        </CardActions>
      </Card>

        </Box>

        <Box width="100%" height="80%">
  <Box width='100%'>
  <BottomSection/>
  </Box>
        </Box>
      </KritGap>
    </KritFlex>
  );
};

export default Pricing;
