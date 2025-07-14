import { Box, Typography } from "@mui/material";

function FashionProductCard({ name, price, image, color, soldOut }) {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        p: 2,
        textAlign: "center",
        width: { xs: "100%", md: "300px" },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{ width: "100%", height: 300, objectFit: "cover", mb: 2 }}
      />
      <Typography variant="body2" sx={{ mb: 1 }}>
        {name}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
        {price}
      </Typography>
      {soldOut && (
        <Typography variant="body2" color="text.secondary">
          SOLD OUT
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
        }}
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: color,
            border: "1px solid #ccc",
            mr: 1,
          }}
        />
      </Box>
    </Box>
  );
}

export default FashionProductCard;
