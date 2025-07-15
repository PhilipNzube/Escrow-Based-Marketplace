import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import LogoIcon from "../images/Logo.png";
import SearchIcon from "../images/Search.png";
import CartIcon from "../images/Cart.png";
import UserIcon from "../images/User.png";
const HomePage = () => {
  const navigate = useNavigate();
  const centerNavItems = [
    { text: "Home", to: "/", onClick: () => console.log("Home clicked") },
    { text: "Buy", to: "/buy", onClick: () => console.log("Buy clicked") },
    { text: "Sell", to: "/sell", onClick: () => console.log("Sell clicked") },
    {
      text: "Categories",
      to: "/categories",
      onClick: () => console.log("Categories clicked"),
    },
    {
      text: "Deals",
      to: "/deals",
      onClick: () => console.log("Deals clicked"),
    },
  ];

  const rightIcons = [
    { src: SearchIcon, alt: "Search", onClick: () => console.log("Search") },
    { src: CartIcon, alt: "Cart", onClick: () => console.log("Cart") },
    { src: UserIcon, alt: "User", onClick: () => navigate(`/login`) },
  ];

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      {/* Transparent AppBar */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 10 }}>
        <ResponsiveNavBar
          title="TrustPay"
          logo={LogoIcon}
          centerItems={centerNavItems}
          rightIcons={rightIcons}
          bg="#fff"
        />
      </Box>

      <Outlet />
    </Box>
  );
};

export default HomePage;
