import {
    Box,
    Typography,
    Button,
    useMediaQuery,
    useTheme
} from "@mui/material";
import BgCard from "./BgCard";
import ListIcon from '@mui/icons-material/List';
import InventoryIcon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const OrderCard = ({
    name,
    iconType,
    id,
    from,
    orderTimeStamp,
    deliveryTimeStamp,
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
                                    backgroundColor: iconType === "Processing"
                                        ? "#FEF9C3"
                                        : iconType === "In Progress"
                                            ? "#FFDAD5"
                                            : iconType === "Shipped"
                                                ? "#FFD2FF"
                                                : iconType === "Delivered"
                                                    ? "#C3FFC3"
                                                    : "#CACAFF",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                {iconType === "Processing" ?
                                    <HourglassEmptyIcon
                                        sx={{
                                            fontSize: 30,
                                            color: "#A35D35",
                                        }} />

                                    : iconType === "In Progress" ?
                                        <InventoryIcon
                                            sx={{
                                                fontSize: 30,
                                                color: "#FF543E",
                                            }} />
                                        : iconType === "Shipped" ?
                                            <LocalShippingIcon
                                                sx={{
                                                    fontSize: 30,
                                                    color: "#800080",
                                                }} />
                                            : iconType === "Delivered" ?
                                                <DoneAllIcon
                                                    sx={{
                                                        fontSize: 30,
                                                        color: "#008000",
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
                                    <Typography variant="body1" sx={{ color: "#000" }}>
                                        From: {from}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 12, color: "#000" }}>
                                        Order ID: {id}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: 12, color: "#000" }}>
                                        Ordered: {orderTimeStamp} | Est. Delivery: {deliveryTimeStamp}
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
                                            status === "Processing"
                                                ? "#FEF9C3"
                                                : status === "In Progress"
                                                    ? "#FFDAD5"
                                                    : status === "Shipped"
                                                        ? "#FFD2FF"
                                                        : status === "Delivered"
                                                            ? "#C3FFC3"
                                                            : "#000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: status === "Processing"
                                                ? "#A35D35"
                                                : status === "In Progress"
                                                    ? "#FF543E"
                                                    : status === "Shipped"
                                                        ? "#800080"
                                                        : status === "Delivered"
                                                            ? "#008000"
                                                            : "#ccc",
                                        }}>
                                        {status}
                                    </Typography>
                                </Box>
                            </Box>
                            <Button
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
                                Track Order
                            </Button>
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

export default OrderCard;
