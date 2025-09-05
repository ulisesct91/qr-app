import React from "react";
import { useParams, useLocation } from "react-router-dom";
import data from "../../data/restaurantes.json";
import { Container } from "react-bootstrap";
import MenuClassic from "../../components/MenuTemplates/MenuClassic.jsx";
import MenuModern from "../../components/MenuTemplates/MenuModern.jsx";
import MenuElegant from "../../components/MenuTemplates/MenuElegant.jsx";

function RestaurantMenu() {
  const { slug } = useParams();
  const location = useLocation();

  const restaurante = data.find((r) => r.slug === slug);

  if (!restaurante) {
    return <h2 className="text-center py-5">Restaurante no encontrado</h2>;
  }

  // 🔎 leer el template desde la URL (?template=...)
  const params = new URLSearchParams(location.search);
  const templateParam = params.get("template");

  // si hay param en la URL, lo usamos; si no, usamos el que está en JSON
  const templateToUse = templateParam || restaurante.template;

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">{restaurante.nombre}</h1>
      <p className="text-center text-muted mb-5">{restaurante.tagline}</p>

      {templateToUse === "classic" && (
        <MenuClassic productos={restaurante.productos} />
      )}
      {templateToUse === "modern" && (
        <MenuModern productos={restaurante.productos} />
      )}
      {templateToUse === "elegant" && (
        <MenuElegant productos={restaurante.productos} />
      )}
    </Container>
  );
}

export default RestaurantMenu;
