import { useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import AnalyticsCard from "../components/AnalyticsCard.js";
import Button from "../components/Button.js";
import { usePageMetadata } from "../PageContext.js";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import RefreshIcon from '@mui/icons-material/Refresh';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FilterList from '@mui/icons-material/FilterList';
import BgCard from "../components/BgCard.js";
import TransactionCard from "../components/TransactionCard.js";
import DashTools from "../components/DashTools.js";
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

const MainDashboardPage = () => {
  const { setPageMetadata } = usePageMetadata();

  // Set page metadata when component mounts
  useEffect(() => {
    setPageMetadata({
      title: "Dashboard Overview",
      subtitle: "Monitor your escrow transactions and activities",
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
            title="Total Transactions"
            value="$7, 265"
            percentage="+11.01%"
            chartColor="#008000"
          />
          <AnalyticsCard
            icon={
              <NotificationsIcon
                sx={{
                  fontSize: 30,
                  color: "#0000FF",
                }} />
            }
            title="Active Escrows"
            value="12"
            percentage="-11.01%"
            chartColor="#FF0000"
          />
          <AnalyticsCard
            icon={
              <HourglassEmptyIcon
                sx={{
                  fontSize: 30,
                  color: "#0000FF",
                }} />
            }
            title="Pending Review"
            value="12"
            percentage="+21.01%"
            chartColor="#008000"
          />
          <AnalyticsCard
            icon={
              <DoneAllIcon
                sx={{
                  fontSize: 30,
                  color: "#0000FF",
                }} />
            }
            title="Completed"
            value="45"
            percentage="-21.01%"
            chartColor="#FF0000"
          />
        </Box>
        <Box
          sx={{
            mt: 5,
            width: '100%',
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
            }>Recent Transactions</Typography>
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
              title="All"
              textColor="#000"
            />

            <Button
              icon={
                <FilterList
                  sx={{
                    fontSize: 20,
                    color: "#000"
                  }}
                />
              }
              title="View All"
              textColor="#000"
              reverseOrder="true"
            />
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
        />
        <BgCard
          content={
            <>
              <DashTools
                icon={
                  <NotificationsOutlinedIcon
                  sx={{
                    fontSize: 30,
                    color: "#fff"
                  }}
                  />
                }
                title="Create New Escrow"
                textColor="#fff"
                bgColor="#0000FF"
              />

              <DashTools
                icon={
                  <PeopleIcon
                  sx={{
                    fontSize: 30,
                    color: "#008000"
                  }}
                  />
                }
                title="Invite Participants"
              />

              <DashTools
                icon={
                  <TrendingUpIcon
                  sx={{
                    fontSize: 30,
                    color: "#800080"
                  }}
                  />
                }
                title="View Reports"
              />
            </>
          }
        />
      </Box>
    </>
  );
};

export default MainDashboardPage;
