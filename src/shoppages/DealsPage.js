import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
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

const DealsPage = () => {
  const navigate = useNavigate();
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
    </Box>
  );
};

export default DealsPage;
