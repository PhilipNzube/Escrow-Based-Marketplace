import React, { useState } from "react";
import { Box, Typography, LinearProgress, TextField, Button, Paper, Alert } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import LogoIcon from "../images/Logo.png";
import HelpIcon from "../images/Help.png";
import WebIcon from "../images/Web.png";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import AuthButton from "../components/AuthButton";
import AuthField from "../components/AuthField";
import RoleSelector from "../components/RoleSelector";

const rightIcons = [
  { src: HelpIcon, alt: "Help", onClick: () => console.log("Help") },
  { src: WebIcon, alt: "Web", onClick: () => console.log("Web") },
];

const stepInfo = [
  { label: "Create a profile", path: "/register" },
  { label: "Verify your identity", path: "/register/step-2" },
  { label: "Link your bank", path: "/register/step-3" },
  { label: "Start transacting", path: "/register/step-4" },
];

const RegisterPage = () => {
  const location = useLocation();
  const currentStep = stepInfo.findIndex(step => step.path === location.pathname);
  const stepCount = stepInfo.length;
  return (
    <Box sx={{ mt: 9, position: "relative", minHeight: "100vh", width: "100%" }}>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <ResponsiveNavBar
          title="TrustPay"
          logo={LogoIcon}
          rightIcons={rightIcons}
          bg="#fff"
        />
      </Box>
      <Box
        sx={{
          mx: 4,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}>
        <Box
          sx={{
            mt: 2,
            width: {
              xs: '100%',
              sm: '720px',
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}>
          {/* Step Label */}
          <Typography variant="body1" align="center" sx={{ mt: 3, fontWeight: 600, color: "#000" }}>
            Step {currentStep + 1} of {stepCount}
          </Typography>

          {/* Progress Bar */}
          <Box sx={{ width: "100%", maxWidth: 800, mx: "auto"}}>
            <LinearProgress
              variant="determinate"
              value={((currentStep + 1) / stepCount) * 100}
              sx={{
                height: 8,
                borderRadius: 5,
                backgroundColor: "#eee",
                '& .MuiLinearProgress-bar': {
                  backgroundColor: "#000",
                }
              }}
            />
          </Box>

          {/* Step Title */}
          <Typography align="center" variant="body2" sx={{ mb: 3, color: "#000" }}>
            {stepInfo[currentStep]?.label || ''}
          </Typography>
        </Box>
        {/* This is where the step content will render */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default RegisterPage;