import { Box, Typography, Stack, Button } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "150px" }}>
      <Box sx={{ width: "450px", height: "258px" }}>
        <Typography variant="h1">
          Streamline Your Exterior Cleaning Business
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Juggling estimates, scheduling, and client communication can be a
          time-consuming headache. Our user-friendly job management system helps
          you organize your business, boost efficiency, and impress your clients
        </Typography>
        <Stack direction={"row"} spacing={2} sx={{ display: "inline-block" }}>
          <Button variant="contained" sx={{ backgroundColor: "#FB610A" }}>
            Demo
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#FB610A" }}>
            Pricing
          </Button>
        </Stack>
      </Box>
      <Box marginLeft={"40px"}>
        <img
          src="https://media.istockphoto.com/id/162353089/photo/window-cleaning.jpg?s=612x612&w=0&k=20&c=HUXLEt9RI6Jr3ZxVU54K-k6rvcCIZZrPww7pUi2ow9g="
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
