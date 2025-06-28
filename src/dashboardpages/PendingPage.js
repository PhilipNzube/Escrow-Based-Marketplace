import { useEffect } from "react";
import {
  Box,
  Typography,
    InputBase,
    useMediaQuery,
    useTheme
} from "@mui/material";
import AnalyticsCard from "../components/AnalyticsCard.js";
import Button from "../components/Button.js";
import { usePageMetadata } from "../PageContext.js";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import BgCard from "../components/BgCard.js";
import TransactionCard from "../components/TransactionCard.js";
import SearchIcon from "@mui/icons-material/Search";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const PendingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { setPageMetadata } = usePageMetadata();
  
    // Set page metadata when component mounts
    useEffect(() => {
      setPageMetadata({
        title: "Pending Reviews",
        subtitle: "Items requiring your attention",
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
              <HourglassEmptyIcon
                sx={{
                  fontSize: 30,
                  color: "#A35D35",
                }} />
            }
            title="Total Pending"
            value="7"
            percentage="Needs Attention"
            chartColor="#A35D35"
            numColumns={3}
            noTrendIcon={true}
            bgColor="#FEF9C3"
          />
          <AnalyticsCard
            icon={
              <WarningAmberIcon
                sx={{
                  fontSize: 30,
                  color: "#FF0000",
                }} />
            }
            title="Urgent Items"
            value="12"
            percentage="Requires Immediate Action"
            chartColor="#FF0000"
            numColumns={3}
            noTrendIcon={true}
            bgColor="#F6BFBF"
          />
          <AnalyticsCard
            icon={
              <AttachMoneyIcon
                sx={{
                  fontSize: 30,
                  color: "#0000FF",
                }} />
            }
            title="Pending Value"
            value="$7,213.98"
            percentage="Total Pending Value"
            chartColor="#0000FF"
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
            }>Pending Transactions (4)</Typography>
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
              icon={
                <FileUploadIcon
                  sx={{
                    fontSize: 20,
                    color: "#000"
                  }}
                />
              }
              title="Export"
              textColor="#000"
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                minWidth: isMobile ? '100px' : '200px',
              }}
            >
              <SearchIcon fontSize="small" sx={{ mr: 1 }} />
              <InputBase placeholder="Search…" sx={{ fontSize: 14, flex: 1 }} />
            </Box>
          </Box>
        </Box>
        <BgCard
          content={
            <>
              <TransactionCard
                iconType="Pending"
                id="ESC-001"
                from="John Mitchell"
                to="Sarah John"
                timeStamp="Awaiting buyer confirmation | 2 Hours Ago"
                amount="$2,450.00"
                status="Pending"
                padding={2}
              />
              <TransactionCard
                iconType="Urgent"
                id="ESC-001"
                from="John Mitchell"
                to="Sarah John"
                timeStamp="2 Hours Ago"
                amount="$2,450.00"
                status="Urgent"
                padding={2}
              />
              <TransactionCard
                iconType="Pending"
                id="ESC-001"
                from="John Mitchell"
                to="Sarah John"
                timeStamp="2 Hours Ago"
                amount="$2,450.00"
                status="Pending"
                padding={2}
              />
              <TransactionCard
                iconType="Urgent"
                id="ESC-001"
                from="John Mitchell"
                to="Sarah John"
                timeStamp="2 Hours Ago"
                amount="$2,450.00"
                status="Urgent"
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

export default PendingPage;
