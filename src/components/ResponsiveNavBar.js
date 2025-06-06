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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ResponsiveNavBar = ({
    logo,
    title,
    centerItems = [],
    rightIcons = [],
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedCenterIndex, setSelectedCenterIndex] = useState(0);
    const [selectedRightIndex, setSelectedRightIndex] = useState(null);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    const handleCenterItemClick = (item, index) => {
        setSelectedCenterIndex(index);
        setSelectedRightIndex(null); // clear right selection
        item.onClick?.();
    };

    const handleRightItemClick = (item, index) => {
        setSelectedRightIndex(index);
        setSelectedCenterIndex(null); // clear center selection
        item.onClick?.();
    };


    return (
        <>
            <AppBar position="static" sx={{ bgcolor: "transparent" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Left: Logo + Title */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {logo && (
                            <Box
                                component="img"
                                src={logo}
                                alt="logo"
                                sx={{
                                    height: 25,         // or auto
                                    width: "auto",      // maintain aspect ratio
                                    mr: 1,
                                    objectFit: "contain",
                                }}
                            />
                        )}

                        <Typography color="#764D2E" variant="h6" noWrap>{title}</Typography>
                    </Box>

                    {/* Center: Text Nav Items */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 3 }}>
                            {centerItems.map((item, index) => (
                                <Typography
                                    color="#764D2E"
                                    key={index}
                                    variant="button"
                                    sx={{
                                        cursor: "pointer",
                                        borderBottom: selectedCenterIndex === index ? '2px solid #764D2E' : 'none',
                                        pb: 0.5,
                                    }}
                                    onClick={() => handleCenterItemClick(item, index)}
                                >
                                    {item.text}
                                </Typography>
                            ))}
                        </Box>
                    )}

                    {/* Right: Icon Buttons */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        {!isMobile &&
                            rightIcons.map((icon, index) => (
                                <IconButton
                                    key={index}
                                    onClick={() => handleRightItemClick(icon, index)}
                                    sx={{
                                        border: selectedRightIndex === index ? "2px solid #764D2E" : "none",
                                        borderRadius: "8px",
                                        p: 0.5,
                                    }}
                                >

                                    <Box
                                        component="img"
                                        src={icon.src}
                                        alt={icon.alt}
                                        sx={{
                                            height: 22,         // or auto
                                            width: "auto",      // maintain aspect ratio

                                            objectFit: "contain",
                                            opacity: selectedRightIndex === index ? 0.8 : 1,
                                            transition: "0.3s",
                                        }}
                                    />
                                </IconButton>
                            ))}
                        {isMobile && (
                            <IconButton onClick={toggleDrawer} color="#764D2E">
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <Box color="#764D2E" sx={{ width: 250, p: 2 }} onClick={toggleDrawer}>
                    <Typography variant="h6" sx={{ mb: 2 }}>{title}</Typography>
                    <List>
                        {centerItems.map((item, index) => (
                            <ListItem
                                button
                                key={index}
                                selected={selectedCenterIndex === index}
                                onClick={() => handleCenterItemClick(item, index)}
                            >
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                        <ListItem sx={{ mt: 2 }}>
                            <ListItemText primary="Quick Access" />
                        </ListItem>
                        {rightIcons.map((icon, index) => (
                            <ListItem
                                button
                                key={index}
                                selected={selectedRightIndex === index}
                                onClick={() => handleRightItemClick(icon, index)}
                            >

                                <Box
                                    component="img"
                                    src={icon.src}
                                    alt={icon.alt}
                                    sx={{
                                        height: 22,         // or auto
                                        width: "auto",      // maintain aspect ratio
                                        mr: 2,
                                        objectFit: "contain",
                                        opacity: selectedRightIndex === index ? 0.8 : 1,
                                        transition: "0.3s",
                                    }}
                                />
                                <ListItemText primary={icon.alt} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default ResponsiveNavBar;
