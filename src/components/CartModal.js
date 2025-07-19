import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Modal,
  Typography,
  Button,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DenimImg from "../images/MainDenimJacket.png";

const CartModal = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [wrap, setWrap] = useState(false);

  const handleQuantityChange = (delta) =>
    setQuantity(Math.max(1, quantity + delta));

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="cart-modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            sx={{ position: "absolute", top: 16, right: 16 }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                overflowX: "auto",
                "&::-webkit-scrollbar": {
                  height: 5,
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#764D2E",
                  borderRadius: "4px",
                },
              }}
            >
              {/* START: scrollable content including header */}
              <Box sx={{ minWidth: "800px" }}>
                {/* Header row */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #ccc",
                    pb: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography sx={{ flex: 2 }}>Product</Typography>
                  <Typography sx={{ flex: 1 }}>Price</Typography>
                  <Typography sx={{ flex: 1 }}>Quantity</Typography>
                  <Typography sx={{ flex: 1 }}>Total</Typography>
                </Box>

                {/* Item row */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: 2,
                    borderBottom: "1px solid #ccc",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      flex: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={DenimImg}
                      sx={{
                        width: "100px",
                        height: "100px",
                        bgcolor: "#f0f0f0",
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography>Mini Dress With Ruffled Straps</Typography>
                      <Typography color="text.secondary">
                        Color : Red
                      </Typography>
                      <Button sx={{ color: "gray", textTransform: "none" }}>
                        Remove
                      </Button>
                    </Box>
                  </Box>
                  <Typography sx={{ flex: 1 }}>$14.90</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        border: "1px solid #ddd",
                        borderRadius: 0.1,
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() => handleQuantityChange(-1)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <TextField
                        value={quantity}
                        size="small"
                        sx={{
                          width: 60,
                          "& input": { textAlign: "center" },
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                            "& fieldset": {
                              borderColor: "transparent",
                            },
                            "&:hover fieldset": {
                              borderColor: "transparent",
                            },
                            "&.Mui-focused": {
                              "& fieldset": {
                                borderColor: "transparent",
                              },
                            },
                          },
                        }}
                        inputProps={{ readOnly: true }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => handleQuantityChange(1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography sx={{ flex: 1 }}>
                    ${(14.9 * quantity).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
              {/* END: scrollable content including header */}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "48%" },
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wrap}
                    onChange={(e) => setWrap(e.target.checked)}
                  />
                }
                sx={{ color: "#8A8A8A" }}
                label={
                  <Typography variant="body2">
                    For{" "}
                    <Box
                      component="span"
                      sx={{ fontWeight: "bold", color: "#000000" }}
                    >
                      $10.00
                    </Box>{" "}
                    Please Wrap The Product
                  </Typography>
                }
              />

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Typography>Subtotal</Typography>
                <Typography>
                  ${(14.9 * quantity + (wrap ? 10 : 0)).toFixed(2)}
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#764D2E",
                  color: "#fff",
                  textTransform: "none",
                  py: 1.5,
                  borderRadius: 1,
                  fontWeight: 500,
                }}
                fullWidth
                onClick={() => {
                  navigate("/shop-now/deals/checkout");
                }}
              >
                Checkout
              </Button>

              <Button
                variant="text"
                sx={{
                  color: "#000000",
                  mt: 1,
                  textTransform: "none",
                  fontWeight: 500,
                }}
                fullWidth
              >
                View Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CartModal;
