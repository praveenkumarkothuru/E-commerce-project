import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Milk from "./Milk";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import About from "./About";
import Timer from "./Timer";
import Location from "./Location";
import PaymentPage from "./components/PaymentPage";
import OrdersList from "./OrderLIst";
import OrderSuccess from "./OrderSuccess";
import Login from "./Login";
import Register from "./Register";

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register"];
  const isLoggedIn = localStorage.getItem("auth") === "true";

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Auth routes */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <Register />}
        />

        {/* Protected pages */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/veg"
          element={isLoggedIn ? <Veg /> : <Navigate to="/login" />}
        />
        <Route
          path="/nonveg"
          element={isLoggedIn ? <NonVeg /> : <Navigate to="/login" />}
        />
        <Route
          path="/milk"
          element={isLoggedIn ? <Milk /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={isLoggedIn ? <ContactUs /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/timer"
          element={isLoggedIn ? <Timer /> : <Navigate to="/login" />}
        />
        <Route
          path="/location"
          element={isLoggedIn ? <Location /> : <Navigate to="/login" />}
        />
        <Route
          path="/aboutus"
          element={isLoggedIn ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path="/payment"
          element={isLoggedIn ? <PaymentPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/orders"
          element={isLoggedIn ? <OrdersList /> : <Navigate to="/login" />}
        />
        <Route
          path="/order-success"
          element={isLoggedIn ? <OrderSuccess /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
