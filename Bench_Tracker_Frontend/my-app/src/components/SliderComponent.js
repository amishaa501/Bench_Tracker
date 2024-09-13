import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import Slider from 'react-slick';


const SliderComponent = () => {


    const settings = {
        // Your settings for the Slider component
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return (
        
            <Box
                sx={{
                    padding: 2,                      // Add some padding
                    backgroundColor: 'primary.main', // Adjust as needed
                    color: 'white',                  // Text color
                }}
            >
                <Typography variant="h6" component="div">
                    Bench Management System
                </Typography>
            </Box>
             
       
    );
};
export default SliderComponent;