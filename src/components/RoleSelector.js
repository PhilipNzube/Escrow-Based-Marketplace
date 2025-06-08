import {
    Box,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputBase,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

// 🔸 Custom underline-style select input
const UnderlineSelect = styled(Select)(({ theme }) => ({
    borderBottom: '2px solid #764D2E',
    fontSize: '1rem',               // ⬅️ Font size of the dropdown
    fontWeight: 600,                // ⬅️ Make it bolder
    textTransform: 'capitalize',    // ⬅️ Optional: capitalize each word
    paddingRight: theme.spacing(3),
    minWidth: 100,
    color: '#764D2E',
    '& .MuiSelect-icon': {
        color: '#764D2E',
        right: 0,
    },
    '&:before, &:after': {
        display: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '&:hover': {
        backgroundColor: 'transparent',
    },
}));

const RoleSelector = (
    {
        defaultText
    }
) => {
    const [role, setRole] = useState(defaultText);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                mt: 2,
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',  // ⬅️ Stack on small screens
                alignItems: "flex-start",
                gap: 1.5,
                width: {
                    xs: '100%',
                    sm: '320px',
                },
            }}
        >
            <Typography
                variant="body2"
                color="#764D2E"
                sx={{
                    fontWeight: 500,
                }}
            >
                Please select your preferred role:
            </Typography>

            <FormControl variant="standard">
                <UnderlineSelect
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    IconComponent={ArrowDropDownIcon}
                    input={<InputBase />}
                    sx={{
                        fontSize: {
                            xs: '0.9rem',
                            sm: '1rem',
                            md: '1.05rem',
                        },
                    }}
                >
                    <MenuItem value="Buyer">Buyer</MenuItem>
                    <MenuItem value="Vendor">Vendor</MenuItem>
                    <MenuItem value="Logistics">Logistics</MenuItem>
                </UnderlineSelect>
            </FormControl>
        </Box>
    );
};

export default RoleSelector;
