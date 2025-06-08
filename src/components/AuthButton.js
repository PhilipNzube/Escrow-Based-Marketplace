import React from "react";
import { Button } from "@mui/material";

const AuthButton = ({
    text,
    bg,
    textColor,
    hoverbg,
    hovertextColor
}) => {
    return (
        <Button
            variant="contained"
            sx={{
                mt: 3,
                width: {
                    xs: '100%',
                    sm: '320px',
                },
                boxShadow: 'none',
                color: textColor,
                backgroundColor: bg,
                border: "1px solid #764D2E",
                '&:hover': {
                    backgroundColor: hoverbg,
                    color: hovertextColor
                }
            }}
        >
            {text}
        </Button>
    );
};

export default AuthButton;
