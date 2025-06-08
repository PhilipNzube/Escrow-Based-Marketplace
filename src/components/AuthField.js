import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const AuthField = ({
    labelText,
    placeholderText,
}) => {
    return (
        <Box
          sx={{
            mt: 2,
            width: '100%',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}>
          <Typography variant="body2" sx={{ color: "#000", whiteSpace: "nowrap" }}>
            {labelText}
          </Typography>
          <TextField
            placeholder={placeholderText}
            variant="standard"
            fullWidth
            InputProps={{
              disableUnderline: false, // keep underline (default for standard)
            }}
            sx={{
              '& input::placeholder': {
                fontSize: '0.875rem',
              },
              mb: 2,
              '& .MuiInput-underline:before': {
                borderBottomColor: '#764D2E', // your custom color
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: '#5d3c24', // hover color
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#764D2E', // focused color
              },
              input: {
                color: '#000', // input text color
              },
            }}
          />
        </Box>
    );
};

export default AuthField;
