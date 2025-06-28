import { Box, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BgCard from "./BgCard";

const DashTools = ({
    icon,
    title,
    textColor = "#000",
    bgColor = "transparent",
}) => {
    return (
        <BgCard
            content={
                <>
                    <Box
                        sx={{
                            width: '100%',
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1,
                            cursor: "pointer",
                        }}>
                        {icon}
                        <Typography variant="h6"
                            sx={{
                                fontWeight: 600,
                                color: textColor,
                                textAlign: "center",
                            }}>
                            {title}
                        </Typography>
                    </Box>
                </>}
            bgColor={bgColor}
        />

    );
};

export default DashTools;
