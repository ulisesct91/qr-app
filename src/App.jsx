import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas admin
import Home from "./pages/Home/Home.jsx";
import RestaurantDetail from "./pages/RestaurantDetail/RestaurantDetail.jsx";
import RestaurantMenu from "./pages/RestaurantMenu/RestaurantMenu.jsx";

// Páginas públicas
import Landing from "./pages/Landing/Landing.jsx";
import DemoMenu from "./pages/DemoMenu/DemoMenu.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Público */}
        <Route path="/" element={<Landing />} />
        <Route path="/demo/:id" element={<DemoMenu />} />

        {/* Admin */}
        <Route path="/admin" element={<Home />} />
        <Route path="/restaurante/:slug" element={<RestaurantDetail />} />
        <Route path="/menu/:slug" element={<RestaurantMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
