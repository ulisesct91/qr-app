import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home/Home.jsx";
import RestaurantDetail from "./pages/RestaurantDetail/RestaurantDetail.jsx";
import RestaurantMenu from "./pages/RestaurantMenu/RestaurantMenu.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Lista de restaurantes */}
        <Route path="/" element={<Home />} />

        {/* Vista de detalles de un restaurante */}
        <Route path="/restaurante/:slug" element={<RestaurantDetail />} />

        {/* Vista del menú de un restaurante */}
        <Route path="/menu/:slug" element={<RestaurantMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
