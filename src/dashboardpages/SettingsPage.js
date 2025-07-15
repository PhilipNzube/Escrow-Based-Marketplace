import { useEffect } from "react";
import { Box, Typography, TextField, MenuItem, Switch } from "@mui/material";
import { usePageMetadata } from "../PageContext.js";
import BgCard from "../components/BgCard.js";
import FormControlLabel from "@mui/material/FormControlLabel";

const SettingsPage = () => {
  const { setPageMetadata } = usePageMetadata();

  // Set page metadata when component mounts
  useEffect(() => {
    setPageMetadata({
      title: "Settings",
      subtitle: "Manage your account preferences and security settings",
    });

    // Reset metadata when component unmounts (optional, to avoid stale data)
    return () => {
      setPageMetadata({ title: "Dashboard", subtitle: "" });
    };
  }, [setPageMetadata]);
  return (
    <>
      <Box
        sx={{
          mt: 0,
          px: 2,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <BgCard
          content={
            <>
              <Typography variant="h6" sx={{ display: "block", mb: 2 }}>
                Account Information
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  width: "100%",
                  gap: { xs: 4.5, md: 1 },
                }}
              >
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  placeholder="Ogala"
                />
                <TextField
                  fullWidth
                  label="Category"
                  variant="outlined"
                  placeholder="Theodore"
                />
              </Box>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                placeholder="theodore@example.com"
              />
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                placeholder="(234) 814 654 789"
              />
              <TextField
                fullWidth
                label="Time Zone"
                variant="outlined"
                placeholder="Pacific Standard Time (PST)"
                select
              >
                <MenuItem value="Pacific Standard Time (PST)">
                  Pacific Standard Time (PST)
                </MenuItem>
              </TextField>
            </>
          }
        />

        {/* Security Settings Section */}
        <BgCard
          content={
            <>
              <Typography variant="h6" sx={{ display: "block", mb: 2 }}>
                Security Settings
              </Typography>
              <TextField
                fullWidth
                label="Current Password"
                variant="outlined"
                placeholder="Enter current password"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  width: "100%",
                  gap: { xs: 4.5, md: 1 },
                }}
              >
                <TextField
                  fullWidth
                  label="New Password"
                  variant="outlined"
                  placeholder="Enter New Password"
                />
                <TextField
                  fullWidth
                  label="Confirm New Password"
                  variant="outlined"
                  placeholder="Confirm New Password"
                />
              </Box>
            </>
          }
        />

        {/* Transaction Preferences Section */}
        <BgCard
          content={
            <>
              <Typography variant="h6" sx={{ display: "block", mb: 2 }}>
                Transaction Preferences
              </Typography>
              <TextField
                fullWidth
                label="Default Currency"
                variant="outlined"
                placeholder="USD - US Dollar"
                select
              >
                <MenuItem value="USD - US Dollar">USD - US Dollar</MenuItem>
              </TextField>
              <TextField
                fullWidth
                label="Default Escrow Duration"
                variant="outlined"
                placeholder="7 days"
                select
              >
                <MenuItem value="7 days">7 days</MenuItem>
              </TextField>
              <Typography
                variant="body1"
                sx={{
                  display: "block",
                  mb: 1,
                }}
              >
                Auto-accept offers
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography sx={{ color: "#0000007e" }}>
                  Automatically accept offers that meet your criteria
                </Typography>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label=""
                  sx={{ m: 0 }}
                />
              </Box>
            </>
          }
        />
      </Box>
    </>
  );
};

export default SettingsPage;
