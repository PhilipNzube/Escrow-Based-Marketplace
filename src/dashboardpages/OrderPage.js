import { useEffect } from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import AnalyticsCard from "../components/AnalyticsCard.js";
import { usePageMetadata } from "../PageContext.js";
import ListIcon from '@mui/icons-material/List';
import InventoryIcon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import BgCard from "../components/BgCard.js";
import OrderCard from "../components/OrderCard.js";

const OrderPage = () => {
  const { setPageMetadata } = usePageMetadata();

  // Set page metadata when component mounts
  useEffect(() => {
    setPageMetadata({
      title: "My Orders",
      subtitle: "Track your purchase and service orders",
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
              <ListIcon
                sx={{
                  fontSize: 30,
                  color: "#0000FF",
                }} />
            }
            title="Total Orders"
            value="3"
            percentage="+4 This Week"
            chartColor="#008000"
          />
          <AnalyticsCard
            icon={
              <InventoryIcon
                sx={{
                  fontSize: 30,
                  color: "#FF543E",
                }} />
            }
            title="In Progress"
            value="2"
            percentage="Active Orders"
            chartColor="#FF543E"
            iconBgColor="#FFDAD5"
          />
          <AnalyticsCard
            icon={
              <LocalShippingIcon
                sx={{
                  fontSize: 30,
                  color: "#800080",
                }} />
            }
            title="Shipped"
            value="216"
            percentage="In Transit"
            chartColor="#800080"
            noTrendIcon={true}
            iconBgColor="#FFD2FF"
          />
          <AnalyticsCard
            icon={
              <DoneAllIcon
                sx={{
                  fontSize: 30,
                  color: "#008000",
                }} />
            }
            title="Delivered"
            value="216"
            percentage="Completed Orders"
            chartColor="#008000"
            noTrendIcon={true}
            iconBgColor="#C3FFC3"
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
              <OrderCard
                iconType="Processing"
                name="Mac Book Pro 16"
                from="Tech Store Pro"
                id="ORD-001"
                orderTimeStamp="1-1-2025 10:00 AM"
                deliveryTimeStamp="2-1-2025 10:00 AM"
                amount="$2,450.00"
                status="Processing"
                padding={2}
              />
              <OrderCard
                iconType="In Progress"
                name="Mac Book Pro 16"
                from="Tech Store Pro"
                id="ORD-001"
                orderTimeStamp="1-1-2025 10:00 AM"
                deliveryTimeStamp="2-1-2025 10:00 AM"
                amount="$2,450.00"
                status="In Progress"
                padding={2}
              />
              <OrderCard
                iconType="Shipped"
                name="Mac Book Pro 16"
                from="Tech Store Pro"
                id="ORD-001"
                orderTimeStamp="1-1-2025 10:00 AM"
                deliveryTimeStamp="2-1-2025 10:00 AM"
                amount="$2,450.00"
                status="Shipped"
                padding={2}
              />
              <OrderCard
                iconType="Delivered"
                name="Mac Book Pro 16"
                from="Tech Store Pro"
                id="ORD-001"
                orderTimeStamp="1-1-2025 10:00 AM"
                deliveryTimeStamp="2-1-2025 10:00 AM"
                amount="$2,450.00"
                status="Delivered"
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

export default OrderPage;
