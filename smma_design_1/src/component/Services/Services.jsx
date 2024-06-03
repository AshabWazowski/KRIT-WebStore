import React from "react";
import { KritFlex, KritGap } from "../../Assets/KritShared";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Social from '../../Assets/socialMedia.png';
import community from '../../Assets/community.png';
import content from '../../Assets/content.png';
import Influencer from '../../Assets/Influencer.png';
import Ads from '../../Assets/Ads.png';
import Analytics from '../../Assets/Analytics.png';
import Testimonials from "../Testimonials/Testimonials";





const Services = () => {
  const desktop = useMediaQuery("(min-width:1000px)");
  return (
    <KritFlex
      sx={{ OverflowX: "hidden" }}
      flexDirection="column"
      gap="2.5rem"
      padding="1rem 6%"
    >

    {/*<Testimonials/>*/}



      <KritFlex width="100%">
        <Typography
          variant={desktop ? "h1" : "h3"}
          textAlign="center"
          sx={{ color: "whitesmoke" }}
        >
          OUR SERVICES
        </Typography>
      </KritFlex>

      <KritGap
        width="100%"
        flexDirection={desktop ? "row" : "column"}
        gap="2rem"
      >
        <Card
          sx={{
            width: desktop ? "20%" : "80%",
            height:desktop ? '350px' : "auto",
            margin: "10px 20px",
            background: "#050408",
            filter: "drop-shadow(0 0 0.75rem #1f887c)",
          }}
        >
        <CardHeader sx={{color:'whitesmoke'}} title="Social Media Management: " />
        <CardMedia 
        image={Social}
        sx={{height:"140px" , width:'140px', margin:'auto'}}
        />
          <CardContent>
            <Typography variant="body" gutterBottom sx={{ color: "#9c9aa0" }}>
              We handle your social media accounts, creating and curating
              content that resonates with your audience to ensure consistent
              engagement and growth.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: desktop ? "20%" : "80%",
            height:desktop ? '350px' : "auto",
            margin: "10px 20px",
            background: "#050408",
            filter: "drop-shadow(0 0 0.75rem #1f887c)",
          }}
        >
          <CardHeader sx={{color:'whitesmoke'}} title="Content Creation: " />
          <CardMedia 
        image={content}
        sx={{height:"140px" , width:'140px', margin:'auto'}}
        />
          <CardContent>
            <Typography variant="body" gutterBottom sx={{ color: "#9c9aa0" }}>
            Our team of creative experts produces high-quality visuals, videos, and copy that capture your brand's voice and attract your target audience.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: desktop ? "20%" : "80%",
            height:desktop ? '350px' : "auto",
            margin: "10px 20px",
            background: "#050408",
            filter: "drop-shadow(0 0 0.75rem #1f887c)",
          }}
        >
          <CardHeader sx={{color:'whitesmoke'}} title="Paid Advertising: " />
          <CardMedia 
        image={Ads}
        sx={{height:"140px" , width:'140px', margin:'auto'}}
        />
          <CardContent>
            <Typography variant="body" gutterBottom sx={{ color: "#9c9aa0" }}>
            Maximize your reach and return on investment with our targeted ad campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter.
            </Typography>
          </CardContent>
        </Card>

      </KritGap>

      <KritGap
      width="100%"
      flexDirection={desktop ? "row" : "column"}
      gap="2rem"
    >
      <Card
        sx={{
          width: desktop ? "20%" : "80%",
          height:desktop ? '350px' : "auto",
          margin: "10px 20px",
          background: "#050408",
          filter: "drop-shadow(0 0 0.75rem #1f887c)",
        }}
      >
        <CardHeader sx={{color:'whitesmoke'}} title="Influencer Marketing: " />
        <CardMedia 
        image={Influencer}
        sx={{height:"140px" , width:'140px', margin:'auto'}}
        />
        <CardContent>
          <Typography variant="body" gutterBottom sx={{ color: "#9c9aa0" }}>
          Leverage the power of influencers to expand your brand's reach and credibility through authentic collaborations and partnerships.
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: desktop ? "20%" : "80%",
          height:desktop ? '350px' : "auto",
          margin: "10px 20px",
          background: "#050408",
          filter: "drop-shadow(0 0 0.75rem #1f887c)",
        }}
      >
        <CardHeader sx={{color:'whitesmoke'}} title="Analytics and Reporting: " />
        <CardMedia 
        image={Analytics}
        sx={{height:"140px" , width:'140px', margin:'auto'}}
        />
        <CardContent>
          <Typography variant="body" gutterBottom sx={{ color: "#9c9aa0" }}>
          Stay informed with detailed reports and insights that help you understand your audience better and refine your marketing strategies.
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: desktop ? "20%" : "80%",
          height:desktop ? '350px' : "auto",
          margin: "10px 20px",
          background: "#050408",
          filter: "drop-shadow(0 0 0.75rem #1f887c)",
        }}
      >
        <CardHeader sx={{color:'whitesmoke'}} title="Community Management: " />
        <CardMedia 
        image={community}
        sx={{height:"140px" , width:'140px', margin:'auto'}}
        />
        <CardContent>
          <Typography variant="body" gutterBottom sx={{ color: "#9c9aa0" }}>
          We engage with your audience, responding to comments and messages to build a loyal and active community around your brand.
          </Typography>
        </CardContent>
      </Card>

    </KritGap>


    
    </KritFlex>
  );
};

export default Services;
