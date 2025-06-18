import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.js';
import LoginPage from './authpages/Login.js';
import RegisterPage from './authpages/Register.js';
import Step1 from './authpages/steps/Step1';
import Step2 from './authpages/steps/Step2';
import Step3 from './authpages/steps/Step3';
import Step4 from './authpages/steps/Step4';
import Dashboard from './dashboardpages/Dashboard.js';
import ActivePage from './dashboardpages/ActivePage.js';
import Listing from './dashboardpages/Listing.js';
import Transaction from './dashboardpages/Transaction.js';
import UserProfile from './dashboardpages/UserProfile.js';
import ChatPage from './dashboardpages/ChatPage.js';
import './index.css';
import './fonts/fonts.css';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme from './theme.js';
import ActiveOrders from './dashboardpages/ActiveOrder.js';
import NotFoundPage from './pages/NotFoundPage.js';

function START() {
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
                            <Route path="active-order" element={<ActiveOrders />} />
                            <Route path="listing" element={<Listing />} />
                            <Route path="transaction" element={<Transaction />} />
                            <Route path="messages" element={<ChatPage />} />
                            <Route path="profile" element={<UserProfile />} />
                            {/* Add more as needed */}
                        </Route>
                        {/* Catch-all route for 404 */}
                        <Route path="*" element={<NotFoundPage />} />
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
