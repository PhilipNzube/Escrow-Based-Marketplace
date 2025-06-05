import React from "react";
import { Box, Typography } from "@mui/material";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import BgImg from "../images/Background_Img.png";
import LogoIcon from "../images/Logo.png";
import SearchIcon from "../images/Search.png";
import CartIcon from "../images/Cart.png";
import UserIcon from "../images/User.png";


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
          height: "90vh",
          width: "100%",
          backgroundImage: "url('../images/Background_Img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Text overlay */}
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "0 2px 6px rgba(0,0,0,0.6)",
            zIndex: 5,
          }}
        >
          First Escrow Based Marketplace
        </Typography>
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