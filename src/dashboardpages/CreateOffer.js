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
import Button from "../components/Button.js";
import { usePageMetadata } from "../PageContext.js";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CreateOfferPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
                <Box sx={{ p: 4, backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
                    <Grid container spacing={4}>
                        {/* Left side form */}
                        <Grid item xs={12} md={8}>
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
                        <Grid item xs={12} md={4}>
                            <BgCard
                                content={
                                    <>
                                        <Typography variant="h6">Offer Summary</Typography>
                                        <Divider sx={{ my: 1 }} />
                                        <Typography variant="body2">Type: <b>Not Selected</b></Typography>
                                        <Typography variant="body2">Amount: <b>$0.00</b></Typography>
                                        <Typography variant="body2">Duration: <b>Not Set</b></Typography>
                                        <Typography variant="body2">
                                            Escrow Fee: <b sx={{ color: "primary.main" }}>$0.00</b>
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            Total: <b>$0.00</b>
                                        </Typography>
                                        <Divider sx={{ my: 2 }} />
                                        <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fafafa" }}>
                                            <Typography variant="body2" sx={{ mb: 1 }}>
                                                Escrow Protection
                                            </Typography>
                                            <List dense>
                                                {[
                                                    "Secure payment processing",
                                                    "Dispute resolution services",
                                                    "Money-back guarantee",
                                                    "24/7 Customer Support",
                                                ].map((text) => (
                                                    <ListItem key={text}>
                                                        <ListItemIcon>
                                                            <CheckCircleIcon color="success" />
                                                        </ListItemIcon>
                                                        <ListItemText primary={text} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Paper>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ mt: 2 }}
                                        >
                                            Create Offer
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mt: 1 }}
                                        >
                                            Save as draft
                                        </Button>
                                    </>
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>


            </Box>
        </>
    );
};

export default CreateOfferPage;
