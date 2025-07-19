import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Checkbox, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import DenimImg from "../images/MainDenimJacket.png";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [saveContact, setSaveContact] = useState(false);
  const [savePayment, setSavePayment] = useState(false);

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
          Checkout
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            py: 4,
            mt: 5,
            px: { xs: 2, sm: 4 },
          }}
        >
          <Box sx={{ flex: 1, mr: { md: 2 }, mb: { xs: 2, md: 0 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Contact
              </Typography>

              <Box
                color="#484848"
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-end", md: "center" },
                  flexDirection: { xs: "column", md: "row" },
                  gap: 1,
                }}
              >
                <Typography variant="body2">Don't have an account?</Typography>
                <Typography
                  variant="body2"
                  sx={{ cursor: "pointer", color: "#1456FF" }}
                  onClick={() => {
                    navigate(`/register`);
                  }}
                >
                  Create Account
                </Typography>
              </Box>
            </Box>
            <TextField
              fullWidth
              margin="normal"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
              Delivery
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Country / Region"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              select
            >
              {/* Add country options here */}
            </TextField>
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                margin="normal"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
            <TextField
              fullWidth
              margin="normal"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                margin="normal"
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={saveContact}
                  onChange={(e) => setSaveContact(e.target.checked)}
                />
              }
              label="Save this info for future"
            />
            <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
              Payment
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Credit Card"
              value=""
              select
            >
              {/* Add card options here */}
            </TextField>
            <TextField
              fullWidth
              margin="normal"
              label="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                fullWidth
                margin="normal"
                label="Expiration Date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Security Code"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
              />
            </Box>
            <TextField
              fullWidth
              margin="normal"
              label="Card Holder Name"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={savePayment}
                  onChange={(e) => setSavePayment(e.target.checked)}
                />
              }
              label="Save this info for future"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#764D2E",
                color: "#fff",
                textTransform: "none",
                py: 1.5,
                borderRadius: 1,
                fontWeight: 500,
                mt: 2,
              }}
              fullWidth
            >
              Pay Now
            </Button>
          </Box>
          <Box sx={{ flex: 1, minWidth: { md: "300px" } }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                component="img"
                src={DenimImg}
                sx={{
                  width: "100px",
                  height: "100px",
                  bgcolor: "#f0f0f0",
                  flexShrink: 0,
                  mr: 2,
                }}
              />
              <Box>
                <Typography>1 Mini Dress With Ruffled Straps</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                    color: "#484848",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Red
                  </Typography>
                  <Typography variant="body2">$100.00</Typography>
                </Box>
              </Box>
            </Box>
            <TextField fullWidth margin="normal" label="Discount code" />
            <Button
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#000",
                "&:hover": { backgroundColor: "#333" },
              }}
              fullWidth
            >
              Apply
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 2,
                color: "#484848",
                gap: 1,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2">Subtotal:</Typography>
                <Typography variant="body2">$100.00</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2">Shipping:</Typography>
                <Typography variant="body2">$40.00</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2">Total:</Typography>
                <Typography color="#000000" variant="body2">
                  $140.00
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
