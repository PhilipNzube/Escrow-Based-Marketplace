import { Box, Typography } from "@mui/material";

const TabTransaction = (
    {
        id,
        amount,
        status,
    }
) => {

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography variant="body2">{id}</Typography>
                    <Typography variant="body2">{amount}</Typography>
                </Box>
                <Box
                    sx={{
                        padding: 1,
                        borderRadius: 1,
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
        </>
    );
};

export default TabTransaction;
