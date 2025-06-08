import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Badge,
} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import DoneIcon from '@mui/icons-material/Done';

const notifications = [
  { id: 1, text: "Your order has been shipped.", read: false },
  { id: 2, text: "New message from Alice.", read: false },
  { id: 3, text: "Profile updated successfully.", read: true },
];

export default function RightSidebar() {
  return (
    <Box>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Notifications
      </Typography>

      <List>
        {notifications.map((note) => (
          <ListItem key={note.id} alignItems="flex-start">
            <ListItemIcon>
              <Badge
                color="primary"
                variant={note.read ? "standard" : "dot"}
              >
                <NotificationsIcon color={note.read ? "disabled" : "action"} />
              </Badge>
            </ListItemIcon>
            <ListItemText
              primary={note.text}
              secondary={note.read ? "Read" : "New"}
              primaryTypographyProps={{ fontSize: 14 }}
              secondaryTypographyProps={{ fontSize: 12, color: 'text.secondary' }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body2" color="text.secondary">
        Tip: Click on any item to view more details.
      </Typography>
    </Box>
  );
}