import React from "react";
import { Box, Typography } from "@mui/material";

const TransactionCard = ({
    title,
    value
}) => {
    return (
        <Box
            sx={{
                mt: 3,
                padding: 4,
                width: '100%',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                backgroundColor: "transparent",
                borderRadius: 1,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
                flex: {
                    xs: '100%',     // 1 per row on extra-small (mobile)
                    md: 'calc(50% - 24px)', // 2 per row on medium and up
                },
                boxSizing: 'border-box',
            }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#000" }}>
                {value}
            </Typography>
            <Typography variant="body1" sx={{ color: "#000" }}>
                {title}
            </Typography>

        </Box>
    );
};

export default TransactionCard;
