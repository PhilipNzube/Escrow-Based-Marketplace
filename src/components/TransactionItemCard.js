import React from "react";
import { Box, Typography } from "@mui/material";

const TransactionItemCard = ({
  imageSrc,
  title,
  subtitle,
  date,
  price
}) => {
  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        borderRadius: 1,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
        boxSizing: 'border-box',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
      }}
    >
      {/* Image on the Left */}
      <Box
        component="img"
        src={imageSrc}
        alt={title}
        sx={{
          width: 80,
          height: "auto",
          borderRadius: 1,
          objectFit: "cover"
        }}
      />

      {/* Text in the Middle */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: {
            xs: 'center',
            sm: 'flex-start'
          },
        }}
      >
        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {date}
        </Typography>
      </Box>

      {/* Price on the Right */}
      <Box
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'right'
          },
          mt: {
            xs: 1,
            sm: 0
          }
        }}
      >
        <Typography variant="h6" fontWeight={700} color="#000">
          {price}
        </Typography>
      </Box>
    </Box>
  );
};

export default TransactionItemCard;
