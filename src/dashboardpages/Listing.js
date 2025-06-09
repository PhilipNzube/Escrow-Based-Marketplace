import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Chip,
  Menu,
  MenuItem,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const categories = ["Art", "Crafts", "Jewelry", "Clothing", "Home Goods"];
const tags = ["Vintage", "Handmade", "Boho", "Minimalist", "Eco-friendly", "Customizable"];

export default function Listing() {
  const [images, setImages] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [delivery, setDelivery] = useState("1 Day");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveAllImages = () => setImages([]);

  const toggleSelection = (item, list, setList) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  return (
    <Box sx={{
      mt: 3,
      px: 2,
      width: '100%',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    }}>
      <Typography variant="h5" fontWeight={600} mb={3}>Create a listing</Typography>

      {/* Title Field */}
      <TextField
        placeholder="Title"
        variant="standard"
        fullWidth
        InputProps={{
          disableUnderline: false, // keep underline (default for standard)
        }}
        sx={{
          mb: 3,
          fontSize: 16,
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ccc', // your custom color
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#ccc', // hover color
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#764D2E', // focused color
          },
          input: {
            color: '#000', // input text color
          },
        }}
      />

      {/* Description Box */}
      <TextField
        placeholder="Description"
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        sx={{ mb: 3 }}
        InputProps={{
          sx: {
            borderRadius: 0,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc', // default border
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#aaa', // hover border
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#764D2E', // focus border
            },
            '& input': {
              color: '#000', // input text color (not necessary for multiline, but for consistency)
            },
            '& textarea': {
              color: '#000', // text color for multiline
            }
          },
        }}
      />


      {/* Price Field */}
      <TextField
        placeholder="Price"
        variant="standard"
        fullWidth
        InputProps={{
          disableUnderline: false, // keep underline (default for standard)
        }}
        sx={{
          mb: 3,
          fontSize: 16,
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ccc', // your custom color
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#ccc', // hover color
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#764D2E', // focused color
          },
          input: {
            color: '#000', // input text color
          },
        }}
      />

      {/* Image Upload */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <IconButton component="label">
          <AddPhotoAlternateIcon color="primary" />
          <input
            type="file"
            hidden
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
        </IconButton>
        <Typography variant="body1">Add Images</Typography>
        {images.length > 0 && (
          <Button color="error" onClick={handleRemoveAllImages} size="small" startIcon={<DeleteIcon />}>Remove All</Button>
        )}
      </Box>

      {/* Preview Images */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
        {images.map((img, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <img
              src={URL.createObjectURL(img)}
              alt="preview"
              style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 4 }}
            />
            <IconButton
              size="small"
              onClick={() => handleRemoveImage(index)}
              sx={{ position: "absolute", top: 0, right: 0, color: "white", backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Delivery Option */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
        <Typography fontWeight={500}>Delivery:</Typography>
        <Button
          endIcon={<ExpandMoreIcon />}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{ textTransform: "none", borderBottom: "1px solid #000", borderRadius: 0, color: "#000" }}
        >
          {delivery}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {["1 Day", "2 Days", "3 Days", "1 Week"].map(option => (
            <MenuItem key={option} onClick={() => { setDelivery(option); setAnchorEl(null); }}>{option}</MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Categories */}
      <Typography fontWeight={600} mb={1}>Categories</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
        {categories.map(cat => {
          const selected = selectedCategories.includes(cat);
          return (
          <Chip
            key={cat}
            label={cat}
            clickable
            onClick={() => toggleSelection(cat, selectedCategories, setSelectedCategories)}
            sx={{
              backgroundColor: selected ? '#764D2E' : '#e0e0e0',
              color: selected ? '#fff' : '#000',
              '&:hover': {
                backgroundColor: selected ? '#5d3c24' : '#d5d5d5',
              },
            }}
            />
          )
        })}
      </Box>

      {/* Tags */}
      <Typography fontWeight={600} mb={1}>Tags</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {tags.map(tag => {
          const selected = selectedTags.includes(tag);
          return (
          <Chip
            key={tag}
            label={tag}
            clickable
            onClick={() => toggleSelection(tag, selectedTags, setSelectedTags)}
            sx={{
              backgroundColor: selected ? '#764D2E' : '#e0e0e0',
              color: selected ? '#fff' : '#000',
              '&:hover': {
                backgroundColor: selected ? '#5d3c24' : '#d5d5d5',
              },
            }}
            />
          )
        })}
      </Box>
    </Box>
  );
}
