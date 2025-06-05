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
  Divider,
} from "@mui/material";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import BgImg from "../images/Background_Img.png";
import CategoriesImg from "../images/Categories_1.png";
import LogoIcon from "../images/Logo.png";
import SearchIcon from "../images/Search.png";
import CartIcon from "../images/Cart.png";
import UserIcon from "../images/User.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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


      <Box sx={{ px: 4, py: 18 }}>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 10}}>
        <Typography variant="h3" sx={{ color: "#000", whiteSpace:"nowrap" }}>
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
            Categories
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
      </Box>
  );
};

export default HomePage;