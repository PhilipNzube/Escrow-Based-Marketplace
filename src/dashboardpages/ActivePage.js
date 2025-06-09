import {
  Box,
  Typography,
} from "@mui/material";
import AnalyticsCard from "../components/AnalyticsCard";

const ActivePage = () => {
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
        <Typography variant="body1" sx={{ fontWeight: 600, color: "#000" }}>
          Overview
        </Typography>
        <Box
          sx={{
            mt: 3,
            width: '100%',
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap:3
          }}>
          <AnalyticsCard
            title="Views"
            value="7, 265"
            percentage="+11.01%"
          />
          <AnalyticsCard
            title="Sales"
            value="17, 265"
            percentage="-11.01%"
          />
          <AnalyticsCard
            title="New Users"
            value="27, 265"
            percentage="+21.01%"
          />
          <AnalyticsCard
            title="Active Users"
            value="37, 265"
            percentage="-21.01%"
          />
        </Box>
      </Box>
    </>
  );
};

export default ActivePage;
