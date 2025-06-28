import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";

const mockData = [
    {
        transactionId: "ESC-001",
        from: "John Mitchell",
        to: "Sarah John",
        amount: "$2,00.01",
        type: "Purchase",
        status: "Active",
        date: "06-20-2025",
    },
    {
        transactionId: "ESC-002",
        from: "John Mitchell",
        to: "Sarah John",
        amount: "$2,00.01",
        type: "Purchase",
        status: "Pending",
        date: "19-20-2025",
    },
    {
        transactionId: "ESC-003",
        from: "John Mitchell",
        to: "Sarah John",
        amount: "$2,00.01",
        type: "Purchase",
        status: "Completed",
        date: "19-20-2025",
    },
    {
        transactionId: "ESC-004",
        from: "John Mitchell",
        to: "Sarah John",
        amount: "$2,00.01",
        type: "Purchase",
        status: "Active",
        date: "06-20-2025",
    },
    {
        transactionId: "ESC-006",
        from: "John Mitchell",
        to: "Sarah John",
        amount: "$2,00.01",
        type: "Purchase",
        status: "Pending",
        date: "19-20-2025",
    },
    {
        transactionId: "ESC-007",
        from: "John Mitchell",
        to: "Sarah John",
        amount: "$2,00.01",
        type: "Purchase",
        status: "Completed",
        date: "19-20-2025",
    },
];

const TransactionTable = () => {
    return (
        <Box
            sx={{
                overflowX: "auto",
                width: "100%",
                '&::-webkit-scrollbar': { height: 5 },
            }}
        >
            <Box
                sx={{
                    minWidth: "900px", // force scroll on smaller screens
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: 2,
                        py: 1,
                        backgroundColor: "#f8f8f8",
                    }}
                >
                    <Typography variant="subtitle2" fontWeight={600} color="#666">
                        Transaction ID
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={600} color="#666">
                        Parties
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={600} color="#666">
                        Amount
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={600} color="#666">
                        Type
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={600} color="#666">
                        Status
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={600} color="#666">
                        Date
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={600} color="#666">
                        Actions
                    </Typography>
                </Box>

                {/* Rows */}
                {mockData.map((item) => (
                    <Box
                        key={item.transactionId + item.date}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            px: 2,
                            py: 1,
                            borderBottom: "1px solid #eee",
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            {item.transactionId}
                        </Typography>
                        <Box>
                            <Typography variant="body2">{item.from}</Typography>
                            <Typography variant="body2" sx={{ color: "#888", fontSize: "0.75rem" }}>
                                → {item.to}
                            </Typography>
                        </Box>
                        <Typography variant="body2" fontWeight={600}>
                            {item.amount}
                        </Typography>
                        <Chip
                            label={item.type}
                            size="small"
                            sx={{
                                backgroundColor: "#f3d1f9",
                                color: "#333",
                                fontWeight: 500,
                            }}
                        />
                        <Chip
                            label={item.status}
                            size="small"
                            sx={{
                                backgroundColor:
                                    item.status === "Active"
                                        ? "#aee1fb"
                                        : item.status === "Pending"
                                            ? "#ffe4b2"
                                            : "#c4f4d2",
                                color: "#333",
                                fontWeight: 500,
                            }}
                        />
                        <Typography variant="body2">{item.date}</Typography>
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
                            View Details
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TransactionTable;
