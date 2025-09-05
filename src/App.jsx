import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas admin
import Home from "./pages/Home/Home.jsx";
import RestaurantDetail from "./pages/RestaurantDetail/RestaurantDetail.jsx";

// Páginas públicas
import Landing from "./pages/Landing/Landing.jsx";
import DemoMenu from "./pages/DemoMenu/DemoMenu.jsx";
import Login from "./pages/Login/Login.jsx";
import RestaurantMenu from "./pages/RestaurantMenu/RestaurantMenu.jsx";

// Protecciones
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Público */}
        <Route path="/" element={<Landing />} />
        <Route path="/demo/:id" element={<DemoMenu />} />
        <Route path="/menu/:slug" element={<RestaurantMenu />} />{" "}
        {/* 👈 público */}
        <Route path="/login" element={<Login />} />
        {/* Admin - protegidas */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/restaurante/:slug"
          element={
            <PrivateRoute>
              <RestaurantDetail />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
