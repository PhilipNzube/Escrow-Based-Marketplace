import { Box, Paper, Typography } from "@mui/material";

export default function ChatBubble({ msg }) {
  const isSender = msg.from === "me";

  return (
    <Box
      display="flex"
      justifyContent={isSender ? "flex-end" : "flex-start"}
      mb={1}
    >
      <Paper
        sx={{
          p: 1.5,
          maxWidth: "70%",
          bgcolor: isSender ? "#fff" : "#f0f0f0",
          border: isSender ? "1px solid black" : "none",
        }}
      >
              <Typography
                  sx={{
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                      }}
                  variant="body2">{msg.text}</Typography>
        <Typography variant="caption" display="block" textAlign="right">
          {msg.time}
        </Typography>
      </Paper>
    </Box>
  );
}
