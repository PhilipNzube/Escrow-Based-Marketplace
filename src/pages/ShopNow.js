import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
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
import DealModel1 from "../images/deal_model1.png";
import DealModel2 from "../images/deal_model2.png";
import UltimateText from "../images/ultimate.png";
import SaleText from "../images/sale.png";
import NewCollectionText from "../images/NEW COLLECTION.png";
import BrandGrid from "../components/BrandGrid";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const DigitalText = styled(Typography)(({ theme }) => ({
  fontFamily: "monospace",
  fontWeight: "bold",
  fontSize: "1.5rem",
  letterSpacing: "0.1em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const carouselItems = [
  {
    img: DealModel1,
    label: "01 — Spring Sale",
    offer: "30% OFF",
  },
  {
    img: DealModel2,
  },
  {
    img: DealModel1,
  },
];

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

  const CustomNextArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{ position: "absolute", right: -30, top: "40%", color: "#000" }}
    >
      <ArrowForwardIos />
    </IconButton>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{ position: "absolute", left: -30, top: "40%", color: "#000" }}
    >
      <ArrowBackIos />
    </IconButton>
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

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

        {/* Deals Of The Month Section */}
        <Box
          sx={{
            mt: 40,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <Box>
            <Typography variant="h3" color="#484848" fontWeight="bold" mb={2}>
              Deals Of The Month
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </Typography>
            <Button
              variant="contained"
              sx={{ bgcolor: "#7B3F00", borderRadius: 2 }}
            >
              Explore all items →
            </Button>

            <Box mt={6}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Hurry, Before It’s Too Late!
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {[
                  { label: "Days", value: "02" },
                  { label: "Hr", value: "06" },
                  { label: "Mins", value: "05" },
                  { label: "Sec", value: "30" },
                ].map((item, i) => (
                  <Box
                    key={i}
                    textAlign="center"
                    sx={{ boxShadow: 3, p: 2, borderRadius: 2 }}
                  >
                    <DigitalText>{item.value}</DigitalText>
                    <Typography variant="body2">{item.label}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Carousel */}
          <Box
            sx={{
              width: { xs: "100%", sm: "90%", md: "100%" },
              maxWidth: { xs: 260, sm: 400, md: 900 },
              mx: "auto",
            }}
          >
            <Slider {...carouselSettings}>
              {carouselItems.map((item, index) => (
                <Box
                  key={index}
                  className="slick-slide-custom"
                  sx={{
                    px: 1,
                    position: "relative",
                    aspectRatio: "3 / 4",
                    overflow: "hidden",
                    borderRadius: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={`Deal ${index + 1}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {item.label && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        bgcolor: "#fff",
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        boxShadow: 2,
                      }}
                    >
                      <Typography variant="caption">{item.label}</Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {item.offer}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShopNow;
