import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import LogoIcon from "../images/Logo.png";

const MainDealsPage = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      <Outlet />

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
                height: 25,
                width: "auto",
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

export default MainDealsPage;
