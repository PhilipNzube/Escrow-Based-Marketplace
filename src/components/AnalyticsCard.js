import { Box, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BgCard from "./BgCard";

const AnalyticsCard = ({
    icon,
    title,
    value,
    percentage,
    chartColor,
    numColumns = 2,
    noTrendIcon = false,
    iconBgColor = "#CACAFF",
    bgColor = "transparent",
    titleColor = "#000",
    valueColor = "#000",
}) => {
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
                        <Typography variant="body1" sx={{ color: titleColor }}>
                            {title}
                        </Typography>
                        <Box
                            sx={{
                                padding: 1,
                                borderRadius: 50,
                                backgroundColor: iconBgColor,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            {icon}
                        </Box>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: valueColor }}>
                        {value}
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 1,
                        }}>

                        {!noTrendIcon && <TrendingUpIcon sx={{ color: chartColor }} />}
                        <Typography variant="body2" sx={{ color: chartColor }}>
                            {percentage}
                        </Typography>

                    </Box>
                </>}
            numColumns={numColumns}
            bgColor = {bgColor}
        />

    );
};

export default AnalyticsCard;
