import React from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import ProductCard from '../components/ProductCard';
import ProductFeatureCard from '../components/ProductFeatureCard';
import DesProductFeatureCard from '../components/DesProductFeatureCard';
import SubProductFeatureCard from '../components/SubProductFeatureCard';
import DropdownText from '../components/DropdownText';
import BgImg from "../images/Background_Img.png";
import CategoriesImg from "../images/Categories_1.png";
import CategoriesImg2 from "../images/Categories_2.png";
import ProductsImg from "../images/Products_1.png";
import ProductsImg2 from "../images/Products_2.png";
import ProductsImg3 from "../images/Products_3.png";
import ProductsImg4 from "../images/Products_4.png";
import LogoIcon from "../images/Logo.png";
import SearchIcon from "../images/Search.png";
import CartIcon from "../images/Cart.png";
import UserIcon from "../images/User.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const categories = [
  "Furniture",
  "Electronics",
  "Fashion",
  "Toys",
  "Books",
  "Sports",
  "Groceries",
  "Health",
  "Automotive",
];


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

const products = [
  { id: 1, image: ProductsImg, title: 'Blender', subtitle: 'Light Blender', price: '$142' },
  { id: 2, image: ProductsImg2, title: 'Toaster', subtitle: 'Modern Toaster', price: '$99' },
  { id: 3, image: ProductsImg3, title: 'Fan', subtitle: 'Silent Fan', price: '$75' },
  { id: 4, image: ProductsImg4, title: 'Lamp', subtitle: 'Bedside Lamp', price: '$39' },
  { id: 5, image: ProductsImg, title: 'Blender', subtitle: 'Light Blender', price: '$142' },
  { id: 6, image: ProductsImg2, title: 'Toaster', subtitle: 'Modern Toaster', price: '$99' },
  { id: 7, image: ProductsImg3, title: 'Fan', subtitle: 'Silent Fan', price: '$75' },
  { id: 8, image: ProductsImg4, title: 'Lamp', subtitle: 'Bedside Lamp', price: '$39' },
  // Add more...
];


const HomePage = () => {
  const [openIndexes, setOpenIndexes] = React.useState([]);

  const toggleOpen = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const scrollRef = React.useRef(null);

  const scrollToTop = () => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const scrollToBottom = () => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  const horizontalScrollToStart = () => {
    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const horizontalScrollToEnd = () => {
    scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
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


      <Box sx={{ px: 4, pt: 18 }}>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 10 }}>
          <Typography variant="h3" sx={{ color: "#000", whiteSpace: "nowrap" }}>
            Explore by Categories
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {/* Left Side - Search and Category List */}
          <Box sx={{ flex: "1 1 300px", maxWidth: "300px" }}>
            <TextField
              fullWidth
              placeholder="Search..."
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(118, 77, 46, 0.3)',  // partially transparent brown
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: 'transparent',   // remove border normally
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',   // no border on hover
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'rgba(118, 77, 46, 1)', // fully opaque brown when focused
                    '& fieldset': {
                      borderColor: 'transparent',  // still no border on focus
                    },
                  },
                  '& input': {
                    color: '#fff',  // text color visible over brown bg
                  },
                },
              }}
            />


            <Box
              ref={scrollRef}
              sx={{ maxHeight: "300px", overflowY: "auto", mt: 2, borderRadius: 2 }}
            >
              <List>
                {categories.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      button
                      onClick={() => toggleOpen(index)}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <ListItemText primary={item} />
                      <ExpandMoreIcon />
                    </ListItem>
                    <Collapse in={openIndexes.includes(index)} timeout="auto" unmountOnExit>
                      <Typography sx={{ px: 2, py: 1, color: '#888' }}>
                        Placeholder content...
                      </Typography>
                    </Collapse>
                  </React.Fragment>
                ))}
              </List>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
              <IconButton onClick={scrollToTop}><ArrowUpwardIcon /></IconButton>
              <IconButton onClick={scrollToBottom}><ArrowDownwardIcon /></IconButton>
            </Box>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ backgroundColor: "#764D2E", mt: 2, width: "100%" }}
            >
              All Categories
            </Button>
          </Box>

          {/* Right Side - Grid of Images */}
          <Box
            sx={{
              flex: "3 1 600px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 2,
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  position: "relative",
                  height: 200,
                  backgroundImage: `url(${CategoriesImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                  cursor: "pointer",
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.5)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography variant="h5">Furniture</Typography>
                  <Button
                    variant="outlined"
                    sx={{ backgroundColor: "white", color: "#764D2E", borderColor: "white", mt: 1 }}
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: 4, pt: 18 }}>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 10 }}>
          <Typography variant="h3" sx={{ color: "#000", whiteSpace: "nowrap" }}>
            Popular Products
          </Typography>
        </Box>
        {/* Horizontal scrollable container */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            pb: 2,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { height: 5 },
          }}
        >
          {products.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
            />
          ))}
        </Box>

        {/* Scroll Arrows */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          <IconButton onClick={horizontalScrollToStart}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={horizontalScrollToEnd}>
            <ArrowForwardIos />
          </IconButton>
        </Box>

        {/* Explore All Items Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: '#764D2E',
              '&:hover': {
                backgroundColor: '#5d3c24',
              },
              px: 4,
              py: 1.5,
              borderRadius: 2,
              color: '#fff',
            }}
          >
            Explore All Items
          </Button>
        </Box>
      </Box>
      <Box sx={{ px: 4, pt: 18, }}>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 10 }}>
          <Typography variant="h3" sx={{ color: "#000", whiteSpace: "nowrap" }}>
            Special Package
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", gap: 5, }}>
          <ProductFeatureCard
            image={CategoriesImg2}
            title="Larkin Wood Full Set"
            price="$799.99"
            rating={4}
            onAddToCart={() => console.log("Added")}
            onFullscreen={() => console.log("Fullscreen clicked")}
          />

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000",

                mb: 3,
              }}
            >
              Description
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#000",

                mb: 3,
              }}
            >
              Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines teh appearance, function and quality all together, offering you with the best experience.
            </Typography>
            <DropdownText label="See More" onClick={() => console.log("Clicked")} />
            <Box sx={{
              mt: 3,
            }}>
              <DesProductFeatureCard
                image={CategoriesImg2}
                title="Living Room Family Set"
                price="$999.99"
                rating={4}
                onAddToCart={() => console.log("Added")}
                onFullscreen={() => console.log("Fullscreen clicked")}
              />
            </Box>
            <Box
              ref={scrollRef}
              sx={{ maxHeight: "300px", overflowY: "auto", mt: 3, borderRadius: 2 }}
            >
              <SubProductFeatureCard
                image={CategoriesImg2}
                title="Living Room Family Set"
                des="Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines teh appearance, function and quality all together, offering you with the best experience."
                price="$999.99"
                rating={4}
                onAddToCart={() => console.log("Added")}
                onFullscreen={() => console.log("Fullscreen clicked")}
              />
              <SubProductFeatureCard
                image={CategoriesImg2}
                title="Living Room Family Set"
                des="Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines teh appearance, function and quality all together, offering you with the best experience."
                price="$999.99"
                rating={4}
                onAddToCart={() => console.log("Added")}
                onFullscreen={() => console.log("Fullscreen clicked")}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
              <IconButton onClick={scrollToTop}><ArrowUpwardIcon /></IconButton>
              <IconButton onClick={scrollToBottom}><ArrowDownwardIcon /></IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;