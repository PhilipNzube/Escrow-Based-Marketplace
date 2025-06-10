import {
  Box,
  Typography,
} from "@mui/material";
import TransactionCard from "../components/TransactionCard";
import TransactionItemCard from "../components/TransactionItemCard";
import Product from "../images/Products_1.png"

const Transaction = () => {
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
          Transactional Dashboard
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, color: "#000" }}>
          View and manage your transaction and escrow funds
        </Typography>
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
          <TransactionCard
            title="Escrow Balance"
            value="$5000"
          />
          <TransactionCard
            title="Active Transactions"
            value="2"
          />
          <TransactionCard
            title="Completed Transactions"
            value="10"
          />
        </Box>
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

export default Transaction;
