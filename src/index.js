import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Dashboard from './pages/Dashboard.js';
import ActivePage from './pages/ActivePage.js';
import UserProfile from './pages/UserProfile.js';
import './index.css';
import './fonts/fonts.css';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme from './theme';

function START() {
    // const theme = createTheme({
    //     palette: {
    //         mode: 'light',
    //         primary: {
    //             main: '#1976d2',
    //         },
    //         secondary: {
    //             main: '#ff9800',
    //         },
    //     },
    //     shape: {
    //         borderRadius: 12,
    //     },
    //     typography: {
    //         fontFamily: 'Roboto, sans-serif',
    //     },
    // });
    return (
        <>

            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />}>
                            <Route index element={<Step1 />} />
                            <Route path="step-2" element={<Step2 />} />
                            <Route path="step-3" element={<Step3 />} />
                            <Route path="step-4" element={<Step4 />} />
                        </Route>
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route index element={<ActivePage />} />
                            <Route path="profile" element={<UserProfile />} />
                            {/* Add more as needed */}
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SnackbarProvider maxSnack={3}>
    <START />
</SnackbarProvider>);
