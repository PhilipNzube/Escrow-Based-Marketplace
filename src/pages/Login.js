import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../images/Logo.png";
import ResponsiveNavBar from "../components/ResponsiveNavBar";

const centerNavItems = [
  { text: "How it works", fontWeight: "bold", onClick: () => console.log("Home clicked") },
  { text: "Why TrustPay", onClick: () => console.log("Buy clicked") },
  { text: "Pricing", onClick: () => console.log("Sell clicked") },
  { text: "Resources", onClick: () => console.log("Categories clicked") },
];

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <ResponsiveNavBar
          title="TrustPay"
          logo={LogoIcon}
          centerItems={centerNavItems}
          logoutFunc={() => navigate(`/login`)}
        />
      </Box>
      <Box
        sx={{
          mx: 4,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000", whiteSpace: "nowrap" }}>
          Log In or Sign Up to TrustPay
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            width: {
              xs: '100%',
              sm: '320px',
            },
            boxShadow: 'none',
            color: "#764D2E",
            backgroundColor: "transparent",
            border: "1px solid #764D2E",
            '&:hover': {
              backgroundColor: "#764d2e",
              color: "#fff"
            }
          }}
        >
          Continue with Google
        </Button>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            width: {
              xs: '100%',
              sm: '320px',
            },
            boxShadow: 'none',
            color: "#764D2E",
            backgroundColor: "transparent",
            border: "1px solid #764D2E",
            '&:hover': {
              backgroundColor: "#764d2e",
              color: "#fff"
            }
          }}
        >
          Continue with Facebook
        </Button>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            width: {
              xs: '100%',
              sm: '320px',
            },
            boxShadow: 'none',
            color: "#764D2E",
            backgroundColor: "transparent",
            border: "1px solid #764D2E",
            '&:hover': {
              backgroundColor: "#764d2e",
              color: "#fff"
            }
          }}
        >
          Continue with Apple
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;