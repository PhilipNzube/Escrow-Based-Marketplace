import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import LogoIcon from "../images/Logo.png";
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
import newArrival1 from "../images/new-arrival.png";
import newArrival2 from "../images/new-arrival2.png";
import newArrival3 from "../images/new-arrival3.png";
import newArrival4 from "../images/new-arrival4.png";
import newArrival5 from "../images/new-arrival5.png";
import newArrival6 from "../images/new-arrival6.png";
import InstaPost from "../images/InstaPost.png";
import InstaPost2 from "../images/InstaPost2.png";
import InstaPost3 from "../images/InstaPost3.png";
import InstaPost4 from "../images/InstaPost4.png";
import InstaPost5 from "../images/InstaPost5.png";
import SellerImg from "../images/Top_Sellers_1.png";
import SellerImg2 from "../images/Top_Sellers_2.png";
import SellerImg3 from "../images/Top_Sellers_3.png";
import TestimonialCard from "../components/TestimonialCard";
import NewsLetterModel from "../images/NewsLetterModel.png";
import NewsLetterModel2 from "../images/NewsLetterModel2.png";

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

const productMap = {
  0: ["T-Shirt", "Jeans", "Sneakers", "Jacket", "Belt", "Watch"],
  1: [
    "Shiny Dress",
    "Long Dress",
    "Full Sweater",
    "White Dress",
    "Floral Dress",
    "Winter Top",
  ],
  2: ["Necklace", "Bracelet", "Earrings", "Handbag", "Scarf", "Glasses"],
  3: ["Tie", "Wallet", "Cufflinks", "Socks", "Cap", "Sunglasses"],
  4: [
    "Clearance Coat",
    "Last Season Shoes",
    "Sale Watch",
    "Discount Hoodie",
    "Flash Deal Bag",
    "Outlet Pants",
  ],
};

const imageMap = [
  newArrival1,
  newArrival2,
  newArrival3,
  newArrival4,
  newArrival5,
  newArrival6,
];

const categoryLabels = [
  "Men’s Fashion",
  "Women’s Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const images = [
  { src: InstaPost, alt: "Instagram Post 1" },
  { src: InstaPost2, alt: "Instagram Post 2" },
  { src: InstaPost3, alt: "Instagram Post 3" },
  { src: InstaPost4, alt: "Instagram Post 4" },
  { src: InstaPost5, alt: "Instagram Post 5" },
];

const testimonialData = [
  {
    image: SellerImg,
    body: "My experience with TrustPay is a complete success...",
    position: "Leona Paul",
    position2: "Businesswoman and CEO",
  },
  {
    image: SellerImg2,
    body: "Smooth delivery and seamless buying experience.",
    position: "Elena Flyod",
    position2: "Online Entrepreneur",
  },
  {
    image: SellerImg3,
    body: "TrustPay helped me scale my shop within 2 months.",
    position: "Amina Yusuf",
    position2: "Retail Business Owner",
  },
];

const PackagesPage = () => {
  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = useState(1);

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
      <Box sx={{ mt: 10, px: { xs: 2, sm: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            alignItems: "center",
            width: "100%",
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
              gap: 2,
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
      {/* Deals Of The Month Section */}
      <Box
        sx={{
          px: { xs: 2, sm: 4 },
          mt: 40,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "center",
          width: "100%",
          "& > *": {
            flex: {
              xs: "1 1 100%",
              md: (index) => (index === 0 ? "1 1 33.33%" : "1 1 66.67%"),
            },
          },
        }}
      >
        {/* Text Content */}
        <Box>
          <Typography variant="h3" color="#484848" fontWeight="bold" mb={2}>
            Deals Of The Month
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
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
            width: "75%",
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: 40,
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          color="#764D2E"
          mb={2}
        >
          New Arrivals
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#8A8A8A",
            mb: 4,
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </Typography>

        {/* Tabs Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            overflowX: "auto",
            gap: 2,
            mt: 6,
            mb: 5,
            pb: 1,
            px: 1,
            width: "100%",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { height: 5 },
          }}
        >
          {categoryLabels.map((label, index) => (
            <Button
              key={index}
              onClick={() => setTabIndex(index)}
              variant={"contained"}
              sx={{
                backgroundColor: tabIndex === index ? "#764D2E" : "#FAFAFA",
                "&:hover": {
                  backgroundColor: "#764d2e6b",
                },
                color: tabIndex === index ? "#FFF" : "#8A8A8A",
                whiteSpace: "nowrap",
                borderRadius: 1.5,
                boxShadow: "none",
                px: 3,
                flexShrink: 0,
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Cards Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            width: "100%",
          }}
        >
          {productMap[tabIndex].map((product, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "100%", sm: "48%", md: "30%" },
                boxShadow: 2,
                borderRadius: 3,
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={imageMap[i]}
                alt={`New Arrival ${i + 1}`}
                sx={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
              <Box sx={{ width: "100%" }}>
                <Typography fontWeight="bold">{product}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Al Karam
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Typography variant="body2">
                    (4.1k) Customer Reviews
                  </Typography>
                  <Typography color="#fbc02d">★★★★★</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Typography fontWeight="bold">$95.50</Typography>
                  <Typography variant="body2" color="error">
                    Almost Sold Out
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              height: 50,
              width: 185,
              bgcolor: "#764D2E",
              borderRadius: 2,
            }}
          >
            View More
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 40,
          px: { xs: 2, sm: 4 },
          textAlign: "center",
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#764D2E",
            mb: 2,
          }}
        >
          Follow Us On Instagram
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#8A8A8A",
            mb: 4,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mt: 15,
            "& > *": {
              flex: "0 0 auto",
              maxWidth: { xs: "100%", md: "200px" },
              width: "100%",
              objectFit: "cover",
              borderRadius: 0,
            },
          }}
        >
          {images.map((image, index) => (
            <Box
              component="img"
              key={index}
              src={image.src}
              alt={image.alt}
              sx={{
                height: { xs: "auto", md: index % 2 === 0 ? "400px" : "300px" },
                aspectRatio: "1 / 1",
              }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 40, px: { xs: 2, sm: 4 } }}>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 10 }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 600,
              position: "relative",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="bold"
              color="#764D2E"
              mb={2}
            >
              Testimonials
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#8A8A8A",
                mb: 4,
                maxWidth: "600px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              Over 15,000 happy customers
            </Typography>

            <Box
              sx={{
                mt: 6,
              }}
            >
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                nextArrow={<CustomNextArrow />}
                prevArrow={<CustomPrevArrow />}
              >
                {testimonialData.map((item, i) => (
                  <Box key={i} px={2}>
                    <TestimonialCard
                      image={item.image}
                      body={item.body}
                      position={item.position}
                      position2={item.position2}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
            <Divider sx={{ mt: 5, borderColor: "#000", width: "100%" }} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 40,
          px: { xs: 2, sm: 4 },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 8 },
        }}
      >
        <Box
          component="img"
          src={NewsLetterModel}
          alt="Model 1"
          sx={{
            maxWidth: { xs: "100%", md: "300px" },
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            textAlign: "center",
            maxWidth: { xs: "100%", md: "800px" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              color: "#764D2E",
              mb: 2,
            }}
          >
            Subscribe To Our Newsletter
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#8A8A8A",
              mb: 4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </Typography>
          <TextField
            variant="outlined"
            placeholder="theodoreogala@gmail.com"
            sx={{
              mb: 2,
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                "& fieldset": {
                  borderColor: "transparent", // remove border normally
                },
                "&:hover fieldset": {
                  borderColor: "transparent", // no border on hover
                },
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Adds a shadow below
                "&:hover": {
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Enhance shadow on hover
                },
                "&.Mui-focused": {
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Enhance shadow when focused
                  "& fieldset": {
                    borderColor: "transparent", // still no border on focus
                  },
                },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#764D2E",
              color: "#fff",
              padding: "10px 30px",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#4e362c",
              },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
        <Box
          component="img"
          src={NewsLetterModel2}
          alt="Model 2"
          sx={{
            maxWidth: { xs: "100%", md: "300px" },
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 40,
          mb: 4,
        }}
      >
        <Box
          sx={{
            py: 4,
            backgroundColor: "#fff",
            width: "100%",
            borderTop: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "space-between" },
            gap: { xs: 2, md: 0 },
            px: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="img"
              src={LogoIcon}
              alt="logo"
              sx={{
                height: 25, // or auto
                width: "auto", // maintain aspect ratio
                mr: 1,
                objectFit: "contain",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "#764D2E",
                fontWeight: "bold",
              }}
            >
              TrustPay
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 1, md: 4 },
              mb: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#484848",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Support Center
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#484848",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Invoicing
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#484848",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Contract
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#484848",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Careers
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#484848",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Blog
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#484848",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              FAQs
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: 10,
            color: "#484848",
            mt: { xs: 2, md: 0 },
          }}
        >
          Copyright © 2025 TrustPay. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default PackagesPage;
