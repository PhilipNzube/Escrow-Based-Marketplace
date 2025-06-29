import { useEffect } from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import AnalyticsCard from "../components/AnalyticsCard.js";
import { usePageMetadata } from "../PageContext.js";
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import BgCard from "../components/BgCard.js";
import WalletTransactionCard from "../components/WalletTransactionCard.js";

const WalletPage = () => {
  const { setPageMetadata } = usePageMetadata();

  // Set page metadata when component mounts
  useEffect(() => {
    setPageMetadata({
      title: "My Wallet",
      subtitle: "Manage your funds and view transaction history",
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
              <VisibilityIcon
                sx={{
                  fontSize: 30,
                  color: "#0000FF",
                }} />
            }
            title="Total Balance"
            value="$4,823.5"
            percentage="+4 from last month"
            chartColor="#FFFFFF"
            iconBgColor="#FFF"
            bgColor="#0000FF"
            titleColor="#FFF"
            valueColor="#FFF"
            numColumns={3}
          />
          <AnalyticsCard
            icon={
              <AccountBalanceWalletIcon
                sx={{
                  fontSize: 30,
                  color: "#008000",
                }} />
            }
            title="Available Balance"
            value="$1,823"
            percentage="Ready to Use"
            chartColor="#000"
            iconBgColor="#DCFCE7"
            valueColor="#008000"
            numColumns={3}
          />
          <AnalyticsCard
            icon={
              <HourglassEmptyIcon
                sx={{
                  fontSize: 30,
                  color: "#CA8A04",
                }} />
            }
            title="Pending Balance"
            value="216"
            percentage="In escrow"
            chartColor="#000"
            noTrendIcon={true}
            iconBgColor="#FDE7B9"
            valueColor="#CA8A04"
            numColumns={3}
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
            }>Recent Orders</Typography>
        </Box>
        <BgCard
          content={
            <>
              <WalletTransactionCard
                iconType="Credit"
                name="Mac Book Pro 16"
                from="Tech Store Pro"
                id="ORD-001"
                timeStamp="1-1-2025 10:00 AM"
                amount="$2,450.00"
                status="Pending"
                padding={2}
              />
              <WalletTransactionCard
                iconType="Debit"
                name="Mac Book Pro 16"
                from="Bank Transfer"
                id="ORD-001"
                timeStamp="1-1-2025 10:00 AM"
                amount="$2,450.00"
                status="Completed"
                padding={2}
              />
              <WalletTransactionCard
                iconType="Credit"
                name="Mac Book Pro 16"
                from="Tech Store Pro"
                id="ORD-001"
                timeStamp="1-1-2025 10:00 AM"
                amount="$2,450.00"
                status="Completed"
                padding={2}
              />
              <WalletTransactionCard
                iconType="Debit"
                name="Mac Book Pro 16"
                from="Tech Store Pro"
                id="ORD-001"
                timeStamp="1-1-2025 10:00 AM"
                amount="$2,450.00"
                status="Pending"
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

export default WalletPage;
