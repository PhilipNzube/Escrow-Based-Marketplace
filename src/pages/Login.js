import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../images/Logo.png";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import AuthButton from "../components/AuthButton";
import AuthField from "../components/AuthField";
import RoleSelector from "../components/RoleSelector";

const centerNavItems = [
  { text: "How it works", fontWeight: "bold", onClick: () => console.log("Home clicked") },
  { text: "Why TrustPay", onClick: () => console.log("Buy clicked") },
  { text: "Pricing", onClick: () => console.log("Sell clicked") },
  { text: "Resources", onClick: () => console.log("Categories clicked") },
];

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{
      display: "flex",
          flexDirection: "column",
          justifyContent: "center",
      alignItems: "center",
      mt: 9,
      position: "relative",
      minHeight: "100vh",
      width: "100%"
    }}>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <ResponsiveNavBar
          title="TrustPay"
          logo={LogoIcon}
          centerItems={centerNavItems}
          logoutFunc={() => navigate(`/register`)}
          bg="#fff"
        />
      </Box>
      <Box
        sx={{
          px: 4,
          width: {
            xs: '100%',
            sm: '320px',
          },
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000", whiteSpace: "nowrap" }}>
          Log In or Sign Up to TrustPay
        </Typography>
        <AuthButton
          text="Continue with Google"
          bg="transparent"
          textColor="#764D2E"
          hoverbg="#764d2e"
          hovertextColor="#fff"
        />
        <AuthButton
          text="Continue with Facebook"
          bg="transparent"
          textColor="#764D2E"
          hoverbg="#764d2e"
          hovertextColor="#fff"
        />
        <AuthButton
          text="Continue with Apple"
          bg="transparent"
          textColor="#764D2E"
          hoverbg="#764d2e"
          hovertextColor="#fff"
        />

        <Typography variant="body1" sx={{ mt: 3, mb: 2, fontWeight: "bold", color: "#000", whiteSpace: "nowrap" }}>
          Or use your email address
        </Typography>

        <AuthField
          labelText="Email Address"
          placeholderText="Enter your email address"
        />
        <AuthField
          labelText="Password"
          placeholderText="Enter your password"
        />
        <RoleSelector
          defaultText="Buyer"
        />
        <AuthButton
          text="Log In"
          bg="#764D2E"
          textColor="#fff"
          hoverbg="#fff"
          hovertextColor="#764d2e"
        />
        <Typography
          variant="body2"
          sx={{
            mt: 5,
            textDecoration: 'underline',
            color: '#000',
            cursor: 'pointer',
            fontWeight: 500,
            '&:hover': {
              color: '#5d3c24',
            }
          }}
          onClick={() => {
            // Your navigation or action here
            console.log("Navigate to Sign Up");
          }}
        >
          Don't have an account?
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 2,
            textDecoration: 'underline',
            color: '#000',
            cursor: 'pointer',
            fontWeight: 500,
            '&:hover': {
              color: '#5d3c24',
            }
          }}
          onClick={() => {
            // Your navigation or action here
            console.log("Navigate to Sign Up");
          }}
        >
          Forgot your password?
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;