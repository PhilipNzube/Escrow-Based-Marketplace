import {
  Box,
  Typography,
} from "@mui/material";
import TransactionItemCard from "../components/TransactionItemCard";
import Product from "../images/Products_1.png"

const ActiveOrders = () => {
  return (
    <>
      <Box
        sx={{
          mt: 3,
          px: 2,
          width: '100%',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}>

        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ color: "#000" }}>
          Active Orders
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, color: "#000" }}>
          View and manage your active orders
        </Typography>
        
        <TransactionItemCard
          imageSrc={Product}
          title="Coffee Beans"
          subtitle="200g Premium Roast"
          date="June 9, 2025"
          price="₦4,500"
        />

        <TransactionItemCard
          imageSrc={Product}
          title="Coffee Beans"
          subtitle="200g Premium Roast"
          date="June 9, 2025"
          price="₦4,500"
        />

        <TransactionItemCard
          imageSrc={Product}
          title="Coffee Beans"
          subtitle="200g Premium Roast"
          date="June 9, 2025"
          price="₦4,500"
        />

      </Box>
    </>
  );
};

export default ActiveOrders;
