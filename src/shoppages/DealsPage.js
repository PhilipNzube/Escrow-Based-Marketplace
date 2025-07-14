import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  IconButton,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import newArrival1 from "../images/new-arrival.png";
import newArrival2 from "../images/new-arrival2.png";
import newArrival3 from "../images/new-arrival3.png";
import newArrival4 from "../images/new-arrival4.png";
import newArrival5 from "../images/new-arrival5.png";
import newArrival6 from "../images/new-arrival6.png";
import FilterSidebar from "../components/FilterSidebar";
import FashionProductCard from "../components/FashionProductCard";
import FashionImg from "../images/FashionImg.png";
import FashionImg2 from "../images/FashionImg2.png";
import FashionImg3 from "../images/FashionImg3.png";
import FashionImg4 from "../images/FashionImg4.png";
import FashionImg5 from "../images/FashionImg5.png";
import FashionImg6 from "../images/FashionImg6.png";
import FashionImg7 from "../images/FashionImg7.png";
import FashionImg8 from "../images/FashionImg8.png";
import FashionImg9 from "../images/FashionImg9.png";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DenimImg from "../images/Denim.png";
import DenimImg2 from "../images/Denim2.png";
import DenimImg3 from "../images/Denim3.png";
import DenimImg4 from "../images/Denim4.png";
import DenimImg5 from "../images/Denim5.png";
import DenimImg6 from "../images/Denim6.png";
import DenimImg7 from "../images/Denim7.png";
import MainDenimImg from "../images/MainDenimJacket.png";
import LogoIcon from "../images/Logo.png";

const products = [
  {
    name: "Rounded Red Hat",
    price: "$8.00",
    image: FashionImg,
    color: "yellow",
  },
  {
    name: "Linen-blend Shirt",
    price: "$17.00",
    image: FashionImg2,
    color: "blue",
    soldOut: true,
  },
  {
    name: "Long-sleeve Coat",
    price: "$106.00",
    image: FashionImg3,
    color: "green",
  },
  {
    name: "Boxy Denim Hat",
    price: "$25.00",
    image: FashionImg4,
    color: "blue",
  },
  {
    name: "Linen Plain Top",
    price: "$25.00",
    image: FashionImg5,
    color: "green",
  },
  {
    name: "Oversized T-shirt",
    price: "$11.00-$14.00",
    image: FashionImg6,
    color: "pink",
  },
  {
    name: "Polarised Sunglasses",
    price: "$18.00-$21.00",
    image: FashionImg7,
    color: "black",
  },
  {
    name: "Rockstar Jacket",
    price: "$22.00",
    image: FashionImg8,
    color: "purple",
  },
  {
    name: "Dotted Black Dress",
    price: "$20.00",
    image: FashionImg9,
    color: "black",
  },
];

const ProductImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
});

const Thumbnail = styled("img")({
  width: "60px",
  height: "80px",
  objectFit: "cover",
  margin: "5px",
  cursor: "pointer",
  border: "1px solid #ddd",
  "&:hover": {
    borderColor: "#764D2E",
  },
});

const ColorCircle = styled("div")(({ color }) => ({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: color,
  border: "2px solid #fff",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#764D2E",
  },
}));

const imageMap = [
  newArrival1,
  newArrival2,
  newArrival3,
  newArrival4,
  newArrival5,
  newArrival6,
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

const categoryLabels = [
  "Men’s Fashion",
  "Women’s Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const DealsPage = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [timer, setTimer] = useState({
    days: 0,
    hours: 5,
    minutes: 59,
    seconds: 47,
  });

  const handleAddToCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleQuantityChange = (action) => {
    if (action === "increase" && quantity < 9) setQuantity(quantity + 1);
    if (action === "decrease" && quantity > 1) setQuantity(quantity - 1);
  };

  const thumbnails = [
    { id: 1, src: DenimImg, alt: "Thumbnail 1" },
    { id: 2, src: DenimImg2, alt: "Thumbnail 2" },
    { id: 3, src: DenimImg3, alt: "Thumbnail 3" },
    { id: 4, src: DenimImg4, alt: "Thumbnail 4" },
    { id: 5, src: DenimImg5, alt: "Thumbnail 5" },
  ];

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h3" sx={{ mt: 15, color: "#764D2E" }}>
          Fashion
        </Typography>
        <Typography variant="body2" sx={{ mt: 5, color: "#764D2E" }}>
          Home &gt; Fashion
        </Typography>
      </Box>
      <Box
        sx={{
          py: 4,
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
          mt: 5,
          px: { xs: 2, sm: 4 },
        }}
      >
        <FilterSidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="outlined" size="small">
                👆
              </Button>
              <Button variant="outlined" size="small">
                👉
              </Button>
              <Button variant="outlined" size="small">
                👇
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {paginatedProducts.map((product, index) => (
              <FashionProductCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
                color={product.color}
                soldOut={product.soldOut}
              />
            ))}
          </Box>
          {/* Responsive MUI Flexbox Pagination Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &lt;
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "contained" : "outlined"}
                onClick={() => handlePageChange(page)}
                sx={{
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor:
                    currentPage === page ? "#764D2E" : "transparent",
                  color: currentPage === page ? "#fff" : "#764D2E",
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outlined"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &gt;
            </Button>
            <Button
              variant="outlined"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(totalPages)}
            >
              &gt;&gt;
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mt: 40,
          px: { xs: 2, sm: 4 },
          gap: 4,
        }}
      >
        {/* Product Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ProductImage src={MainDenimImg} alt="Denim Jacket" />
          <Box sx={{ display: "flex", mt: 2 }}>
            {thumbnails.map((thumb) => (
              <Thumbnail key={thumb.id} src={thumb.src} alt={thumb.alt} />
            ))}
          </Box>
        </Box>

        {/* Product Details Section */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h4" sx={{ color: "#764D2E" }}>
            Denim Jacket
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2">★★★★☆ (3)</Typography>
            <IconButton size="small">
              <span role="img" aria-label="favorite">
                ⭐
              </span>
            </IconButton>
          </Box>
          <Typography variant="h5" sx={{ color: "#764D2E" }}>
            $39.00{" "}
            <span style={{ textDecoration: "line-through", color: "#888" }}>
              $59.00
            </span>{" "}
            <span style={{ color: "green", fontSize: "0.8em" }}>SAVE 33%</span>
          </Typography>
          <Typography variant="body2">
            24 people are viewing this right now
          </Typography>
          <Box sx={{ bgcolor: "#ffebee", p: 1, borderRadius: 1 }}>
            <Typography variant="body2" color="error">
              Hurry up! Sale ends in: {timer.hours}:{timer.minutes}:
              {timer.seconds}
            </Typography>
          </Box>
          <Typography variant="body2" color="error">
            Only 9 item(s) left in stock!
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">Size: {selectedSize}</Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {["M", "L", "XL", "XXL"].map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "contained" : "outlined"}
                  onClick={() => setSelectedSize(size)}
                  sx={{ minWidth: "40px" }}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">Color: {selectedColor}</Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {["blue", "black", "pink"].map((color) => (
                <ColorCircle
                  key={color}
                  color={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    border:
                      selectedColor === color
                        ? "2px solid #764D2E"
                        : "2px solid #fff",
                  }}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">Quantity</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: 1,
              }}
            >
              <IconButton
                size="small"
                onClick={() => handleQuantityChange("decrease")}
              >
                <RemoveIcon />
              </IconButton>
              <TextField
                value={quantity}
                size="small"
                sx={{ width: "60px", "& input": { textAlign: "center" } }}
                inputProps={{ readOnly: true }}
              />
              <IconButton
                size="small"
                onClick={() => handleQuantityChange("increase")}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              sx={{ ml: 2 }}
            >
              Add to cart
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button variant="outlined">Compare</Button>
            <Button variant="outlined">Ask a question</Button>
            <Button variant="outlined">Share</Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Estimated Delivery: Jul 30 - Aug 03
          </Typography>
          <Typography variant="body2">
            Free Shipping & Returns: On all orders over $75
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <img
              src="/path/to/payment-icons.jpg"
              alt="Payment methods"
              style={{ height: "30px" }}
            />
            <Typography variant="body2">
              Guarantee safe & secure checkout
            </Typography>
          </Box>
        </Box>

        {/* Shopping Cart Popup */}
        {isCartOpen && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <Box
              sx={{
                bgcolor: "#fff",
                p: 3,
                borderRadius: 2,
                width: { xs: "90%", md: "400px" },
                position: "relative",
              }}
            >
              <IconButton
                sx={{ position: "absolute", top: 10, right: 10 }}
                onClick={handleCloseCart}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Shopping Cart
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Buy $122.35 More And Get Free Shipping
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <ProductImage
                  src="/path/to/main-image.jpg"
                  alt="Denim Jacket"
                  sx={{ width: "80px", height: "100px" }}
                />
                <Box>
                  <Typography variant="body1">Denim Jacket</Typography>
                  <Typography variant="body2">Color: Red</Typography>
                  <Typography variant="body2">$14.80</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange("decrease")}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <TextField
                      value={quantity}
                      size="small"
                      sx={{ width: "60px", "& input": { textAlign: "center" } }}
                      inputProps={{ readOnly: true }}
                    />
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange("increase")}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
              >
                <Checkbox />
                <Typography variant="body2">
                  For $10.00 Please Wrap The Product
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Subtotal: $100.00
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, bgcolor: "#764D2E", color: "#fff", width: "100%" }}
              >
                Pay With Escrow
              </Button>
              <Button
                variant="text"
                sx={{
                  mt: 1,
                  color: "#764D2E",
                  width: "100%",
                  textAlign: "center",
                }}
                onClick={handleCloseCart}
              >
                View Cart
              </Button>
              <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
                Guarantee safe & secure checkout
              </Typography>
            </Box>
          </Box>
        )}
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

export default DealsPage;
