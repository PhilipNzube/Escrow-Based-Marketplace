import { useEffect } from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import AnalyticsCard from "../components/AnalyticsCard.js";
import { usePageMetadata } from "../PageContext.js";

const MainDashboardPage = () => {
  const { setPageMetadata } = usePageMetadata();

  // Set page metadata when component mounts
  useEffect(() => {
    setPageMetadata({
      title: "Dashboard Overview",
      subtitle: "Monitor your escrow transactions and activities",
    });

    // Reset metadata when component unmounts (optional, to avoid stale data)
    return () => {
      setPageMetadata({ title: "Dashboard", subtitle: "" });
    };
  }, [setPageMetadata]);
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

export default MainDashboardPage;
