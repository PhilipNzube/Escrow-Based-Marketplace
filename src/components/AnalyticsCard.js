import React from "react";
import { Box, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AnalyticsCard = ({
    title,
    value,
    percentage
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
                alignItems: "flex-start",
                gap: 5,
                backgroundColor: "#ccc",
                borderRadius: 5,
                flex: {
                    xs: '100%',     // 1 per row on extra-small (mobile)
                    md: 'calc(50% - 24px)', // 2 per row on medium and up
                },
                boxSizing: 'border-box',
            }}>
            <Typography variant="body1" sx={{ color: "#000" }}>
                {title}
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#000" }}>
                    {value}
                </Typography>
                <Typography variant="body2" sx={{ color: "#000" }}>
                    {percentage}
                </Typography>
                <TrendingUpIcon />
            </Box>
        </Box>
    );
};

export default AnalyticsCard;
