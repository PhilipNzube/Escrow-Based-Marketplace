import { useEffect } from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
    InputLabel,
    FormControl,
    Paper,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { usePageMetadata } from "../PageContext.js";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ListIcon from '@mui/icons-material/Receipt';
import BgCard from "../components/BgCard.js";

const CreateOfferPage = () => {
    const { setPageMetadata } = usePageMetadata();

    // Set page metadata when component mounts
    useEffect(() => {
        setPageMetadata({
            title: "Create Offer/Listing",
            subtitle: "Set-up a new escrow transaction or service offer",
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
                    <Grid container spacing={4}>
                        {/* Left side form */}
                        <Grid
                            item xs={12}
                            md={8}>
                            <BgCard
                                content={
                                    <>
                                        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                            <AddCircleOutlineIcon sx={{ mr: 1 }} />
                                            Offer Details
                                        </Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={6}>
                                                <FormControl fullWidth>
                                                    <InputLabel>Offer Type</InputLabel>
                                                    <Select label="Offer Type">
                                                        <MenuItem value="">Select offer type</MenuItem>
                                                        {/* Populate dynamically */}
                                                        <MenuItem value="service">Service</MenuItem>
                                                        <MenuItem value="product">Product</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <FormControl fullWidth>
                                                    <InputLabel>Category</InputLabel>
                                                    <Select label="Category">
                                                        <MenuItem value="">Select category</MenuItem>
                                                        {/* Populate dynamically */}
                                                        <MenuItem value="design">Design</MenuItem>
                                                        <MenuItem value="development">Development</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Offer Title"
                                                    placeholder="Enter a clear, descriptive title"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Description"
                                                    placeholder="Provide detailed description of your offer..."
                                                    multiline
                                                    rows={4}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Amount (USD/NGN)"
                                                    placeholder="$0.00"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Duration (Days)"
                                                    placeholder="30"
                                                    type="number"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Terms & Condition"
                                                    placeholder="Specify terms, conditions, and requirements..."
                                                />
                                            </Grid>
                                        </Grid>
                                    </>
                                }
                            />

                            {/* Attachments */}
                            <BgCard
                                content={
                                    <>
                                        <Typography
                                            variant="h6"
                                            sx={{ display: "flex", alignItems: "center", mb: 2 }}
                                        >
                                            <AttachFileIcon sx={{ mr: 1 }} />
                                            Attachments
                                        </Typography>
                                        <Paper
                                            variant="outlined"
                                            sx={{
                                                textAlign: "center",
                                                p: 4,
                                                borderStyle: "dashed",
                                                backgroundColor: "#fafafa",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <UploadFileIcon fontSize="large" color="action" />
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                Drag and drop files here or click to select
                                            </Typography>
                                            <Button variant="outlined" sx={{ mt: 1 }}>
                                                Browse Files
                                            </Button>
                                            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                                                Supported formats: PDF, DOC, JPG, PNG (Max. 10MB each)
                                            </Typography>
                                        </Paper>
                                    </>
                                }
                            />
                        </Grid>

                        {/* Right side summary */}
                        <Grid item xs={12} md={4} width="100%">
                            <BgCard
                                content={
                                    <>
                                        {/* Offer Summary */}
                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                            Offer Summary
                                        </Typography>
                                        <Box
                                            sx={{ mb: 1 }}
                                             width="100%"
                                        >
                                            <Box display="flex" justifyContent="space-between" mb={0.5}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "text.secondary"
                                                    }}
                                                >Type</Typography>
                                                <Typography variant="body2" color="success.main">+$3,650.00</Typography>
                                            </Box>
                                            <Box display="flex" justifyContent="space-between" mb={0.5}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "text.secondary"
                                                    }}
                                                >Amount</Typography>
                                                <Typography variant="body2" color="error.main">-$3,850.00</Typography>
                                            </Box>
                                            <Box display="flex" justifyContent="space-between" mb={0.5}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "text.secondary"
                                                    }}
                                                >Duration</Typography>
                                                <Typography variant="body2">$125.00</Typography>
                                            </Box>
                                            <Box display="flex" justifyContent="space-between" mb={0.5}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "text.secondary"
                                                    }}
                                                >Escrow Fee</Typography>
                                                <Typography variant="body2">$125.00</Typography>
                                            </Box>
                                            <Divider sx={{ mt: 2, mb: 2, opacity: 0.6 }} />
                                            <Box display="flex" justifyContent="space-between" mt={1}>
                                                <Typography variant="body2" fontWeight="bold">Total:</Typography>
                                                <Typography variant="body2" color="success.main" fontWeight="bold">+$0.00</Typography>
                                            </Box>
                                        </Box>
                                    </>
                                }
                            />
                            {/* Escrow Protection */}
                            <BgCard
                                content={
                                    <>
                                        <Typography
                                            variant="body2"
                                            sx={{ fontWeight: 600, display: "flex", alignItems: "center", mb: 1 }}
                                        >
                                            <ListIcon/>
                                            Escrow Protection
                                        </Typography>
                                        <List dense>
                                            {[
                                                "Secure payment processing",
                                                "Dispute resolution service",
                                                "Money-back guarantee",
                                                "24/7 Customer Support",
                                            ].map((text) => (
                                                <ListItem disableGutters key={text}>
                                                    <ListItemIcon>
                                                        <CheckCircleIcon sx={{ color: "green", fontSize: 16 }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={text} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </>
                                }
                            />

                            {/* Buttons */}
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 2,
                                    bgcolor: "#000",
                                    color: "#fff",
                                    "&:hover": { bgcolor: "#333" },
                                    borderRadius: 1,
                                }}
                            >
                                Create Offer
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    mt: 1,
                                    borderColor: "#ddd",
                                    color: "#888",
                                    backgroundColor: "#f5f5f5",
                                    borderRadius: 1,
                                }}
                            >
                                Save as draft
                            </Button>
                        </Grid>
                    </Grid>
            </Box>
        </>
    );
};

export default CreateOfferPage;
