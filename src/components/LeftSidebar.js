import React from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function LeftSidebar() {
  const [openAll, setOpenAll] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  const allItems = [
    { text: "All Stats", path: "/dashboard/all-stats", icon: <ListIcon /> },
    { text: "Analytics", path: "/dashboard/analytics", icon: <ListIcon /> },
  ];

  const profileItems = [
    { text: "Profile Info", path: "/dashboard/profile", icon: <PersonIcon /> },
    { text: "Security Settings", path: "/dashboard/security", icon: <PersonIcon /> },
  ];

  const navItemStyle = (isActive) => ({
    position: "relative",
    pl: 3,
    borderRadius: 1,
    transition: "background-color 0.3s, color 0.3s",
    backgroundColor: isActive ? "rgba(118, 77, 46, 0.1)" : "transparent",
    "& .MuiListItemText-primary": {
      color: isActive ? "#764D2E" : "black",
      fontWeight: isActive ? 600 : 400,
    },
    "& .MuiListItemIcon-root": {
      color: isActive ? "#764D2E" : "black",
    },
    "&::before": isActive
      ? {
          content: '""',
          position: "absolute",
          left: 0,
          top: 6,
          bottom: 6,
          width: "4px",
          borderRadius: "0 4px 4px 0",
          backgroundColor: "#764D2E",
        }
      : {},
    "&:hover": {
      backgroundColor: "rgba(118, 77, 46, 0.1)",
    },
  });

  return (
    <Box>
      {/* Profile Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          textAlign: 'center',
          mb: 2,
        }}
      >
        <Avatar sx={{ width: 24, height: 24 }}>P</Avatar>
        <Typography variant="subtitle1" fontWeight={600}>Philip</Typography>
      </Box>

      {/* Favourites */}
      <Typography variant="caption" sx={{ ml: 2, mb: 1 }}>Favourites</Typography>
      <List>
        {[
          { text: "Active", icon: <FiberManualRecordIcon fontSize="small" />, path: "/dashboard/active-order" },
          { text: "Pending", icon: <FiberManualRecordIcon fontSize="small" />, path: "/dashboard/pending" },
        ].map(({ text, icon, path }) => (
          <NavLink key={path} to={path} style={{ textDecoration: 'none' }} end>
            {({ isActive }) => (
              <ListItem button sx={navItemStyle(isActive)}>
                <ListItemIcon sx={{ color: isActive ? '#764D2E' : "black" }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>

      {/* Dashboards */}
      <Typography variant="caption" sx={{ ml: 2, mt: 2, mb: 1 }}>Dashboards</Typography>
      <List>
        {[
          { text: "Active", icon: <NotificationsActiveIcon />, path: "/dashboard" },
          { text: "Pending", icon: <HourglassEmptyIcon />, path: "/dashboard/pending-dash" },
          { text: "Completed", icon: <DoneAllIcon />, path: "/dashboard/completed" },
          { text: "Transaction", icon: <ReceiptLongIcon />, path: "/dashboard/transaction" },
        ].map(({ text, icon, path }) => (
          <NavLink
            key={path}
            to={path}
            style={{ textDecoration: 'none' }}
            end={path === "/dashboard"}
          >
            {({ isActive }) => (
              <ListItem button sx={navItemStyle(isActive)}>
                <ListItemIcon sx={{ color: isActive ? '#764D2E' : "black" }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )}
          </NavLink>
        ))}

        {/* All Section (Dynamic) */}
        <ListItem button onClick={() => setOpenAll(!openAll)}>
          <ListItemIcon><ExpandMoreIcon /></ListItemIcon>
          <ListItemText primary="All" />
        </ListItem>
        <Collapse in={openAll} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {allItems.map(({ path, icon, text }) => (
              <NavLink key={path} to={path} style={{ textDecoration: 'none' }} end>
                {({ isActive }) => (
                  <ListItem button sx={navItemStyle(isActive)}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )}
              </NavLink>
            ))}
          </List>
        </Collapse>
      </List>

      {/* Pages */}
      <Typography variant="caption" sx={{ ml: 2, mt: 2, mb: 1 }}>Pages</Typography>
      <List>
        {/* Profile Section (Dynamic) */}
        <ListItem button onClick={() => setOpenProfile(!openProfile)}>
          <ListItemIcon><ExpandMoreIcon /></ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>
        <Collapse in={openProfile} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {profileItems.map(({ path, icon, text }) => (
              <NavLink key={path} to={path} style={{ textDecoration: 'none' }} end>
                {({ isActive }) => (
                  <ListItem button sx={navItemStyle(isActive)}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )}
              </NavLink>
            ))}
          </List>
        </Collapse>

        {[
          { text: "Messages", icon: <ChatBubbleOutlineIcon />, path: "/dashboard/messages" },
          { text: "Listings", icon: <ListIcon />, path: "/dashboard/listing" },
          { text: "Resources", icon: <LibraryBooksIcon />, path: "/dashboard/resources" },
          { text: "Orders", icon: <ShoppingCartIcon />, path: "/dashboard/orders" },
          { text: "Create Offer", icon: <LocalOfferIcon />, path: "/dashboard/create-offer" },
        ].map(({ text, icon, path }) => (
          <NavLink key={path} to={path} style={{ textDecoration: 'none' }} end>
            {({ isActive }) => (
              <ListItem button sx={navItemStyle(isActive)}>
                <ListItemIcon sx={{ color: isActive ? '#764D2E' : "black" }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>
    </Box>
  );
}