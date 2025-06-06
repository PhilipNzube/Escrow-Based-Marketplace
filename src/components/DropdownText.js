import React from "react";
import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DropdownText = ({ label = "Select Option", onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
        gap: 1,
      }}
    >
      <Typography variant="body1" sx={{ color: "#000" }}>
        {label}
      </Typography>
      <ExpandMoreIcon sx={{ color: "#000" }} />
    </Box>
  );
};

export default DropdownText;
