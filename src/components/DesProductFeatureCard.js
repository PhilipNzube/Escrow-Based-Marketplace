import React, { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
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
    const [open, setOpen] = useState(false);

    const handleFullscreenOpen = () => setOpen(true);
    const handleFullscreenClose = () => setOpen(false);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                xs: "column",
                md: "row",
            },
                justifyContent: "space-between",
                width: "100%",
                gap: 3,
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
                    onClick={handleFullscreenOpen}
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

            <Box sx={{ display: "flex", flexDirection: "column", width: "100%", }}>
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

            {/* Fullscreen Overlay Modal */}
            <Modal open={open} onClose={handleFullscreenClose}>
                <Box
                    onClick={handleFullscreenClose}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        bgcolor: 'rgba(0,0,0,0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'zoom-out',
                    }}
                >
                    <img
                        src={image}
                        alt="Fullscreen Preview"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            borderRadius: 8,
                        }}
                    />
                </Box>
            </Modal>
        </Box>
    );
};

export default DesProductFeatureCard;
