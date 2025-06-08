import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const DashboardLayout = () => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />

      <Drawer
        variant="persistent"
        open={leftOpen}
        anchor="left"
        sx={{
          width: 260,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 260,
            boxSizing: 'border-box',
            p: 2,
          },
        }}
      >
        <LeftSidebar />
      </Drawer>

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 2,
            borderBottom: "1px solid #eee",
            backgroundColor: "#fff"
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton onClick={() => setLeftOpen(prev => !prev)}>
              {leftOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
            </IconButton>
            <Typography fontWeight={600} color="primary.main">
              Selected Page
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
              }}
            >
              <SearchIcon fontSize="small" sx={{ mr: 1 }} />
              <InputBase placeholder="Search…" sx={{ fontSize: 14 }} />
            </Box>
            <IconButton onClick={() => setRightOpen(prev => !prev)}>
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto", bgcolor: "#fafafa" }}>
          <Outlet />
        </Box>
      </Box>

      <Drawer
        variant="persistent"
        anchor="right"
        open={rightOpen}
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            p: 2,
          },
        }}
      >
        <RightSidebar />
      </Drawer>
    </Box>
  );
};

export default DashboardLayout;
