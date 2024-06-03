import React from "react";
import { Box, Typography } from "@mui/material";

const DetailsBox = ({ componentName , title, subtitle}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="start" gap="1rem" flexDirection='column' width='20%'>
      <Box>{componentName}</Box>
      
      <Box>
      <Typography
        variant="subtitle"
        fontWeight="500"
        sx={{ color: "black" }}
        gutterBottom
      >
        {title}
      </Typography>
      </Box>

      <Box>
      <Typography
        variant="body2"
        fontWeight="400"
        sx={{ color: "black" }}
        gutterBottom
      >
        {subtitle}
      </Typography>
      </Box>
    </Box>
  );
};

export default DetailsBox;
