import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import BgCard from "../components/BgCard.js";
import RecentActivity from "../components/RecentActivity.js";
import TabTransaction from "./TabTransaction.js";

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
    <BgCard
        content={
            <>
                <Typography
                    variant="body1"
                    fontWeight={600}
                    mb={2}
                >
                    Active Transactions.
                </Typography>
                <TabTransaction
                    id="ESC-003"
                    amount="$2,400.90"
                    status="Active"
                />
                <TabTransaction
                    id="ESC-003"
                    amount="$2,400.90"
                    status="Active"
                />
                <TabTransaction
                    id="ESC-003"
                    amount="$2,400.90"
                    status="Active"
                />

            </>
        }
    />
);

const pendingContent = (
    <BgCard
        content={
            <>
                <Typography
                    variant="body1"
                    fontWeight={600}
                    mb={2}
                >
                    Pending Transactions
                </Typography>
                <TabTransaction
                    id="ESC-003"
                    amount="$2,400.90"
                    status="Pending"
                />
                <TabTransaction
                    id="ESC-003"
                    amount="$2,400.90"
                    status="Pending"
                />
                <TabTransaction
                    id="ESC-003"
                    amount="$2,400.90"
                    status="Pending"
                />
            </>
        }
    />
);

const soldContent = (
    <BgCard
        content={
            <>
                <Typography
                    variant="body1"
                    fontWeight={600}
                    mb={2}
                >
                    Completed Sales
                </Typography>
                <TabTransaction
                    id="ESC-003"
                    amount="$2,400.90"
                    status="Completed"
                />
                <TabTransaction
                    id="ESC-003"
                    amount="$2,400.90"
                    status="Completed"
                />
                <TabTransaction
                    id="ESC-003"
                    amount="$2,400.90"
                    status="Completed"
                />
            </>
        }
    />
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
                    width: "100%",
                }}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        width: "100%",
                    }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleChange}
                        textColor="inherit"
                        indicatorColor="primary"
                        aria-label="profile tabs"
                        variant="scrollable"
                        scrollButtons="auto"
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
                        overflow: "hidden",
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
