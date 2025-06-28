import { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import { usePageMetadata } from "../PageContext.js";
import BgCard from "../components/BgCard.js";
import ProfileImg from "../images/Avatar.png"
import EditIcon from '@mui/icons-material/Edit';
import ProfileTabs from "../components/ProfileTabs.js";

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
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap:2,
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
                  variant="body1"
                  fontWeight={600}
                  mb={3}
                  sx={{
                    whiteSpace: {
                      md: 'nowrap'
                    },
                    textAlign: "center",
                  }
                  }>Profile Information</Typography>
                <Box
                  component="img"
                  src={ProfileImg}
                  alt="logo"
                  sx={{
                    height: 100,         // or auto
                    width: "auto",      // maintain aspect ratio
                    mr: 1,
                    mb: 2,
                    objectFit: "contain",
                    borderRadius: 5,
                  }}
                />
                <Typography
                  variant="h6"
                  fontWeight={600}
                  mb={1}
                  sx={{
                    whiteSpace: {
                      md: 'nowrap'
                    },
                    textAlign: "center",
                  }
                  }>Ogala, Theodore</Typography>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  mb={2}
                  color="#666"
                  sx={{
                    whiteSpace: {
                      md: 'nowrap'
                    },
                    textAlign: "center",
                  }
                  }>+2349016482578</Typography>
                <Button
                  startIcon={<EditIcon />}
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#222",
                    },
                  }}
                >
                  Edit Profile
                </Button>
                <Box
                  sx={{
                    mt: 5,
                    width: '100%',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: 4,
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      mb={1}
                      sx={{
                        whiteSpace: {
                          md: 'nowrap'
                        },
                        textAlign: "center",
                      }
                      }>Email</Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        whiteSpace: {
                          md: 'nowrap'
                        },
                        textAlign: "center",
                      }
                      }>theodore@example.com</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      mb={1}
                      sx={{
                        whiteSpace: {
                          md: 'nowrap'
                        },
                        textAlign: "center",
                      }
                      }>Phone Number</Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        whiteSpace: {
                          md: 'nowrap'
                        },
                        textAlign: "center",
                      }
                      }>+2349016482578</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      mb={1}
                      sx={{
                        whiteSpace: {
                          md: 'nowrap'
                        },
                        textAlign: "center",
                      }
                      }>Address</Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        whiteSpace: {
                          md: 'nowrap'
                        },
                        textAlign: "center",
                      }
                      }>HighwayToSuccess</Typography>
                  </Box>
                </Box>
              </Box>
            </>
          }
        />
        <BgCard
          content={
            <ProfileTabs />
          }
        />
      </Box>
    </>
  );
};

export default UserProfile;
