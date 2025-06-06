import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RatingStars = ({ rating = 0, total = 6 }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      {Array.from({ length: total }).map((_, i) => (
        <Box key={i}>
          {i < rating ? (
            <StarIcon sx={{ color: "#FFD700" }} /> // gold star
          ) : (
            <StarBorderIcon sx={{ color: "#ccc" }} /> // empty star
          )}
        </Box>
      ))}
    </Box>
  );
};

export default RatingStars;
