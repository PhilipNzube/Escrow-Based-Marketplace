import React from "react";
import { Box, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const BgCard = ({
    content,
    marginTop = 3,
    padding = 4,
    bgColor = "transparent",
    numColumns = 2, 
    overflowX = "hidden",
    width = "100%",
}) => {
    return (
        <Box
            sx={{
                mt: marginTop,
                padding: padding,
                width: width,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 5,
                backgroundColor: bgColor,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
                borderRadius: 2,
                flex: {
                    xs: '100%',     // 1 per row on extra-small (mobile)
                    md: numColumns == 2 ? 'calc(50% - 24px)'
                        : 'calc(25% - 24px)', // 2 per row on medium and up
                },
                boxSizing: 'border-box',
                overflowX: overflowX,
                '&::-webkit-scrollbar': { height: 5 },
            }}>
            {content}
        </Box>
    );
};

export default BgCard;
