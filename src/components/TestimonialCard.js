import React from "react";
import { Box, Typography } from "@mui/material";

const TestimonialCard = ({
    image,
    body,
    position,
    position2
}) => {
    return (

        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3
        }}>
            <Box
                sx={{

                    position: "relative",
                    height: 300,
                    minWidth: 200,
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 1,
                    overflow: "hidden",
                    cursor: "pointer",
                    '&:hover .overlay': {
                        opacity: 1,
                    },

                }}
            ></Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography variant="body1" sx={{ color: "#000", width: 300, mb: 5 }}>
                    {body}
                </Typography>

                <Typography variant="body1" sx={{ color: "#000", width: 300, fontWeight: "bold" }}>
                    {position}
                </Typography>
                <Typography variant="body1" sx={{ color: "#000", width: 300, mt: 1 }}>
                    {position2}
                </Typography>
            </Box>
        </Box>
    );
};

export default TestimonialCard;
