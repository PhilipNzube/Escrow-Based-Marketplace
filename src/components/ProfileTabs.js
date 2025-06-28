import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

// dummy data for different tab content
const overviewContent = (
  <>
    <Typography variant="h6" mb={2}>
      Account Statistics
    </Typography>
    <Typography>Total Transactions: 47</Typography>
    <Typography>Success Rate: <span style={{ color: "green" }}>98.7%</span></Typography>
    <Typography>Member Since: Jan. 2025</Typography>
    <Typography>Verification Status: <span style={{ color: "green" }}>Verified</span></Typography>

    <Box mt={4}>
      <Typography variant="h6" mb={2}>
        Recent Activity
      </Typography>
      <Typography>Completed ESC-003 (2 hours ago)</Typography>
      <Typography>Started ESC-002 (1 day ago)</Typography>
      <Typography>Profile Updated (3 days ago)</Typography>
    </Box>
  </>
);

const activeContent = (
  <Typography>Active transactions will appear here.</Typography>
);

const pendingContent = (
  <Typography>Pending transactions will appear here.</Typography>
);

const soldContent = (
  <Typography>Sold transactions will appear here.</Typography>
);

const ProfileTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          aria-label="profile tabs"
          variant="scrollable"
        >
          <Tab label="Overview" />
          <Tab label="Active" />
          <Tab label="Pending" />
          <Tab label="Sold" />
        </Tabs>
      </Box>
      <Box sx={{ p: 2 }}>
        {selectedTab === 0 && overviewContent}
        {selectedTab === 1 && activeContent}
        {selectedTab === 2 && pendingContent}
        {selectedTab === 3 && soldContent}
      </Box>
    </>
  );
};

export default ProfileTabs;
