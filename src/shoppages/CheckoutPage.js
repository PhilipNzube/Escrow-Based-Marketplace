import { useState } from "react";
import { Box, Typography, Button, Checkbox, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import LogoIcon from "../images/Logo.png";

const CheckoutPage = () => {
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
            <Typography variant="h5" gutterBottom>
              Contact
            </Typography>
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
                mt: 2,
                backgroundColor: "#4A2C2A",
                "&:hover": { backgroundColor: "#3A1C1A" },
              }}
              fullWidth
            >
              Pay Now
            </Button>
          </Box>
          <Box sx={{ flex: 1, minWidth: { md: "300px" } }}>
            <Box sx={{ textAlign: "right", mb: 2 }}>
              <Button variant="text" href="#">
                Have an account? Create Account
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#f0f0f0",
                  mr: 2,
                }}
              ></Box>
              <Box>
                <Typography>1 Mini Dress With Ruffled Straps</Typography>
                <Typography color="text.secondary">Red</Typography>
                <Typography>$100.00</Typography>
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
            <Box sx={{ mt: 2 }}>
              <Typography>Subtotal: $100.00</Typography>
              <Typography>Shipping: $40.00</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                Total: $140.00
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
