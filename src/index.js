import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.js";
import ShopNow from "./pages/ShopNow.js";
import LoginPage from "./pages/Login.js";
import RegisterPage from "./pages/Register.js";
import Step1 from "./steps/Step1.js";
import Step2 from "./steps/Step2.js";
import Step3 from "./steps/Step3.js";
import Step4 from "./steps/Step4.js";
import Dashboard from "./pages/Dashboard.js";
import MainDashboardPage from "./dashboardpages/MainDashboardPage.js";
import ActivePage from "./dashboardpages/ActivePage.js";
import PendingPage from "./dashboardpages/PendingPage.js";
import CompletedPage from "./dashboardpages/CompletedPage.js";
import Transaction from "./dashboardpages/Transaction.js";
import UserProfile from "./dashboardpages/UserProfile.js";
import ChatPage from "./dashboardpages/ChatPage.js";
import ListingPage from "./dashboardpages/ListingPage.js";
import CreateListing from "./dashboardpages/CreateListing.js";
import CreateOfferPage from "./dashboardpages/CreateOffer.js";
import SettingsPage from "./dashboardpages/SettingsPage.js";
import "./index.css";
import "./fonts/fonts.css";
import "./sliderStyles.css";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "./theme.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import { PageProvider } from "./PageContext.js";
import WalletPage from "./dashboardpages/WalletPage.js";
import OrderPage from "./dashboardpages/OrderPage.js";
import ShopHomePage from "./shoppages/ShopHomePage.js";
import DealsPage from "./shoppages/DealsPage.js";
import NewArrivalsPage from "./shoppages/NewArrivalsPage.js";
import PackagesPage from "./shoppages/PackagesPage.js";
import MainHomePage from "./homepages/MainHomePage.js";
import BuyPage from "./homepages/BuyPage.js";
import SellPage from "./homepages/SellPage.js";
import HomeCategoriesPage from "./homepages/HomeCategoriesPage.js";
import HomeDealsPage from "./homepages/HomeDealsPage.js";

function START() {
  return (
    <>
      <PageProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<HomePage />}>
                <Route index element={<MainHomePage />} />
                <Route path="buy" element={<BuyPage />} />
                <Route path="sell" element={<SellPage />} />
                <Route path="categories" element={<HomeCategoriesPage />} />
                <Route path="deals" element={<HomeDealsPage />} />
              </Route>
              <Route path="/shop-now" element={<ShopNow />}>
                <Route index element={<ShopHomePage />} />
                <Route path="deals" element={<DealsPage />} />
                <Route path="new-arrival" element={<NewArrivalsPage />} />
                <Route path="packages" element={<PackagesPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />}>
                <Route index element={<Step1 />} />
                <Route path="step-2" element={<Step2 />} />
                <Route path="step-3" element={<Step3 />} />
                <Route path="step-4" element={<Step4 />} />
              </Route>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<MainDashboardPage />} />
                <Route path="active" element={<ActivePage />} />
                <Route path="pending" element={<PendingPage />} />
                <Route path="completed" element={<CompletedPage />} />
                <Route path="transactions" element={<Transaction />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="messages" element={<ChatPage />} />
                <Route path="listing" element={<ListingPage />} />
                <Route path="create-listing" element={<CreateListing />} />
                <Route path="create-offer" element={<CreateOfferPage />} />
                <Route path="wallet" element={<WalletPage />} />
                <Route path="orders" element={<OrderPage />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </PageProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider maxSnack={3}>
    <START />
  </SnackbarProvider>
);
