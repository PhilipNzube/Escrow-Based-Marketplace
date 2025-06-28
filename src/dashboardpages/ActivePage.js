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
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import RefreshIcon from '@mui/icons-material/Refresh';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import BgCard from "../components/BgCard.js";
import TransactionCard from "../components/TransactionCard.js";
import SearchIcon from "@mui/icons-material/Search";

const ActivePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
            icon={
              <RefreshIcon
                sx={{
                  fontSize: 20,
                  color: "#000"
                }}
              />
            }
            title="Refresh"
            textColor="#000"
          />
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
              <AttachMoneyIcon
                sx={{
                  fontSize: 30,
                  color: "#0000FF",
                }} />
            }
            title="Total Value"
            value="$7, 265"
            percentage="Active Transactions"
            chartColor="#008000"
            numColumns={3}
          />
          <AnalyticsCard
            icon={
              <NotificationsIcon
                sx={{
                  fontSize: 30,
                  color: "#0000FF",
                }} />
            }
            title="Total Active"
            value="12"
            percentage="-11.01%"
            chartColor="#FF0000"
            numColumns={3}
          />
          <AnalyticsCard
            icon={
              <HourglassEmptyIcon
                sx={{
                  fontSize: 30,
                  color: "#0000FF",
                }} />
            }
            title="Avg. Progress"
            value="12"
            percentage="Completion Rate"
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
            }>Active Transactions (4)</Typography>
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
                id="ESC-001"
                from="John Mitchell"
                to="Sarah John"
                timeStamp="2 Hours Ago"
                amount="$2,450.00"
                status="Active"
                padding={2}
              />
              <TransactionCard
                id="ESC-001"
                from="John Mitchell"
                to="Sarah John"
                timeStamp="2 Hours Ago"
                amount="$2,450.00"
                status="Pending"
                padding={2}
              />
              <TransactionCard
                id="ESC-001"
                from="John Mitchell"
                to="Sarah John"
                timeStamp="2 Hours Ago"
                amount="$2,450.00"
                status="Urgent"
                padding={2}
              />
              <TransactionCard
                id="ESC-001"
                from="John Mitchell"
                to="Sarah John"
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

export default ActivePage;
