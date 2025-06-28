import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import BgCard from "../components/BgCard.js";
import RecentActivity from "../components/RecentActivity.js";

// dummy data for different tab content
const overviewContent = (
    <>
        <BgCard
            content={
                <>
                    <Typography
                        variant="body1"
                        fontWeight={600}
                        mb={2}>
                        Account Statistics
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}>
                        <Typography variant="body2">Total Transactions:</Typography>
                        <Typography variant="body2">47</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}>
                        <Typography variant="body2">Success Rate:</Typography>
                        <Typography
                            variant="body2"
                            style={{
                                color: "green"
                            }}
                        >98.7%
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}>
                        <Typography variant="body2">Member Since:</Typography>
                        <Typography variant="body2">Jan. 2025</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}>
                        <Typography variant="body2">Verification Status:</Typography>
                        <Box
                            sx={{
                                padding: 1,
                                borderRadius: 1,
                                backgroundColor: "#DCFCE7",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            <Typography
                                variant="body2"
                                style={{
                                    color: "green",
                                }}
                            >
                                Verified
                            </Typography>
                        </Box>
                    </Box>
                </>
            }
        />
        <BgCard
            content={
                <>
                        <Typography
                            variant="body1"
                            fontWeight={600}
                            mb={2}>
                            Recent Activity
                        </Typography>
                        <RecentActivity
                            activityId="Completed ESC-003"
                            timeStamp="2 hours ago"
                        />
                        <RecentActivity
                            activityId="Started ESC-002"
                            timeStamp="1 day ago"
                        />
                        <RecentActivity
                            activityId="Profile Updated"
                            timeStamp="3 days ago"
                        />
                </>
            }
        />
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
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
                <Box
                    sx=
                    {{
                        p: 2,
                        width: "100%",
                    }}>
                    {selectedTab === 0 && overviewContent}
                    {selectedTab === 1 && activeContent}
                    {selectedTab === 2 && pendingContent}
                    {selectedTab === 3 && soldContent}
                </Box>
            </Box>
        </>
    );
};

export default ProfileTabs;
