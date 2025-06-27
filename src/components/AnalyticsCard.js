import React from "react";
import { Box, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BgCard from "./BgCard";

const AnalyticsCard = ({
    icon,
    title,
    value,
    percentage,
    chartColor
}) => {
    return (
        <BgCard
            content={
                <>
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
                            backgroundColor: "transparent",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
                            borderRadius: 2,
                            flex: {
                                xs: '100%',     // 1 per row on extra-small (mobile)
                                md: 'calc(50% - 24px)', // 2 per row on medium and up
                            },
                            boxSizing: 'border-box',
                        }}>
                        <Box
                            sx={{
                                width: '100%',
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                            <Typography variant="body1" sx={{ color: "#000" }}>
                                {title}
                            </Typography>
                            <Box
                                sx={{
                                    padding: 1,
                                    borderRadius: 50,
                                    backgroundColor: "#CACAFF",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                {icon}
                            </Box>
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: "#000" }}>
                            {value}
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 1,
                            }}>

                            <TrendingUpIcon sx={{ color: chartColor }} />
                            <Typography variant="body2" sx={{ color: chartColor }}>
                                {percentage}
                            </Typography>

                        </Box>
                    </Box>
                </>}
        />

    );
};

export default AnalyticsCard;
