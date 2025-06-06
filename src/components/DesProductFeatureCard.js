import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import RatingStars from "./RatingStars";

const DesProductFeatureCard = ({
    image,
    title,
    price,
    rating = 0,
    totalStars = 6,
    onAddToCart,
    onFullscreen,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                gap:3,
            }}
        >
            {/* Image Box */}
            <Box
                sx={{
                    position: "relative",
                    height: 200,
                    width: "100%",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 1,
                    overflow: "hidden",
                    cursor: "pointer",
                    '&:hover .overlay': {
                        opacity: 1,
                    },
                    mb: 3,
                }}
            >
                {/* Fullscreen icon */}
                <Button
                    onClick={onFullscreen}
                    sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        minWidth: "auto",
                        p: 1,
                        bgcolor: "rgba(255,255,255,0.7)",
                        borderRadius: 1,
                        '&:hover': {
                            bgcolor: "rgba(255,255,255,0.9)",
                        },
                    }}
                >
                    <FullscreenIcon sx={{ color: "#333" }} />
                </Button>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column",width: "100%", }}>
                {/* Title & Button */}
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography variant="h6" sx={{ color: "#000", mb: 1 }}>
                        {title}
                    </Typography>


                </Box>

                {/* Rating & Price */}
                <RatingStars rating={rating} total={totalStars} />
                <Typography variant="body1" sx={{ color: "#000", mt: 1, mb: 2 }}>
                    See Details
                </Typography>
                <Typography variant="body1" sx={{ color: "#000", mb: 3 }}>
                    {price}
                </Typography>
            </Box>
        </Box>
    );
};

export default DesProductFeatureCard;
