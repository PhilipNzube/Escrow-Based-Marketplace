import {
  Box,
  Typography,
} from "@mui/material";

const Messages = () => {
  return (
    <>
      <Box
        sx={{
          mt: 3,
          px: 2,
          width: '100%',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}>

        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ color: "#000" }}>
          Messages
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, color: "#000" }}>
          Order Number: 123456789
        </Typography>
        

      </Box>
    </>
  );
};

export default Messages;
