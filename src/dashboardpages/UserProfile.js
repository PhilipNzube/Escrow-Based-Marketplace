import { useEffect } from "react";
import {
  Box,
  Typography,
  InputBase,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { usePageMetadata } from "../PageContext.js";
import BgCard from "../components/BgCard.js";

const UserProfile = () => {
      const { setPageMetadata } = usePageMetadata();
      
        // Set page metadata when component mounts
        useEffect(() => {
          setPageMetadata({
            title: "User Profile",
            subtitle: "Manage your account and view activity",
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
                width: '100%',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}>
      <BgCard
                content={
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: '100%',
                }}>
                  <Typography
            variant="h6"
            fontWeight={600}
            mb={3}
            sx={{
              whiteSpace: {
                md: 'nowrap'
              },
              textAlign: "center",
            }
            }>Profile Information</Typography> 
            </Box>    
                  </>
                }
        />
        </Box>
    </>
  );
};

export default UserProfile;
