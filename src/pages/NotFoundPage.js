import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 4,
      }}
    >
      <Typography variant="h1" color="primary" fontWeight={700}>
        404
      </Typography>
      <Typography variant="h5" mt={2} mb={1}>
        Page Not Found
      </Typography>
      <Typography variant="body1" mb={4} color="text.secondary">
        The page you're looking for doesn't exist or was moved.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/dashboard')}>
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
