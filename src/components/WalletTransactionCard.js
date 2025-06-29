import {
    Box,
    Typography,
    Button,
    useMediaQuery,
    useTheme
} from "@mui/material";
import BgCard from "./BgCard";
import ListIcon from '@mui/icons-material/List';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';

const WalletTransactionCard = ({
    name,
    iconType,
    id,
    from,
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
                                    backgroundColor: iconType === "Credit"
                                        ? "#DCFCE7"
                                        : iconType === "Debit"
                                            ? "#FFDAD5"
                                            : "#CACAFF",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                {iconType === "Credit" ?
                                    <NorthEastIcon
                                        sx={{
                                            fontSize: 30,
                                            color: "#008000",
                                        }} />

                                    : iconType === "Debit" ?
                                        <SouthWestIcon
                                            sx={{
                                                fontSize: 30,
                                                color: "#FF0000",
                                            }} />
                                        : <ListIcon
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
                                    {name}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}>
                                    <Typography variant="body2" sx={{ fontSize: 12, color: "#000" }}>
                                        {from} | {timeStamp}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 12, color: "#000" }}>
                                        ID: {id}
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
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 600,
                                        color: iconType === "Credit"
                                            ? "#008000"
                                            : iconType === "Debit"
                                                ? "#FF0000"
                                                : "#000",
                                    }}>
                                    {amount}
                                </Typography>
                                <Box
                                    sx={{
                                        padding: 1,
                                        borderRadius: 1,
                                        backgroundColor:
                                            status === "Pending"
                                                ? "#FEF9C3"
                                                : status === "In Progress"
                                                    ? "#FFDAD5"
                                                    : status === "Shipped"
                                                        ? "#FFD2FF"
                                                        : status === "Completed"
                                                            ? "#C3FFC3"
                                                            : "#000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: status === "Pending"
                                                ? "#A35D35"
                                                : status === "In Progress"
                                                    ? "#FF543E"
                                                    : status === "Shipped"
                                                        ? "#800080"
                                                        : status === "Completed"
                                                            ? "#008000"
                                                            : "#ccc",
                                        }}>
                                        {status}
                                    </Typography>
                                </Box>
                            </Box>
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

export default WalletTransactionCard;
