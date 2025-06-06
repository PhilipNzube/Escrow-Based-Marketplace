import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ProductCard = ({ image, title, subtitle, price }) => {
  return (
    <Card
      sx={{
        minWidth: 180,
        boxShadow: 3,
        borderRadius: 2,
        flexShrink: 0,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{ objectFit: "contain" }}
      />

      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
        <Typography variant="subtitle2" color="primary" fontWeight="medium" mt={1}>
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
