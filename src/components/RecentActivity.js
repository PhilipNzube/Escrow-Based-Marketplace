import { Box, Typography } from "@mui/material";

const RecentActivity =
    (
        {
            activityId,
            timeStamp,
        }
    ) => {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography variant="body2">{activityId}</Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: 12,
                    }}
                >
                    {timeStamp}</Typography>
            </Box>
        );
    };

export default RecentActivity;
