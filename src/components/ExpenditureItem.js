import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ExpenditureItem = ({
    image,
    alt,
    title,
    body,
}) => {
    return (

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2
            }}>
            <Box
                component="img"
                src={image}
                alt={alt}
                sx={{
                    height: 52,
                    width: "auto",
                    objectFit: "contain",
                    transition: "0.3s",
                }}
            />


            <Typography
                variant="body1"
                sx={{
                    color: "#fff",
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: "#fff",
                    width: "200px"
                }}
            >
                {body}
            </Typography>
        </Box>
    );
};

export default ExpenditureItem;
