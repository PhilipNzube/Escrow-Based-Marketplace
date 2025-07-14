import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import LogoIcon from "../images/Logo.png";
import SearchIcon from "../images/Search.png";
import CartIcon from "../images/Cart.png";
import UserIcon from "../images/User.png";

const ShopNow = () => {
  const navigate = useNavigate();

  const centerNavItems = [
    { text: "Home", onClick: () => navigate(`/shop-now`) },
    { text: "Deals", onClick: () => navigate(`/shop-now/deals`) },
    {
      text: "New Arrivals",
      onClick: () => navigate(`/shop-now/new-arrival`),
    },
    { text: "Packages", onClick: () => navigate(`/shop-now/packages`) },
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

export default ShopNow;
