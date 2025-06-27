import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Button = ({
    icon,
    title,
    textColor,
    reverseOrder
}) => {
    return (
        <IconButton
            sx={{
              display: "flex",
              flexDirection: reverseOrder=="true" ? "row-reverse" : "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
              backgroundColor: "transparent",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
              borderRadius: 2,
              gap: 1,
            }}>

            {icon}
            <Typography variant="body2" sx={{ color: textColor }}>
              {title}
            </Typography>

          </IconButton>
    );
};

export default Button;
