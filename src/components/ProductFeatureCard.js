import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import RatingStars from "./RatingStars";

const ProductFeatureCard = ({
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
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          position: "relative",
          height: 400,
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

      {/* Title & Button */}
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ color: "#000", mb: 3 }}>
          {title}
        </Typography>

        <Button
          variant="contained"
          endIcon={<ShoppingCartIcon />}
          onClick={onAddToCart}
          sx={{
            backgroundColor: '#764D2E',
            '&:hover': {
              backgroundColor: '#5d3c24',
            },
            borderRadius: 0.5,
            color: '#fff',
            height: 'fit-content',
          }}
        >
          Add to cart
        </Button>
      </Box>

      {/* Rating & Price */}
      <RatingStars rating={rating} total={totalStars} />
      <Typography variant="h5" sx={{ color: "#000", mt: 2, mb: 3 }}>
        {price}
      </Typography>
    </Box>
  );
};

export default ProductFeatureCard;
