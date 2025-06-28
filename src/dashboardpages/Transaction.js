import { useEffect } from "react";
import {
  Box,
  Typography,
  InputBase,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Button from "../components/Button.js";
import { usePageMetadata } from "../PageContext.js";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BgCard from "../components/BgCard.js";
import SearchIcon from "@mui/icons-material/Search";
import FilterList from '@mui/icons-material/FilterList';
import TransactionTable from "../components/TransactionTable.js";

const Transaction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { setPageMetadata } = usePageMetadata();

  // Set page metadata when component mounts
  useEffect(() => {
    setPageMetadata({
      title: "All Transactions",
      subtitle: "Coompleted transaction history & management",
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
        <Box
          sx={{
            mt: 5,
            width: '100%',
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: {
              xs: "flex-start",
              md: "space-between",
            },
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            gap: 1
          }}>
          <Typography
            variant="h6"
            fontWeight={600}
            mb={3}
            sx={{
              whiteSpace: {
                md: 'nowrap'
              }
            }
            }>Transaction History (9)</Typography>
          <Box
            sx={{
              width: '100%',
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1
            }}>
            <Button
              icon={
                <FilterList
                  sx={{
                    fontSize: 20,
                    color: "#000"
                  }}
                />
              }
              title="All"
              textColor="#000"
            />
            <Button
              icon={
                <FileUploadIcon
                  sx={{
                    fontSize: 20,
                    color: "#000"
                  }}
                />
              }
              title="Export"
              textColor="#000"
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: 1,
                px: 1,
                minWidth: isMobile ? '100px' : '200px',
              }}
            >
              <SearchIcon fontSize="small" sx={{ mr: 1 }} />
              <InputBase placeholder="Search…" sx={{ fontSize: 14, flex: 1 }} />
            </Box>
          </Box>
        </Box>
        <BgCard
          content={
            <>
              <TransactionTable/>
            </>
          }
        />
      </Box>
    </>
  );
};

export default Transaction;
