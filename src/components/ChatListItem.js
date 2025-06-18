import {
  Avatar,
  Badge,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export default function ChatListItem({ chat, onClick }) {
  return (
    <ListItem button onClick={onClick} alignItems="flex-start">
      <ListItemAvatar>
        <Badge
          color="success"
          variant={chat.online ? "dot" : "standard"}
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Avatar src={chat.avatar} />
        </Badge>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">{chat.name}</Typography>
            <Typography variant="caption">{chat.time}</Typography>
          </Box>
        }
        secondary={
          <Typography noWrap variant="body2">
            {chat.message}
          </Typography>
        }
      />
    </ListItem>
  );
}
