import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import LogoIcon from "../images/Logo.png";
import SearchIcon from "../images/Search.png";
import CartIcon from "../images/Cart.png";
import UserIcon from "../images/User.png";
import Model1 from "../images/Model_1.png";
import Model2 from "../images/Model_2.png";
import Model3 from "../images/Model_3.png";
import Model4 from "../images/Model_4.png";
import UltimateText from "../images/ultimate.png";
import SaleText from "../images/sale.png";
import NewCollectionText from "../images/NEW COLLECTION.png";
import BrandGrid from "../components/BrandGrid";

const ShopNow = () => {
  const navigate = useNavigate();

  const centerNavItems = [
    { text: "Home", onClick: () => console.log("Home clicked") },
    { text: "Deals", onClick: () => console.log("Deals clicked") },
    {
      text: "New Arrivals",
      onClick: () => console.log("New Arrivals clicked"),
    },
    { text: "Packages", onClick: () => console.log("Packages clicked") },
  ];

  const rightIcons = [
    { src: SearchIcon, alt: "Search", onClick: () => console.log("Search") },
    { src: CartIcon, alt: "Cart", onClick: () => console.log("Cart") },
    { src: UserIcon, alt: "User", onClick: () => navigate(`/login`) },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const BrandLogo = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  }));

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
      <Box sx={{ mt: 3, px: { xs: 2, sm: 4 }, py: 6, bgcolor: "#fff" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 2,
            alignItems: "center",
          }}
        >
          {/* Left Image */}
          <Box>
            <Box
              component="img"
              src={Model1}
              alt="Left Model"
              sx={{ width: "100%", borderRadius: 2, objectFit: "cover" }}
            />
          </Box>

          {/* Center Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              component="img"
              src={Model3}
              alt="Top Models"
              sx={{ width: "100%", borderRadius: 2, objectFit: "cover" }}
            />

            <Box
              component="img"
              src={UltimateText}
              alt="Ultimate"
              sx={{ width: "100%", objectFit: "cover" }}
            />
            <Box
              component="img"
              src={SaleText}
              alt="Sale"
              sx={{ width: "100%", objectFit: "cover" }}
            />
            <Box
              component="img"
              src={NewCollectionText}
              alt="New Collection"
              sx={{ width: "50%", objectFit: "cover" }}
            />
            <Button
              variant="contained"
              sx={{
                height: 50,
                width: 185,
                bgcolor: "#764D2E",
                borderRadius: 2,
              }}
            >
              SHOP NOW
            </Button>

            <Box
              component="img"
              src={Model4}
              alt="Bottom Models"
              sx={{ width: "100%", borderRadius: 2, objectFit: "cover" }}
            />
          </Box>

          {/* Right Image */}
          <Box>
            <Box
              component="img"
              src={Model2}
              alt="Right Model"
              sx={{ width: "100%", borderRadius: 2, objectFit: "cover" }}
            />
          </Box>
        </Box>

        {/* Brands */}
        <BrandGrid />
      </Box>
    </Box>
  );
};

export default ShopNow;
