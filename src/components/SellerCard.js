import React from "react";
import { Box, Typography, Button } from "@mui/material";

const SellerCard = ({
    image,
    name,
}) => {
    return (

        <Box
            sx={{
                position: "relative",
                height: 400,
                minWidth: 200,
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 1,
                overflow: "hidden",
                cursor: "pointer",
                '&:hover .overlay': {
                    opacity: 1,
                },
            
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "#764D2E",
                    padding: 1,
                    borderRadius: 0,
                    opacity:0.8
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: "#fff",
                    }}
                >
                    {name}
                </Typography>
            </Box>
        </Box>
    );
};

export default SellerCard;
