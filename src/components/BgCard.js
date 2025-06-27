import React from "react";
import { Box, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const BgCard = ({
    content,
    marginTop = 3,
}) => {
    return (
        <Box
            sx={{
                mt: marginTop,
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
            {content}
        </Box>
    );
};

export default BgCard;
