import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  IconButton,
  TextField,
  Divider,
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
import TinyRightArrow from "../images/tiny_right_arrow.png";
import FashionAlignButton from "../images/FashionAlignButton.png";
import FashionAlignButton2 from "../images/FashionAlignButton2.png";
import FashionAlignButton3 from "../images/FashionAlignButton3.png";
import FashionAlignButton4 from "../images/FashionAlignButton4.png";
import FashionAlignButton5 from "../images/FashionAlignButton5.png";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PaymentIcons from "../images/Payment-Methods.png";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShareIcon from "@mui/icons-material/Share";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";

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

const imageList = [
  { src: FashionAlignButton, alt: "Align1" },
  { src: FashionAlignButton2, alt: "Align2" },
  { src: FashionAlignButton3, alt: "Align3" },
  { src: FashionAlignButton4, alt: "Align4" },
  { src: FashionAlignButton5, alt: "Align5" },
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
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ color: "#764D2E" }}>
            Home
          </Typography>
          <Box
            component="img"
            src={TinyRightArrow}
            alt="tiny_arrow"
            sx={{ width: 10, height: 10 }}
          />
          <Typography variant="body2" sx={{ color: "#764D2E" }}>
            Fashion
          </Typography>
        </Box>
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
              gap: 1,
              flexWrap: "wrap",
              mb: 4,
            }}
          >
            {imageList.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1,
                }}
              />
            ))}
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
          <Box sx={{ display: "flex", mt: 2, gap: 1, flexWrap: "wrap" }}>
            {thumbnails.map((thumb) => (
              <Thumbnail key={thumb.id} src={thumb.src} alt={thumb.alt} />
            ))}
          </Box>
        </Box>

        {/* Product Details Section */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Denim Jacket
            </Typography>
            <IconButton
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "50%",
                padding: 1,
              }}
            >
              <StarBorderIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>

          <Typography variant="body2">★★★★☆ (3)</Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h6" sx={{ color: "#000" }}>
              $39.00
            </Typography>
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", color: "#888" }}
            >
              $59.00
            </Typography>
            <Box sx={{ bgcolor: "#DA3F3F", borderRadius: 2, px: 1, py: 0.2 }}>
              <Typography sx={{ color: "#fff", fontSize: "0.7rem" }}>
                SAVE 33%
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <VisibilityIcon sx={{ fontSize: 20, color: "#000" }} />
            <Typography variant="body2" color="#8A8A8A">
              24 people are viewing this right now
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                bgcolor: "#ffebee",
                p: 1,
                borderRadius: 1,
                border: "1px Solid #F8CCCC",
              }}
            >
              <Typography variant="body2" color="#FF706B">
                Hurry up! Sale ends in:{" "}
              </Typography>
              <Typography variant="body2" color="#FF706B">
                <b>00 : 05 : 59 : 47</b>
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="#000000"
              sx={{
                display: "block",
                verticalAlign: "middle",
                marginTop: 2,
              }}
            >
              Only <b>9</b> item(s) left in stock!
            </Typography>
            <Box
              sx={{
                height: "4px",
                bgcolor: "#e0e0e0",
                borderRadius: 2,
                width: "100%",
                position: "relative",
                overflow: "hidden",
                marginTop: 1,
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  bgcolor: "#FF706B",
                  width: "10%", // Adjust this percentage based on stock level (e.g., 9/100)
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Size: {selectedSize}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {["M", "L", "XL", "XXL"].map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "contained" : "outlined"}
                  onClick={() => setSelectedSize(size)}
                  sx={{
                    color: selectedSize === size ? "#ffffff" : "#000000",
                    backgroundColor:
                      selectedSize === size ? "#000000" : "#ffffff",
                    borderColor: selectedSize === size ? "#000000" : "#cccccc",
                    minWidth: 40,
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Color: {selectedColor}
            </Typography>
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

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              gap: 2,
            }}
          >
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
                {" "}
                <RemoveIcon />{" "}
              </IconButton>
              <TextField
                value={quantity}
                size="small"
                sx={{
                  width: 60,
                  "& input": { textAlign: "center" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                    "& fieldset": {
                      borderColor: "transparent", // remove border normally
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // no border on hover
                    },

                    "&.Mui-focused": {
                      "& fieldset": {
                        borderColor: "transparent", // still no border on focus
                      },
                    },
                  },
                }}
                inputProps={{ readOnly: true }}
              />
              <IconButton
                size="small"
                onClick={() => handleQuantityChange("increase")}
              >
                {" "}
                <AddIcon />{" "}
              </IconButton>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleAddToCart}
              sx={{
                color: "#000000",
                borderColor: "#000000",
              }}
            >
              Add to cart
            </Button>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Button
              variant="outlined"
              startIcon={<CompareArrowsIcon />}
              sx={{
                mr: 2,
                verticalAlign: "middle",
                color: "black", // text and icon color
                borderColor: "transparent", // hide initial border
                "&:hover": {
                  borderColor: "#cccccc", // show border on hover
                  backgroundColor: "transparent", // optional: no fill
                },
              }}
            >
              Compare
            </Button>

            <Button
              variant="outlined"
              startIcon={<HelpOutlineIcon />}
              sx={{
                mr: 2,
                verticalAlign: "middle",
                color: "black",
                borderColor: "transparent",
                "&:hover": {
                  borderColor: "#cccccc",
                  backgroundColor: "transparent",
                },
              }}
            >
              Ask a question
            </Button>

            <Button
              variant="outlined"
              startIcon={<ShareIcon />}
              sx={{
                verticalAlign: "middle",
                color: "black",
                borderColor: "transparent",
                "&:hover": {
                  borderColor: "#cccccc",
                  backgroundColor: "transparent",
                },
              }}
            >
              Share
            </Button>

            <Divider sx={{ mt: 2, borderColor: "#e0e0e0", borderWidth: 1 }} />
          </Box>

          <Box>
            <Typography
              variant="body2"
              sx={{
                display: "block",
                verticalAlign: "middle",
                marginBottom: 1,
              }}
            >
              <LocalShippingIcon
                sx={{ verticalAlign: "middle", marginRight: 1 }}
              />{" "}
              <b>Estimated Delivery:</b> Jul 30 - Aug 03
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "block",
                verticalAlign: "middle",
              }}
            >
              <StoreIcon sx={{ verticalAlign: "middle", marginRight: 1 }} />{" "}
              <b>Free Shipping & Returns:</b> On all orders over $75
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <img
              src={PaymentIcons}
              alt="Payment methods"
              style={{ height: "auto", width: "40%" }}
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
              justifyContent: "flex-end",
              zIndex: 1000,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "90%", md: "480px" },
                bgcolor: "#fff",
                height: "100%",
                p: 3,
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <IconButton
                sx={{ position: "absolute", top: 16, right: 16 }}
                onClick={handleCloseCart}
              >
                <CloseIcon />
              </IconButton>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                Shopping Cart
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  flexDirection: "row",
                  mb: 3,
                }}
              >
                <Typography variant="body2" sx={{ color: "#8A8A8A" }}>
                  Buy
                </Typography>{" "}
                <b>$122.35</b>{" "}
                <Typography variant="body2" sx={{ color: "#8A8A8A" }}>
                  More And Get
                </Typography>{" "}
                <b>Free Shipping</b>
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <ProductImage
                  src={MainDenimImg}
                  alt="Denim Jacket"
                  sx={{ width: 80, height: 100, objectFit: "cover" }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Denim Jacket
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Color: Red
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    $14.80
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                      size="small"
                      sx={{ border: "1px solid #ddd" }}
                      onClick={() => handleQuantityChange("decrease")}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <TextField
                      value={quantity}
                      size="small"
                      sx={{ width: 40, "& input": { textAlign: "center" } }}
                      inputProps={{ readOnly: true }}
                    />
                    <IconButton
                      size="small"
                      sx={{ border: "1px solid #ddd" }}
                      onClick={() => handleQuantityChange("increase")}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
              >
                <Checkbox />
                <Typography variant="body2">
                  For <b>$10.00</b> Please Wrap The Product
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography variant="subtitle1">Subtotal</Typography>
                <Typography variant="subtitle1">$100.00</Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#764D2E",
                  color: "#fff",
                  textTransform: "none",
                  py: 1.5,
                  borderRadius: 1,
                  fontWeight: 500,
                }}
                fullWidth
              >
                Pay With Escrow
              </Button>

              <Button
                variant="text"
                onClick={handleCloseCart}
                sx={{
                  color: "#000000",
                  mt: 1,
                  textTransform: "none",
                  fontWeight: 500,
                }}
                fullWidth
              >
                View Cart
              </Button>
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
