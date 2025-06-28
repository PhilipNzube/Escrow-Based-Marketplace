import React from "react";
import {
    Box,
    Typography,
    IconButton,
    useMediaQuery,
    useTheme
} from "@mui/material";
import BgCard from "./BgCard";
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const TransactionCard = ({
    iconType,
    id,
    from,
    to,
    timeStamp,
    amount,
    status,
    marginTop = 0,
    padding = 4,
    width = "100%",
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <BgCard
            content={
                <>
                    <Box
                        sx={{
                            width: '100%',
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 1
                            }}>
                            <Box
                                sx={{
                                    padding: 1,
                                    borderRadius: 50,
                                    backgroundColor: iconType === "Pending"
                                        ? "#FEF9C3"
                                        : iconType === "Urgent"
                                            ? "#F6BFBF"
                                            : iconType === "Completed"
                                                ? "#DCFCE7"
                                                : "#CACAFF",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                {iconType === "Pending" ?
                                    <HourglassEmptyIcon
                                        sx={{
                                            fontSize: 30,
                                            color: "#A35D35",
                                        }} />

                                    : iconType === "Urgent" ?
                                        <WarningAmberIcon
                                            sx={{
                                                fontSize: 30,
                                                color: "#FF0000",
                                            }} />
                                        : iconType === "Completed" ?
                                            <DoneAllIcon
                                                sx={{
                                                    fontSize: 30,
                                                    color: "#008000",
                                                }} />
                                            : <PeopleIcon
                                                sx={{
                                                    fontSize: 30,
                                                    color: "#0000FF",
                                                }} />
                                }
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: "#000" }}>
                                    {id}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}>
                                    <Typography variant="body1" sx={{ color: "#000" }}>
                                        {from} -&gt; {to}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 12, color: "#000" }}>
                                        {timeStamp}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>


                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2
                            }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: "#000" }}>
                                    {amount}
                                </Typography>
                                <Box
                                    sx={{
                                        padding: 1,
                                        borderRadius: 5,
                                        backgroundColor:
                                            status == "Active" ? "#CACAFF"
                                                : status == "Pending" ? "#FEF9C3"
                                                    : status == "Urgent" ? "#F6BFBF"
                                                        : status == "Completed" ? "#DCFCE7"
                                                            : "#CACAFF",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: status == "Active" ? "#0000FF"
                                                : status == "Pending" ? "#A35D35"
                                                    : status == "Urgent" ? "#FF0000"
                                                        : status == "Completed" ? "#008000"
                                                            : "#000",
                                        }}>
                                        {status}
                                    </Typography>
                                </Box>
                            </Box>
                            <IconButton>
                                <MoreIcon
                                    sx={{
                                        fontSize: 30,
                                        color: "#000",
                                    }} />
                            </IconButton>
                        </Box>
                    </Box>
                </>
            }
            marginTop={marginTop}
            padding={padding}
            width={isMobile ? "750px" : width}
        />
    );
};

export default TransactionCard;
