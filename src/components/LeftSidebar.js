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
  Collapse,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
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

  return (
    <Box>
      {/* Profile Section */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }}>P</Avatar>
        <Typography variant="subtitle1" fontWeight={600}>Philip</Typography>
      </Box>

      {/* Favourites */}
      <Typography variant="caption" sx={{ ml: 2, mb: 1 }}>Favourites</Typography>
      <List>
        <ListItem button component={NavLink} to="/dashboard" selected={isActive('/dashboard/active')}>
          <ListItemIcon><FiberManualRecordIcon fontSize="small" color="disabled" /></ListItemIcon>
          <ListItemText primary="Active" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/pending" selected={isActive('/dashboard/pending')}>
          <ListItemIcon><FiberManualRecordIcon fontSize="small" color="disabled" /></ListItemIcon>
          <ListItemText primary="Pending" />
        </ListItem>
      </List>

      {/* Dashboards */}
      <Typography variant="caption" sx={{ ml: 2, mt: 2, mb: 1 }}>Dashboards</Typography>
      <List>
        <ListItem button component={NavLink} to="/dashboard/active-dash" selected={isActive('/dashboard/active-dash')}>
          <ListItemIcon><NotificationsActiveIcon /></ListItemIcon>
          <ListItemText primary="Active" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/pending-dash" selected={isActive('/dashboard/pending-dash')}>
          <ListItemIcon><HourglassEmptyIcon /></ListItemIcon>
          <ListItemText primary="Pending" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/completed" selected={isActive('/dashboard/completed')}>
          <ListItemIcon><DoneAllIcon /></ListItemIcon>
          <ListItemText primary="Completed" />
        </ListItem>
        <ListItem button onClick={() => setOpenAll(!openAll)}>
          <ListItemIcon><ExpandMoreIcon /></ListItemIcon>
          <ListItemText primary="All" />
        </ListItem>
        <Collapse in={openAll} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={NavLink} to="/dashboard/all-stats" selected={isActive('/dashboard/all-stats')}>
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary="All Stats" />
            </ListItem>
          </List>
        </Collapse>
      </List>

      {/* Pages */}
      <Typography variant="caption" sx={{ ml: 2, mt: 2, mb: 1 }}>Pages</Typography>
      <List>
        <ListItem button onClick={() => setOpenProfile(!openProfile)}>
          <ListItemIcon><ExpandMoreIcon /></ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>
        <Collapse in={openProfile} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={NavLink} to="/dashboard/profile" selected={isActive('/dashboard/profile')}>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary="Profile Info" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={NavLink} to="/dashboard/listings" selected={isActive('/dashboard/listings')}>
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary="Listings" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/resources" selected={isActive('/dashboard/resources')}>
          <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/orders" selected={isActive('/dashboard/orders')}>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/create-offer" selected={isActive('/dashboard/create-offer')}>
          <ListItemIcon><LocalOfferIcon /></ListItemIcon>
          <ListItemText primary="Create Offer" />
        </ListItem>
      </List>
    </Box>
  );
}
