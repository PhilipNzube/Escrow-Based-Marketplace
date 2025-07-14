import { Box } from "@mui/material";
import ChanelLogo from "../images/chanel-logo.png";
import LVLogo from "../images/louis-vuitton-logo.png";
import PradaLogo from "../images/prada-logo.png";
import CalvinLogo from "../images/calvin-klein-logo.png";
import DenimLogo from "../images/denim-logo.png";

const brandImages = [
  { name: "CHANEL", src: ChanelLogo },
  { name: "LOUIS VUITTON", src: LVLogo },
  { name: "PRADA", src: PradaLogo },
  { name: "Calvin Klein", src: CalvinLogo },
  { name: "DENIM", src: DenimLogo },
];

function BrandGrid() {
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          sm: "grid",
        },
        flexDirection: {
          xs: "row",
          sm: "unset",
        },
        overflowX: {
          xs: "auto",
          sm: "unset",
        },
        gridTemplateColumns: {
          sm: "repeat(5, 1fr)",
          xs: "unset",
        },
        gap: 3,
        mt: 5,
        alignItems: "center",
        justifyItems: "center",
        whiteSpace: {
          xs: "nowrap",
          sm: "normal",
        },
        "&::-webkit-scrollbar": {
          xs: { height: 5 },
          sm: { display: "none" },
        },
        "&::-webkit-scrollbar-thumb": {
          xs: { background: "#888", borderRadius: "4px" },
          sm: { display: "none" },
        },
        "& > img": {
          xs: { minWidth: "100px", maxWidth: "100px" },
          sm: { minWidth: "unset", maxWidth: "100%" },
        },
      }}
    >
      {brandImages.map((brand, index) => (
        <img
          key={index}
          src={brand.src}
          alt={`${brand.name} logo`}
          style={{
            opacity: 0.5,
            height: "auto",
          }}
        />
      ))}
    </Box>
  );
}

export default BrandGrid;
