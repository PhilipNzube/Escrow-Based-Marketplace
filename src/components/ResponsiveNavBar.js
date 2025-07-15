import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const ResponsiveNavBar = ({
  logo,
  title,
  centerItems = [],
  rightIcons = [],
  logoutFunc,
  bg,
  GoHomeFunc,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRightIndex, setSelectedRightIndex] = useState(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleCenterItemClick = (item) => {
    setSelectedRightIndex(null); // clear right selection
    item.onClick?.();
  };

  const handleRightItemClick = (item, index) => {
    setSelectedRightIndex(index);
    item.onClick?.();
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: bg }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left: Logo + Title */}
          <Box
            onClick={GoHomeFunc}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: GoHomeFunc != null ? "pointer" : "default",
            }}
          >
            {logo && (
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  height: 25,
                  width: "auto",
                  mr: 1,
                  objectFit: "contain",
                }}
              />
            )}

            <Typography
              sx={{
                color: "#764D2E",
                fontWeight: "bold",
              }}
              variant="h6"
              noWrap
            >
              {title}
            </Typography>
          </Box>

          {/* Center: Text Nav Items */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {centerItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  style={{ textDecoration: "none" }}
                  end
                  onClick={() => handleCenterItemClick(item)}
                >
                  {({ isActive }) => (
                    <Typography
                      color="#764D2E"
                      variant="button"
                      sx={{
                        cursor: "pointer",
                        borderBottom: isActive ? "2px solid #764D2E" : "none",
                        pb: 0.5,
                        fontWeight: item.fontWeight ?? "normal",
                      }}
                    >
                      {item.text}
                    </Typography>
                  )}
                </NavLink>
              ))}
            </Box>
          )}

          {/* Right: Icon Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {!isMobile && (rightIcons == null || rightIcons.length === 0) ? (
              <Button
                onClick={logoutFunc}
                variant="contained"
                sx={{
                  color: "#764D2E",
                  backgroundColor: "transparent",
                  border: "1px solid #764D2E",
                  "&:hover": {
                    backgroundColor: "#764d2e",
                    color: "#fff",
                  },
                }}
              >
                Sign Up
              </Button>
            ) : (
              !isMobile &&
              rightIcons.map((icon, index) => (
                <IconButton
                  key={index}
                  onClick={() => handleRightItemClick(icon, index)}
                  sx={{
                    border:
                      selectedRightIndex === index
                        ? "2px solid #764D2E"
                        : "none",
                    borderRadius: "8px",
                    p: 0.5,
                  }}
                >
                  <Box
                    component="img"
                    src={icon.src}
                    alt={icon.alt}
                    sx={{
                      height: 22,
                      width: "auto",
                      objectFit: "contain",
                      opacity: selectedRightIndex === index ? 0.8 : 1,
                      transition: "0.3s",
                    }}
                  />
                </IconButton>
              ))
            )}

            {isMobile && (
              <IconButton onClick={toggleDrawer} sx={{ color: "#764D2E" }}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2, color: "#764D2E" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <List>
            {centerItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component={NavLink}
                to={item.to}
                end
                onClick={() => handleCenterItemClick(item)}
                sx={{
                  borderLeft: ({ isActive }) =>
                    isActive ? "4px solid #764D2E" : "4px solid transparent",
                  pl: 2,
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}

            {rightIcons == null || rightIcons.length === 0 ? (
              <Button
                onClick={logoutFunc}
                variant="contained"
                sx={{
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  color: "#764D2E",
                  backgroundColor: "transparent",
                  border: "1px solid #764D2E",
                  "&:hover": {
                    backgroundColor: "#764d2e",
                    color: "#fff",
                  },
                }}
              >
                Sign Up
              </Button>
            ) : (
              <>
                <ListItem sx={{ mt: 2 }}>
                  <ListItemText primary="Quick Access" />
                </ListItem>
                {rightIcons.map((icon, index) => (
                  <ListItem
                    button
                    key={index}
                    selected={selectedRightIndex === index}
                    onClick={() => handleRightItemClick(icon, index)}
                    sx={{
                      borderLeft:
                        selectedRightIndex === index
                          ? "4px solid #764D2E"
                          : "4px solid transparent",
                      pl: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={icon.src}
                      alt={icon.alt}
                      sx={{
                        height: 22,
                        width: "auto",
                        mr: 2,
                        objectFit: "contain",
                        opacity: selectedRightIndex === index ? 0.8 : 1,
                        transition: "0.3s",
                      }}
                    />
                    <ListItemText primary={icon.alt} />
                  </ListItem>
                ))}
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default ResponsiveNavBar;
