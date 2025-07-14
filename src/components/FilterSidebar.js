import {
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

function FilterSidebar() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "250px" },
        mb: { xs: 4, md: 0 },
      }}
    >
      <Typography variant="h6" sx={{ color: "#5d4037", mb: 2 }}>
        Filters
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Size
      </Typography>
      <FormGroup>
        {["S", "M", "L", "XL"].map((size) => (
          <FormControlLabel
            key={size}
            control={<Checkbox />}
            label={size}
            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
          />
        ))}
      </FormGroup>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        Colors
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
        {["red", "orange", "yellow", "green", "blue", "purple", "pink"].map(
          (color) => (
            <Box
              key={color}
              sx={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: color,
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            />
          )
        )}
      </Box>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        Prices
      </Typography>
      <FormGroup>
        {["$0-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"].map(
          (range) => (
            <FormControlLabel
              key={range}
              control={<Checkbox />}
              label={range}
              sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
            />
          )
        )}
      </FormGroup>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        Brands
      </Typography>
      <FormGroup>
        {["Minimog", "Retrolie Brook", "Learts", "Vagabond", "Abby"].map(
          (brand) => (
            <FormControlLabel
              key={brand}
              control={<Checkbox />}
              label={brand}
              sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
            />
          )
        )}
      </FormGroup>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        Collections
      </Typography>
      <FormGroup>
        {["All products", "Best sellers"].map((collection) => (
          <FormControlLabel
            key={collection}
            control={<Checkbox />}
            label={collection}
            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
          />
        ))}
      </FormGroup>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        Tags
      </Typography>
      <FormGroup>
        {[
          "Fashion",
          "Hats",
          "Sandal",
          "Belt",
          "Bags",
          "Snacker",
          "Denim",
          "Minimog",
          "Vagabond",
          "Sunglasses",
          "Beachwear",
        ].map((tag) => (
          <FormControlLabel
            key={tag}
            control={<Checkbox />}
            label={tag}
            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

export default FilterSidebar;
