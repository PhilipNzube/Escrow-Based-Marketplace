import React from "react";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import HomeIcon from "@mui/icons-material/Home";

export default function LeftSidebar() {
  const [isOnline, setIsOnline] = React.useState(true);

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
      color: isActive ? "#764D2E" : isActive ? "#764D2E" : "black",
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
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Profile Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          textAlign: "center",
          mb: 2,
          px: 2,
        }}
      >
        <Avatar sx={{ width: 24, height: 24 }}>P</Avatar>
        <Box>
          <Typography
            variant="caption"
            sx={{ color: isOnline ? "green" : "grey", fontWeight: 400 }}
          >
            {isOnline ? "ONLINE" : "OFFLINE"}
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            Philip
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 2, opacity: 0.2 }} />

      {/* Main Section */}
      <Typography
        variant="caption"
        sx={{ ml: 2, mb: 1, color: "text.secondary" }}
      >
        MAIN
      </Typography>
      <List>
        {[
          { text: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
          {
            text: "Active",
            icon: <NotificationsActiveIcon />,
            path: "/dashboard/active",
          },
          {
            text: "Pending",
            icon: <HourglassEmptyIcon />,
            path: "/dashboard/pending",
          },
          {
            text: "Completed",
            icon: <DoneAllIcon />,
            path: "/dashboard/completed",
          },
          {
            text: "Transactions",
            icon: <ReceiptLongIcon />,
            path: "/dashboard/transactions",
          },
        ].map(({ text, icon, path }) => (
          <NavLink
            key={path}
            to={path}
            style={{ textDecoration: "none" }}
            end={path === "/dashboard"}
          >
            {({ isActive }) => (
              <ListItem button sx={navItemStyle(isActive)}>
                <ListItemIcon sx={{ color: isActive ? "#764D2E" : "black" }}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>

      {/* Pages Section */}
      <Typography
        variant="caption"
        sx={{ ml: 2, mt: 2, mb: 1, color: "text.secondary" }}
      >
        PAGES
      </Typography>
      <List>
        {[
          {
            text: "User Profile",
            icon: <PersonIcon />,
            path: "/dashboard/profile",
          },
          {
            text: "Messages",
            icon: <ChatBubbleOutlineIcon />,
            path: "/dashboard/messages",
          },
          { text: "Listings", icon: <ListIcon />, path: "/dashboard/listing" },
          {
            text: "Wallet",
            icon: <AccountBalanceWalletIcon />,
            path: "/dashboard/wallet",
          },
          // { text: "Resources", icon: <LibraryBooksIcon />, path: "/dashboard/resources" },
          {
            text: "Orders",
            icon: <ShoppingCartIcon />,
            path: "/dashboard/orders",
          },
          {
            text: "Create Offer",
            icon: <LocalOfferIcon />,
            path: "/dashboard/create-offer",
          },
        ].map(({ text, icon, path }) => (
          <NavLink key={path} to={path} style={{ textDecoration: "none" }} end>
            {({ isActive }) => (
              <ListItem button sx={navItemStyle(isActive)}>
                <ListItemIcon sx={{ color: isActive ? "#764D2E" : "black" }}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>

      <Divider sx={{ mt: 2, mb: 2, opacity: 0.2 }} />

      {/* Settings Section */}
      <Typography
        variant="caption"
        sx={{ ml: 2, mb: 1, color: "text.secondary" }}
      >
        SETTINGS
      </Typography>
      <List>
        <NavLink
          to="/dashboard/settings"
          style={{ textDecoration: "none" }}
          end
        >
          {({ isActive }) => (
            <ListItem button sx={navItemStyle(isActive)}>
              <ListItemIcon sx={{ color: isActive ? "#764D2E" : "black" }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          )}
        </NavLink>
      </List>

      {/* Spacer and Bottom Items */}
      <Box sx={{ flexGrow: 1, mt: 15 }} />
      <List>
        <NavLink to="/dashboard/help" style={{ textDecoration: "none" }} end>
          {({ isActive }) => (
            <ListItem button sx={navItemStyle(isActive)}>
              <ListItemIcon sx={{ color: isActive ? "#764D2E" : "black" }}>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>
          )}
        </NavLink>
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          {/* {({ isActive }) => ( */}
          <ListItem
            button
            sx={{
              "& .MuiListItemText-primary": {
                color: "#D32F2F",
                fontWeight: 400,
              },
              "& .MuiListItemIcon-root": {
                color: "#D32F2F",
              },
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout Account" />
          </ListItem>
          {/* )} */}
        </NavLink>
      </List>
    </Box>
  );
}
