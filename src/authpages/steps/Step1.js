import React, { useState, useRef } from "react";
import {
    Box,
    Typography,
    Button,
    Snackbar,
    Alert,
    IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AuthField from "../../components/AuthField";

const Step1 = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef();
    const [uploadedFile, setUploadedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            if (previewUrl) URL.revokeObjectURL(previewUrl); // Clean up old URL
            const newPreviewUrl = URL.createObjectURL(file);
            setUploadedFile(file);
            setPreviewUrl(newPreviewUrl);
            setSnackbarOpen(true);
        }
    };

    const handleRemoveImage = () => {
        if (previewUrl) URL.revokeObjectURL(previewUrl); // Cleanup URL
        setUploadedFile(null);
        setPreviewUrl(null);
        setSnackbarOpen(false);

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSnackbarClose = () => setSnackbarOpen(false);
    return (
        <>
            <Box
                sx={{
                    mt: 2,
                    width: {
                        xs: '100%',
                        sm: '720px',
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}>
                <Typography variant="body1" sx={{ fontWeight: 600, color: "#000" }}>
                    Profile Photo
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, color: "#000" }}>
                    Let people know who you are. Add a photo.
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        mt: 2,
                        mb: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        alignItems: "flex-start",
                    }}
                >
                    {/* Upload Button */}
                    <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <label htmlFor="upload-photo">
                            <input
                                ref={fileInputRef}
                                id="upload-photo"
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={handleUpload}
                            />

                            <Button
                                component="span"
                                variant="contained"
                                sx={{
                                    backgroundColor: "#764D2E",
                                    color: "#fff",
                                    '&:hover': {
                                        backgroundColor: "#fff",
                                        color: "#764D2E"
                                    }
                                }}
                            >
                                Upload photo
                            </Button>
                        </label>

                        {/* Skip Button */}
                        <Button
                            onClick={() => navigate("/register/step-2")}
                            variant="contained"
                            sx={{
                                backgroundColor: "#fff",
                                color: "#764D2E",
                                border: "1px solid #764D2E",
                                '&:hover': {
                                    backgroundColor: "#764D2E",
                                    color: "#fff"
                                }
                            }}
                        >
                            Skip
                        </Button>
                    </Box>

                    {/* Image Preview + Remove Button */}
                    {previewUrl && (
                        <Box sx={{ textAlign: "center", position: "relative" }}>
                            <Typography sx={{ mb: 1, fontWeight: 500, color: "#764D2E" }}>
                                Preview:
                            </Typography>
                            <Box
                                component="img"
                                src={previewUrl}
                                alt="Uploaded preview"
                                sx={{
                                    maxWidth: 300,
                                    maxHeight: 250,
                                    borderRadius: 2,
                                    boxShadow: 3,
                                }}
                            />
                            <IconButton
                                onClick={handleRemoveImage}
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    backgroundColor: "#fff",
                                    color: "#f44336",
                                    "&:hover": {
                                        backgroundColor: "#f44336",
                                        color: "#fff"
                                    }
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    )}


                    {/* Snackbar Notification */}
                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={3000}
                        onClose={handleSnackbarClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <Alert
                            onClose={handleSnackbarClose}
                            severity="success"
                            sx={{ width: '100%' }}
                        >
                            Photo uploaded successfully!
                        </Alert>
                    </Snackbar>
                </Box>
                <Typography variant="body1" align="center" sx={{ fontWeight: 600, color: "#000" }}>
                    Name
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, color: "#000" }}>
                    Use your full name as it appears on your government issued ID
                </Typography>
                <AuthField
                    //   labelText="Email Address"
                    placeholderText="First Name"
                />
                <AuthField
                    //   labelText="Password"
                    placeholderText="Last Name"
                />
            </Box>
        </>
    );
};

export default Step1;
