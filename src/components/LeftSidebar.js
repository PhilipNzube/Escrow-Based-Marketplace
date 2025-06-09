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

export default function LeftSidebar() {
  const location = useLocation();
  const [openAll, setOpenAll] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  const isActive = (path) => location.pathname === path;

  const navItemStyle = (path) => ({
    position: 'relative',
    pl: 3,
    borderRadius: 1,
    transition: 'background-color 0.3s, color 0.3s',
    '&.Mui-selected': {
      backgroundColor: '#f0f4ff',
      '& .MuiListItemText-primary': {
        color: 'primary.main',
        fontWeight: 600,
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 6,
        bottom: 6,
        width: '4px',
        borderRadius: '0 4px 4px 0',
        backgroundColor: '#1976d2',
      },
    },
    '&:hover': {
      backgroundColor: '#f5f5f5',
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
          mb: 2
        }}
      >
        <Avatar sx={{ width: 24, height: 24 }}>P</Avatar>
        <Typography variant="subtitle1" fontWeight={600}>Philip</Typography>
      </Box>

      {/* Favourites */}
      <Typography variant="caption" sx={{ ml: 2, mb: 1 }}>Favourites</Typography>
      <List>
        <ListItem button component={NavLink} to="/dashboard" selected={isActive('/dashboard')} sx={navItemStyle('/dashboard')}>
          <ListItemIcon><FiberManualRecordIcon fontSize="small" sx={{ color: isActive('/dashboard') ? 'primary.main' : '#ccc' }} /></ListItemIcon>
          <ListItemText primary="Active" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/pending" selected={isActive('/dashboard/pending')} sx={navItemStyle('/dashboard/pending')}>
          <ListItemIcon><FiberManualRecordIcon fontSize="small" sx={{ color: isActive('/dashboard/pending') ? 'primary.main' : '#ccc' }} /></ListItemIcon>
          <ListItemText primary="Pending" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
      </List>

      {/* Dashboards */}
      <Typography variant="caption" sx={{ ml: 2, mt: 2, mb: 1 }}>Dashboards</Typography>
      <List>
        <ListItem button component={NavLink} to="/dashboard" selected={isActive('/dashboard')} sx={navItemStyle('/dashboard')}>
          <ListItemIcon><NotificationsActiveIcon /></ListItemIcon>
          <ListItemText primary="Active" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/pending-dash" selected={isActive('/dashboard/pending-dash')} sx={navItemStyle('/dashboard/pending-dash')}>
          <ListItemIcon><HourglassEmptyIcon /></ListItemIcon>
          <ListItemText primary="Pending" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/completed" selected={isActive('/dashboard/completed')} sx={navItemStyle('/dashboard/completed')}>
          <ListItemIcon><DoneAllIcon /></ListItemIcon>
          <ListItemText primary="Completed" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
        <ListItem button onClick={() => setOpenAll(!openAll)}>
          <ListItemIcon><ExpandMoreIcon /></ListItemIcon>
          <ListItemText primary="All" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
        <Collapse in={openAll} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={NavLink} to="/dashboard/all-stats" selected={isActive('/dashboard/all-stats')} sx={{ pl: 4, ...navItemStyle('/dashboard/all-stats') }}>
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary="All Stats" primaryTypographyProps={{ sx: { color: 'black' } }} />
            </ListItem>
          </List>
        </Collapse>
      </List>

      {/* Pages */}
      <Typography variant="caption" sx={{ ml: 2, mt: 2, mb: 1 }}>Pages</Typography>
      <List>
        <ListItem button onClick={() => setOpenProfile(!openProfile)}>
          <ListItemIcon><ExpandMoreIcon /></ListItemIcon>
          <ListItemText primary="User Profile" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
        <Collapse in={openProfile} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={NavLink} to="/dashboard/profile" selected={isActive('/dashboard/profile')} sx={{ pl: 4, ...navItemStyle('/dashboard/profile') }}>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary="Profile Info" primaryTypographyProps={{ sx: { color: 'black' } }} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={NavLink} to="/dashboard/listings" selected={isActive('/dashboard/listings')} sx={navItemStyle('/dashboard/listings')}>
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary="Listings" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/resources" selected={isActive('/dashboard/resources')} sx={navItemStyle('/dashboard/resources')}>
          <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
          <ListItemText primary="Resources" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/orders" selected={isActive('/dashboard/orders')} sx={navItemStyle('/dashboard/orders')}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Orders" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/create-offer" selected={isActive('/dashboard/create-offer')} sx={navItemStyle('/dashboard/create-offer')}>
          <ListItemIcon><LocalOfferIcon /></ListItemIcon>
          <ListItemText primary="Create Offer" primaryTypographyProps={{ sx: { color: 'black' } }} />
        </ListItem>
      </List>
    </Box>
  );
}
