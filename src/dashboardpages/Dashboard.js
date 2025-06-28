import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Badge,
  Typography,
  InputBase,
  useMediaQuery,
  useTheme
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { usePageMetadata } from "../PageContext.js";

const DashboardLayout = () => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const hasClosedRightForMobile = useRef(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const topNavRef = useRef();

  const { pageMetadata } = usePageMetadata();

  useEffect(() => {
    const el = topNavRef.current;
    if (el) {
      const observer = new ResizeObserver(() => {
        if (el.scrollWidth > el.clientWidth) {
          el.style.scrollBehavior = 'smooth';
        }
      });
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, []);

  // Only run once when entering mobile view
  useEffect(() => {
    if (isMobile && !hasClosedRightForMobile.current) {
      setRightOpen(false);
      hasClosedRightForMobile.current = true; // prevent it from running again
    }
  }, [isMobile]);

  // Optional: Reset the flag when returning to desktop view
  useEffect(() => {
    if (!isMobile) {
      setRightOpen(true);
      setLeftOpen(true);
      hasClosedRightForMobile.current = false;
    }
  }, [isMobile]);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />

      {/* Left Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        open={leftOpen}
        anchor="left"
        onClose={() => setLeftOpen(false)}
        sx={{
          width: 260,
          flexShrink: 0,
          display: leftOpen ? 'block' : 'none',
          '& .MuiDrawer-paper': {
            width: 260,
            boxSizing: 'border-box',
            p: 2,
          },
        }}
      >
        <LeftSidebar />
      </Drawer>

      {/* Main Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          width: '100%',
          transition: 'margin 0.3s ease',
        }}
      >
        {/* Top Nav */}
        <Box
          ref={topNavRef}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            px: 2,
            py: 2,
            borderBottom: "1px solid #eee",
            backgroundColor: "#fff",
            overflowX: "auto",
            scrollbarWidth: "none",
            '&::-webkit-scrollbar': { display: 'none' },
            position: 'relative',
            maskImage: 'linear-gradient(to right, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black 90%, transparent)'
          }}
        >
          <Box sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0
          }}>
            <IconButton onClick={() => setLeftOpen(prev => !prev)}>
              {leftOpen ? <KeyboardDoubleArrowLeftIcon /> : <MenuIcon />}
            </IconButton>
            <Box sx={{}}>
              <Typography variant="h5" fontWeight={600} color="#764D2E" fontSize="1.2rem">
                {pageMetadata.title}
              </Typography>
              <Typography variant="subtitle2" color="grey.600" fontSize="0.875rem">
                {pageMetadata.subtitle || 'Manage your content here'}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 1, justifyContent: "flex-end" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                minWidth: isMobile ? '100px' : '200px',
              }}
            >
              <SearchIcon fontSize="small" sx={{ mr: 1 }} />
              <InputBase placeholder="Search…" sx={{ fontSize: 14, flex: 1 }} />
            </Box>

            {/* Right Sidebar Toggle */}
            <IconButton onClick={() => setRightOpen(prev => !prev)}>
              {rightOpen ? <KeyboardDoubleArrowRightIcon /> : <IconButton aria-label="notifications">
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              }
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1, p: 2, overflowY: "auto", bgcolor: "#fafafa" }}>
          <Outlet />
        </Box>
      </Box>

      {/* Right Sidebar */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={rightOpen}
        onClose={() => setRightOpen(false)}
        sx={{
          width: 300,
          flexShrink: 0,
          display: rightOpen ? 'block' : 'none',
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
