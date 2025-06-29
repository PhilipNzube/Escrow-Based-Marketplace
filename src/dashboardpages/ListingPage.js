import { useEffect } from "react";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import AnalyticsCard from "../components/AnalyticsCard.js";
import { usePageMetadata } from "../PageContext.js";
import ListIcon from '@mui/icons-material/List';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import AddIcon from '@mui/icons-material/Add';
import BgCard from "../components/BgCard.js";
import ListingCard from "../components/ListingCard.js";

const ListingPage = () => {
    const { setPageMetadata } = usePageMetadata();

    // Set page metadata when component mounts
    useEffect(() => {
        setPageMetadata({
            title: "Active Escrows",
            subtitle: "Monitor your ongoing transactions",
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
                    mt: 0,
                    px: 2,
                    width: '100%',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}>

                <Box
                    sx={{
                        width: '100%',
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: 1
                    }}>


                    <Button
                        startIcon={<AddIcon />}
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "#222",
                            },
                        }}
                    >
                        Create New Listing
                    </Button>
                </Box>
                <Box
                    sx={{
                        mt: 3,
                        width: '100%',
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 3
                    }}>
                    <AnalyticsCard
                        icon={
                            <ListIcon
                                sx={{
                                    fontSize: 30,
                                    color: "#0000FF",
                                }} />
                        }
                        title="Total Listings"
                        value="3"
                        percentage="+1 This Week"
                        chartColor="#008000"
                        numColumns={3}
                    />
                    <AnalyticsCard
                        icon={
                            <VisibilityIcon
                                sx={{
                                    fontSize: 30,
                                    color: "#008000",
                                }} />
                        }
                        title="Active Listings"
                        value="2"
                        percentage="Currently Published"
                        chartColor="#0000FF"
                        numColumns={3}
                    />
                    <AnalyticsCard
                        icon={
                            <VisibilityIcon
                                sx={{
                                    fontSize: 30,
                                    color: "#008000",
                                }} />
                        }
                        title="Total Views"
                        value="216"
                        percentage="+12 This Week"
                        chartColor="#008000"
                        numColumns={3}
                        noTrendIcon={true}
                    />
                </Box>
                <Box
                    sx={{
                        mt: 5,
                        width: '100%',
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        justifyContent: {
                            xs: "flex-start",
                            md: "space-between",
                        },
                        alignItems: {
                            xs: "flex-start",
                            md: "center",
                        },
                        gap: 1
                    }}>
                    <Typography
                        variant="h6"
                        fontWeight={600}
                        mb={3}
                        sx={{
                            whiteSpace: {
                                md: 'nowrap'
                            }
                        }
                        }>Your Listings</Typography>
                </Box>
                <BgCard
                    content={
                        <>
                            <ListingCard
                                name="Vintage Watch Collection"
                                details="Rare vintage watches from the 1950s."
                                id="ESC-001"
                                views = "150"
                                timeStamp="2 Hours Ago"
                                amount="$2,450.00"
                                status="Active"
                                padding={2}
                            />
                            <ListingCard
                                name="Vintage Watch Collection"
                                details="Rare vintage watches from the 1950s."
                                id="ESC-001"
                                views = "150"
                                timeStamp="2 Hours Ago"
                                amount="$2,450.00"
                                status="Pending"
                                padding={2}
                            />
                            <ListingCard
                                name="Vintage Watch Collection"
                                details="Rare vintage watches from the 1950s."
                                id="ESC-001"
                                views = "150"
                                timeStamp="2 Hours Ago"
                                amount="$2,450.00"
                                status="Urgent"
                                padding={2}
                            />
                            <ListingCard
                                name="Vintage Watch Collection"
                                details="Rare vintage watches from the 1950s."
                                id="ESC-001"
                                views = "150"
                                timeStamp="2 Hours Ago"
                                amount="$2,450.00"
                                status="Completed"
                                padding={2}
                            />
                        </>
                    }
                    overflowX="scroll"
                />

            </Box>
        </>
    );
};

export default ListingPage;
