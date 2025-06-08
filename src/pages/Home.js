import React from "react";
import { useNavigate } from "react-router-dom";
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
  InputAdornment,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import ProductCard from '../components/ProductCard';
import ProductFeatureCard from '../components/ProductFeatureCard';
import DesProductFeatureCard from '../components/DesProductFeatureCard';
import SubProductFeatureCard from '../components/SubProductFeatureCard';
import SellerCard from '../components/SellerCard';
import DropdownText from '../components/DropdownText';
import ExpenditureItem from '../components/ExpenditureItem';
import TestimonialCard from '../components/TestimonialCard';
import BgImg from "../images/Background_Img.png";
import CategoriesImg from "../images/Categories_1.png";
import CategoriesImg2 from "../images/Categories_2.png";
import ProductsImg from "../images/Products_1.png";
import ProductsImg2 from "../images/Products_2.png";
import ProductsImg3 from "../images/Products_3.png";
import ProductsImg4 from "../images/Products_4.png";
import SellerImg from "../images/Top_Sellers_1.png";
import SellerImg2 from "../images/Top_Sellers_2.png";
import SellerImg3 from "../images/Top_Sellers_3.png";
import EscrowPayment from "../images/Escrow_Payment.png";
import ReturnPolicy from "../images/Return_Policy.png";
import CustomerSupport from "../images/Customer_Support.png";
import LogoIcon from "../images/Logo.png";
import SearchIcon from "../images/Search.png";
import CartIcon from "../images/Cart.png";
import UserIcon from "../images/User.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FacebookIcon from "../images/logos_facebook.png";
import InstaIcon from "../images/skill-icons_instagram.png";
import TwitterIcon from "../images/prime_twitter.png";




const HomePage = () => {
  const navigate = useNavigate();
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
    { src: UserIcon, alt: "User", onClick: () => navigate(`/login`) },
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
      position: "Daniel Ekong",
      position2: "Online Entrepreneur",
    },
    {
      image: SellerImg3,
      body: "TrustPay helped me scale my shop within 2 months.",
      position: "Amina Yusuf",
      position2: "Retail Business Owner",
    },
  ];
  const [openIndexes, setOpenIndexes] = React.useState([]);

  const toggleOpen = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const categoryScrollRef = React.useRef(null);
  const productScrollRef = React.useRef(null);
  const descriptionScrollRef = React.useRef(null);
  const sellerScrollRef = React.useRef(null);

  const scrollCategoryToTop = () => {
    if (categoryScrollRef.current) categoryScrollRef.current.scrollTop = 0;
  };
  const scrollCategoryToBottom = () => {
    if (categoryScrollRef.current)
      categoryScrollRef.current.scrollTop = categoryScrollRef.current.scrollHeight;
  };


  const scrollProductToStart = () => {
    if (productScrollRef.current)
      productScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  };
  const scrollProductToEnd = () => {
    if (productScrollRef.current)
      productScrollRef.current.scrollTo({ left: productScrollRef.current.scrollWidth, behavior: 'smooth' });
  };


  const scrollDescToTop = () => {
    if (descriptionScrollRef.current) descriptionScrollRef.current.scrollTop = 0;
  };
  const scrollDescToBottom = () => {
    if (descriptionScrollRef.current)
      descriptionScrollRef.current.scrollTop = descriptionScrollRef.current.scrollHeight;
  };

  const scrollSellerToStart = () => {
    if (sellerScrollRef.current)
      sellerScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  };
  const scrollSellerToEnd = () => {
    if (sellerScrollRef.current)
      sellerScrollRef.current.scrollTo({ left: sellerScrollRef.current.scrollWidth, behavior: 'smooth' });
  };

  const [focusedSellerIndex, setFocusedSellerIndex] = React.useState(0);
  const [clickedSellerIndex, setClickedSellerIndex] = React.useState(null);


  const handleSellerScroll = () => {
    const container = sellerScrollRef.current;
    if (!container) return;

    const containerLeft = container.getBoundingClientRect().left;

    let minDistance = Infinity;
    let closestIndex = 0;

    const children = Array.from(container.children);
    children.forEach((child, index) => {
      const rect = child.getBoundingClientRect();
      const distance = Math.abs(rect.left - containerLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    // Update focus and clear click selection
    setFocusedSellerIndex(closestIndex);
    setClickedSellerIndex(null); // let scroll take over again
  };



  const CustomNextArrow = ({ onClick }) => (
    <IconButton onClick={onClick} sx={{ position: 'absolute', right: -30, top: '40%', color: '#000' }}>
      <ArrowForwardIos />
    </IconButton>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <IconButton onClick={onClick} sx={{ position: 'absolute', left: -30, top: '40%', color: '#000' }}>
      <ArrowBackIos />
    </IconButton>
  );


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
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
          height: {
            xs: "100vh",
            md: "150vh",
          },
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
          variant="h1"
          sx={{
            maxWidth: '60vw',
            color: "#764D2E",
            fontWeight: "bold",
            zIndex: 5,
            mb: 2,
          }}
        >
          The First Nigerian Escrow-based Marketplace
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: '60vw',
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
              ref={categoryScrollRef}
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
              <IconButton onClick={scrollCategoryToTop}><ArrowUpwardIcon /></IconButton>
              <IconButton onClick={scrollCategoryToBottom}><ArrowDownwardIcon /></IconButton>
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
          ref={productScrollRef}
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
          <IconButton onClick={scrollProductToStart}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={scrollProductToEnd}>
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
        <Box sx={{
          display: "flex", flexDirection: {
            xs: "column",
            md: "row",
          }, justifyContent: "center", alignItems: "flex-start", gap: 5,
        }}>
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
              ref={descriptionScrollRef}
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
              <IconButton onClick={scrollDescToTop}><ArrowUpwardIcon /></IconButton>
              <IconButton onClick={scrollDescToBottom}><ArrowDownwardIcon /></IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: 'space-between',
        gap: 3,
        pt: 18
      }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderBottomRightRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "#C78757",
            padding: 5
          }}>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              mb: 3,
            }}
          >
            Our
            Top Sellers
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              mb: 3,
            }}
          >
            For the Month of August
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <IconButton onClick={scrollSellerToStart} sx={{
              color: "#fff",
            }}>
              <ArrowBackIos />
            </IconButton>
            <IconButton onClick={scrollSellerToEnd} sx={{
              color: "#fff",
            }}>
              <ArrowForwardIos />
            </IconButton>
          </Box>
        </Box>
        <Box
          ref={sellerScrollRef}
          onScroll={handleSellerScroll}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            gap: 2,
            pb: 2,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { height: 5 },
          }}
        >

          {[...Array(6)].map((_, i) => {
            const isActive = clickedSellerIndex !== null
              ? i === clickedSellerIndex
              : i === focusedSellerIndex;

            return (
              <Box
                key={i}
                onClick={() => setClickedSellerIndex(i)}
                sx={{
                  transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                <SellerCard image={SellerImg} name="David Guetta" />
              </Box>
            );
          })}

        </Box>
      </Box>
      <Box sx={{ px: 4, padding: 5, mt: 18, backgroundColor: "#764D2E", }}>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 10 }}>
          <Typography variant="h3" sx={{ color: "#fff" }}>
            Benefits For Your Expenditure
          </Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
          gap: 7
        }}>
          <ExpenditureItem
            image={EscrowPayment}
            alt="EscrowPayment"
            title="Escrow Based Payment"
            body="We offer flexible escrow-based payment options, to make easier."
          />

          <ExpenditureItem
            image={ReturnPolicy}
            alt="ReturnPolicy"
            title="Return Policy"
            body="You can return a product within 30-days."
          />
          <ExpenditureItem
            image={CustomerSupport}
            alt="CustomerSupport"
            title="Customer Support"
            body="Our customer support is 24/7."
          />
        </Box>
      </Box>
      <Box sx={{ px: 4, pt: 18 }}>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 10 }}>
          <Box
            sx={{
              width: '100%',
              maxWidth: 600,
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" sx={{ color: "#000", whiteSpace: "nowrap", mb: 1 }}>
              Testimonials
            </Typography>
            <Typography variant="body1" sx={{ color: "#000", mb: 5 }}>
              Over 15,000 happy customers
            </Typography>

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
            <Divider sx={{ mt: 5, borderColor: "#000", width: "100%" }} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ pt: 18 }}>
        <Box sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
        }}>
          <Box
            sx={{
              position: "relative",
              height: 400,
              width: "100%",
              backgroundImage: `url(${CategoriesImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 0,
              overflow: "hidden",
              cursor: "pointer",
              '&:hover .overlay': {
                opacity: 1,
              },

            }}
          ></Box>
          <Box
            sx={{
              height: 400,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "#CFAF89",
              padding: 5
            }}>
            <Typography variant="h3" sx={{ color: "#000", whiteSpace: "nowrap", mt: 3 }}>
              Join Our
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "bold", color: "#000", mb: 1 }}>
              Newsletter
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#000", mb: 2 }}>
              Receive exclusive deals, discounts and many offers.
            </Typography>
            <TextField
              placeholder="Enter your email"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: false, // keep underline (default for standard)
              }}
              sx={{
                mb: 2,
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#764D2E', // your custom color
                },
                '& .MuiInput-underline:hover:before': {
                  borderBottomColor: '#5d3c24', // hover color
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#764D2E', // focused color
                },
                input: {
                  color: '#000', // input text color
                },
              }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#764D2E", color: "#fff", borderRadius: 0.5 }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mx: 4,
          mt: 18,
          backgroundColor: "#764D2E",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          pt: 4,
          pb: 2,
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: "flex-start",
            px: 5
          }}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 2, px: 5 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#fff", mb: 2, mt: 3 }}>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Home
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Buy
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Sell
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Categories
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Deals
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 2, px: 5 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#fff", mb: 2, mt: 3 }}>
              Services
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Escrow Payment
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Selling & Buying
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 2, px: 5 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#fff", mb: 2, mt: 3 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              contact@gmail.com
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: 2 }}>
              <Box
                component="img"
                src={FacebookIcon}
                alt="FacebookIcon"
                sx={{
                  height: 22,
                  width: "auto",
                  objectFit: "contain",
                  transition: "0.3s",
                }}
              />
              <Box
                component="img"
                src={InstaIcon}
                alt="InstaIcon"
                sx={{
                  height: 22,
                  width: "auto",
                  objectFit: "contain",
                  transition: "0.3s",
                }}
              />
              <Box
                component="img"
                src={TwitterIcon}
                alt="TwitterIcon"
                sx={{
                  height: 22,
                  width: "auto",
                  objectFit: "contain",
                  transition: "0.3s",
                }}
              />
            </Box>
{isMobile ? (
        // 🟢 MOBILE VIEW: Stacked input and button
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <TextField
            placeholder="Email Address"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 1,
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: 'transparent' },
                '&.Mui-focused fieldset': { borderColor: 'transparent' },
                '& input': { color: '#000' },
              },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#764D2E',
              '&:hover': {
                backgroundColor: '#5d3c24',
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      ) : (
        // 🟤 DESKTOP VIEW: Input with inline button
        <TextField
          placeholder="Email Address"
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: 1,
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(118, 77, 46, 0.3)',
              borderRadius: 1,
              '& fieldset': { borderColor: 'transparent' },
              '&:hover fieldset': { borderColor: 'transparent' },
              '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': { borderColor: 'transparent' },
              },
              '& input': {
                color: '#000',
                pr: 1,
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#764D2E',
                    height: '100%',
                    px: 2,
                    '&:hover': {
                      backgroundColor: '#5d3c24',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </InputAdornment>
            ),
          }}
        />
      )}
          </Box>
        </Box>
        <Divider sx={{ mt: 5, borderColor: "#ccc", width: "100%" }} />
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", gap: 5, px: 5 }}>
          <Typography variant="body1" sx={{ color: "#fff", mb: 2, mt: 3 }}>
            Privacy Policy
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff", mb: 2, mt: 3 }}>
            Terms of Use
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;