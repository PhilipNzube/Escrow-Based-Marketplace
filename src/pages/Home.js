import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import BgImg from "../images/Background_Img.png";
import LogoIcon from "../images/Logo.png";
import SearchIcon from "../images/Search.png";
import CartIcon from "../images/Cart.png";
import UserIcon from "../images/User.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const centerNavItems = [
  { text: "Home", onClick: () => console.log("Home clicked") },
  { text: "Buy", onClick: () => console.log("Buy clicked") },
  { text: "Sell", onClick: () => console.log("Sell clicked") },
  { text: "Categories", onClick: () => console.log("Categories clicked") },
  { text: "Deals", onClick: () => console.log("Deals clicked") },
];

const rightIcons = [
  { src: SearchIcon, alt: "Search", onClick: () => console.log("Search") },
  { src: CartIcon, alt: "Cart", onClick: () => console.log("Cart") },
  { src: UserIcon, alt: "User", onClick: () => console.log("User") },
];


const HomePage = () => {
  const handleItemClick = (item) => {
    alert(`Clicked on: ${item.text}`);
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Transparent AppBar */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <ResponsiveNavBar
          title="TrustPay"
          logo={LogoIcon}
          centerItems={centerNavItems}
          rightIcons={rightIcons}
        />
      </Box>

      {/* Hero Section with background image */}
      <Box
        sx={{
          height: "150vh",
          width: "100%",
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // aligns items to the far left
          justifyContent: "center", // centers vertically
          pl: "25px", // left padding to prevent text touching edge
          pb: "150px"
        }}
      >
        {/* Text overlay */}
        <Typography
          variant="h2"
          sx={{
            width: "500px",
            color: "#764D2E",
            fontWeight: "bold",
            zIndex: 5,
            mb: 2, // margin bottom
          }}
        >
          The First Nigerian Escrow-based Marketplace
        </Typography>

        <Typography
          variant="body1"
          sx={{
            width: "500px",
            color: "#764D2E",
            zIndex: 5,
            mb: 3,
          }}
        >
          Explore different categories. Find the best deal.
        </Typography>

        <Button
          endIcon={<ArrowForwardIcon />}
          variant="contained"
          sx={{
            mt: 3,
            px: 4,
            py: 1.5,
            backgroundColor: "#764D2E",
            '&:hover': {
              backgroundColor: "#764d2e"
            }
          }}
        >
          Shop Now
        </Button>
      </Box>

      {/* Other content */}
      <Box sx={{ p: 4 }}>
        <Typography variant="body1">
          Start browsing products or list your own for sale...
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;